'use client'

import { useState, useEffect } from 'react'

interface MousePosition {
  x: number
  y: number
  rawX: number
  rawY: number
}

export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    rawX: 0,
    rawY: 0,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -((e.clientY / window.innerHeight) * 2 - 1)
      setMousePosition({ x, y, rawX: e.clientX, rawY: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return mousePosition
}
