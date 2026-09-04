import { useReveal } from '../hooks/useReveal';

const stats = [
  {
    value: '900',
    suffix: 'M+',
    label: 'Internet Users',
    sub: 'In India By 2030',
  },
  {
    value: '40',
    suffix: 'M',
    label: 'College Students',
    sub: 'Underserved Today',
  },
  {
    value: '$150',
    suffix: 'B',
    label: 'India Consumer Tech',
    sub: 'Market Size (2025)',
  },
  {
    value: '3',
    suffix: 'rd',
    label: 'Largest Startup',
    sub: 'Ecosystem Globally',
  },
];

export function Market() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      id="market"
      ref={sectionRef}
      className="reveal-up py-20 md:py-28 bg-charcoal relative overflow-hidden"
      aria-label="Market Opportunity"
    >
      {/* Subtle gold gradient accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight">
                {stat.value}
                <span className="gold-text">{stat.suffix}</span>
              </p>
              <p className="mt-3 text-xs sm:text-sm text-gray-500 leading-snug">
                {stat.label}
                <br />
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
