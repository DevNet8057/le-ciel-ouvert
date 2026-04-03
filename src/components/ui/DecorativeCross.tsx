'use client'
import { motion } from 'framer-motion'

interface DecorativeCrossProps {
  size?: number
  color?: string
  opacity?: number
  animated?: boolean
  className?: string
}

export default function DecorativeCross({
  size = 40,
  color = '#8a6a08',
  opacity = 0.3,
  animated = false,
  className = '',
}: DecorativeCrossProps) {
  const svg = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      style={{ opacity }}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 4V36M4 20H36"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="20" cy="20" r="4" stroke={color} strokeWidth="1" />
    </svg>
  )

  if (animated) {
    return (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      >
        {svg}
      </motion.div>
    )
  }

  return svg
}