'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (statsRef.current) {
      const stats = statsRef.current.querySelectorAll('.stat-number')
      stats.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-target') || '0')
        const element = stat as HTMLElement
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
          },
          textContent: 0,
          duration: 2,
          ease: 'power1.out',
          snap: { textContent: 1 },
        })
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-midnight-navy">
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-deep-charcoal to-midnight-navy">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-8 gradient-text">
              We build digital experiences that matter.
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Wheelze is a custom development agency specializing in crafting
              high-performance websites, scalable web applications, and intelligent
              machine learning solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={statsRef} className="py-32 bg-deep-charcoal">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div
                className="stat-number font-display text-6xl font-bold text-muted-coral mb-4"
                data-target="150"
              >
                0
              </div>
              <p className="text-xl text-gray-400">Projects Delivered</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div
                className="stat-number font-display text-6xl font-bold text-electric-lavender mb-4"
                data-target="98"
              >
                0
              </div>
              <p className="text-xl text-gray-400">Client Satisfaction %</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div
                className="stat-number font-display text-6xl font-bold text-warm-amber mb-4"
                data-target="50"
              >
                0
              </div>
              <p className="text-xl text-gray-400">Team Members</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-midnight-navy">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.h2
            className="font-display text-5xl md:text-6xl font-bold mb-20 text-center gradient-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>

          <div className="broken-grid">
            <motion.div
              className="glass p-8 rounded-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <h3 className="font-display text-3xl font-bold mb-4 text-muted-coral">
                Quality First
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Every line of code is crafted with precision. We believe in doing things right.
              </p>
            </motion.div>

            <motion.div
              className="glass p-8 rounded-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-display text-3xl font-bold mb-4 text-electric-lavender">
                Transparent Communication
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                No jargon, no surprises. We keep you informed every step of the way.
              </p>
            </motion.div>

            <motion.div
              className="glass p-8 rounded-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-display text-3xl font-bold mb-4 text-warm-amber">
                Innovation Driven
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We stay ahead of the curve with the latest technologies.
              </p>
            </motion.div>

            <motion.div
              className="glass p-8 rounded-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-display text-3xl font-bold mb-4 text-soft-sage">
                Client Partnership
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Your success is our success. We're invested in your goals from day one.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
