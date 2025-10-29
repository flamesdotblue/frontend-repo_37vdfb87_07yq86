import { useState } from 'react';
import { Building2, HeartPulse, Factory, ShoppingBag, Banknote, Radio, Hotel, Shield, Cpu } from 'lucide-react';

const INDUSTRIES = [
  { key: 'bfs', name: 'Banking & Financial Services', icon: Banknote, blurb: 'Digital core modernization, payments, risk & compliance.' },
  { key: 'ins', name: 'Insurance', icon: Shield, blurb: 'Policy admin, claims transformation, and intelligent underwriting.' },
  { key: 'hls', name: 'Healthcare & Life Sciences', icon: HeartPulse, blurb: 'Connected care, data interoperability, and regulatory-grade platforms.' },
  { key: 'mfg', name: 'Manufacturing', icon: Factory, blurb: 'Smart factories, supply chain visibility, and product lifecycle platforms.' },
  { key: 'ret', name: 'Retail & eCommerce', icon: ShoppingBag, blurb: 'Unified commerce, personalization, and last-mile excellence.' },
  { key: 'ps', name: 'Public Sector', icon: Building2, blurb: 'Citizen services, secure digital identity, and mission systems.' },
  { key: 'tmt', name: 'Telecom & Media', icon: Radio, blurb: '5G/edge platforms, media workflows, and monetization.' },
  { key: 'trv', name: 'Travel & Hospitality', icon: Hotel, blurb: 'Guest experience, reservations, and revenue management.' },
  { key: 'tech', name: 'High Tech', icon: Cpu, blurb: 'SaaS, platform engineering, and developer experience.' },
];

const DETAILS = {
  bfs: {
    headline: 'Modern, compliant, and data-driven banking',
    points: [
      'Core banking and payments modernization (ISO 20022, UPI, card rails)',
      'Risk and compliance: KYC/AML, data lineage and governance',
      'Customer 360, personalization, and next-best actions powered by AI',
    ],
  },
  ins: {
    headline: 'Reimagine underwriting and claims',
    points: [
      'Policy administration modernization and straight-through processing',
      'AI-powered FNOL, subrogation, and fraud analytics',
      'Omnichannel broker/agent experiences',
    ],
  },
  hls: {
    headline: 'Connected, secure, and interoperable health',
    points: [
      'FHIR/HL7 interoperability and data platforms',
      'Remote patient monitoring and care pathways',
      'GxP validation and regulatory-grade systems',
    ],
  },
  mfg: {
    headline: 'Digitally enabled, resilient manufacturing',
    points: [
      'Predictive maintenance and digital twins',
      'MES/PLM integration and connected worker solutions',
      'Demand sensing and supply chain control towers',
    ],
  },
  ret: {
    headline: 'Experience-led retail and unified commerce',
    points: [
      'Composable commerce and headless architectures',
      'Real-time inventory, last-mile, and returns optimization',
      'Loyalty, CDP, and personalization at scale',
    ],
  },
  ps: {
    headline: 'Citizen-first digital public services',
    points: [
      'Digital identity and secure access',
      'Benefits and licensing portals with omni-channel support',
      'Open data and transparency platforms',
    ],
  },
  tmt: {
    headline: 'Monetize networks and content',
    points: [
      '5G/edge orchestration and OSS/BSS modernization',
      'Content supply chains and streaming analytics',
      'Partner ecosystems and marketplace enablement',
    ],
  },
  trv: {
    headline: 'Guest-centric travel experiences',
    points: [
      'Next-gen reservations, CRM, and revenue management',
      'Operations command centers and disruption recovery',
      'Personalized offers and ancillary revenue',
    ],
  },
  tech: {
    headline: 'Build and scale product-led platforms',
    points: [
      'Platform/SaaS engineering and SRE',
      'Developer experience, CI/CD, and FinOps',
      'Security by design and zero-trust architectures',
    ],
  },
};

export default function Industries() {
  const [active, setActive] = useState('bfs');

  return (
    <section id="industries" className="relative scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-stretch">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Select your industry</h2>
            <p className="mt-3 text-zinc-600">Discover tailored solutions engineered to your regulatory, operational, and customer contexts.</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INDUSTRIES.map(({ key, name, icon: Icon, blurb }) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`flex items-start gap-3 rounded-xl border p-4 text-left transition hover:shadow-sm ${
                    active === key ? 'border-zinc-900 bg-zinc-50' : 'border-zinc-200'
                  }`}
                >
                  <Icon className="mt-0.5 text-zinc-900" size={20} />
                  <div>
                    <div className="font-medium text-zinc-900">{name}</div>
                    <div className="text-sm text-zinc-600">{blurb}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="sticky top-24 rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900">{DETAILS[active].headline}</h3>
              <ul className="mt-4 space-y-2 text-zinc-700 list-disc pl-5">
                {DETAILS[active].points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center rounded-lg bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800">Talk to an expert</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
