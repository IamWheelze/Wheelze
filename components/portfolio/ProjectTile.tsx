'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Project } from './PortfolioGrid'
import { useState } from 'react'

interface ProjectTileProps {
  project: Project
  index: number
}

export default function ProjectTile({ project, index }: ProjectTileProps) {
  const [isHovered, setIsHovered] = useState(false)

  // 3D tilt effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        delay: index * 0.1,
      }}
      className="group relative"
      data-cursor="project"
    >
      <motion.div
        className="relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
          style={{
            background: `linear-gradient(135deg, ${project.color}, transparent)`,
          }}
        />

        {/* Main content container */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between bg-gradient-to-b from-transparent via-deep-charcoal/60 to-deep-charcoal">
          {/* Top section - Category badge */}
          <motion.div
            className="flex justify-between items-start"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-display font-bold border border-white/20">
              {project.category === 'webapps'
                ? 'Web App'
                : project.category === 'ml'
                ? 'Machine Learning'
                : 'Website'}
            </span>
          </motion.div>

          {/* Bottom section - Project info */}
          <div className="relative z-10">
            <motion.h3
              className="font-display text-3xl font-bold mb-3"
              animate={{
                y: isHovered ? -10 : 0,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              className="text-gray-300 mb-4 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isHovered ? 'auto' : 0,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {project.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHovered ? 0 : 20,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-xs font-display border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Hover overlay effect - displacement */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${project.color}40, transparent 70%)`,
              transform: 'translateZ(20px)',
            }}
          />
        </motion.div>

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              border: `2px solid ${project.color}`,
              boxShadow: `0 0 30px ${project.color}40`,
            }}
          />
        </motion.div>

        {/* Corner accent (reveals on hover) */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: isHovered ? 0.3 : 0,
            scale: isHovered ? 1 : 0,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <div
            className="w-full h-full rounded-bl-full"
            style={{
              background: project.color,
              filter: 'blur(30px)',
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
