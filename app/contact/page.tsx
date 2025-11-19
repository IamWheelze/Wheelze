'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: 'websites',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formState)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-midnight-navy">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-deep-charcoal to-midnight-navy">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-8 gradient-text">
              Let's Talk
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? We'd love to hear about it.
              No pressure, just conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="broken-grid items-start">
            {/* Form */}
            <motion.div
              className="glass p-12 rounded-3xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-display font-bold mb-2 text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-electric-lavender focus:outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-display font-bold mb-2 text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-electric-lavender focus:outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-display font-bold mb-2 text-gray-300"
                  >
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-electric-lavender focus:outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-display font-bold mb-2 text-gray-300"
                  >
                    What are you interested in?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-electric-lavender focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="websites">Custom Website</option>
                    <option value="webapps">Web Application</option>
                    <option value="ml">Machine Learning Solution</option>
                    <option value="other">Not Sure / Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-display font-bold mb-2 text-gray-300"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-electric-lavender focus:outline-none transition-all resize-none"
                    placeholder="What problem are you trying to solve? What's your timeline? Any specific requirements?"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-5 bg-gradient-to-r from-muted-coral via-electric-lavender to-warm-amber text-midnight-navy font-display font-bold text-lg rounded-full hover:scale-105 transition-spring"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="glass p-8 rounded-3xl">
                <h3 className="font-display text-2xl font-bold mb-4 text-muted-coral">
                  Why Choose Wheelze?
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-muted-coral mr-3">✓</span>
                    <span>Personalized attention to every project</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-muted-coral mr-3">✓</span>
                    <span>Transparent communication throughout</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-muted-coral mr-3">✓</span>
                    <span>Cutting-edge technology and best practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-muted-coral mr-3">✓</span>
                    <span>Dedicated support after launch</span>
                  </li>
                </ul>
              </div>

              <div className="glass p-8 rounded-3xl">
                <h3 className="font-display text-2xl font-bold mb-4 text-electric-lavender">
                  What Happens Next?
                </h3>
                <ol className="space-y-4 text-gray-300">
                  <li className="flex">
                    <span className="font-display font-bold text-electric-lavender mr-3">
                      1.
                    </span>
                    <span>We'll review your inquiry within 24 hours</span>
                  </li>
                  <li className="flex">
                    <span className="font-display font-bold text-electric-lavender mr-3">
                      2.
                    </span>
                    <span>Schedule a free consultation call</span>
                  </li>
                  <li className="flex">
                    <span className="font-display font-bold text-electric-lavender mr-3">
                      3.
                    </span>
                    <span>Receive a custom proposal tailored to your needs</span>
                  </li>
                  <li className="flex">
                    <span className="font-display font-bold text-electric-lavender mr-3">
                      4.
                    </span>
                    <span>Start building something amazing together</span>
                  </li>
                </ol>
              </div>

              <div className="glass p-8 rounded-3xl">
                <h3 className="font-display text-2xl font-bold mb-4 text-warm-amber">
                  Other Ways to Connect
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p>
                    <span className="font-display font-bold">Email:</span>{' '}
                    hello@wheelze.com
                  </p>
                  <p>
                    <span className="font-display font-bold">Phone:</span>{' '}
                    +1 (555) 123-4567
                  </p>
                  <p>
                    <span className="font-display font-bold">Location:</span>{' '}
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
