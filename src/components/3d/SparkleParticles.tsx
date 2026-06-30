'use client'

import React, { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface SparkleParticlesProps {
  count?: number
  visible: boolean
  bounds?: THREE.Box3
}

interface Particle {
  position: [number, number, number]
  speed: number
  size: number
  phase: number
}

export function SparkleParticles({ count = 60, visible, bounds }: SparkleParticlesProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const particles = useMemo<Particle[]>(() => {
    const size = bounds ? bounds.getSize(new THREE.Vector3()) : new THREE.Vector3(2.5, 2, 1.5)
    const center = bounds ? bounds.getCenter(new THREE.Vector3()) : new THREE.Vector3(0, 0, 0)
    return Array.from({ length: count }, () => ({
      position: [
        center.x + (Math.random() - 0.5) * size.x * 0.85,
        center.y + (Math.random() - 0.5) * size.y * 0.85,
        center.z + (Math.random() - 0.5) * size.z * 0.8,
      ] as [number, number, number],
      speed: 0.2 + Math.random() * 0.8,
      size: 0.01 + Math.random() * 0.03,
      phase: Math.random() * Math.PI * 2,
    }))
  }, [count, bounds])

  useFrame((state) => {
    if (!meshRef.current || !visible) return

    const t = state.clock.getElapsedTime()

    particles.forEach((p, i) => {
      const y = p.position[1] + ((t * p.speed * 0.3 + p.phase) % 3) - 1.5
      const x = p.position[0] + Math.sin(t * 0.5 + p.phase) * 0.1
      const z = p.position[2]

      dummy.position.set(x, y, z)

      const scale = p.size * (1 + 0.4 * Math.sin(t * 3 + p.phase))
      dummy.scale.setScalar(scale * 50)
      dummy.updateMatrix()

      meshRef.current!.setMatrixAt(i, dummy.matrix)
    })

    meshRef.current.instanceMatrix.needsUpdate = true
    meshRef.current.visible = visible
  })

  const geometry = useMemo(() => new THREE.SphereGeometry(0.01, 6, 6), [])

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#FFFFFF'),
        emissive: new THREE.Color('#F0EDFF'),
        emissiveIntensity: 2,
        roughness: 0,
        metalness: 0.1,
        transparent: true,
        opacity: 0.9,
      }),
    []
  )

  return (
    <instancedMesh
      ref={meshRef}
      args={[geometry, material, count]}
      visible={visible}
    />
  )
}
