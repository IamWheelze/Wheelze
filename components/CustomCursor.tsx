'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type CursorState = 'default' | 'link' | 'project' | 'button'

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>('default')
  const [cursorLabel, setCursorLabel] = useState('')

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (target.closest('a')) {
        setCursorState('link')
        setCursorLabel('View')
      } else if (target.closest('button')) {
        setCursorState('button')
        setCursorLabel('Click')
      } else if (target.closest('[data-cursor="project"]')) {
        setCursorState('project')
        setCursorLabel('Explore')
      } else {
        setCursorState('default')
        setCursorLabel('')
      }
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  const cursorVariants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: 'rgba(167, 139, 250, 0.8)',
      mixBlendMode: 'difference' as const,
    },
    link: {
      width: 60,
      height: 60,
      backgroundColor: 'rgba(255, 107, 107, 0.3)',
      border: '2px solid rgba(255, 107, 107, 1)',
    },
    project: {
      width: 80,
      height: 80,
      backgroundColor: 'rgba(167, 139, 250, 0.2)',
      border: '2px solid rgba(167, 139, 250, 1)',
    },
    button: {
      width: 50,
      height: 50,
      backgroundColor: 'rgba(251, 191, 36, 0.3)',
      border: '2px solid rgba(251, 191, 36, 1)',
    },
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={cursorVariants}
        animate={cursorState}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 400,
          mass: 0.5,
        }}
      >
        {cursorLabel && (
          <motion.span
            className="text-xs font-display font-bold text-white"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            {cursorLabel}
          </motion.span>
        )}
      </motion.div>
    </>
  )
}
