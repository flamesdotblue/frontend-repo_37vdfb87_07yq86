import { X, ArrowLeft, CheckCircle2 } from 'lucide-react';

const INDUSTRY_CONTENT = {
  bfs: {
    title: 'Banking & Financial Services',
    intro:
      'We modernize banking with compliant, secure, and data-driven platforms across core, payments, and digital channels.',
    capabilities: [
      'Core banking and cards modernization (ISO 20022, UPI, RTP)',
      'Digital channels and super-app experiences',
      'Risk, compliance, and data governance',
      'Fraud analytics and AML/KYC automation',
    ],
    outcomes: [
      '30% lower cost-to-serve by platform consolidation',
      '5x faster releases via DevSecOps and SRE',
      'Improved risk posture with data lineage and policy-as-code',
    ],
    cases: [
      {
        name: 'Payments modernization',
        result: 'Migrated to cloud-native rails; cut settlement time by 70%.'
      },
      { name: 'Credit decisioning', result: 'AI models improved approval accuracy by 18%.' },
    ],
    tech: ['Kubernetes', 'Kafka', 'Snowflake', 'dbt', 'Databricks', 'Vault', 'Open Policy Agent'],
  },
  ins: {
    title: 'Insurance',
    intro:
      'Digitize underwriting, claims, and servicing with straight-through processing and AI-led operations.',
    capabilities: [
      'Policy administration modernization',
      'AI-powered FNOL and subrogation',
      'Omnichannel broker/agent portals',
      'Data platforms and regulatory reporting',
    ],
    outcomes: [
      '25% faster claims cycle time',
      'Reduced leakage with automated fraud detection',
      'Increased broker productivity with unified portals',
    ],
    cases: [
      { name: 'Claims automation', result: 'Digitized FNOL; reduced manual effort by 40%.' },
      { name: 'Underwriting AI', result: 'Risk scoring cut loss ratios by 6%.' },
    ],
    tech: ['Guidewire', 'Kafka', 'Azure AI', 'Airflow', 'S3', 'dbt'],
  },
  hls: {
    title: 'Healthcare & Life Sciences',
    intro:
      'Enable connected care, interoperability, and regulatory-grade platforms across the value chain.',
    capabilities: [
      'FHIR/HL7 interoperability',
      'Remote patient monitoring',
      'GxP validation and quality systems',
      'Commercial analytics and patient 360',
    ],
    outcomes: [
      'Secure data exchange across providers and payers',
      'Improved adherence via remote monitoring',
      'Audit-ready systems with governed data',
    ],
    cases: [
      { name: 'Interoperability hub', result: 'Cut onboarding from weeks to days.' },
      { name: 'RPM platform', result: 'Reduced readmissions by 9%.' },
    ],
    tech: ['FHIR servers', 'HL7', 'Snowflake', 'Databricks', 'FHIRworks', 'Azure'],
  },
  mfg: {
    title: 'Manufacturing',
    intro:
      'Improve resilience with smart factories, digital twins, and connected supply chains.',
    capabilities: [
      'MES/PLM integration',
      'Predictive maintenance and IIoT',
      'Digital twins and quality analytics',
      'Supply chain control towers',
    ],
    outcomes: [
      '12% reduction in downtime',
      'Better OEE through predictive insights',
      'End-to-end visibility and faster cycle times',
    ],
    cases: [
      { name: 'IIoT analytics', result: 'Predictive maintenance cut failures by 22%.' },
      { name: 'Control tower', result: 'Lead time reduced by 15% globally.' },
    ],
    tech: ['Azure IoT', 'TimescaleDB', 'Databricks', 'Grafana', 'Kubernetes'],
  },
  ret: {
    title: 'Retail & eCommerce',
    intro:
      'Create unified commerce with real-time inventory, personalization, and last-mile excellence.',
    capabilities: [
      'Composable commerce and headless storefronts',
      'CDP, loyalty, and personalization',
      'OMS and last-mile optimization',
      'Returns, exchanges, and post-purchase CX',
    ],
    outcomes: [
      'Uplift in AOV and conversion with tailored experiences',
      'Lower logistics costs with optimized fulfillment',
      'Reduced returns and improved CSAT',
    ],
    cases: [
      { name: 'Unified inventory', result: 'Stock-outs reduced by 35%.' },
      { name: 'Personalization', result: '+18% CTR and +7% revenue per session.' },
    ],
    tech: ['Next.js', 'Medusa/Shopify', 'Segment', 'Snowflake', 'Airflow'],
  },
  ps: {
    title: 'Public Sector',
    intro:
      'Citizen-first digital services with secure identity and scalable platforms.',
    capabilities: [
      'Digital identity and access',
      'Benefits/licensing portals',
      'Open data and transparency',
      'Cybersecurity and zero-trust',
    ],
    outcomes: [
      'Faster benefits processing and reduced backlog',
      'Higher adoption via mobile-first experiences',
      'Strengthened security posture',
    ],
    cases: [
      { name: 'Citizen portal', result: 'Self-service usage up 3x.' },
      { name: 'Open data platform', result: 'Transparency compliance improved.' },
    ],
    tech: ['Keycloak', 'Kubernetes', 'PostgreSQL', 'OPA', 'Grafana', 'S3'],
  },
  tmt: {
    title: 'Telecom & Media',
    intro:
      'Monetize networks and content with edge, analytics, and streamlined media workflows.',
    capabilities: [
      '5G/edge orchestration',
      'OSS/BSS modernization',
      'Content supply chains',
      'Streaming analytics',
    ],
    outcomes: [
      'New revenue streams via partner ecosystems',
      'Lower time-to-market for offers',
      'Operational efficiency through automation',
    ],
    cases: [
      { name: 'Edge platform', result: 'Launched marketplace; partners onboarded 10x faster.' },
      { name: 'Media workflows', result: 'Encoding costs down 20%.' },
    ],
    tech: ['Kubernetes', 'Kafka', 'Spark', 'Object storage', 'Argo'],
  },
  trv: {
    title: 'Travel & Hospitality',
    intro:
      'Reinvent guest experiences and operations with modern reservations and CRM.',
    capabilities: [
      'Reservations and CRS modernization',
      'Guest 360 and offer personalization',
      'Ops command centers and disruption recovery',
      'Revenue management and pricing',
    ],
    outcomes: [
      'Higher ancillary revenue with targeted offers',
      'Reduced disruption impact with automation',
      'Improved NPS through service recovery',
    ],
    cases: [
      { name: 'Personalized offers', result: '+11% ancillary revenue.' },
      { name: 'Ops command center', result: 'On-time performance up 6%.' },
    ],
    tech: ['Kafka', 'Snowflake', 'dbt', 'Airflow', 'React', 'K8s'],
  },
  tech: {
    title: 'High Tech',
    intro:
      'Engineer product-led platforms with robust developer experience and SRE.',
    capabilities: [
      'SaaS multi-tenancy and billing',
      'API-first platforms and marketplaces',
      'Developer portals and golden paths',
      'Observability and reliability engineering',
    ],
    outcomes: [
      'Faster developer onboarding and velocity',
      'Lower infra costs via FinOps guardrails',
      'Higher reliability with SLOs and error budgets',
    ],
    cases: [
      { name: 'Platform as a product', result: 'Lead time reduced by 40%.' },
      { name: 'DX portal', result: 'Onboarding time cut from weeks to days.' },
    ],
    tech: ['Backstage', 'Terraform', 'ArgoCD', 'Prometheus', 'Grafana'],
  },
};

