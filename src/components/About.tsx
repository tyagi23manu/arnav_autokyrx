import { useReveal } from '../hooks/useReveal';

const pillars = [
  {
    num: '01',
    title: 'Consumer Technology',
    description:
      "We build products that end users interact with daily. Our products are designed for real behaviour — built on deep understanding of how India's digital consumers think and move.",
  },
  {
    num: '02',
    title: 'Scalable Infrastructure',
    description:
      'Every platform is engineered to grow from 1,000 to 100 million users without architectural overhaul. We think in systems, not features — and build infrastructure that compounds over time.',
  },
  {
    num: '03',
    title: 'Verified Identity',
    description:
      'Across every product vertical, we embed real identity at the foundation. Verified communities create trust. Trust creates engagement. Engagement creates lasting value.',
  },
];

export function About() {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      className="py-24 md:py-36 bg-gray-50"
      aria-label="About Autokryx"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="reveal-up text-center mb-20">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold mb-4">
            What We Build
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-[-0.02em] text-charcoal">
            Three Pillars
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {pillars.map((pillar, i) => {
            const ref = useReveal<HTMLDivElement>();
            return (
              <div
                key={i}
                ref={ref}
                className="reveal-up group"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="block text-7xl md:text-8xl font-black text-gray-100 group-hover:text-gold/8 transition-colors duration-700 leading-none select-none">
                  {pillar.num}
                </span>
                <h3 className="mt-5 text-xl font-bold text-charcoal group-hover:text-gold transition-colors duration-500">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm text-gray-500 leading-[1.75]">
                  {pillar.description}
                </p>
                <div className="mt-8 h-px w-10 bg-gray-200 group-hover:w-20 group-hover:bg-gold transition-all duration-700 ease-out" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
