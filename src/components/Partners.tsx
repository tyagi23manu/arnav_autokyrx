import { useReveal } from '../hooks/useReveal';

const partners = [
  { name: 'SARVAM AI' },
  { name: 'AWS' },
  { name: 'NVIDIA' },
  { name: 'Microsoft' },
  { name: 'DEEPGRAM' },
];

export function Partners() {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="partners"
      className="py-20 md:py-28 bg-gray-50"
      aria-label="Technology Partners"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="reveal-up text-center mb-12">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold mb-4">
            Partners
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-[-0.02em] text-charcoal">
            Technology Ecosystem
          </h2>
        </div>

        <div className="overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <div className="marquee-track flex items-center">
            {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-10 md:px-14 py-6 shrink-0 group cursor-default"
              >
                <span className="text-xl md:text-2xl font-extrabold tracking-tight text-gray-200 group-hover:text-gold transition-colors duration-700 whitespace-nowrap select-none">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
