import { NextApiRequest, NextApiResponse } from 'next'
import { addToWaitlist, WaitlistEntry } from '@/lib/supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, company, role, cloudProvider, monthlySpend } = req.body

    // Validate required fields
    if (!name || !email || !company) {
      return res.status(400).json({ 
        message: 'Missing required fields: name, email, and company are required' 
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' })
    }

    // Prepare data for database
    const waitlistData: Omit<WaitlistEntry, 'id' | 'created_at' | 'updated_at'> = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      role: role?.trim() || null,
      cloud_provider: cloudProvider || null,
      monthly_spend: monthlySpend || null,
    }

    // Add to waitlist
    const result = await addToWaitlist(waitlistData)

    // Send success response
    res.status(201).json({
      message: 'Successfully added to waitlist!',
      data: {
        id: result.id,
        name: result.name,
        email: result.email,
        company: result.company,
      }
    })

  } catch (error: unknown) {
    console.error('Waitlist API error:', error)
    
    // Handle Supabase not configured error
    if (error instanceof Error && error.message?.includes('Supabase is not configured')) {
      return res.status(500).json({ 
        error: 'Database is not configured yet. Please set up your Supabase credentials.' 
      })
    }
    
    // Handle duplicate email error
    if (error && typeof error === 'object' && 'code' in error && error.code === '23505') {
      return res.status(409).json({ 
        error: 'This email is already on our waitlist! We\'ll be in touch soon.' 
      })
    }

    // Handle other errors
    res.status(500).json({ 
      error: 'Something went wrong. Please try again later.' 
    })
  }
}
