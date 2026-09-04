import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AICoreProps {
  scrollProgress: number;
  mouseX: number;
  mouseY: number;
  isMobile: boolean;
}

export function AICoreGeometry({ scrollProgress, mouseX, mouseY, isMobile }: AICoreProps) {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const floatingGroupRef = useRef<THREE.Group>(null);

  const goldMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#D4AF37'),
        metalness: 0.95,
        roughness: 0.1,
        envMapIntensity: 2.0,
      }),
    []
  );

  const glassMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#f8f8f8'),
        metalness: 0.05,
        roughness: 0.02,
        transmission: 0.92,
        thickness: 0.3,
        transparent: true,
        opacity: 0.25,
        envMapIntensity: 0.8,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
      }),
    []
  );

  const darkMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#2a2a2c'),
        metalness: 0.8,
        roughness: 0.2,
        envMapIntensity: 1.2,
      }),
    []
  );

  const accentMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#B8860B'),
        metalness: 0.9,
        roughness: 0.15,
        envMapIntensity: 1.8,
      }),
    []
  );

  const smoothMouse = useRef({ x: 0, y: 0 });
  const time = useRef(0);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    const dt = Math.min(delta, 0.05);
    time.current += dt;

    // Smooth mouse following
    const mouseStrength = isMobile ? 0.05 : 0.12;
    smoothMouse.current.x += (mouseX * mouseStrength - smoothMouse.current.x) * 2.5 * dt;
    smoothMouse.current.y += (mouseY * mouseStrength - smoothMouse.current.y) * 2.5 * dt;

    // Main group rotation
    groupRef.current.rotation.x = smoothMouse.current.y + scrollProgress * Math.PI * 0.4;
    groupRef.current.rotation.y = smoothMouse.current.x + scrollProgress * Math.PI * 1.5 + time.current * 0.05;

    // Gentle floating
    if (floatingGroupRef.current) {
      floatingGroupRef.current.position.y = Math.sin(time.current * 0.8) * 0.08;
    }

    // Scale based on scroll
    const baseScale = isMobile ? 0.65 : 1;
    const scrollScale = 1 - scrollProgress * 0.25;
    groupRef.current.scale.setScalar(baseScale * scrollScale);

    // Position shift
    groupRef.current.position.y = scrollProgress * -1.5 + Math.sin(time.current * 0.6) * 0.05;

    // Inner core
    if (innerRef.current) {
      innerRef.current.rotation.y += dt * 0.4;
      innerRef.current.rotation.z += dt * 0.15;
      // Pulse
      const pulse = 1 + Math.sin(time.current * 2) * 0.02;
      innerRef.current.scale.setScalar(pulse);
    }

    // Outer shell
    if (outerRef.current) {
      outerRef.current.rotation.y -= dt * 0.12;
      outerRef.current.rotation.x += dt * 0.06;
    }

    // Rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += dt * 0.25;
      ring1Ref.current.rotation.x = Math.sin(time.current * 0.5 + scrollProgress * Math.PI) * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= dt * 0.18;
      ring2Ref.current.rotation.y = Math.cos(time.current * 0.4) * 0.2;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x += dt * 0.12;
      ring3Ref.current.rotation.z += dt * 0.08;
    }
  });

  const icoDetail = isMobile ? 1 : 2;

  return (
    <group ref={groupRef}>
      <group ref={floatingGroupRef}>
        {/* Inner core — golden icosahedron */}
        <mesh ref={innerRef} material={goldMaterial}>
          <icosahedronGeometry args={[0.55, icoDetail]} />
        </mesh>

        {/* Outer shell — glass dodecahedron */}
        <mesh ref={outerRef} material={glassMaterial}>
          <dodecahedronGeometry args={[0.95, 0]} />
        </mesh>

        {/* Ring 1 - main orbit */}
        <mesh ref={ring1Ref} material={darkMaterial}>
          <torusGeometry args={[1.5, 0.018, 8, 80]} />
        </mesh>

        {/* Ring 2 - secondary orbit */}
        <mesh ref={ring2Ref} rotation={[Math.PI / 2.5, 0, 0]} material={accentMaterial}>
          <torusGeometry args={[1.3, 0.012, 8, 80]} />
        </mesh>

        {/* Ring 3 - tertiary */}
        <mesh ref={ring3Ref} rotation={[Math.PI / 5, Math.PI / 3, 0]} material={darkMaterial}>
          <torusGeometry args={[1.7, 0.008, 6, 80]} />
        </mesh>

        {/* Orbital nodes */}
        {!isMobile &&
          Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const r = 1.4 + (i % 3) * 0.2;
            const yOff = Math.sin(angle * 2) * 0.3;
            return (
              <mesh
                key={`node-${i}`}
                position={[
                  Math.cos(angle) * r,
                  yOff,
                  Math.sin(angle) * r,
                ]}
                material={i % 2 === 0 ? goldMaterial : darkMaterial}
              >
                <sphereGeometry args={[0.025, 8, 8]} />
              </mesh>
            );
          })}

        {/* Connecting lines (thin cylinders) */}
        {!isMobile &&
          Array.from({ length: 6 }).map((_, i) => {
            const angle = (i / 6) * Math.PI * 2;
            const x = Math.cos(angle) * 0.95;
            const z = Math.sin(angle) * 0.95;
            return (
              <mesh
                key={`line-${i}`}
                position={[x * 0.5, 0, z * 0.5]}
                rotation={[0, 0, angle + Math.PI / 2]}
                material={darkMaterial}
              >
                <cylinderGeometry args={[0.003, 0.003, 0.9, 4]} />
              </mesh>
            );
          })}
      </group>
    </group>
  );
}
