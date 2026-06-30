'use client'

import React, { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface BracesOverlayProps {
  visible: boolean
  bounds: THREE.Box3
}

function makeArchCurve(
  cx: number,
  toothY: number,
  frontZ: number,
  archDepth: number,
  halfSpan: number
): THREE.CatmullRomCurve3 {
  return new THREE.CatmullRomCurve3([
    new THREE.Vector3(cx - halfSpan * 1.12, toothY, frontZ - archDepth),
    new THREE.Vector3(cx - halfSpan,         toothY, frontZ - archDepth * 0.45),
    new THREE.Vector3(cx - halfSpan * 0.48,  toothY, frontZ - archDepth * 0.07),
    new THREE.Vector3(cx,                    toothY, frontZ),
    new THREE.Vector3(cx + halfSpan * 0.48,  toothY, frontZ - archDepth * 0.07),
    new THREE.Vector3(cx + halfSpan,         toothY, frontZ - archDepth * 0.45),
    new THREE.Vector3(cx + halfSpan * 1.12,  toothY, frontZ - archDepth),
  ])
}

function sampleBrackets(curve: THREE.CatmullRomCurve3, n: number) {
  return Array.from({ length: n }, (_, i) => {
    const t = 0.1 + (i / (n - 1)) * 0.8
    const pos = curve.getPoint(t)
    const tan = curve.getTangent(t)
    const rotY = Math.atan2(tan.z, tan.x)
    return { pos, rotY }
  })
}

export function BracesOverlay({ visible, bounds }: BracesOverlayProps) {
  const groupRef = useRef<THREE.Group>(null)
  const opacityRef = useRef(0)

  const {
    upperCurve, lowerCurve,
    upperBrackets, lowerBrackets,
    upperWireGeo, lowerWireGeo,
    bracketH,
    bracketGeo, wingGeo, ligatureGeo,
  } = useMemo(() => {
    const size = bounds.getSize(new THREE.Vector3())
    const cx   = (bounds.max.x + bounds.min.x) / 2
    const frontZ   = bounds.max.z * 0.97
    const halfSpan = size.x * 0.38
    const archDepth = Math.min(size.x * 0.18, size.z * 0.42)
    const wr = Math.max(size.x / 230, 0.003)

    const upperY = bounds.min.y + size.y * 0.72
    const lowerY = bounds.min.y + size.y * 0.30

    const uCurve = makeArchCurve(cx, upperY, frontZ, archDepth, halfSpan)
    const lCurve = makeArchCurve(cx, lowerY, frontZ, archDepth, halfSpan)

    const bw = size.x / 18
    const bh = size.y / 22
    const bd = Math.max(size.x / 55, 0.02)

    return {
      upperCurve: uCurve,
      lowerCurve: lCurve,
      upperBrackets: sampleBrackets(uCurve, 6),
      lowerBrackets: sampleBrackets(lCurve, 6),
      upperWireGeo: new THREE.TubeGeometry(uCurve, 100, wr, 8, false),
      lowerWireGeo: new THREE.TubeGeometry(lCurve, 100, wr, 8, false),
      bracketW: bw,
      bracketH: bh,
      bracketD: bd,
      bracketGeo: new THREE.BoxGeometry(bw, bh, bd),
      wingGeo: new THREE.BoxGeometry(bw * 1.45, bh * 0.27, bd * 0.65),
      ligatureGeo: new THREE.TorusGeometry(bw * 0.37, wr * 1.5, 6, 12),
    }
  }, [bounds])

  const metalMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: '#D4DCE8', metalness: 0.92, roughness: 0.08, transparent: true, opacity: 0 }),
    []
  )
  const wireMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: '#B8C4D0', metalness: 0.88, roughness: 0.12, transparent: true, opacity: 0 }),
    []
  )
  const ligatureMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: '#5599FF', emissive: '#3366CC', emissiveIntensity: 0.6, transparent: true, opacity: 0 }),
    []
  )

  useFrame((_, delta) => {
    if (!groupRef.current) return
    const target = visible ? 0.95 : 0
    opacityRef.current = THREE.MathUtils.lerp(opacityRef.current, target, delta * 4)
    const o = opacityRef.current
    metalMat.opacity     = o
    wireMat.opacity      = o
    ligatureMat.opacity  = o * 0.85
    groupRef.current.visible = o > 0.01
  })

  const BracketRow = ({ brackets }: { brackets: ReturnType<typeof sampleBrackets> }) => (
    <>
      {brackets.map(({ pos, rotY }, i) => (
        <group key={i} position={pos} rotation={[0, rotY, 0]}>
          <mesh geometry={bracketGeo} material={metalMat} />
          <mesh geometry={wingGeo}    material={metalMat} position={[0,  bracketH * 0.64, 0]} />
          <mesh geometry={wingGeo}    material={metalMat} position={[0, -bracketH * 0.64, 0]} />
          <mesh geometry={ligatureGeo} material={ligatureMat} rotation={[Math.PI / 2, 0, 0]} />
        </group>
      ))}
    </>
  )

  return (
    <group ref={groupRef} visible={false}>
      <mesh geometry={upperWireGeo} material={wireMat} />
      <BracketRow brackets={upperBrackets} />
      <mesh geometry={lowerWireGeo} material={wireMat} />
      <BracketRow brackets={lowerBrackets} />
    </group>
  )
}
