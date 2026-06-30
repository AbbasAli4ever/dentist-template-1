'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2 } from 'lucide-react'
import { DentalCTAButton } from './DentalCTAButton'
import type { ServiceData } from '@/lib/serviceData'

interface InfoCardProps {
  service: ServiceData | null
  onClose: () => void
}

export function InfoCard({ service, onClose }: InfoCardProps) {
  return (
    <AnimatePresence mode="wait">
      {service && (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25, duration: 0.4 }}
          className="absolute bottom-4 left-1/2 z-30"
          style={{ transform: 'translateX(-50%)', width: 'min(420px, 90vw)' }}
        >
          <div
            className="relative rounded-3xl p-6 overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.88)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: `1px solid ${service.color}33`,
              boxShadow: `0 20px 60px rgba(0,0,0,0.12), 0 8px 24px ${service.color}22`,
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
              style={{ background: `linear-gradient(90deg, ${service.color}, ${service.color}88)` }}
            />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>

            <div className="flex items-start gap-3 mb-4 pr-8">
              <motion.div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: `${service.color}18` }}
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {service.icon}
              </motion.div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 leading-tight">{service.title}</h3>
                <p className="text-gray-500 text-sm mt-0.5 leading-relaxed line-clamp-2">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="space-y-2 mb-5">
              {service.benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: service.color }}
                  />
                  <span className="text-sm text-gray-900">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <DentalCTAButton variant="primary" size="sm" className="w-full justify-center">
                {service.cta}
              </DentalCTAButton>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
