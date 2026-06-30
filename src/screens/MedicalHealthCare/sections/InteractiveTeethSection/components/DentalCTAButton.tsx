'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DentalCTAButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'ghost' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  showArrow?: boolean
  disabled?: boolean
}

export function DentalCTAButton({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className,
  showArrow = true,
  disabled = false,
}: DentalCTAButtonProps) {
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm gap-1.5',
    md: 'px-7 py-3.5 text-base gap-2',
    lg: 'px-9 py-4 text-lg gap-2.5',
  }

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: 'linear-gradient(135deg, #615efc 0%, #8f8cff 100%)',
      boxShadow: '0 8px 24px rgba(97, 94, 252, 0.35)',
    },
    ghost: {},
    accent: {
      background: 'linear-gradient(135deg, #5956ff 0%, #8f8cff 100%)',
      boxShadow: '0 0 40px rgba(97, 94, 252, 0.4)',
    },
  }

  const variantClasses = {
    primary: 'text-white',
    ghost: 'bg-transparent border-2 border-[#615efc] text-[#615efc] hover:bg-[#f1f1ff]',
    accent: 'text-white',
  }

  const baseClasses = cn(
    'relative inline-flex items-center justify-center font-semibold rounded-full [font-family:\'Rubik\',Helvetica]',
    'transition-all duration-300 overflow-hidden group',
    'focus:outline-none focus:ring-2 focus:ring-[#615efc] focus:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    sizeClasses[size],
    variantClasses[variant],
    className
  )

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      style={variantStyles[variant]}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {variant !== 'ghost' && (
        <span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)',
          }}
        />
      )}

      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && (
          <motion.span
            className="inline-flex"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        )}
      </span>
    </motion.button>
  )
}
