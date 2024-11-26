"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Sun, Car, Palette, Sparkles, Camera } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: "Paint Protection Film",
    description: "Protect your vehicle's paint from scratches, chips, and stains with our high-quality PPF.",
    image: "/ppf-service.jpg"
  },
  {
    icon: Sun,
    title: "Window Tinting",
    description: "Enhance privacy and reduce heat with our premium window tinting solutions.",
    image: "/window-tinting-service.jpg"
  },
  {
    icon: Car,
    title: "Full Vehicle Wraps",
    description: "Transform your vehicle's appearance with our custom full vehicle wraps.",
    image: "/full-wrap-service.jpg"
  },
  {
    icon: Palette,
    title: "Color Change Wraps",
    description: "Give your vehicle a new look with our color change wrap services.",
    image: "/color-change-service.jpg"
  },
  {
    icon: Sparkles,
    title: "Ceramic Coating",
    description: "Protect your vehicle's exterior with our long-lasting ceramic coating.",
    image: "/ceramic-coating-service.jpg"
  },
  {
    icon: Camera,
    title: "Design Services",
    description: "Custom design services for commercial and personal vehicle graphics.",
    image: "/design-service.jpg"
  }
]

export default function Services() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-center mb-8"
        >
          Our Services
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-transform duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-full h-48 rounded-t-lg overflow-hidden mb-4">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="flex items-center">
                    <service.icon className="w-6 h-6 mr-2 text-primary" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

