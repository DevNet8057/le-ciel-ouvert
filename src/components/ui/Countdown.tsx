'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TimeLeft {
  jours: number
  heures: number
  minutes: number
  secondes: number
}

interface CountdownProps {
  targetDate: Date
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    jours: 0, heures: 0, minutes: 0, secondes: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const calculate = () => {
      const diff = targetDate.getTime() - Date.now()
      if (diff <= 0) {
        setTimeLeft({ jours: 0, heures: 0, minutes: 0, secondes: 0 })
        return
      }
      setTimeLeft({
        jours:    Math.floor(diff / (1000 * 60 * 60 * 24)),
        heures:   Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes:  Math.floor((diff / (1000 * 60)) % 60),
        secondes: Math.floor((diff / 1000) % 60),
      })
    }
    calculate()
    const id = setInterval(calculate, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  if (!mounted) return null

  const units: { label: string; value: number }[] = [
    { label: 'Jours',    value: timeLeft.jours },
    { label: 'Heures',   value: timeLeft.heures },
    { label: 'Minutes',  value: timeLeft.minutes },
    { label: 'Secondes', value: timeLeft.secondes },
  ]

  return (
    <div className="flex gap-3 md:gap-6 items-center justify-center">
      {units.map(({ label, value }, i) => (
        <motion.div
          key={label}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="glass-card rounded-xl px-3 py-2 md:px-6 md:py-4 min-w-[56px] md:min-w-[80px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={value}
                className="font-cinzel text-2xl md:text-4xl font-bold text-white block"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
              >
                {String(value).padStart(2, '0')}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="font-inter text-white/60 text-[10px] md:text-xs uppercase tracking-widest mt-1.5 block">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}