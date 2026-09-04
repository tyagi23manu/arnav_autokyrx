import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  count: number;
  scrollProgress: number;
}

export function Particles({ count, scrollProgress }: ParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const time = useRef(0);

  const { positions, basePositions } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const basePositions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Distribute in a sphere/shell
      const radius = 2.5 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
      basePositions[i3] = x;
      basePositions[i3 + 1] = y;
      basePositions[i3 + 2] = z;
    }

    return { positions, basePositions };
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const dt = Math.min(delta, 0.05);
    time.current += dt;

    const geo = pointsRef.current.geometry;
    const pos = geo.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Gentle orbital drift
      const speed = 0.1 + (i % 5) * 0.02;
      const offset = i * 0.73;
      pos[i3] = basePositions[i3] + Math.sin(time.current * speed + offset) * 0.15;
      pos[i3 + 1] = basePositions[i3 + 1] + Math.cos(time.current * speed * 0.7 + offset) * 0.1;
      pos[i3 + 2] = basePositions[i3 + 2] + Math.sin(time.current * speed * 0.5 + offset + 1) * 0.12;
    }

    geo.attributes.position.needsUpdate = true;

    // Fade with scroll
    const mat = pointsRef.current.material as THREE.PointsMaterial;
    mat.opacity = Math.max(0.05, 0.5 - scrollProgress * 1.2);
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.012}
        color="#D4AF37"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
