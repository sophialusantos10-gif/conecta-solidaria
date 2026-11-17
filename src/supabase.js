import { createClient } from '@supabase/supabase-js';
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
export const configurado = Boolean(url && key && !url.includes('SEU-ID'));
export const supabase = configurado ? createClient(url, key) : null;
