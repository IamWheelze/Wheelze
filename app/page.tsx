'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Testimonials from '@/components/Testimonials'

const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), { ssr: false })

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const warmSectionRef = useRef<HTMLDivElement>(null)
  const experimentalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero section fade effect
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.hero-element'),
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
        }
      )
    }

    // Warm section parallax
    if (warmSectionRef.current) {
      gsap.to(warmSectionRef.current, {
        scrollTrigger: {
          trigger: warmSectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        y: -50,
        ease: 'none',
      })
    }

    // Experimental section morphing
    if (experimentalRef.current) {
      const shapes = experimentalRef.current.querySelectorAll('.morph-shape')
      shapes.forEach((shape) => {
        gsap.to(shape, {
          scrollTrigger: {
            trigger: shape,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          },
          rotation: 360,
          scale: 1.2,
          ease: 'none',
        })
      })
    }
  }, [])

  return (
    <main className="overflow-hidden">
      {/* HERO - PROFESSIONAL & ESTABLISHED */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-midnight-navy to-deep-charcoal overflow-hidden"
      >
        {/* 3D Background Element */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Scene3D />
        </div>

        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            className="hero-element mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
          >
            <div className="text-electric-lavender text-sm tracking-[0.3em] font-display uppercase">
              Custom Development Agency
            </div>
          </motion.div>

          <h1 className="hero-element font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
            Build Beyond
            <br />
            <span className="gradient-text">Boundaries</span>
          </h1>

          <p className="hero-element text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            We craft high-end custom solutions in Web Development, Web Applications,
            and Machine Learning. Your vision, our technical mastery.
          </p>

          <motion.div
            className="hero-element flex gap-6 justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-electric-lavender text-midnight-navy font-display font-bold rounded-full hover:bg-muted-coral transition-smooth"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-electric-lavender text-electric-lavender font-display font-bold rounded-full hover:bg-electric-lavender hover:text-midnight-navy transition-smooth"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-electric-lavender rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-electric-lavender rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* WARM & FRIENDLY SECTION */}
      <section
        ref={warmSectionRef}
        className="min-h-screen flex items-center justify-center bg-deep-charcoal relative py-32"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="broken-grid items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 text-muted-coral">
                We're not just developers.
                <br />
                We're your partners.
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Behind every line of code is a team that genuinely cares about your success.
                We listen, we collaborate, and we deliver solutions that feel like they were
                built just for you—because they are.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-3xl"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-3 text-warm-amber">
                    Custom Websites
                  </h3>
                  <p className="text-gray-400">
                    Beautiful, fast, and built to convert. Every pixel has a purpose.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-3 text-electric-lavender">
                    Web Applications
                  </h3>
                  <p className="text-gray-400">
                    Scalable systems that grow with your business. Complex made simple.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-3 text-soft-sage">
                    Machine Learning
                  </h3>
                  <p className="text-gray-400">
                    AI solutions that solve real problems. Intelligence meets innovation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* EXPERIMENTAL SECTION */}
      <section
        ref={experimentalRef}
        className="min-h-screen flex items-center justify-center bg-midnight-navy relative py-32 overflow-hidden"
      >
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.h2
            className="font-display text-5xl md:text-7xl font-bold mb-12 gradient-text"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Ready to create something extraordinary?
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            From concept to launch, we're with you every step of the way.
            Let's talk about your project—no commitment, just conversation.
          </motion.p>

          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-gradient-to-r from-muted-coral via-electric-lavender to-warm-amber text-midnight-navy font-display font-bold text-lg rounded-full hover:scale-110 transition-spring"
          >
            Get in Touch
          </Link>
        </div>

        {/* Floating shapes for experimental feel */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="morph-shape absolute top-20 left-10 w-32 h-32 bg-muted-coral/20 rounded-full blur-3xl" />
          <div className="morph-shape absolute bottom-40 right-20 w-48 h-48 bg-electric-lavender/20 rounded-full blur-3xl" />
          <div className="morph-shape absolute top-1/2 left-1/3 w-40 h-40 bg-warm-amber/20 rounded-full blur-3xl" />
        </div>
      </section>
    </main>
  )
}