const SERVICE_CONTENT = {
  dx: {
    title: 'Digital Transformation',
    intro:
      'From strategy through operating model change, we drive measurable business outcomes.',
    capabilities: [
      'Capability maps and KPI blueprints',
      'Service design and process reimagining',
      'Transformation PMO and value tracking',
    ],
    outcomes: [
      'Aligned initiatives to north-star KPIs',
      'Faster time-to-value with incremental delivery',
      'Greater adoption via change management',
    ],
    cases: [
      { name: 'Service redesign', result: 'NPS improved by 14 points.' },
      { name: 'Operating model', result: 'Cycle time down 25%.' },
    ],
    tech: ['Figma', 'Jira', 'Confluence', 'Miro'],
  },
  cloud: {
    title: 'Cloud & Infrastructure',
    intro:
      'Platform engineering with security and reliability built-in.',
    capabilities: [
      'Landing zones and multi-cloud architecture',
      'Kubernetes platforms and golden paths',
      'SRE, observability, and FinOps',
    ],
    outcomes: [
      '99.95%+ reliability targets achieved',
      '40% infrastructure cost optimization',
      'Faster, safer releases with paved roads',
    ],
    cases: [
      { name: 'Cloud migration', result: '500+ apps replatformed with guardrails.' },
      { name: 'SRE adoption', result: 'MTTR improved by 35%.' },
    ],
    tech: ['AWS/Azure/GCP', 'Terraform', 'Istio', 'Argo', 'Prometheus', 'Grafana'],
  },
  data: {
    title: 'Data, AI & Analytics',
    intro:
      'Modern data platforms and applied AI with MLOps and governance.',
    capabilities: [
      'Lakehouse and data mesh architectures',
      'MLOps, feature stores, and model governance',
      'Real-time analytics and decisioning',
    ],
    outcomes: [
      'Single source of truth and lineage',
      'Operationalized AI with reliable deployment',
      'Faster insights and actions at scale',
    ],
    cases: [
      { name: 'Forecasting', result: '85% forecast accuracy across SKUs.' },
      { name: 'Customer 360', result: 'Activation increased by 20%.' },
    ],
    tech: ['Snowflake', 'Databricks', 'dbt', 'Airflow', 'SageMaker', 'Vertex AI'],
  },
  apps: {
    title: 'Enterprise Applications (ERP/CRM)',
    intro:
      'Implement, integrate, and modernize core systems with measurable adoption.',
    capabilities: [
      'ERP/CRM implementations and integrations',
      'Composable architectures and event-driven patterns',
      'Change management and training',
    ],
    outcomes: [
      'Higher user adoption and data quality',
      'Lower technical debt via modernization',
      'Faster process cycles with automation',
    ],
    cases: [
      { name: 'CRM rollout', result: 'Sales cycle time down 18%.' },
      { name: 'ERP modernization', result: 'Inventory accuracy up 12%.' },
    ],
    tech: ['SAP', 'Salesforce', 'MuleSoft', 'Kafka', 'PostgreSQL'],
  },
  prod: {
    title: 'Product Engineering',
    intro:
      'End-to-end product development for scalable, API-first platforms.',
    capabilities: [
      'API design and platform capabilities',
      'Cross-functional squads and discovery',
      'Performance engineering and SRE',
    ],
    outcomes: [
      'Faster roadmap delivery and quality',
      'Better developer experience and reuse',
      'Scalable platforms with clear SLAs',
    ],
    cases: [
      { name: 'API platform', result: 'Time-to-integrate cut by 60%.' },
      { name: 'Mobile app', result: 'Crash-free sessions at 99.9%.' },
    ],
    tech: ['Node.js', 'Go', 'PostgreSQL', 'Redis', 'Kubernetes'],
  },
  sec: {
    title: 'Cybersecurity',
    intro:
      'Zero-trust architectures, DevSecOps, and continuous compliance.',
    capabilities: [
      'Threat modeling and SBOMs',
      'IAM and secrets management',
      'Policy-as-code and compliance automation',
    ],
    outcomes: [
      'Reduced vulnerabilities and faster remediation',
      'Least-privilege access with auditability',
      'Proactive security with guardrails',
    ],
    cases: [
      { name: 'DevSecOps', result: 'Vuln fix time reduced by 50%.' },
      { name: 'IAM rollout', result: 'Privileged access risks mitigated.' },
    ],
    tech: ['Vault', 'OPA', 'Falco', 'OpenID', 'WAF'],
  },
  qe: {
    title: 'Quality Engineering',
    intro:
      'Automation-first, continuous quality embedded in delivery pipelines.',
    capabilities: [
      'Shift-left automation and contract testing',
      'Performance and security testing',
      'Quality gates in CI/CD',
    ],
    outcomes: [
      'Fewer defects in production',
      'Higher reliability and confidence',
      'Faster, safer releases',
    ],
    cases: [
      { name: 'Automation suite', result: 'Regression time down 70%.' },
      { name: 'Perf testing', result: 'Throughput up 2x under load.' },
    ],
    tech: ['Playwright', 'k6', 'OWASP ZAP', 'GitHub Actions'],
  },
};

