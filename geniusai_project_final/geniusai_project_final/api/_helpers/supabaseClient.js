import { createClient } from '@supabase/supabase-js';
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY;
if (!url || !key) throw new Error('SUPABASE_URL or SUPABASE_KEY missing');
export const supabase = createClient(url, key, { auth: { persistSession: false } });
