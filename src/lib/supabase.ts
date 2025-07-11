import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Only create client if we have real credentials
export const supabase = (supabaseUrl.includes('placeholder') || supabaseKey.includes('placeholder') || supabaseUrl.includes('your-project-id'))
  ? null
  : createClient(supabaseUrl, supabaseKey)

// Types for our waitlist data
export interface WaitlistEntry {
  id?: string
  name: string
  email: string
  company: string
  role?: string
  cloud_provider?: string
  monthly_spend?: string
  created_at?: string
  updated_at?: string
}

// Function to add user to waitlist
export async function addToWaitlist(data: Omit<WaitlistEntry, 'id' | 'created_at' | 'updated_at'>) {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set up your environment variables.')
  }

  const { data: result, error } = await supabase
    .from('waitlist')
    .insert([data])
    .select()
    .single()
    
  if (error) {
    console.error('Error adding to waitlist:', error)
    throw error
  }
  
  return result
}

// Function to get waitlist entries (for admin use)
export async function getWaitlistEntries() {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set up your environment variables.')
  }

  const { data, error } = await supabase
    .from('waitlist')
    .select('*')
    .order('created_at', { ascending: false })
    
  if (error) {
    console.error('Error fetching waitlist:', error)
    throw error
  }
  
  return data
}
