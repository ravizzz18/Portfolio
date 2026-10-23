import { supabase } from './supabase';

export const categories = ['All', 'Personal', 'Football', 'Events', 'Achievements', 'Certificates', 'Projects'];

const fallbackGallery = [
  ['/Elegant Man in Navy Kurta with Gold Watch.png', 'Personal portrait', 'Personal'],
  ['/Build and Conqueror.jpg', 'Build and Conquer winner', 'Achievements'],
  ['/Code Red.png', 'Code Red hackathon', 'Events'],
  ['/1904_Ravindra A_page-0001.jpg', 'IEEE paper presentation', 'Certificates'],
  ['/st home.png', 'Smart Scheduling', 'Projects'],
  ['/Screenshot 2025-12-03 232127.png', 'Number System Converter', 'Projects'],
].map(([image_url, title, category], display_order) => ({ id: `fallback-${display_order}`, image_url, title, category, description: '', alt_text: title, tags: [], display_order }));

const getError = (error, fallback) => {
  if (!error) return fallback;
  return error.message || fallback;
};

export async function getPublishedGallery() {
  if (!supabase) return fallbackGallery;
  const { data, error } = await supabase
    .from('gallery_items')
    .select('*')
    .eq('published', true)
    .order('display_order', { ascending: true })
    .order('created_at', { ascending: false });
  if (error) throw new Error(getError(error, 'Unable to load the gallery.'));
  return data || [];
}

export async function getContent(type) {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('content_items')
    .select('*')
    .eq('content_type', type)
    .eq('published', true)
    .order('display_order', { ascending: true })
    .order('created_at', { ascending: false });
  if (error) throw new Error(getError(error, `Unable to load ${type}.`));
  return data || [];
}

export async function getAdminContent(type) {
  if (!supabase) return [];
  const table = type === 'gallery' ? 'gallery_items' : 'content_items';
  const query = supabase.from(table).select('*').order('display_order', { ascending: true }).order('created_at', { ascending: false });
  if (type !== 'gallery') query.eq('content_type', type);
  const { data, error } = await query;
  if (error) throw new Error(getError(error, `Unable to load ${type}.`));
  return data || [];
}

export async function saveContent(type, item) {
  if (!supabase) throw new Error('Configure Supabase before saving content.');
  const table = type === 'gallery' ? 'gallery_items' : 'content_items';
  const payload = { ...item, ...(type !== 'gallery' ? { content_type: type } : {}) };
  const { data, error } = await supabase.from(table).upsert(payload).select().single();
  if (error) throw new Error(getError(error, 'Unable to save this item.'));
  return data;
}

export async function updateContent(type, id, changes) {
  if (!supabase) throw new Error('Configure Supabase before updating content.');
  const table = type === 'gallery' ? 'gallery_items' : 'content_items';
  const { data, error } = await supabase.from(table).update(changes).eq('id', id).select().single();
  if (error) throw new Error(getError(error, 'Unable to update this item.'));
  return data;
}

export async function deleteContent(type, id) {
  if (!supabase) throw new Error('Configure Supabase before deleting content.');
  const table = type === 'gallery' ? 'gallery_items' : 'content_items';
  const { error } = await supabase.from(table).delete().eq('id', id);
  if (error) throw new Error(getError(error, 'Unable to delete this item.'));
}

export async function uploadImage(file) {
  if (!supabase) throw new Error('Configure Supabase before uploading images.');
  const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/avif'];
  if (!allowed.includes(file.type)) throw new Error('Use a JPG, PNG, WebP, or AVIF image.');
  if (file.size > 8 * 1024 * 1024) throw new Error('Images must be smaller than 8 MB.');
  const path = `${crypto.randomUUID()}-${file.name.replace(/[^a-z0-9.-]/gi, '-').toLowerCase()}`;
  const { error } = await supabase.storage.from('gallery-images').upload(path, file, { cacheControl: '31536000', upsert: false });
  if (error) throw new Error(getError(error, 'Unable to upload the image.'));
  const { data } = supabase.storage.from('gallery-images').getPublicUrl(path);
  return { path, url: data.publicUrl };
}

export async function removeUploadedImage(path) {
  if (!supabase || !path) return;
  const { error } = await supabase.storage.from('gallery-images').remove([path]);
  if (error) throw new Error(getError(error, 'Unable to clean up the uploaded image.'));
}
