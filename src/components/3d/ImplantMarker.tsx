'use client'

import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ImplantMarkerProps {
  visible: boolean
  bounds: THREE.Box3
}

export function ImplantMarker({ visible, bounds }: ImplantMarkerProps) {
  const groupRef = useRef<THREE.Group>(null)
  const outerRingRef = useRef<THREE.Mesh>(null)
  const innerRingRef = useRef<THREE.Mesh>(null)
  const opacityRef = useRef(0)

  const { position, r1, r2, r3, dotR } = useMemo(() => {
    const size = bounds.getSize(new THREE.Vector3())
    const cx = (bounds.max.x + bounds.min.x) / 2
    const unit = size.x / 10

    return {
      position: new THREE.Vector3(
        cx + size.x * 0.18,
        bounds.min.y + size.y * 0.30,
        bounds.max.z + size.z * 0.05,
      ),
      r1: unit * 1.4,
      r2: unit * 1.1,
      r3: unit * 0.7,
      dotR: unit * 0.35,
    }
  }, [bounds])

  const ringMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#2563EB'),
        emissive: new THREE.Color('#3B82F6'),
        emissiveIntensity: 1.5,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        depthTest: false,
      }),
    []
  )

  const innerRingMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#38BDF8'),
        emissive: new THREE.Color('#7DD3FC'),
        emissiveIntensity: 2,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        depthTest: false,
      }),
    []
  )

  const dotMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#2563EB'),
        emissive: new THREE.Color('#60A5FA'),
        emissiveIntensity: 3,
        transparent: true,
        opacity: 0,
        depthTest: false,
      }),
    []
  )

  const outerRingGeometry = useMemo(() => new THREE.RingGeometry(r2, r1, 32), [r1, r2])
  const innerRingGeometry = useMemo(() => new THREE.RingGeometry(r3 * 0.55, r3, 32), [r3])
  const dotGeometry = useMemo(() => new THREE.SphereGeometry(dotR, 12, 12), [dotR])

  useFrame((state, delta) => {
    if (!groupRef.current) return

    const t = state.clock.getElapsedTime()
    const target = visible ? 1 : 0
    opacityRef.current = THREE.MathUtils.lerp(opacityRef.current, target, delta * 3)
    const o = opacityRef.current

    ringMaterial.opacity = o * 0.85
    innerRingMaterial.opacity = o * 0.95
    dotMaterial.opacity = o
    groupRef.current.visible = o > 0.01

    if (outerRingRef.current) {
      outerRingRef.current.scale.setScalar(1 + 0.22 * Math.sin(t * 3))
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z = t * 1.5
    }
  })

  return (
    <group ref={groupRef} position={position} visible={false} renderOrder={10}>
      <mesh ref={outerRingRef} geometry={outerRingGeometry} material={ringMaterial} renderOrder={10} />
      <mesh ref={innerRingRef} geometry={innerRingGeometry} material={innerRingMaterial} renderOrder={11} />
      <mesh geometry={dotGeometry} material={dotMaterial} renderOrder={12} />
    </group>
  )
}
