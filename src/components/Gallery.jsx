import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaSearch, FaTimes } from 'react-icons/fa';
import { categories, getPublishedGallery } from '../lib/contentApi';

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;
    getPublishedGallery()
      .then((data) => { if (active) { setItems(data); setStatus('ready'); } })
      .catch((loadError) => { if (active) { setError(loadError.message); setStatus('error'); } });
    return () => { active = false; };
  }, []);

  const filtered = useMemo(() => items.filter((item) => {
    const matchesCategory = category === 'All' || item.category === category;
    const haystack = `${item.title} ${item.description || ''} ${(item.tags || []).join(' ')}`.toLowerCase();
    return matchesCategory && haystack.includes(search.toLowerCase());
  }), [items, category, search]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (!selected) return;
      if (event.key === 'Escape') setSelected(null);
      if (event.key === 'ArrowRight') setSelected(filtered[(filtered.indexOf(selected) + 1) % filtered.length]);
      if (event.key === 'ArrowLeft') setSelected(filtered[(filtered.indexOf(selected) - 1 + filtered.length) % filtered.length]);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected, filtered]);

  return (
    <section id="gallery" className="gallery-section section-frame">
      <div className="container">
        <div className="section-heading section-heading--light"><span className="section-index">05 /</span><h2>Frames of<br /><em>the journey.</em></h2></div>
        <div className="gallery-toolbar">
          <div className="gallery-filters" role="tablist" aria-label="Gallery categories">
            {categories.map((item) => <button type="button" key={item} className={category === item ? 'is-active' : ''} onClick={() => setCategory(item)}>{item}</button>)}
          </div>
          <label className="gallery-search"><FaSearch aria-hidden="true" /><span className="sr-only">Search gallery</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search frames" /></label>
        </div>
        {status === 'loading' && <p className="gallery-state">Loading the gallery…</p>}
        {status === 'error' && <p className="gallery-state gallery-state--error">{error}</p>}
        {status === 'ready' && !filtered.length && <p className="gallery-state">No published frames match this view yet.</p>}
        <div className="gallery-grid">
          {filtered.map((item, index) => <motion.button type="button" className={`gallery-card gallery-card--${index % 3}`} key={item.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(index * .04, .24) }} onClick={() => setSelected(item)}>
            <img src={item.image_url} alt={item.alt_text || item.title} loading="lazy" />
            <span className="gallery-card-overlay"><strong>{item.title}</strong><small>{item.category}{item.date ? ` · ${item.date}` : ''}</small></span>
          </motion.button>)}
        </div>
      </div>
      <AnimatePresence>
        {selected && <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}>
          <button type="button" className="lightbox-close" aria-label="Close image viewer" onClick={() => setSelected(null)}><FaTimes /></button>
          <button type="button" className="lightbox-nav lightbox-nav--prev" aria-label="Previous image" onClick={(event) => { event.stopPropagation(); setSelected(filtered[(filtered.indexOf(selected) - 1 + filtered.length) % filtered.length]); }}><FaArrowLeft /></button>
          <figure onClick={(event) => event.stopPropagation()}><img src={selected.image_url} alt={selected.alt_text || selected.title} /><figcaption><strong>{selected.title}</strong><span>{selected.description}</span></figcaption></figure>
          <button type="button" className="lightbox-nav lightbox-nav--next" aria-label="Next image" onClick={(event) => { event.stopPropagation(); setSelected(filtered[(filtered.indexOf(selected) + 1) % filtered.length]); }}><FaArrowRight /></button>
        </motion.div>}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
