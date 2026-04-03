'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useParallax } from '@/hooks/useParallax'

interface ParallaxImageProps {
  src: string
  alt: string
  speed?: number
  className?: string
  containerClassName?: string
  priority?: boolean
}

export default function ParallaxImage({
  src,
  alt,
  speed = 0.2,
  className = '',
  containerClassName = '',
  priority = false,
}: ParallaxImageProps) {
  const { ref, y } = useParallax(speed)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative overflow-hidden ${containerClassName}`}
    >
      <motion.div style={{ y }} className="relative w-full h-full scale-110">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${className}`}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>
    </div>
  )
}