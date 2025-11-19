'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const blogPosts = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt:
      'Explore the cutting-edge technologies and practices shaping the future of web development.',
    category: 'Web Development',
    date: '2025-01-15',
    author: 'Sarah Chen',
    readTime: '8 min read',
    color: 'muted-coral',
  },
  {
    id: '2',
    title: 'Building Scalable Web Applications: A Complete Guide',
    excerpt:
      'Learn the architectural patterns and best practices for creating web apps that grow with your business.',
    category: 'Web Apps',
    date: '2025-01-10',
    author: 'Michael Rodriguez',
    readTime: '12 min read',
    color: 'electric-lavender',
  },
  {
    id: '3',
    title: 'Machine Learning for Business: Where to Start',
    excerpt:
      'Demystifying machine learning and showing how it can solve real business problems.',
    category: 'Machine Learning',
    date: '2025-01-05',
    author: 'Dr. Amanda Park',
    readTime: '10 min read',
    color: 'warm-amber',
  },
  {
    id: '4',
    title: 'Why Custom Development Beats Templates Every Time',
    excerpt:
      'The hidden costs of template-based solutions and the value of custom development.',
    category: 'Business',
    date: '2024-12-28',
    author: 'David Kim',
    readTime: '6 min read',
    color: 'soft-sage',
  },
]

export default function BlogPage() {
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
              Insights & Ideas
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Thoughts on web development, machine learning, and building
              digital products that matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="glass p-8 rounded-3xl group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -10 }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className={`text-sm font-display font-bold text-${post.color}`}>
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>

                <h2 className="font-display text-3xl font-bold mb-4 group-hover:text-electric-lavender transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>

                <div className="mt-6">
                  <span className="text-electric-lavender font-display font-bold group-hover:underline">
                    Read More →
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-32 bg-deep-charcoal">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="glass p-12 rounded-3xl text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Stay in the Loop
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest insights, tips, and trends delivered to your inbox.
              No spam, just value.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:border-electric-lavender focus:outline-none transition-all"
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-electric-lavender text-midnight-navy font-display font-bold rounded-full hover:bg-muted-coral transition-smooth"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
