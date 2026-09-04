import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navItems = [
    { label: 'Products', href: '#products' },
    { label: 'Technology', href: '#technology' },
    { label: 'Company', href: '#corporate' },
    { label: 'Vision', href: '#vision' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-2xl border-b border-black/[0.04]'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <a
              href="/"
              className="relative z-[60] flex items-center gap-2"
              aria-label="Autokryx Technologies Home"
            >
              <span className="text-[17px] font-black tracking-[-0.01em] text-charcoal">
                AUTO<span className="text-gold">KRYX</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-[13px] font-medium text-gray-500 hover:text-charcoal transition-colors duration-300 rounded-full hover:bg-gray-50"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 inline-flex items-center px-5 py-2 text-[13px] font-semibold text-white bg-charcoal rounded-full hover:bg-gold transition-all duration-500"
              >
                Contact
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="relative z-[60] md:hidden w-10 h-10 flex items-center justify-center text-charcoal rounded-full hover:bg-gray-50 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-white/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          mobileOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="pt-28 pb-8 px-8 h-full flex flex-col">
          <nav className="flex-1" aria-label="Mobile navigation">
            {navItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-2xl font-bold text-charcoal py-4 border-b border-gray-100 hover:text-gold transition-colors duration-300"
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateY(0)' : 'translateY(10px)',
                  transition: `opacity 0.4s ease ${i * 60 + 200}ms, transform 0.4s ease ${i * 60 + 200}ms, color 0.3s ease`,
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-6 inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white bg-charcoal rounded-full hover:bg-gold transition-all duration-500"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transition: 'opacity 0.4s ease 500ms',
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
