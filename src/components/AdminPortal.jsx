import React, { useEffect, useMemo, useState } from 'react';
import { FaArrowDown, FaArrowUp, FaSignOutAlt, FaTrash } from 'react-icons/fa';
import { categories, deleteContent, getAdminContent, removeUploadedImage, saveContent, updateContent, uploadImage } from '../lib/contentApi';
import { isSupabaseConfigured, supabase } from '../lib/supabase';

const emptyItem = { title: '', description: '', category: 'Personal', image_url: '', alt_text: '', date: '', tags: '', display_order: 0, published: false };
const tabs = [{ key: 'gallery', label: 'Gallery' }, { key: 'project', label: 'Projects' }, { key: 'certificate', label: 'Certificates' }];

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const submit = async (event) => {
    event.preventDefault(); setBusy(true); setError('');
    const { error: loginError } = await supabase.auth.signInWithPassword({ email, password });
    if (loginError) setError(loginError.message);
    else onLogin();
    setBusy(false);
  };
  return <main className="admin-login"><form className="admin-login-card" onSubmit={submit}><span className="section-index">Private workspace</span><h1>Admin<br /><em>portal.</em></h1><p>Sign in with your Supabase admin account.</p>{error && <div className="admin-alert admin-alert--error">{error}</div>}<label>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required autoComplete="email" /></label><label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required autoComplete="current-password" /></label><button className="button button--solid" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button></form></main>;
}

const normalize = (item) => ({ ...item, tags: Array.isArray(item.tags) ? item.tags.join(', ') : (item.tags || '') });

