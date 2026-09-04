import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 md:pt-20 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="text-lg font-black tracking-tight">
              AUTO<span className="text-gold">KRYX</span>
            </span>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-xs">
              Consumer technology infrastructure for India.
              Building products that serve one billion people.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-600 mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://getinside.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gold transition-colors duration-300"
                >
                  INSIDE
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-gray-500 hover:text-gold transition-colors duration-300">
                  KRYX
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-gray-500 hover:text-gold transition-colors duration-300">
                  NEXUS
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-gray-500 hover:text-gold transition-colors duration-300">
                  VAULT
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-600 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-gray-500">Delhi NCR · India</li>
              <li className="text-sm text-gray-500">CIN: U62012UW2026PTC250543</li>
              <li className="text-sm text-gray-500">MCA · Government of India</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-600 mb-5">
              Registration
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-gray-500">Private Limited Company</li>
              <li className="text-sm text-gray-500">Companies Act, 2013</li>
              <li className="text-sm text-gray-500">NIC 62012 · Information Technology</li>
              <li className="text-sm text-gray-500">Active · Fully Compliant</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Autokryx Technologies Private Limited. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            Registered under Companies Act, 2013 — India
          </p>
        </div>
      </div>
    </footer>
  );
}
