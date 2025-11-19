'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: 'Custom Websites',
    tagline: 'Beautiful. Fast. Conversion-Focused.',
    description:
      'We design and build stunning websites that not only look incredible but perform flawlessly. Every pixel has a purpose, every interaction is intentional.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Performance Tuning',
      'CMS Integration',
      'E-Commerce Solutions',
    ],
    color: 'muted-coral',
    gradient: 'from-muted-coral to-red-500',
  },
  {
    title: 'Web Applications',
    tagline: 'Scalable. Secure. User-Centric.',
    description:
      'From MVPs to enterprise platforms, we build web applications that scale with your business. Complex problems, elegant solutions.',
    features: [
      'Full-Stack Development',
      'API Design & Integration',
      'Real-Time Features',
      'Cloud Infrastructure',
      'Database Architecture',
    ],
    color: 'electric-lavender',
    gradient: 'from-electric-lavender to-purple-500',
  },
  {
    title: 'Machine Learning',
    tagline: 'Intelligent. Data-Driven. Transformative.',
    description:
      'Harness the power of AI and machine learning to unlock insights, automate processes, and create competitive advantages.',
    features: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Recommendation Systems',
      'Custom Model Training',
    ],
    color: 'warm-amber',
    gradient: 'from-warm-amber to-orange-500',
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-midnight-navy">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-deep-charcoal to-midnight-navy">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-8 gradient-text">
              Our Services
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Custom solutions tailored to your unique challenges.
              No templates, no shortcuts—just excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="broken-grid items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Content */}
                <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                  <motion.div
                    className="mb-4"
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <h2 className={`font-display text-5xl md:text-6xl font-bold mb-4 text-${service.color}`}>
                      {service.title}
                    </h2>
                    <p className="text-xl text-gray-400 font-display italic mb-6">
                      {service.tagline}
                    </p>
                  </motion.div>

                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <motion.li
                        key={feature}
                        className="flex items-center text-gray-300"
                        whileHover={{ x: 5 }}
                      >
                        <span className={`w-2 h-2 bg-${service.color} rounded-full mr-3`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`inline-block px-8 py-4 bg-gradient-to-r ${service.gradient} text-midnight-navy font-display font-bold rounded-full hover:scale-105 transition-spring`}
                  >
                    Get Started
                  </Link>
                </div>

                {/* Visual */}
                <motion.div
                  className={`glass p-12 rounded-3xl ${index % 2 === 0 ? 'order-2' : 'order-1'}`}
                  whileHover={{ scale: 1.05, rotateZ: 2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div
                    className={`w-full h-64 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-30`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Pricing CTA */}
      <section className="py-32 bg-deep-charcoal">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 gradient-text">
              Value-Driven Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Every project is unique, and so is our approach. We don't believe in
              one-size-fits-all pricing. Let's discuss your needs and craft a custom
              solution that fits your budget and exceeds your expectations.
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-gradient-to-r from-muted-coral via-electric-lavender to-warm-amber text-midnight-navy font-display font-bold text-lg rounded-full hover:scale-110 transition-spring"
            >
              Request a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
