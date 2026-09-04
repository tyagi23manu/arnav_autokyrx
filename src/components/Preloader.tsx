import { useState, useEffect, useCallback } from 'react';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  const handleComplete = useCallback(onComplete, [onComplete]);

  useEffect(() => {
    let frame: number;
    let current = 0;

    const animate = () => {
      // Smooth easing towards 100
      const speed = current < 60 ? 0.06 : current < 90 ? 0.03 : 0.015;
      current += (100 - current) * speed;
      
      if (current > 99.5) {
        current = 100;
        setProgress(100);
        
        setTimeout(() => {
          setHidden(true);
          setTimeout(handleComplete, 700);
        }, 300);
        return;
      }
      
      setProgress(Math.floor(current));
      frame = requestAnimationFrame(animate);
    };

    // Brief initial pause
    const timeout = setTimeout(() => {
      frame = requestAnimationFrame(animate);
    }, 150);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
    };
  }, [handleComplete]);

  return (
    <div
      className={`preloader ${hidden ? 'hidden' : ''}`}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Loading Autokryx Technologies"
    >
      {/* Centered brand */}
      <div className="flex flex-col items-center">
        <div className="preloader-logo">
          AUTO<span>KRYX</span>
        </div>
        
        <div className="preloader-bar-container">
          <div
            className="preloader-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="mt-6 text-[10px] text-gray-400 tracking-[0.25em] uppercase font-medium">
          Loading
        </p>
      </div>
    </div>
  );
}
