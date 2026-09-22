-- ========================================================
-- Luxe Horizons Africa - Supabase Database & Storage Setup
-- ========================================================

-- 1. Create the `posts` table if it does not already exist
CREATE TABLE IF NOT EXISTS public.posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Safari',
  date TEXT NOT NULL,
  read_time TEXT DEFAULT '5 min read',
  author TEXT NOT NULL,
  author_role TEXT,
  excerpt TEXT NOT NULL,
  image TEXT NOT NULL,
  accent TEXT DEFAULT '#5c6b4f',
  quote TEXT,
  takeaway TEXT,
  paragraphs JSONB DEFAULT '[]'::jsonb,
  highlights JSONB DEFAULT '[]'::jsonb,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Index for key lookups & ordering
CREATE INDEX IF NOT EXISTS posts_created_at_idx ON public.posts (created_at DESC);
CREATE INDEX IF NOT EXISTS posts_published_idx ON public.posts (published);
CREATE INDEX IF NOT EXISTS posts_key_idx ON public.posts (key);

-- Enable Row Level Security (RLS)
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Policy 1: Allow public read access to published posts (and all posts if authenticated)
CREATE POLICY "Allow public read published posts"
ON public.posts FOR SELECT
USING (published = true OR auth.role() = 'authenticated');

-- Policy 2: Allow authenticated admins full insert access
CREATE POLICY "Allow authenticated insert"
ON public.posts FOR INSERT
WITH CHECK (auth.role() = 'authenticated');

-- Policy 3: Allow authenticated admins full update access
CREATE POLICY "Allow authenticated update"
ON public.posts FOR UPDATE
USING (auth.role() = 'authenticated');

-- Policy 4: Allow authenticated admins full delete access
CREATE POLICY "Allow authenticated delete"
ON public.posts FOR DELETE
USING (auth.role() = 'authenticated');


-- ========================================================
-- 2. Supabase Storage Setup (Bucket: `blog-images`)
-- ========================================================

-- Insert storage bucket if not present
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Allow public read access to storage bucket `blog-images`
CREATE POLICY "Public Read Access for blog-images"
ON storage.objects FOR SELECT
USING (bucket_id = 'blog-images');

-- Allow authenticated users to upload files to `blog-images`
CREATE POLICY "Authenticated Upload Access for blog-images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'blog-images' AND auth.role() = 'authenticated');

-- Allow authenticated users to update/delete files in `blog-images`
CREATE POLICY "Authenticated Delete Access for blog-images"
ON storage.objects FOR DELETE
USING (bucket_id = 'blog-images' AND auth.role() = 'authenticated');
