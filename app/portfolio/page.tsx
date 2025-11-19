'use client'

import { useState } from 'react'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid'
import PortfolioFilters from '@/components/portfolio/PortfolioFilters'
import HorizontalScroll from '@/components/portfolio/HorizontalScroll'
import { motion } from 'framer-motion'

export type ProjectCategory = 'all' | 'websites' | 'webapps' | 'ml'

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all')

  return (
    <main className="min-h-screen bg-midnight-navy">
      {/* Hero Header */}
      <div className="container mx-auto px-6 lg:px-12 py-24">
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
      </div>

      {/* Featured Projects - Horizontal Scroll */}
      <div className="mb-32">
        <div className="container mx-auto px-6 lg:px-12 mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center gradient-text">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mt-4">
            Scroll horizontally to explore our most impactful work
          </p>
        </div>
        <HorizontalScroll />
      </div>

      {/* All Projects - Filterable Grid */}
      <div className="container mx-auto px-6 lg:px-12 pb-24">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center gradient-text mb-12">
          All Projects
        </h2>

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
