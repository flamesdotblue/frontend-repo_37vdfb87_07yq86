import { useEffect, useState } from 'react';
import { Cloud, ShieldCheck, Wrench, LineChart, Bot, LayoutDashboard, BadgeCheck } from 'lucide-react';
import DetailPage from './DetailPage';

const SERVICES = [
  { key: 'dx', name: 'Digital Transformation', icon: LayoutDashboard, desc: 'Strategy to execution for customer, employee, and partner journeys.' },
  { key: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, desc: 'Cloud migration, platform engineering, SRE, and FinOps.' },
  { key: 'data', name: 'Data, AI & Analytics', icon: LineChart, desc: 'Modern data platforms, MLOps, and applied AI use-cases.' },
  { key: 'apps', name: 'Enterprise Applications (ERP/CRM)', icon: Wrench, desc: 'Implementation, integration, and modernization of core systems.' },
  { key: 'prod', name: 'Product Engineering', icon: Bot, desc: 'Full-cycle product development, APIs, and platform capabilities.' },
  { key: 'sec', name: 'Cybersecurity', icon: ShieldCheck, desc: 'Zero-trust, DevSecOps, governance, risk, and compliance.' },
  { key: 'qe', name: 'Quality Engineering', icon: BadgeCheck, desc: 'Automation, performance, and continuous quality.' },
];

const SERVICE_DETAILS = {
  dx: [
    'Blueprint business capabilities and KPIs that matter',
    'Design service maps and experience-led processes',
    'Operate a transformation PMO with measurable outcomes',
  ],
  cloud: [
    'Landing zones, Kubernetes platforms, and platform as a product',
    'Modernization: rehost, replatform, refactor with guardrails',
    'Observability, reliability SLOs, and cost optimization',
  ],
  data: [
    'Data mesh/lakehouse architectures and governance',
    'Feature stores, MLOps, and responsible AI patterns',
    'Real-time analytics and decisioning at scale',
  ],
  apps: [
    'ERP/CRM implementations and integrations',
    'Composable architectures and event-driven patterns',
    'Change management, training, and adoption',
  ],
  prod: [
    'API-first product architectures and developer platforms',
    'SaaS multi-tenancy, billing, and marketplace enablement',
    'Performance engineering and ongoing SRE',
  ],
  sec: [
    'Security by design, threat modeling, and SBOMs',
    'IAM, secrets management, and policy-as-code',
    'Security operations and continuous compliance',
  ],
  qe: [
    'Shift-left automation and contract testing',
    'Non-functional testing: performance, security, accessibility',
    'Quality gates integrated into CI/CD pipelines',
  ],
};

export default function Services() {
  const [active, setActive] = useState('dx');
  const [detailSlug, setDetailSlug] = useState(null);

  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.replace('#', '');
      const parts = hash.split('/').filter(Boolean);
      if (parts[0] === 'service' && parts[1]) return setDetailSlug(parts[1]);
      setDetailSlug(null);
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  const openDetail = (slug) => {
    window.location.hash = `#/service/${slug}`;
  };

  const closeDetail = () => {
    window.location.hash = '#services';
  };

  return (
    <section id="services" className="relative scroll-mt-20 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Services</h2>
            <p className="mt-3 text-zinc-600 max-w-2xl">From strategy to platform engineering, we partner with you to ship outcomes — securely and at scale.</p>
          </div>
          <a href="#impact" className="hidden sm:inline-flex items-center rounded-lg border border-zinc-300 px-4 py-2 text-sm text-zinc-800 hover:bg-white">See our impact</a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SERVICES.map(({ key, name, icon: Icon, desc }) => (
              <div
                key={key}
                className={`flex items-start gap-3 rounded-xl border p-4 text-left transition hover:shadow-sm ${
                  active === key ? 'border-zinc-900 bg-white' : 'border-zinc-200 bg-white'
                }`}
              >
                <Icon className="mt-0.5 text-zinc-900" size={20} />
                <div>
                  <div className="font-medium text-zinc-900">{name}</div>
                  <div className="text-sm text-zinc-600">{desc}</div>
                  <div className="mt-3 flex gap-2">
                    <button onClick={() => setActive(key)} className="text-sm text-zinc-800 underline-offset-2 hover:underline">Overview</button>
                    <button onClick={() => openDetail(key)} className="text-sm text-zinc-800 underline-offset-2 hover:underline">View details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-zinc-900">What we deliver</h3>
            <ul className="mt-4 space-y-2 text-zinc-700 list-disc pl-5">
              {SERVICE_DETAILS[active].map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <a href="#contact" className="mt-6 inline-flex items-center rounded-lg bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800">Discuss your roadmap</a>
          </div>
        </div>
      </div>

      <div id="impact" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-semibold text-zinc-900">Discover our impact</h2>
          <p className="mt-2 text-zinc-600 max-w-2xl">A snapshot of outcomes we have enabled across industries.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{
              title: 'Payments platform modernization',
              result: '30% lower cost-to-serve and 5x release frequency',
            }, {
              title: 'AI-powered demand forecasting',
              result: '85% forecast accuracy and 12% inventory reduction',
            }, {
              title: 'Cloud migration and SRE',
              result: '99.95% reliability with 40% infra savings',
            }].map((c) => (
              <div key={c.title} className="rounded-xl border border-zinc-200 p-5 bg-gradient-to-b from-white to-zinc-50">
                <div className="text-sm font-medium text-zinc-500">Case study</div>
                <div className="mt-1 text-zinc-900 font-semibold">{c.title}</div>
                <div className="mt-2 text-zinc-700">{c.result}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {detailSlug && (
        <DetailPage type="service" slug={detailSlug} onClose={closeDetail} />
      )}
    </section>
  );
}
