'use client'

import { useState } from 'react'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid'
import PortfolioFilters from '@/components/portfolio/PortfolioFilters'
import { motion } from 'framer-motion'

export type ProjectCategory = 'all' | 'websites' | 'webapps' | 'ml'

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all')

  return (
    <main className="min-h-screen bg-midnight-navy py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Our Work
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of custom websites, web applications,
            and machine learning solutions.
          </p>
        </motion.div>

        {/* Filters */}
        <PortfolioFilters
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Project Grid */}
        <PortfolioGrid activeFilter={activeFilter} />
      </div>
    </main>
  )
}
