'use client'
import { motion } from 'framer-motion'
import { generateParticles } from '@/lib/utils'

const particles = generateParticles(16)

export default function GoldenParticles() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#8a6a08]"
          style={{
            left:   `${p.x}%`,
            top:    `${p.y}%`,
            width:  p.size,
            height: p.size,
          }}
          animate={{
            y:       [-15, 15, -15],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration:   p.duration,
            repeat:     Infinity,
            ease:       'easeInOut',
            delay:      p.delay,
          }}
        />
      ))}
    </div>
  )
}