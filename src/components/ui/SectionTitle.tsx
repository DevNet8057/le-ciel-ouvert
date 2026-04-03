'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp, lineGrow } from '@/lib/animations'

interface SectionTitleProps {
  pretitle?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionTitle({
  pretitle,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' as never })

  return (
    <div
      ref={ref}
      className={`mb-16 md:mb-20 ${centered ? 'text-center' : ''}`}
    >
      {pretitle && (
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="font-inter text-sky-main text-xs md:text-sm uppercase tracking-[0.3em] mb-3"
        >
          {pretitle}
        </motion.p>
      )}

      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ delay: 0.1 }}
        className={`font-cinzel font-bold tracking-[0.06em] text-3xl md:text-4xl lg:text-5xl mb-4 ${
          light ? 'text-white' : 'text-[#1A2744]'
        }`}
      >
        {title}
      </motion.h2>

      <motion.div
        variants={lineGrow}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="gold-divider mb-4"
      />

      {subtitle && (
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.25 }}
          className={`font-cormorant italic text-xl md:text-2xl mt-5 ${
            light ? 'text-white/70' : 'text-[#718096]'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}