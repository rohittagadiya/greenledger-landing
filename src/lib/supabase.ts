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

// Types for cloud connections
export interface CloudConnection {
  id?: string
  user_email: string
  provider: 'aws' | 'gcp' | 'azure'
  connection_name: string
  status: 'pending' | 'connected' | 'failed' | 'disconnected'
  // Encrypted credentials (we'll store them encrypted)
  encrypted_credentials?: string
  // Metadata about the connection
  metadata?: {
    account_id?: string
    project_id?: string
    subscription_id?: string
    region?: string
    [key: string]: string | number | boolean | null | undefined
  }
  last_sync_at?: string
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

// Function to create a cloud connection
export async function createCloudConnection(data: Omit<CloudConnection, 'id' | 'created_at' | 'updated_at'>) {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set up your environment variables.')
  }

  const { data: result, error } = await supabase
    .from('cloud_connections')
    .insert([data])
    .select()
    .single()
    
  if (error) {
    console.error('Error creating cloud connection:', error)
    throw error
  }
  
  return result
}

// Function to get cloud connections for a user
export async function getCloudConnections(userEmail: string) {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set up your environment variables.')
  }

  const { data, error } = await supabase
    .from('cloud_connections')
    .select('*')
    .eq('user_email', userEmail)
    .order('created_at', { ascending: false })
    
  if (error) {
    console.error('Error fetching cloud connections:', error)
    throw error
  }
  
  return data
}

// Function to update cloud connection status
export async function updateCloudConnectionStatus(id: string, status: CloudConnection['status']) {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set up your environment variables.')
  }

  const { data, error } = await supabase
    .from('cloud_connections')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()
    
  if (error) {
    console.error('Error updating cloud connection:', error)
    throw error
  }
  
  return data
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

// Function to get all cloud connections (for admin use)
export async function getAllCloudConnections() {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set up your environment variables.')
  }

  const { data, error } = await supabase
    .from('cloud_connections')
    .select('*')
    .order('created_at', { ascending: false })
    
  if (error) {
    console.error('Error fetching all cloud connections:', error)
    throw error
  }
  
  return data
}
