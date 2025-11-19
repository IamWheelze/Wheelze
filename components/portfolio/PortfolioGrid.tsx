'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ProjectCategory } from '@/app/portfolio/page'
import ProjectTile from './ProjectTile'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  description: string
  image: string
  tags: string[]
  color: string
}

// Sample projects data
const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    category: 'webapps',
    description: 'Full-stack e-commerce solution with real-time inventory management',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    color: '#ff6b6b',
  },
  {
    id: '2',
    title: 'AI Content Generator',
    category: 'ml',
    description: 'Machine learning model for automated content generation',
    image: '/projects/ai-content.jpg',
    tags: ['Python', 'TensorFlow', 'GPT'],
    color: '#a78bfa',
  },
  {
    id: '3',
    title: 'Restaurant Website',
    category: 'websites',
    description: 'Modern restaurant website with online booking system',
    image: '/projects/restaurant.jpg',
    tags: ['React', 'Tailwind', 'Animation'],
    color: '#fbbf24',
  },
  {
    id: '4',
    title: 'Project Management Tool',
    category: 'webapps',
    description: 'Collaborative project management platform',
    image: '/projects/pm-tool.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    color: '#86efac',
  },
  {
    id: '5',
    title: 'Image Recognition API',
    category: 'ml',
    description: 'Computer vision API for product categorization',
    image: '/projects/image-api.jpg',
    tags: ['Python', 'OpenCV', 'FastAPI'],
    color: '#ff6b6b',
  },
  {
    id: '6',
    title: 'Portfolio Website',
    category: 'websites',
    description: 'Creative portfolio with 3D interactions',
    image: '/projects/portfolio.jpg',
    tags: ['Three.js', 'GSAP', 'WebGL'],
    color: '#a78bfa',
  },
  {
    id: '7',
    title: 'Analytics Dashboard',
    category: 'webapps',
    description: 'Real-time analytics dashboard with custom visualizations',
    image: '/projects/dashboard.jpg',
    tags: ['D3.js', 'React', 'WebSocket'],
    color: '#fbbf24',
  },
  {
    id: '8',
    title: 'Predictive Maintenance',
    category: 'ml',
    description: 'IoT-based predictive maintenance system',
    image: '/projects/predictive.jpg',
    tags: ['Python', 'Scikit-learn', 'AWS'],
    color: '#86efac',
  },
  {
    id: '9',
    title: 'Agency Website',
    category: 'websites',
    description: 'High-performance agency website with scroll effects',
    image: '/projects/agency.jpg',
    tags: ['Next.js', 'Framer Motion', 'GSAP'],
    color: '#ff6b6b',
  },
]

interface PortfolioGridProps {
  activeFilter: ProjectCategory
}

export default function PortfolioGrid({ activeFilter }: PortfolioGridProps) {
  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <motion.div
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <AnimatePresence mode="popLayout">
        {filteredProjects.map((project, index) => (
          <ProjectTile
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  )
}
