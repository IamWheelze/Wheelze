'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CEO, TechStart Inc.',
    content:
      'Wheelze transformed our vision into reality. Their technical expertise and creative approach resulted in a platform that exceeded all our expectations. The team was responsive, professional, and truly invested in our success.',
    rating: 5,
    avatar: 'SC',
    color: '#ff6b6b',
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'CTO, DataFlow Solutions',
    content:
      'Working with Wheelze was a game-changer. They built us a machine learning pipeline that processes millions of data points daily with incredible accuracy. Their expertise in AI is unmatched.',
    rating: 5,
    avatar: 'MR',
    color: '#a78bfa',
  },
  {
    id: 3,
    name: 'Emily Watson',
    role: 'Founder, GreenEarth Market',
    content:
      'Our e-commerce platform needed a complete overhaul. Wheelze delivered a beautiful, fast website that tripled our conversion rate. The attention to detail and user experience is phenomenal.',
    rating: 5,
    avatar: 'EW',
    color: '#fbbf24',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Product Director, HealthHub',
    content:
      'The web application Wheelze built for us handles complex healthcare workflows seamlessly. Their ability to understand our domain and translate it into intuitive software is impressive.',
    rating: 5,
    avatar: 'DP',
    color: '#86efac',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-32 bg-deep-charcoal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-electric-lavender rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-muted-coral rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.h2
          className="font-display text-5xl md:text-6xl font-bold text-center mb-20 gradient-text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          {/* Main Testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="glass p-12 md:p-16 rounded-3xl relative"
            >
              {/* Quote Icon */}
              <div
                className="absolute top-8 left-8 text-8xl opacity-10 font-display"
                style={{ color: current.color }}
              >
                "
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-2 mb-6 justify-center">
                  {[...Array(current.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill={current.color}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-2xl md:text-3xl text-gray-200 mb-8 text-center leading-relaxed">
                  {current.content}
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-display font-bold text-xl"
                    style={{ backgroundColor: current.color }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {current.avatar}
                  </motion.div>
                  <div className="text-left">
                    <div className="font-display font-bold text-xl text-white">
                      {current.name}
                    </div>
                    <div className="text-gray-400">{current.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <motion.button
              onClick={prev}
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              ←
            </motion.button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all ${
                    index === currentIndex
                      ? 'w-12 h-3 rounded-full'
                      : 'w-3 h-3 rounded-full'
                  }`}
                  style={{
                    backgroundColor:
                      index === currentIndex ? current.color : 'rgba(255,255,255,0.2)',
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              →
            </motion.button>
          </div>

          {/* Auto-advance indicator */}
          <p className="text-center text-gray-500 text-sm mt-8">
            {currentIndex + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  )
}