export default function DetailPage({ type, slug, onClose }) {
  const content = type === 'industry' ? INDUSTRY_CONTENT[slug] : SERVICE_CONTENT[slug];
  if (!content) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-white overflow-y-auto">
      <div className="sticky top-0 z-[61] border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={onClose} className="inline-flex items-center gap-2 text-zinc-800 hover:underline">
            <ArrowLeft size={18} /> Back
          </button>
          <button onClick={onClose} className="rounded-md p-2 text-zinc-600 hover:bg-zinc-100" aria-label="Close"><X /></button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{content.title}</h1>
        <p className="mt-3 text-lg text-zinc-700 max-w-3xl">{content.intro}</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h2 className="text-xl font-semibold">Capabilities</h2>
              <ul className="mt-3 space-y-2">
                {content.capabilities.map((c) => (
                  <li key={c} className="inline-flex items-start gap-2 text-zinc-700"><CheckCircle2 className="mt-0.5 text-zinc-900" size={18} /> {c}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h2 className="text-xl font-semibold">Case studies</h2>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.cases.map((cs) => (
                  <div key={cs.name} className="rounded-xl border border-zinc-200 p-4 bg-gradient-to-b from-white to-zinc-50">
                    <div className="text-sm font-medium text-zinc-500">{cs.name}</div>
                    <div className="mt-1 text-zinc-800">{cs.result}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Technologies</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {content.tech.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm">{t}</span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Outcomes</h3>
              <ul className="mt-3 list-disc pl-5 text-zinc-700 space-y-1">
                {content.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
              <a href="#contact" onClick={onClose} className="mt-5 inline-flex items-center rounded-lg bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800">Talk to an expert</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
