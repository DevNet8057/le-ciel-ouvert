'use client'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function useScrollReveal(
  once: boolean = true,
  margin: string = '-60px'
) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: margin as never })
  return { ref, isInView }
}