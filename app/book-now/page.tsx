"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Calendar } from "@/components/ui/calendar"
import { AIAssistant } from "@/components/ai-assistant"

export default function BookNow() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    toast({
      title: "Booking request sent!",
      description: "We'll confirm your appointment soon.",
    })
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-center mb-8"
        >
          Book Your Appointment
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-lg shadow-lg p-6"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Input type="tel" placeholder="Your Phone Number" required />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ppf">Paint Protection Film</SelectItem>
                <SelectItem value="tinting">Window Tinting</SelectItem>
                <SelectItem value="wrap">Full Vehicle Wrap</SelectItem>
                <SelectItem value="color-change">Color Change Wrap</SelectItem>
                <SelectItem value="ceramic">Ceramic Coating</SelectItem>
                <SelectItem value="design">Design Services</SelectItem>
              </SelectContent>
            </Select>
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Date</label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
            </div>
            <Textarea placeholder="Additional Notes" rows={4} />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Book Now'}
            </Button>
          </form>
        </motion.div>
      </div>
      <AIAssistant />
    </div>
  )
}

