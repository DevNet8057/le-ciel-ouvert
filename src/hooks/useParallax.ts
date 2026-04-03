'use client'
import { useRef } from 'react'
import { useScroll, useTransform, type MotionValue } from 'framer-motion'

export function useParallax(speed: number = 0.3): {
  ref: React.RefObject<HTMLDivElement | null>
  y: MotionValue<string>
} {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `${speed * 100}%`]
  )
  return { ref, y }
}

export function useParallaxX(speed: number = 0.2): {
  ref: React.RefObject<HTMLDivElement | null>
  x: MotionValue<string>
} {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['-10%', `${speed * 50}%`]
  )
  return { ref, x }
}