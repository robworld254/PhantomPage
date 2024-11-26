"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const featuredWorks = [
  {
    id: 1,
    title: "Matte Black Range Rover",
    description: "Full vehicle wrap with premium matte black vinyl",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Chrome Delete Tesla Model 3",
    description: "Complete chrome delete and window tinting",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Porsche 911 Paint Protection",
    description: "Full front-end PPF and ceramic coating",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
]

export function FeaturedWorks() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredWorks.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredWorks.length) % featuredWorks.length)
  }

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our latest and most impressive vehicle transformations
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform ease-in-out duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredWorks.map((work) => (
                <div key={work.id} className="w-full flex-shrink-0">
                  <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                    <img src={work.imageUrl} alt={work.title} className="w-full h-64 object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                      <p className="text-muted-foreground">{work.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 transform -translate-y-1/2"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

