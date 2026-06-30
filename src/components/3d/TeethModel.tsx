"use client";

import React, {
  useRef,
  useEffect,
  Suspense,
  useMemo,
  useState,
  useCallback,
} from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { SparkleParticles } from "./SparkleParticles";
import { BracesOverlay } from "./BracesOverlay";

useGLTF.preload("/models/mouth.glb");

interface TeethModelProps {
  activeService: string | null;
}

interface OriginalMaterial {
  color: THREE.Color;
  emissive: THREE.Color;
  emissiveIntensity: number;
  roughness: number;
  metalness: number;
  isGum: boolean;
}

const GUM_KEYWORDS = [
  "gum",
  "gingiv",
  "tissue",
  "mucosa",
  "palate",
  "tongue",
  "lip",
  "cheek",
  "flesh",
  "soft",
  "oral",
  "pink",
];
const TOOTH_KEYWORDS = [
  "tooth",
  "teeth",
  "crown",
  "enamel",
  "dentin",
  "incisor",
  "canine",
  "molar",
  "premolar",
  "white",
];

function detectIsGum(
  mesh: THREE.Mesh,
  mat: THREE.MeshStandardMaterial,
): boolean {
  const names = [
    mesh.name.toLowerCase(),
    mat.name.toLowerCase(),
    (mesh.parent?.name ?? "").toLowerCase(),
  ];
  if (names.some((n) => TOOTH_KEYWORDS.some((k) => n.includes(k))))
    return false;
  if (names.some((n) => GUM_KEYWORDS.some((k) => n.includes(k)))) return true;
  const { r, g, b } = mat.color;
  return r > 0.45 && r > g * 1.08 && r > b * 1.08;
}

function applyGumColor(m: THREE.MeshStandardMaterial) {
  m.color.set("#C2484E");
  m.emissive.set("#882222");
  m.emissiveIntensity = 0.07;
  m.roughness = 0.72;
  m.metalness = 0.0;
}

function SceneModel({ activeService }: { activeService: string | null }) {
  const { scene } = useGLTF("/models/mouth.glb");
  const groupRef = useRef<THREE.Group>(null);
  const originalMaterials = useRef<Map<string, OriginalMaterial>>(new Map());

  const localBounds = useMemo(
    () => new THREE.Box3().setFromObject(scene),
    [scene],
  );

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.isMesh) return;
      if (Array.isArray(mesh.material)) {
        mesh.material = mesh.material.map((m: THREE.Material) => m.clone());
      } else if (mesh.material) {
        mesh.material = (mesh.material as THREE.Material).clone();
      }
    });
    return clone;
  }, [scene]);

  useEffect(() => {
    originalMaterials.current.clear();
    clonedScene.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.isMesh) return;
      const mats = Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material];
      mats.forEach((mat: THREE.Material, idx: number) => {
        const m = mat as THREE.MeshStandardMaterial;
        if (!m.isMeshStandardMaterial) return;
        const isGum = detectIsGum(mesh, m);
        originalMaterials.current.set(`${mesh.uuid}_${idx}`, {
          color: m.color.clone(),
          emissive: m.emissive.clone(),
          emissiveIntensity: m.emissiveIntensity,
          roughness: m.roughness,
          metalness: m.metalness,
          isGum,
        });
        if (isGum) applyGumColor(m);
      });
    });
  }, [clonedScene]);

  useEffect(() => {
    clonedScene.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.isMesh) return;
      const mats = Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material];
      mats.forEach((mat: THREE.Material, idx: number) => {
        const m = mat as THREE.MeshStandardMaterial;
        if (!m.isMeshStandardMaterial) return;
        const orig = originalMaterials.current.get(`${mesh.uuid}_${idx}`);
        if (!orig) return;

        if (orig.isGum) {
          applyGumColor(m);
          m.needsUpdate = true;
          return;
        }

        switch (activeService) {
          case "whitening":
            m.color.set("#FFFFFF");
            m.emissive.set("#99CCFF");
            m.emissiveIntensity = 0.7;
            m.roughness = 0.02;
            m.metalness = 0.05;
            break;
          case "veneers":
            m.color.set("#FFF6E8");
            m.emissive.set("#FFCC88");
            m.emissiveIntensity = 0.35;
            m.roughness = 0.01;
            m.metalness = 0.3;
            break;
          case "cleaning":
            m.color.set("#CCFFEF");
            m.emissive.set("#00DDAA");
            m.emissiveIntensity = 0.45;
            m.roughness = 0.28;
            m.metalness = 0.0;
            break;
          case "braces":
            // Braces don’t whiten — keep the stained baseline
            m.color.set("#C8B87A");
            m.emissive.set("#6B5A1A");
            m.emissiveIntensity = 0.05;
            m.roughness = 0.72;
            m.metalness = 0.0;
            break;
          case "implants":
            m.color.set("#D0E4FF");
            m.emissive.set("#2255CC");
            m.emissiveIntensity = 0.35;
            m.roughness = 0.18;
            m.metalness = 0.55;
            break;
          default:
            // Dirty / unselected baseline — yellowish stained teeth
            m.color.set("#C8B87A");
            m.emissive.set("#6B5A1A");
            m.emissiveIntensity = 0.05;
            m.roughness = 0.72;
            m.metalness = 0.0;
            break;
        }
        m.needsUpdate = true;
      });
    });
  }, [activeService, clonedScene]);

  useEffect(() => {
    const center = localBounds.getCenter(new THREE.Vector3());
    const size = localBounds.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 3.5 / maxDim;
    if (groupRef.current) {
      groupRef.current.scale.setScalar(scale);
      groupRef.current.position.set(
        -center.x * scale,
        -center.y * scale,
        -center.z * scale,
      );
    }
  }, [localBounds]);

  return (
    <group ref={groupRef}>
      <primitive object={clonedScene} />
      <SparkleParticles
        visible={activeService === "whitening"}
        count={70}
        bounds={localBounds}
      />
      <BracesOverlay
        visible={activeService === "braces"}
        bounds={localBounds}
      />
    </group>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color="#E0EEFF" wireframe />
    </mesh>
  );
}

