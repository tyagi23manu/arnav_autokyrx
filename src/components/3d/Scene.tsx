import { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { AICoreGeometry } from './AICoreGeometry';
import { Particles } from './Particles';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useIsMobile } from '../../hooks/useIsMobile';

function SceneContent() {
  const scrollProgress = useScrollProgress();
  const mouse = useMousePosition();
  const isMobile = useIsMobile();
  const particleCount = isMobile ? 80 : 250;

  // Fade out the 3D scene as user scrolls past hero
  const opacity = useMemo(() => {
    return Math.max(0, 1 - scrollProgress * 3);
  }, [scrollProgress]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.5}
        color="#ffffff"
      />
      <directionalLight
        position={[-4, 3, -4]}
        intensity={0.5}
        color="#D4AF37"
      />
      <pointLight position={[0, 4, 2]} intensity={0.8} color="#D4AF37" distance={15} />
      <pointLight position={[-3, -2, 3]} intensity={0.3} color="#ffffff" distance={12} />

      <group visible={opacity > 0.01}>
        <AICoreGeometry
          scrollProgress={scrollProgress}
          mouseX={mouse.x}
          mouseY={mouse.y}
          isMobile={isMobile}
        />
        
        <Particles count={particleCount} scrollProgress={scrollProgress} />
      </group>
    </>
  );
}

export function Scene() {
  const scrollProgress = useScrollProgress();
  // Fade out canvas as scroll progresses
  const canvasOpacity = Math.max(0, 1 - scrollProgress * 3);

  return (
    <div
      className="canvas-container"
      style={{ opacity: canvasOpacity, transition: 'opacity 0.1s linear' }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        style={{ background: 'transparent' }}
        frameloop={canvasOpacity > 0.01 ? 'always' : 'never'}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
