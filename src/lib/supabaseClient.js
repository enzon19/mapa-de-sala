import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://zbbwhvjmqadagyoycfil.supabase.co', import.meta.env.VITE_SUPABASE_TOKEN)