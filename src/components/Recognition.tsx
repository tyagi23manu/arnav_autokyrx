import { useReveal } from '../hooks/useReveal';
import { Globe, Zap, Award } from 'lucide-react';

const recognitions = [
  {
    icon: Globe,
    badge: 'Web Summit',
    title: 'Web Summit Lisbon 2026',
    description:
      "Invited to exhibit at the world's largest and most influential technology conference with 70,000+ attendees from 160+ countries.",
  },
  {
    icon: Zap,
    badge: 'DeveloperWeek',
    title: 'DeveloperWeek New York 2026',
    description:
      "Selected for AI Startup Alley — a curated showcase of the top emerging AI startups at one of the world's largest developer conferences.",
  },
  {
    icon: Award,
    badge: 'Global Startup Awards',
    title: 'Nominated for Global Startup Awards',
    description:
      'Nominated for the Global Startup Awards 2026, celebrating the region\'s most promising technology builders and disruptors.',
  },
];

export function Recognition() {
  const headerRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="recognized"
      className="py-24 md:py-32 bg-white"
      aria-label="Recognition"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="reveal-up text-center mb-16">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold mb-4">
            Recognition
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-[-0.02em] text-charcoal">
            Global Stage
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {recognitions.map((item, i) => {
            const Icon = item.icon;
            const ref = useReveal<HTMLDivElement>();
            return (
              <div
                key={i}
                ref={ref}
                className="reveal-up group rounded-2xl border border-gray-100 bg-white p-8 lg:p-10 hover:border-gold/20 hover:shadow-[0_8px_40px_-12px_rgba(212,175,55,0.1)] transition-all duration-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-gold/5 group-hover:border-gold/20 transition-all duration-500">
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors duration-500" />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-300 group-hover:text-gold/50 transition-colors duration-500">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-charcoal mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
