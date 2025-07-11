"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface WaitlistFormData {
  name: string
  email: string
  company: string
  role: string
  cloudProvider: string
  monthlySpend: string
}

export function WaitlistForm({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: "",
    email: "",
    company: "",
    role: "",
    cloudProvider: "",
    monthlySpend: "",
  })

  const handleOpenChange = (newOpen: boolean) => {
    if (newOpen) {
      // Small delay to prevent autofill popup positioning issues
      setTimeout(() => {
        setOpen(true)
      }, 10)
    } else {
      setOpen(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong')
      }

      console.log("Waitlist form submitted successfully:", result)
      setSubmitted(true)
      
      // Reset form after showing success
      setTimeout(() => {
        setOpen(false)
        setSubmitted(false)
        setFormData({
          name: "",
          email: "",
          company: "",
          role: "",
          cloudProvider: "",
          monthlySpend: "",
        })
      }, 2000)
    } catch (error) {
      console.error('Error submitting waitlist form:', error)
      // You could add error state here if needed
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof WaitlistFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <div className="flex flex-col items-center justify-center py-8">
            <div className="text-6xl mb-4">🎉</div>
            <DialogTitle className="text-2xl text-center mb-2">
              Welcome to the Waitlist!
            </DialogTitle>
            <DialogDescription className="text-center text-base">
              Thanks for joining! We&apos;ll notify you as soon as GreenLedger is ready.
              <br />
              <br />
              <strong>🎁 As an early supporter, you&apos;ll get:</strong>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>50% off your first 3 months</li>
                <li>Priority onboarding support</li>
                <li>Exclusive beta access</li>
              </ul>
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Join the GreenLedger Waitlist</DialogTitle>
          <DialogDescription className="text-base">
            Be the first to know when we launch. We&apos;ll also send you early access, exclusive updates, and a special launch discount.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                placeholder="John Doe"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                placeholder="john@company.com"
                className="mt-1"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="company" className="text-sm font-medium">Company *</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                required
                placeholder="TechCorp Inc"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="role" className="text-sm font-medium">Role</Label>
              <Input
                id="role"
                value={formData.role}
                onChange={(e) => handleInputChange("role", e.target.value)}
                placeholder="CTO, DevOps Engineer"
                className="mt-1"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="cloudProvider" className="text-sm font-medium">Primary Cloud Provider</Label>
            <select
              id="cloudProvider"
              value={formData.cloudProvider}
              onChange={(e) => handleInputChange("cloudProvider", e.target.value)}
              className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Select provider</option>
              <option value="aws">Amazon Web Services (AWS)</option>
              <option value="gcp">Google Cloud Platform (GCP)</option>
              <option value="azure">Microsoft Azure</option>
              <option value="multi">Multiple providers</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <Label htmlFor="monthlySpend" className="text-sm font-medium">Monthly Cloud Spend (Optional)</Label>
            <select
              id="monthlySpend"
              value={formData.monthlySpend}
              onChange={(e) => handleInputChange("monthlySpend", e.target.value)}
              className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Select range</option>
              <option value="<1k">Less than $1,000</option>
              <option value="1k-5k">$1,000 - $5,000</option>
              <option value="5k-25k">$5,000 - $25,000</option>
              <option value="25k-100k">$25,000 - $100,000</option>
              <option value="100k+">$100,000+</option>
            </select>
          </div>
          <div className="pt-2">
            <p className="text-xs text-gray-600 mb-4">
              By joining our waitlist, you agree to receive updates about GreenLedger. We respect your privacy and you can unsubscribe at any time.
            </p>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white">
              {isSubmitting ? (
                <>
                  <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                  Joining...
                </>
              ) : (
                "Join Waitlist 🚀"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
