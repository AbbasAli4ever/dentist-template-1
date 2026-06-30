'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  label?: string
  className?: string
}

export function LoadingSpinner({
  size = 'md',
  label = 'Loading...',
  className = '',
}: LoadingSpinnerProps) {
  const sizeMap = {
    sm: { outer: 32, inner: 24, dot: 4 },
    md: { outer: 56, inner: 42, dot: 6 },
    lg: { outer: 80, inner: 60, dot: 8 },
  }

  const dims = sizeMap[size]

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 ${className}`}
      role="status"
      aria-label={label}
    >
      <div className="relative" style={{ width: dims.outer, height: dims.outer }}>
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, #615efc, #8f8cff, transparent)',
            maskImage: `radial-gradient(transparent ${dims.inner * 0.5 - 4}px, black ${dims.inner * 0.5 - 3}px)`,
            WebkitMaskImage: `radial-gradient(transparent ${dims.inner * 0.5 - 4}px, black ${dims.inner * 0.5 - 3}px)`,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        />

        <div
          className="absolute inset-0 m-auto rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center"
          style={{ width: dims.inner - 4, height: dims.inner - 4 }}
        >
          <motion.div
            className="rounded-full"
            style={{
              width: dims.dot,
              height: dims.dot,
              background: 'linear-gradient(135deg, #615efc, #8f8cff)',
            }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {[0, 120, 240].map((angle, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: dims.dot * 0.6,
              height: dims.dot * 0.6,
              top: '50%',
              left: '50%',
              borderRadius: '50%',
              background: i === 0 ? '#615efc' : i === 1 ? '#8f8cff' : '#bcb9ff',
              marginLeft: -(dims.dot * 0.3),
              marginTop: -(dims.dot * 0.3),
              transformOrigin: `${-(dims.outer / 2 - 4)}px 0px`,
            }}
            animate={{ rotate: [angle, angle + 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: i * 0.1 }}
          />
        ))}
      </div>

      {label && (
        <motion.p
          className="text-sm font-medium text-gray-500 tracking-wide"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {label}
        </motion.p>
      )}
    </div>
  )
}
