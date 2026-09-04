import { useReveal } from '../hooks/useReveal';


export function Hero() {
  const companyRef = useReveal<HTMLParagraphElement>();
  const titleRef = useReveal<HTMLDivElement>();
  const subtitleRef = useReveal<HTMLParagraphElement>();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(212,175,55,0.04) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="text-center max-w-5xl mx-auto relative z-10">
        <p
          ref={companyRef}
          className="reveal-up text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-gray-400 mb-8"
          style={{ transitionDelay: '0.2s' }}
        >
          Autokryx Technologies
        </p>

        <div ref={titleRef} className="reveal-up" style={{ transitionDelay: '0.4s' }}>
          <h1 className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-[-0.03em] text-charcoal leading-[0.92]">
            TECHNOLOGY
            <br />
            BUILT FOR{' '}
            <span className="gold-text">ONE BILLION.</span>
          </h1>
        </div>

        <p
          ref={subtitleRef}
          className="reveal-up mt-8 md:mt-10 text-xs sm:text-sm tracking-[0.3em] uppercase text-gray-400 font-medium"
          style={{ transitionDelay: '0.6s' }}
        >
          INFRASTRUCTURE &nbsp;•&nbsp; IDENTITY &nbsp;•&nbsp; INTELLIGENCE
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent relative overflow-hidden">
          <div className="absolute inset-x-0 h-3 bg-gold animate-bounce" />
        </div>
      </div>
    </section>
  );
}
