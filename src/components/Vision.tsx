import { useReveal } from '../hooks/useReveal';
import { MapPin } from 'lucide-react';

const phases = [
  {
    numeral: 'I',
    title: 'Delhi NCR · Product-Market Fit',
    description:
      'Controlled launch of INSIDE across select NCR institutions. Proving the model, refining the platform, building the playbook.',
    timeline: 'Active · 2026',
    active: true,
  },
  {
    numeral: 'II',
    title: 'North India · Network Expansion',
    description:
      'Scaling the proven playbook across UP, Haryana, Rajasthan, and Punjab. First 100+ institutions. First 1M verified users.',
    timeline: '2026–27',
    active: false,
  },
  {
    numeral: 'III',
    title: 'National · Platform Dominance',
    description:
      'Full national rollout. INSIDE becomes the default social infrastructure of Indian campus life. KRYX and NEXUS enter beta.',
    timeline: '2027',
    active: false,
  },
  {
    numeral: 'IV',
    title: 'Consumer Tech Conglomerate',
    description:
      "Multiple product verticals operating at scale. Autokryx as India's definitive consumer technology infrastructure company.",
    timeline: 'Vision',
    active: false,
  },
];

export function Vision() {
  const headerRef = useReveal<HTMLDivElement>();
  const timelineRef = useReveal<HTMLDivElement>();
  const mapRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="vision"
      className="py-24 md:py-36 bg-gray-50"
      aria-label="Vision & Roadmap"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="reveal-up text-center mb-16 md:mb-20">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold mb-4">
            Roadmap
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-[-0.02em] text-charcoal">
            Vision & Trajectory
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Timeline */}
          <div ref={timelineRef} className="reveal-up lg:col-span-3 relative" style={{ transitionDelay: '0.1s' }}>
            {/* Vertical line */}
            <div className="absolute left-[9px] top-6 bottom-6 w-px bg-gray-200" />

            <div className="space-y-0">
              {phases.map((phase, i) => (
                <div key={i} className="relative pl-10 pb-10 last:pb-0 group">
                  {/* Node */}
                  <div
                    className={`absolute left-0 top-1.5 w-[18px] h-[18px] rounded-full border-2 transition-all duration-500 ${
                      phase.active
                        ? 'bg-gold border-gold shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                        : 'bg-white border-gray-200 group-hover:border-gold/40'
                    }`}
                  />

                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-xs font-black text-gray-200 select-none">
                      {phase.numeral}
                    </span>
                    <span
                      className={`text-[10px] font-bold tracking-[0.15em] uppercase ${
                        phase.active ? 'text-gold' : 'text-gray-400'
                      }`}
                    >
                      {phase.timeline}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-[1.7] max-w-md">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Location Card */}
          <div ref={mapRef} className="reveal-up lg:col-span-2 flex items-start" style={{ transitionDelay: '0.2s' }}>
            <div className="w-full bg-white rounded-2xl border border-gray-100 p-10 md:p-12 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gold/5 border border-gold/10 flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-black text-charcoal mb-1.5 tracking-tight">
                Delhi NCR
              </h3>
              <p className="text-sm text-gray-400 font-medium">Origin Point · India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