function Editor({ type, item, onSaved, onCancel }) {
  const [form, setForm] = useState(normalize(item || { ...emptyItem, category: type === 'gallery' ? 'Personal' : type === 'certificate' ? 'Certificates' : 'Projects' }));
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  useEffect(() => {
    if (!file) { setPreviewUrl(''); return undefined; }
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);
  const set = (key, value) => setForm((current) => ({ ...current, [key]: value }));
  const submit = async (event) => {
    event.preventDefault(); setBusy(true); setMessage('');
    let uploadedPath = '';
    try {
      const uploaded = file ? await uploadImage(file) : null;
      uploadedPath = uploaded?.path || '';
      const imageUrl = uploaded ? uploaded.url : form.image_url;
      if (!imageUrl) throw new Error('Add an image before saving.');
      const saved = await saveContent(type, { ...form, image_url: imageUrl, tags: form.tags.split(',').map((tag) => tag.trim()).filter(Boolean), display_order: Number(form.display_order) || 0 });
      onSaved(saved);
    } catch (saveError) {
      let message = saveError.message;
      if (uploadedPath) {
        try { await removeUploadedImage(uploadedPath); } catch (cleanupError) { message = `${message} The uploaded file could not be cleaned up; remove it from Supabase Storage manually.`; console.error(cleanupError); }
      }
      setMessage(message);
    } finally { setBusy(false); }
  };
  return <form className="admin-editor" onSubmit={submit}><div className="admin-editor-heading"><h2>{item ? 'Edit item' : 'New item'}</h2><button type="button" className="admin-close" onClick={onCancel}>Cancel</button></div>{message && <div className="admin-alert admin-alert--error">{message}</div>}<div className="admin-form-grid"><label>Title<input value={form.title} onChange={(event) => set('title', event.target.value)} required /></label><label>Category<select value={form.category} onChange={(event) => set('category', event.target.value)}>{categories.filter((value) => value !== 'All').map((value) => <option key={value}>{value}</option>)}</select></label><label className="admin-field-wide">Description<textarea rows="3" value={form.description || ''} onChange={(event) => set('description', event.target.value)} /></label><label>Alt text<input value={form.alt_text || ''} onChange={(event) => set('alt_text', event.target.value)} required /></label><label>Date<input type="date" value={form.date || ''} onChange={(event) => set('date', event.target.value)} /></label><label className="admin-field-wide">Tags<input value={form.tags} onChange={(event) => set('tags', event.target.value)} placeholder="portrait, campus, award" /></label><label>Display order<input type="number" min="0" value={form.display_order} onChange={(event) => set('display_order', event.target.value)} /></label><label className="admin-check"><input type="checkbox" checked={Boolean(form.published)} onChange={(event) => set('published', event.target.checked)} /> Published</label><label className="admin-field-wide">Image upload<input type="file" accept="image/jpeg,image/png,image/webp,image/avif" onChange={(event) => setFile(event.target.files?.[0] || null)} />{form.image_url && !file && <img className="admin-preview" src={form.image_url} alt="Current item preview" />}{file && previewUrl && <img className="admin-preview" src={previewUrl} alt="New item preview" />}</label></div><button className="button button--solid" disabled={busy}>{busy ? 'Saving…' : 'Save item'}</button></form>;
}

function Dashboard({ session }) {
  const [tab, setTab] = useState('gallery'); const [items, setItems] = useState([]); const [galleryStats, setGalleryStats] = useState({ total: 0, published: 0, unpublished: 0 }); const [editing, setEditing] = useState(null); const [search, setSearch] = useState(''); const [status, setStatus] = useState('loading'); const [error, setError] = useState('');
  const load = async () => { setStatus('loading'); try { const [currentItems, galleryItems] = await Promise.all([getAdminContent(tab), tab === 'gallery' ? Promise.resolve(null) : getAdminContent('gallery')]); setItems(currentItems); const allGalleryItems = galleryItems || currentItems; setGalleryStats({ total: allGalleryItems.length, published: allGalleryItems.filter((item) => item.published).length, unpublished: allGalleryItems.filter((item) => !item.published).length }); setStatus('ready'); } catch (loadError) { setError(loadError.message); setStatus('error'); } };
  useEffect(() => { load(); }, [tab]);
  const filtered = useMemo(() => items.filter((item) => `${item.title} ${item.description || ''}`.toLowerCase().includes(search.toLowerCase())), [items, search]);
  const remove = async (item) => { if (!window.confirm(`Delete “${item.title}”? This cannot be undone.`)) return; try { await deleteContent(tab, item.id); setItems((current) => current.filter((entry) => entry.id !== item.id)); } catch (removeError) { setError(removeError.message); } };
  const move = async (item, direction) => { const index = items.indexOf(item); const target = items[index + direction]; if (!target) return; try { await Promise.all([updateContent(tab, item.id, { display_order: target.display_order }), updateContent(tab, target.id, { display_order: item.display_order })]); await load(); } catch (moveError) { setError(moveError.message); } };
  return <main className="admin-shell"><header className="admin-header"><div><span className="section-index">Content control</span><h1>Admin <em>portal.</em></h1><p>{session.user.email}</p></div><button type="button" className="admin-signout" onClick={() => supabase.auth.signOut()}><FaSignOutAlt /> Sign out</button></header><div className="admin-stats"><div><strong>{galleryStats.total}</strong><span>Total gallery images</span></div><div><strong>{galleryStats.published}</strong><span>Published images</span></div><div><strong>{galleryStats.unpublished}</strong><span>Unpublished images</span></div></div><div className="admin-toolbar"><div className="admin-tabs">{tabs.map((entry) => <button type="button" key={entry.key} className={tab === entry.key ? 'is-active' : ''} onClick={() => { setTab(entry.key); setEditing(null); }}>{entry.label}</button>)}</div><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search content" /><button type="button" className="button button--solid" onClick={() => setEditing({})}>+ New item</button></div>{error && <div className="admin-alert admin-alert--error">{error}</div>}{editing && <Editor type={tab} item={editing.id ? editing : null} onCancel={() => setEditing(null)} onSaved={() => { setEditing(null); load(); }} />}{status === 'loading' && <p className="gallery-state">Loading content…</p>}{status === 'ready' && !filtered.length && !editing && <p className="gallery-state">No content found. Create your first item.</p>}<div className="admin-table">{filtered.map((item, index) => <article className="admin-row" key={item.id}><img src={item.image_url} alt="" /><div><h3>{item.title}</h3><p>{item.category} · {item.published ? 'Published' : 'Draft'} · order {item.display_order}</p></div><div className="admin-row-actions"><button type="button" aria-label="Move item up" onClick={() => move(item, -1)} disabled={index === 0}><FaArrowUp /></button><button type="button" aria-label="Move item down" onClick={() => move(item, 1)} disabled={index === filtered.length - 1}><FaArrowDown /></button><button type="button" onClick={() => setEditing(item)}>Edit</button><button type="button" className="admin-delete" aria-label={`Delete ${item.title}`} onClick={() => remove(item)}><FaTrash /></button></div></article>)}</div></main>;
}

export default function AdminPortal() {
  const [session, setSession] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  useEffect(() => {
    if (!supabase) { setAuthLoading(false); return undefined; }
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setAuthLoading(false); });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => setSession(nextSession));
    return () => listener.subscription.unsubscribe();
  }, []);
  if (!isSupabaseConfigured) return <main className="admin-login"><div className="admin-login-card"><h1>Admin <em>setup required.</em></h1><p>Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY, then apply the database schema before signing in.</p></div></main>;
  if (authLoading) return <main className="admin-login"><div className="admin-login-card"><p>Checking your session…</p></div></main>;
  if (!session) return <Login onLogin={() => supabase.auth.getSession().then(({ data }) => setSession(data.session))} />;
  if (session.user.app_metadata?.role !== 'admin') {
    return <main className="admin-login"><div className="admin-login-card"><h1>Access <em>denied.</em></h1><p>This account is authenticated but is not authorized as an administrator.</p><button type="button" className="button button--line" onClick={() => supabase.auth.signOut()}>Sign out</button></div></main>;
  }
  return <Dashboard session={session} />;
}
