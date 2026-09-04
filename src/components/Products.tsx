import { useReveal } from '../hooks/useReveal';
import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    status: 'Active',
    statusColor: 'bg-emerald-500',
    category: 'Private Campus Social Infrastructure',
    name: 'INSIDE',
    namePrefix: 'INSI',
    nameHighlight: 'DE',
    description:
      "India's first verified private social network for college students. INSIDE gives 40 million campus students a space that is entirely their own — verified identities, institution-scoped communities, and zero noise from the outside world.",
    cta: 'Visit INSIDE',
    ctaLink: 'https://getinside.in',
    external: true,
    accent: 'from-emerald-500/10 to-transparent',
  },
  {
    status: 'In Development',
    statusColor: 'bg-gold',
    category: 'Decentralised Identity & Trust Protocol',
    name: 'KRYX',
    namePrefix: 'KR',
    nameHighlight: 'YX',
    description:
      "A permissioned blockchain infrastructure layer enabling verified digital identity, immutable credential attestation, and trustless data exchange — powering institutional-grade trust across Autokryx's product ecosystem and partner networks.",
    cta: 'Partner Enquiry',
    ctaLink: '#contact',
    external: false,
    accent: 'from-gold/10 to-transparent',
  },
  {
    status: 'Planned',
    statusColor: 'bg-sky-400',
    category: 'Verified Community Networks',
    name: 'NEXUS',
    namePrefix: 'NEX',
    nameHighlight: 'US',
    description:
      "Community infrastructure for verified professional and social networks — beyond campus, beyond a single vertical. NEXUS will bring Autokryx's identity-first approach to every structured community in India.",
    cta: 'Expression of Interest',
    ctaLink: '#contact',
    external: false,
    accent: 'from-sky-400/10 to-transparent',
  },
  {
    status: 'Roadmap',
    statusColor: 'bg-gray-400',
    category: 'Embedded Financial Infrastructure',
    name: 'VAULT',
    namePrefix: 'VA',
    nameHighlight: 'ULT',
    description:
      'Financial services embedded natively within the Autokryx product ecosystem — payments, savings, and credit designed specifically for the verified communities our platforms serve.',
    cta: 'Investor Enquiry',
    ctaLink: '#contact',
    external: false,
    accent: 'from-gray-400/10 to-transparent',
  },
];

export function Products() {
  return (
    <section
      id="products"
      className="py-24 md:py-36 bg-white"
      aria-label="Products"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader />
        <div className="space-y-4 md:space-y-6">
          {products.map((product, i) => (
            <ProductCard key={i} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal-up text-center mb-16 md:mb-20">
      <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold mb-4">
        Product Ecosystem
      </p>
      <h2 className="text-3xl md:text-5xl font-black tracking-[-0.02em] text-charcoal">
        What We're Building
      </h2>
    </div>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  const cardRef = useReveal<HTMLDivElement>();

  return (
    <div
      ref={cardRef}
      className="reveal-up group relative overflow-hidden rounded-2xl border border-gray-100 bg-white hover:border-gold/20 hover:shadow-[0_8px_40px_-12px_rgba(212,175,55,0.12)] transition-all duration-700"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Subtle gradient accent at top */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${product.accent}`} />

      <div className="p-8 md:p-10 lg:p-12">
        {/* Status */}
        <div className="flex items-center gap-2.5 mb-8">
          <span className={`w-1.5 h-1.5 rounded-full ${product.statusColor} animate-gentle-pulse`} />
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400">
            {product.status}
          </span>
        </div>

        <div className="lg:flex lg:items-start lg:gap-16">
          {/* Left — Name */}
          <div className="lg:w-2/5 mb-6 lg:mb-0">
            <p className="text-xs text-gray-400 font-medium tracking-wide mb-3">
              {product.category}
            </p>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] text-charcoal leading-none group-hover:tracking-[-0.01em] transition-all duration-700">
              {product.namePrefix}
              <span className="text-gold">{product.nameHighlight}</span>
            </h3>
          </div>

          {/* Right — Description & CTA */}
          <div className="lg:w-3/5 lg:pt-2">
            <p className="text-[15px] text-gray-500 leading-[1.7] mb-8 max-w-xl">
              {product.description}
            </p>
            <a
              href={product.ctaLink}
              {...(product.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-gold group/link transition-colors duration-300"
            >
              <span className="relative">
                {product.cta}
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-gold group-hover/link:w-full transition-all duration-500" />
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
