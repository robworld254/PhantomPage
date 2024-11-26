"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Sun, Car } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: "Paint Protection Film",
    description: "A nearly invisible shield applied to your car's paint to guard against scratches, chips, and stains, keeping it looking showroom fresh.",
  },
  {
    icon: Sun,
    title: "Window Tinting",
    description: "Enhances privacy and blocks harmful UV rays. Window tint comes in various darkness levels, letting you customize the look and comfort of your car's interior.",
  },
  {
    icon: Car,
    title: "Car Detailing",
    description: "A deep clean and polish that restores your car's shine, removes imperfections, and protects the interior, making your car look and feel its best.",
  },
]

export function ServicesSection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our premium car transformation services
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full transition-transform duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

