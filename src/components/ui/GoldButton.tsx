'use client'
import { motion } from 'framer-motion'

interface GoldButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'outline'
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
}

export default function GoldButton({
  href,
  onClick,
  children,
  size = 'md',
  variant = 'solid',
  type = 'button',
  disabled = false,
  className = '',
}: GoldButtonProps) {
  const sizes = {
    sm: 'px-6 py-2.5 text-xs',
    md: 'px-10 py-4 text-sm',
    lg: 'px-14 py-5 text-base',
  }

  const baseClass = `
    font-cinzel uppercase tracking-[0.2em] rounded-full inline-block
    transition-all duration-300 ${sizes[size]}
    ${variant === 'solid' ? 'btn-gold text-white' : 'border-2 border-[#8a6a08] text-[#8a6a08] hover:bg-[#8a6a08] hover:text-white'}
    ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
    ${className}
  `

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClass}
        whileHover={disabled ? {} : { scale: 1.04, y: -2 }}
        whileTap={disabled ? {} : { scale: 0.97 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
      whileHover={disabled ? {} : { scale: 1.04, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
    >
      {children}
    </motion.button>
  )
}