"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HeroSection } from "../components/hero-section"
import { ServicesSection } from "../components/services-section"
import { FeaturedWorks } from "../components/featured-works"
import { Testimonials } from "../components/testimonials"
import { ContactSection } from "../components/contact-section"
import { WhyChooseUs } from "../components/why-choose-us"
import { AIAssistant } from "../components/ai-assistant"

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <motion.img
              src=""
              alt="Phantom Wrap Logo"
              className="w-64 h-64 object-contain"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.h1
              className="text-white text-4xl mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              Welcome to Phantom Wrap
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <HeroSection />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ServicesSection />
        <WhyChooseUs />
        <FeaturedWorks />
        <Testimonials />
        <ContactSection />
      </motion.div>
      <AIAssistant />
    </div>
  )
}

