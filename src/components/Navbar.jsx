import { useState } from 'react';
import { ChevronDown, Menu, X, Mail, Phone, Linkedin } from 'lucide-react';

const industries = [
  'Banking & Financial Services',
  'Insurance',
  'Healthcare & Life Sciences',
  'Manufacturing',
  'Retail & eCommerce',
  'Energy & Utilities',
  'Telecom & Media',
  'Travel & Hospitality',
  'Public Sector',
];

const services = [
  'Digital Transformation',
  'Cloud & Infrastructure',
  'Data, AI & Analytics',
  'Enterprise Applications (ERP/CRM)',
  'Product Engineering',
  'Cybersecurity',
  'Quality Engineering',
  'Consulting & Strategy',
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-zinc-900">
            <span className="inline-block h-8 w-8 rounded bg-gradient-to-tr from-indigo-600 to-cyan-400" />
            <span>GrowthArise</span>
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu('industries')}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="inline-flex items-center gap-1 text-zinc-700 hover:text-zinc-900">
                Industries <ChevronDown size={16} />
              </button>
              {openMenu === 'industries' && (
                <div className="absolute left-0 mt-3 w-[640px] rounded-xl border border-zinc-200 bg-white shadow-xl">
                  <div className="grid grid-cols-2 gap-3 p-4">
                    {industries.map((item) => (
                      <a
                        key={item}
                        href="#industries"
                        className="rounded-lg p-3 hover:bg-zinc-50 text-zinc-800"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setOpenMenu('services')}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="inline-flex items-center gap-1 text-zinc-700 hover:text-zinc-900">
                Services <ChevronDown size={16} />
              </button>
              {openMenu === 'services' && (
                <div className="absolute left-0 mt-3 w-[640px] rounded-xl border border-zinc-200 bg-white shadow-xl">
                  <div className="grid grid-cols-2 gap-3 p-4">
                    {services.map((item) => (
                      <a
                        key={item}
                        href="#services"
                        className="rounded-lg p-3 hover:bg-zinc-50 text-zinc-800"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#impact" className="text-zinc-700 hover:text-zinc-900">Impact</a>
            <a href="#contact" className="text-zinc-700 hover:text-zinc-900">Contact</a>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-1.5 text-sm text-zinc-800 hover:bg-zinc-50">
              <Mail size={16} /> Contact us
            </a>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-4">
            <details>
              <summary className="flex items-center justify-between cursor-pointer text-zinc-800">Industries</summary>
              <div className="mt-2 grid grid-cols-1 gap-2">
                {industries.map((i) => (
                  <a key={i} href="#industries" className="block rounded p-2 hover:bg-zinc-50">{i}</a>
                ))}
              </div>
            </details>
            <details>
              <summary className="flex items-center justify-between cursor-pointer text-zinc-800">Services</summary>
              <div className="mt-2 grid grid-cols-1 gap-2">
                {services.map((s) => (
                  <a key={s} href="#services" className="block rounded p-2 hover:bg-zinc-50">{s}</a>
                ))}
              </div>
            </details>
            <a href="#impact" className="block">Impact</a>
            <a href="#contact" className="block">Contact</a>
            <div className="flex items-center gap-4 pt-3 text-sm text-zinc-600">
              <span className="inline-flex items-center gap-1"><Phone size={16}/> +91 00000 00000</span>
              <a href="mailto:hello@growtharise.com" className="inline-flex items-center gap-1"><Mail size={16}/> hello@growtharise.com</a>
              <a href="https://www.linkedin.com/company/growtharise" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1"><Linkedin size={16}/> LinkedIn</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
