"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const cars = [
  { id: 'sedan', name: 'Sedan', image: '/sedan.png' },
  { id: 'suv', name: 'SUV', image: '/suv.png' },
  { id: 'sports', name: 'Sports Car', image: '/sports-car.png' },
]

const wraps = [
  { id: 'matte-black', name: 'Matte Black', color: '#1a1a1a' },
  { id: 'glossy-red', name: 'Glossy Red', color: '#ff0000' },
  { id: 'satin-white', name: 'Satin White', color: '#f5f5f5' },
  { id: 'metallic-blue', name: 'Metallic Blue', color: '#0000ff' },
]

export default function Simulator() {
  const [selectedCar, setSelectedCar] = useState(cars[0])
  const [selectedWrap, setSelectedWrap] = useState(wraps[0])

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-center mb-8"
        >
          Car Wrap Simulator
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Choose Your Car</h2>
            <Select onValueChange={(value) => setSelectedCar(cars.find(car => car.id === value) || cars[0])}>
              <SelectTrigger>
                <SelectValue placeholder="Select a car" />
              </SelectTrigger>
              <SelectContent>
                {cars.map((car) => (
                  <SelectItem key={car.id} value={car.id}>{car.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <h2 className="text-2xl font-bold mt-8 mb-4">Choose Your Wrap</h2>
            <Select onValueChange={(value) => setSelectedWrap(wraps.find(wrap => wrap.id === value) || wraps[0])}>
              <SelectTrigger>
                <SelectValue placeholder="Select a wrap" />
              </SelectTrigger>
              <SelectContent>
                {wraps.map((wrap) => (
                  <SelectItem key={wrap.id} value={wrap.id}>{wrap.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="mt-8">
              <Button className="w-full">Book This Wrap</Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold mb-4">Preview</h2>
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="absolute inset-0 w-full h-full object-contain"
              />
              <div
                className="absolute inset-0 mix-blend-multiply"
                style={{ backgroundColor: selectedWrap.color }}
              ></div>
            </div>
            <div className="mt-4">
              <Label>Selected Car: {selectedCar.name}</Label>
              <Label>Selected Wrap: {selectedWrap.name}</Label>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

