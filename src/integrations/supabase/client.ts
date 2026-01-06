import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is not defined in environment variables.');
  // Fallback or throw an error if environment variables are missing
  // For now, we'll use placeholder values to prevent app crash during development
  // In a production environment, you might want to throw an error or handle this more robustly.
  // For this example, we'll use empty strings, but this will cause Supabase client to fail.
  // It's crucial to set these environment variables.
}

export const supabase = createClient(supabaseUrl || 'YOUR_SUPABASE_URL', supabaseAnonKey || 'YOUR_SUPABASE_ANON_KEY');