export function Marquee() {
  const items = [
    'Consumer Technology',
    'Social Infrastructure',
    'Identity Platforms',
    'Commerce Technology',
    'Campus Networks',
    'CIN: U62012UW2026PTC250543',
    'MCA · Government of India',
    'Delhi NCR · India',
  ];

  return (
    <div className="w-full overflow-hidden py-5 bg-gray-50 border-y border-gray-100" aria-hidden="true">
      <div className="marquee-track flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center mx-8 md:mx-10 text-[11px] font-semibold text-gray-400 tracking-[0.15em] uppercase"
          >
            <span className="w-1 h-1 rounded-full bg-gold/50 mr-4 shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
