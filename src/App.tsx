import { useState, useEffect, lazy, Suspense } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Recognition } from './components/Recognition';
import { Partners } from './components/Partners';
import { About } from './components/About';
import { Products } from './components/Products';
import { Technology } from './components/Technology';
import { Market } from './components/Market';
import { Corporate } from './components/Corporate';
import { Vision } from './components/Vision';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Lazy load the 3D scene for performance
const Scene = lazy(() =>
  import('./components/3d/Scene').then((mod) => ({ default: mod.Scene }))
);

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) setWebglSupported(false);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  // Prevent scroll while loading
  useEffect(() => {
    if (!loaded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loaded]);

  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}

      {/* 3D Background Canvas */}
      {loaded && webglSupported && (
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      )}

      {/* HTML Content Layer */}
      <div className="section-content">
        <Navbar />

        <main>
          {/* 1. Hero - transparent bg, 3D shows through */}
          <Hero />

          {/* 2. Scrolling marquee strip */}
          <Marquee />

          {/* 3. Recognition - awards & conferences */}
          <Recognition />

          {/* 4. Partner logos */}
          <Partners />

          {/* 5. Three Pillars */}
          <About />

          {/* 6. Product Ecosystem */}
          <Products />

          {/* 7. Technology Principles */}
          <Technology />

          {/* 8. Market Stats */}
          <Market />

          {/* 9. Corporate & Legal */}
          <Corporate />

          {/* 10. Roadmap & Vision */}
          <Vision />

          {/* 11. CTA */}
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
