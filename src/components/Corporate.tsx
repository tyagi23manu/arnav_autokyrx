import { useReveal } from '../hooks/useReveal';

const details = [
  { label: 'Legal Structure', value: 'Private Limited Company' },
  { label: 'Governing Law', value: 'Companies Act, 2013 — India' },
  { label: 'CIN', value: 'U62012UW2026PTC250543' },
  { label: 'Regulator', value: 'Ministry of Corporate Affairs · Government of India' },
  { label: 'Industry Code', value: 'NIC 62012 · Information Technology' },
  { label: 'Year of Incorporation', value: '2026' },
  { label: 'Compliance Status', value: 'Active · Fully Compliant' },
];

export function Corporate() {
  const headerRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();
  const quoteRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="corporate"
      className="py-24 md:py-36 bg-white"
      aria-label="Corporate Information"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="reveal-up text-center mb-16">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold mb-4">
            Corporate
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-[-0.02em] text-charcoal">
            Company Information
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Details Grid */}
          <div ref={gridRef} className="reveal-up" style={{ transitionDelay: '0.1s' }}>
            {details.map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline py-4 border-b border-gray-50 last:border-0"
              >
                <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-400 mb-1 sm:mb-0 shrink-0">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-charcoal sm:text-right">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div ref={quoteRef} className="reveal-up flex flex-col justify-center" style={{ transitionDelay: '0.2s' }}>
            <blockquote className="relative text-xl md:text-2xl font-semibold text-charcoal leading-[1.5] mb-8">
              <span className="absolute -left-4 md:-left-6 -top-3 text-5xl text-gold/20 font-serif select-none">&ldquo;</span>
              We are building consumer technology infrastructure that will outlast trends and define how India interacts with the digital world.
              <span className="text-5xl text-gold/20 font-serif select-none">&rdquo;</span>
            </blockquote>
            <div className="h-px w-12 bg-gold/30 mb-6" />
            <p className="text-sm text-gray-500 leading-[1.75]">
              Autokryx Technologies Private Limited is a purpose-built corporate entity.
              From day one, we have operated with full regulatory compliance, structured governance,
              and a long-term mandate. We do not build for the short term.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
