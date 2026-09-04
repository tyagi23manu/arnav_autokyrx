import { useReveal } from '../hooks/useReveal';
import { ArrowUpRight } from 'lucide-react';

export function Contact() {
  const headerRef = useReveal<HTMLDivElement>();
  const ctaRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="contact"
      className="py-24 md:py-36 bg-white relative overflow-hidden"
      aria-label="Contact"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse at center bottom, rgba(212,175,55,0.04) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
        <div ref={headerRef} className="reveal-up">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-charcoal mb-6">
            Build With Us
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Whether you're an institution, investor, developer, or potential partner — we'd like to hear from you.
          </p>
        </div>

        <div ref={ctaRef} className="reveal-up mt-12 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ transitionDelay: '0.15s' }}>
          <a
            href="https://getinside.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-charcoal rounded-full hover:bg-gold transition-all duration-500 hover:shadow-[0_8px_30px_-8px_rgba(212,175,55,0.4)]"
          >
            Visit INSIDE
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#corporate"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-charcoal border border-gray-200 rounded-full hover:border-gold hover:text-gold transition-all duration-500"
          >
            Company Info
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
