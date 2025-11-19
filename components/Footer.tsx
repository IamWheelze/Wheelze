'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const footerLinks = {
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
  ],
  Services: [
    { label: 'Custom Websites', href: '/services#websites' },
    { label: 'Web Applications', href: '/services#webapps' },
    { label: 'Machine Learning', href: '/services#ml' },
    { label: 'Consulting', href: '/contact' },
  ],
  Connect: [
    { label: 'Contact', href: '/contact' },
    { label: 'GitHub', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-deep-charcoal border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-3xl font-bold gradient-text mb-6 inline-block">
              Wheelze
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              We build custom digital solutions that transform businesses.
              From concept to deployment, we're your technical partners.
            </p>
            <div className="flex gap-4">
              {['GitHub', 'Twitter', 'LinkedIn', 'Dribbble'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-electric-lavender hover:border-electric-lavender transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social}
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display text-lg font-bold mb-4 text-white">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-electric-lavender transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="glass p-8 rounded-3xl mb-12">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl font-bold mb-3 gradient-text">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest insights on web development, ML, and digital innovation.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:border-electric-lavender focus:outline-none transition-all"
              />
              <motion.button
                type="submit"
                className="px-8 py-3 bg-electric-lavender text-midnight-navy font-display font-bold rounded-full hover:bg-muted-coral transition-smooth"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Wheelze. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-500 hover:text-electric-lavender transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-electric-lavender transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-electric-lavender transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
