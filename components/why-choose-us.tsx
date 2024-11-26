"use client"

import { motion } from 'framer-motion'
import { CheckCircle, Shield, Clock, Trophy } from 'lucide-react'

const reasons = [
  {
    icon: CheckCircle,
    title: "Premium Quality Materials",
    description: "We use only the highest quality vinyl wraps and protective films to ensure durability and a flawless finish."
  },
  {
    icon: Shield,
    title: "Expert Installation",
    description: "Our team of certified professionals has years of experience in vehicle wrapping and detailing."
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "We value your time. Most projects are completed within 3-5 days, getting you back on the road quickly."
  },
  {
    icon: Trophy,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work with a satisfaction guarantee and warranty on all our services."
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Phantom Wrap?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the advantages that set us apart in the vehicle transformation industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

