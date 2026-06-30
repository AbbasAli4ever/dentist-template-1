'use client'

import React from 'react'
import { LoadingSpinner } from './LoadingSpinner'

export function ModelLoader() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#f1f1ff]/80 to-[#f4f3ff]/80 backdrop-blur-sm rounded-3xl">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div
            className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl"
            style={{
              background: 'linear-gradient(135deg, rgba(97,94,252,0.1), rgba(143,140,255,0.15))',
              boxShadow: '0 8px 32px rgba(97,94,252,0.15)',
            }}
          >
            🦷
          </div>
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className="absolute inset-0 rounded-3xl border border-[#615efc]/30"
              style={{
                animation: `dental-ping-ring ${1 + i * 0.3}s cubic-bezier(0,0,0.2,1) ${i * 0.3}s infinite`,
              }}
            />
          ))}
        </div>

        <LoadingSpinner size="md" label="Loading 3D Model..." />

        <div className="w-48 h-1.5 bg-[#e7e6ff] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #615efc, #8f8cff)',
              animation: 'dental-shimmer-bar 1.5s ease-in-out infinite',
              width: '60%',
            }}
          />
        </div>
      </div>
    </div>
  )
}
