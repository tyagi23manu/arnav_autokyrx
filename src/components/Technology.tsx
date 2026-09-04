import { useReveal } from '../hooks/useReveal';
import { Fingerprint, Users, Shield, Server } from 'lucide-react';

const principles = [
  {
    numeral: 'I',
    icon: Fingerprint,
    title: 'Identity-Native Architecture',
    description:
      'Every user in every Autokryx product is a verified real person. Identity is the foundation everything else is built upon.',
  },
  {
    numeral: 'II',
    icon: Users,
    title: 'Network Effect Engine',
    description:
      'Our platforms grow stronger with every new user. The architecture incentivises organic growth and community compounding at every layer.',
  },
  {
    numeral: 'III',
    icon: Shield,
    title: 'Privacy-First Infrastructure',
    description:
      'Community-scoped data architecture. Information shared within a community stays within that community. Trust is a technical constraint.',
  },
  {
    numeral: 'IV',
    icon: Server,
    title: 'India-Scale Engineering',
    description:
      'Designed from day one to work for 500 million users. We engineer scale in from the beginning, at every layer of the stack.',
  },
];

export function Technology() {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="technology"
      className="py-24 md:py-36 bg-white"
      aria-label="Technology Principles"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="reveal-up text-center mb-16 md:mb-20">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold mb-4">
            Engineering
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-[-0.02em] text-charcoal">
            Technology Principles
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {principles.map((item, i) => {
            const Icon = item.icon;
            const ref = useReveal<HTMLDivElement>();
            return (
              <div
                key={i}
                ref={ref}
                className="reveal-up group rounded-2xl border border-gray-100 bg-white p-8 md:p-10 hover:border-gold/20 hover:shadow-[0_8px_40px_-12px_rgba(212,175,55,0.08)] transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 pt-1">
                    <span className="block text-2xl font-black text-gray-200 group-hover:text-gold/25 transition-colors duration-500 select-none">
                      {item.numeral}
                    </span>
                  </div>
                  <div>
                    <div className="mb-4">
                      <Icon className="w-5 h-5 text-gold/70" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-bold text-charcoal mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-[1.7]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
