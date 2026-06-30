'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ServicePillProps {
  label: string
  icon: string
  isActive: boolean
  onClick: () => void
  delay?: number
  className?: string
  color?: string
}

export function ServicePill({
  label,
  icon,
  isActive,
  onClick,
  delay = 0,
  className,
  color = '#615efc',
}: ServicePillProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{ scale: 1.08, y: -3, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        'relative flex items-center gap-2 px-4 py-2.5 rounded-full',
        'font-semibold text-sm whitespace-nowrap [font-family:\'Rubik\',Helvetica]',
        'transition-all duration-300 cursor-pointer',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#615efc]',
        isActive
          ? 'text-white shadow-dental-primary'
          : 'dental-glass text-[#111032] hover:text-[#615efc]',
        className
      )}
      style={{
        background: isActive
          ? `linear-gradient(135deg, ${color}, ${color}cc)`
          : undefined,
        boxShadow: isActive
          ? `0 8px 24px ${color}55, 0 4px 12px ${color}33`
          : undefined,
      }}
    >
      {isActive && (
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ background: `${color}33` }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      <motion.span
        className="text-base leading-none relative z-10"
        animate={isActive ? { rotate: [0, -8, 8, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.span>

      <span className="relative z-10 leading-none">{label}</span>

      {isActive && (
        <motion.span
          className="w-1.5 h-1.5 rounded-full bg-white/80 relative z-10"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </motion.button>
  )
}
