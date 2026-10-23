create extension if not exists pgcrypto;

create table if not exists public.gallery_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text default '',
  category text not null check (category in ('Personal', 'Football', 'Events', 'Achievements', 'Certificates', 'Projects')),
  image_url text not null,
  thumbnail_url text,
  alt_text text not null,
  date date,
  tags text[] not null default '{}',
  display_order integer not null default 0,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.content_items (
  id uuid primary key default gen_random_uuid(),
  content_type text not null check (content_type in ('project', 'certificate')),
  title text not null,
  description text default '',
  category text not null default 'Projects',
  image_url text not null,
  alt_text text not null,
  date date,
  tags text[] not null default '{}',
  display_order integer not null default 0,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.gallery_items enable row level security;
alter table public.content_items enable row level security;

do $$ begin
  if not exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'gallery_items' and policyname = 'Published gallery is public') then
    create policy "Published gallery is public" on public.gallery_items for select using (published = true);
  end if;
  if not exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'gallery_items' and policyname = 'Admins manage gallery') then
    create policy "Admins manage gallery" on public.gallery_items for all to authenticated using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin') with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
  end if;
  if not exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'content_items' and policyname = 'Published content is public') then
    create policy "Published content is public" on public.content_items for select using (published = true);
  end if;
  if not exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'content_items' and policyname = 'Admins manage content') then
    create policy "Admins manage content" on public.content_items for all to authenticated using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin') with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
  end if;
end $$;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('gallery-images', 'gallery-images', true, 8388608, array['image/jpeg', 'image/png', 'image/webp', 'image/avif'])
on conflict (id) do update set file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;
do $$ begin
  if not exists (select 1 from pg_policies where schemaname = 'storage' and tablename = 'objects' and policyname = 'Public gallery images are readable') then
    create policy "Public gallery images are readable" on storage.objects for select using (bucket_id = 'gallery-images');
  end if;
  if not exists (select 1 from pg_policies where schemaname = 'storage' and tablename = 'objects' and policyname = 'Admins upload gallery images') then
    create policy "Admins upload gallery images" on storage.objects for insert to authenticated with check (bucket_id = 'gallery-images' and (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
  end if;
  if not exists (select 1 from pg_policies where schemaname = 'storage' and tablename = 'objects' and policyname = 'Admins update gallery images') then
    create policy "Admins update gallery images" on storage.objects for update to authenticated using (bucket_id = 'gallery-images' and (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
  end if;
  if not exists (select 1 from pg_policies where schemaname = 'storage' and tablename = 'objects' and policyname = 'Admins delete gallery images') then
    create policy "Admins delete gallery images" on storage.objects for delete to authenticated using (bucket_id = 'gallery-images' and (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
  end if;
end $$;
