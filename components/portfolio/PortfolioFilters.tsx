'use client'

import { motion } from 'framer-motion'
import { ProjectCategory } from '@/app/portfolio/page'

interface PortfolioFiltersProps {
  activeFilter: ProjectCategory
  setActiveFilter: (filter: ProjectCategory) => void
}

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'websites', label: 'Websites' },
  { id: 'webapps', label: 'Web Apps' },
  { id: 'ml', label: 'Machine Learning' },
]

export default function PortfolioFilters({
  activeFilter,
  setActiveFilter,
}: PortfolioFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {filters.map((filter) => (
        <motion.button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id as ProjectCategory)}
          className={`
            relative px-8 py-4 font-display font-bold text-lg rounded-full
            transition-all duration-300 overflow-hidden
            ${
              activeFilter === filter.id
                ? 'text-midnight-navy'
                : 'text-gray-400 hover:text-white'
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          {/* Background gradient (only visible when active) */}
          {activeFilter === filter.id && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-gradient-to-r from-muted-coral via-electric-lavender to-warm-amber"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}

          {/* Border for inactive filters */}
          {activeFilter !== filter.id && (
            <div className="absolute inset-0 border-2 border-gray-700 rounded-full" />
          )}

          <span className="relative z-10">{filter.label}</span>
        </motion.button>
      ))}
    </div>
  )
}
