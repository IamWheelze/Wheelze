'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const featuredProjects = [
  {
    id: 1,
    title: 'FinTech Dashboard',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    color: '#ff6b6b',
    tech: ['React', 'Node.js', 'D3.js', 'WebSocket'],
  },
  {
    id: 2,
    title: 'AI Content Platform',
    category: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    color: '#a78bfa',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
  },
  {
    id: 3,
    title: 'E-Commerce Empire',
    category: 'Website',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800',
    color: '#fbbf24',
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
  },
  {
    id: 4,
    title: 'Healthcare Portal',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    color: '#86efac',
    tech: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
  },
  {
    id: 5,
    title: 'Predictive Analytics Engine',
    category: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    color: '#ff6b6b',
    tech: ['Python', 'Scikit-learn', 'AWS', 'Docker'],
  },
]

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current) return

    const sections = scrollRef.current.querySelectorAll('.horizontal-item')

    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => '+=' + scrollRef.current!.offsetWidth,
      },
    })

    return () => {
      scrollTween.scrollTrigger?.kill()
      scrollTween.kill()
    }
  }, [])

  return (
    <div ref={containerRef} className="h-screen overflow-hidden bg-midnight-navy">
      <div className="h-full flex items-center">
        <div
          ref={scrollRef}
          className="flex h-full"
          style={{ width: `${featuredProjects.length * 100}vw` }}
        >
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="horizontal-item w-screen h-full flex items-center justify-center px-12 relative"
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background: `radial-gradient(circle at center, ${project.color}, transparent 70%)`,
                }}
              />

              {/* Content */}
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Project Info */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false }}
                >
                  <div className="mb-4">
                    <span
                      className="px-4 py-2 rounded-full text-sm font-display font-bold inline-block"
                      style={{ backgroundColor: `${project.color}20`, color: project.color }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h2
                    className="font-display text-6xl md:text-7xl font-bold mb-6"
                    style={{ color: project.color }}
                  >
                    {project.title}
                  </h2>

                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    A cutting-edge solution built with modern technologies,
                    designed for scale and exceptional user experience.
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm font-display border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    className="px-8 py-4 rounded-full font-display font-bold text-midnight-navy"
                    style={{ backgroundColor: project.color }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Case Study
                  </motion.button>
                </motion.div>

                {/* Project Visual */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  <div
                    className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl"
                    style={{ boxShadow: `0 25px 50px -12px ${project.color}40` }}
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 text-9xl font-display font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Floating accent */}
                  <motion.div
                    className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-50 blur-3xl"
                    style={{ backgroundColor: project.color }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Scroll indicator */}
              {index < featuredProjects.length - 1 && (
                <div className="absolute bottom-12 right-12 flex items-center gap-3 text-gray-500">
                  <span className="font-display text-sm">Scroll to explore</span>
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