export function TeethModel({ activeService }: TeethModelProps) {
  const [contextLost, setContextLost] = useState(false);
  const [canvasKey, setCanvasKey] = useState(0);
  const attemptsRef = useRef(0);

  const handleContextLost = useCallback(() => {
    attemptsRef.current += 1;
    if (attemptsRef.current <= 3) {
      setCanvasKey((k) => k + 1);
    } else {
      setContextLost(true);
    }
  }, []);

  const handleRestore = useCallback(() => {
    setContextLost(false);
    setCanvasKey((k) => k + 1);
    attemptsRef.current = 0;
  }, []);

  if (contextLost) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-3 text-center px-6">
        <div className="w-16 h-16 rounded-2xl bg-[#f1f1ff] flex items-center justify-center text-2xl">
          🦷
        </div>
        <p className="text-sm text-[#6b6b6b] leading-snug">
          3D view lost GPU context.
          <br />
          Your browser may be low on graphics memory.
        </p>
        <button
          onClick={handleRestore}
          className="px-5 py-2 text-sm font-semibold rounded-xl bg-[#615efc] text-white hover:bg-[#5956ff] transition-colors"
        >
          Reload 3D View
        </button>
      </div>
    );
  }

  return (
    <Canvas
      key={canvasKey}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "default",
        failIfMajorPerformanceCaveat: false,
      }}
      camera={{ position: [0, 0, 3.3], fov: 50, near: 0.1, far: 100 }}
      dpr={[1, 1.5]}
      style={{ background: "transparent", cursor: "grab"}}
      performance={{ min: 0.5 }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener(
          "webglcontextlost",
          (e) => {
            e.preventDefault();
            handleContextLost();
          },
          false,
        );
        gl.domElement.addEventListener(
          "webglcontextrestored",
          () => {
            attemptsRef.current = 0;
          },
          false,
        );
      }}
    >
      <ambientLight intensity={0.2} />
      <directionalLight position={[4, 8, 5]} intensity={2.0} />
      <directionalLight
        position={[-5, 3, -3]}
        intensity={0.6}
        color="#C8DCFF"
      />
      <directionalLight position={[0, -3, 2]} intensity={0.2} color="#E8F4FF" />

      <Environment preset="apartment" />

      <Suspense fallback={<LoadingFallback />}>
        <SceneModel activeService={activeService} />
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        enableDamping={true}
        dampingFactor={0.12}
        rotateSpeed={0.6}
        minPolarAngle={Math.PI * 0.25}
        maxPolarAngle={Math.PI * 0.75}
      />
    </Canvas>
  );
}
