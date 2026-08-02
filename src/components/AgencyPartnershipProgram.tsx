import React, { useState } from 'react';
import { 
  Building, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  TrendingUp, 
  Award, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Lock, 
  Terminal, 
  Slack, 
  FileText, 
  Clock, 
  DollarSign, 
  Layers, 
  Check, 
  HelpCircle,
  Briefcase,
  Code2,
  Share2,
  Server,
  Activity,
  Download,
  PhoneCall
} from 'lucide-react';

interface AgencyPartnershipProgramProps {
  onOpenIntake: (defaultCategory?: string) => void;
}

export const AgencyPartnershipProgram: React.FC<AgencyPartnershipProgramProps> = ({ onOpenIntake }) => {
  // Active Partnership Model Tab
  const [selectedModel, setSelectedModel] = useState<number>(0);
  
  // Interactive Flow Active Step
  const [activeStep, setActiveStep] = useState<number>(0);

  // Agency Growth Calculator State
  const [activeClients, setActiveClients] = useState<number>(12);
  const [avgInfraSpend, setAvgInfraSpend] = useState<number>(2500); // $ per client/mo

  // FAQ Expanded Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Active Capability Filter
  const [activeCapCategory, setActiveCapCategory] = useState<string>('cloud');

  // Partnership Models Data
  const models = [
    {
      id: 'white-label',
      title: 'White-Label Infrastructure Engineering',
      badge: 'MOST POPULAR',
      tagline: 'We operate quietly behind your agency brand name.',
      description: 'Your clients see you as a full-spectrum cloud powerhouse. We provide co-branded architecture diagrams, white-label status pages, and quiet senior execution.',
      fit: 'Agencies managing 5-50+ client retainer accounts seeking recurring margin.',
      outcomes: '35% higher agency retainer margin, 0 hrs dev time spent on server maintenance.',
      features: [
        'Co-branded IaC architecture blueprints & client proposals',
        'White-label Incident & Status Dashboards for your clients',
        'Direct Slack/Teams sync under your agency handle',
        'Guaranteed 15-minute SLA on P1 production issues'
      ]
    },
    {
      id: 'dedicated-team',
      title: 'Dedicated Fractional Infrastructure Division',
      badge: 'ENTERPRISE',
      tagline: 'An embedded pod of Senior SREs & Cloud Architects at a fraction of headcount cost.',
      description: 'Replace the risk and expense of hiring 3-4 full-time DevOps engineers ($600k+/yr). Get instant access to our multi-cloud engineering guild.',
      fit: 'Growing software studios scaling to $3M+ ARR taking on complex cloud builds.',
      outcomes: '$400k+ annual payroll savings, instant security & operational hardening.',
      features: [
        'Dedicated Principal Architect & Lead SRE assigned to your agency',
        'Weekly engineering syncs & roadmap prioritization',
        'Continuous Terraform IaC state management & auditing',
        '24/7/365 active server health and security posture monitoring'
      ]
    },
    {
      id: 'pre-sales',
      title: 'Technical Advisory & Pre-Sales Engineering',
      badge: 'GROWTH ENGINE',
      tagline: 'Win $100k+ enterprise client proposals with an architect on your pitch team.',
      description: 'Don’t turn down large RFP projects due to cloud uncertainty. Our Principal Architect joins client pitch calls as your Head of Cloud Infrastructure.',
      fit: 'Agencies pitching enterprise clients with strict security & SLA requirements.',
      outcomes: '2.4x pitch win-rate on multi-region AWS/GCP cloud RFPs.',
      features: [
        'Expert attendance on client discovery calls & technical defense',
        'Custom high-availability multi-region architecture diagrams',
        'Security posture, encryption standards, and operational documentation',
        'Fixed-price infrastructure estimation for transparent proposal margins'
      ]
    },
    {
      id: 'project-collaboration',
      title: 'Project Collaboration & Complex Migrations',
      badge: 'FIXED SCOPE',
      tagline: 'Zero-downtime database and platform migrations with risk backstop.',
      description: 'Executing a tricky monolith-to-Kubernetes migration or legacy server move? We handle 100% of the migration risk while your devs focus on app code.',
      fit: 'Agencies executing client platform overhauls or cloud transitions.',
      outcomes: '100% zero-downtime track record across 140+ database moves.',
      features: [
        'Detailed step-by-step migration runbook & roll-back plan',
        'Synthetic load testing and staging environment duplication',
        'Live cutover window monitoring with instant roll-back guarantee',
        'Comprehensive post-migration optimization report & knowledge transfer'
      ]
    },
    {
      id: 'managed-ops',
      title: 'Long-Term 24/7 Managed Operations',
      badge: 'RECURRING REVENUE',
      tagline: 'Continuous cloud optimization, patch management, and health monitoring.',
      description: 'Offload post-launch server maintenance completely. Turn one-off project launches into profitable, high-margin monthly client retainers.',
      fit: 'Agencies seeking predictable recurring monthly revenue (MRR).',
      outcomes: 'Turn $0 post-launch into $2k-$10k MRR per client account.',
      features: [
        '24/7/365 automated error detection & human engineer remediation',
        'Monthly cloud cost optimization (FinOps) to prevent bill shock',
        'Automated OS security patching & SSL/TLS certificate rotation',
        'Executive monthly health reports for your client deliverables'
      ]
    },
    {
      id: 'emergency-ops',
      title: 'Emergency Engineering & Outage Response',
      badge: 'RAPID BACKSTOP',
      tagline: 'Instant expert intervention when client servers go down.',
      description: 'When traffic surges or database deadlocks crash client production, our rapid-response SRE team intervenes to restore service in minutes.',
      fit: 'Agencies needing a 24/7 safety net for high-profile client launches.',
      outcomes: 'Sub-4 minute average MTTR (Mean Time to Resolution).',
      features: [
        'Dedicated 24/7 emergency hotline & PagerDuty integration',
        'Root cause analysis (RCA) and post-incident architectural prevention',
        'Real-time traffic rerouting and database pod failover drills',
        'Peace of mind for agency founders and lead developers'
      ]
    }
  ];

  // How It Works Steps
  const steps = [
    {
      number: '01',
      title: 'Agency Identifies Opportunity',
      subtitle: 'New client pitch or existing retainer upgrade',
      description: 'Your agency identifies a client project requiring robust AWS/GCP/Kubernetes infrastructure, high availability, or compliance.',
      icon: Briefcase,
      detail: 'No need to hire. Simply flag the requirement in our shared channel.'
    },
    {
      number: '02',
      title: 'Technical Alignment & Co-Design',
      subtitle: 'Blueprint drafting & cost estimation',
      description: 'Our Principal Architect reviews requirements, drafts a security-hardened Terraform IaC blueprint, and provides a fixed-scope proposal.',
      icon: Cpu,
      detail: 'We join your client call (white-label or co-branded) to present the architecture.'
    },
    {
      number: '03',
      title: 'Infrastructure Engineering',
      subtitle: 'Clean IaC execution to enterprise standards',
      description: 'We build, test, and validate production infrastructure with automated CI/CD deployment pipelines, zero-trust security, and full monitoring.',
      icon: Terminal,
      detail: 'Your developers receive a turn-key staging & production environment.'
    },
    {
      number: '04',
      title: 'Agency Owns Client Relationship',
      subtitle: 'Seamless client interaction & retention',
      description: 'You maintain 100% client relationship ownership. You bill the client directly with your desired retainer markup.',
      icon: Users,
      detail: 'We handle background operations, updates, and 24/7 health SLA.'
    },
    {
      number: '05',
      title: 'Shared Growth & Recurring Revenue',
      subtitle: 'Predictable high-margin expansion',
      description: 'Your agency expands its retainer value, boosts client retention, and wins larger enterprise deals without touching cloud configs.',
      icon: TrendingUp,
      detail: 'Scales linearly as your agency adds more client accounts.'
    }
  ];

  // Capabilities Categories for Explorer
  const capabilityCategories = [
    {
      id: 'cloud',
      label: 'Cloud & IaC',
      items: ['AWS & GCP Multi-Region Architecture', 'Terraform & Pulumi Infrastructure as Code', 'Kubernetes (EKS/GKE) Cluster Management', 'Landing Zones & Zero-Trust IAM Policy']
    },
    {
      id: 'devops',
      label: 'DevOps & CI/CD',
      items: ['GitHub Actions & GitLab Pipeline Automation', 'Docker Containerization & Helm Charts', 'Automated Staging Environment Ephemeral Preview', 'Zero-Downtime Blue/Green Deployments']
    },
    {
      id: 'security',
      label: 'Security & Compliance',
      items: ['Zero-Trust Architecture & Blueprint Hardening', 'WAF & DDoS Mitigation (Cloudflare Enterprise)', 'Secrets Management (HashiCorp Vault / AWS Secrets)', 'Automated Vulnerability Scanning & Patching']
    },
    {
      id: 'monitoring',
      label: '24/7 Observability',
      items: ['Prometheus, Grafana & Datadog Telemetry', 'Synthetic Latency & User Flow Health Checks', 'Automated Failover Drills (Sub-180s MTTR)', 'Monthly Executive FinOps Cost Audit Reports']
    }
  ];

  // Calculated Metrics
  const calculatedMargin = Math.round(activeClients * avgInfraSpend * 0.35);
  const calculatedDevHours = activeClients * 18; // ~18 hours saved per client/mo
  const annualMargin = calculatedMargin * 12;

  // FAQ Items
  const faqs = [
    {
      q: 'How does the white-label partnership work in practice?',
      a: 'We function as your internal cloud engineering department. When communicating with your client, we can join Slack channels or video calls using an @youragency.com email alias or under your brand name. Alternatively, we operate 100% in the background, communicating only with your project leads.'
    },
    {
      q: 'Who owns the cloud accounts and Infrastructure as Code (IaC)?',
      a: 'Your agency or your client owns 100% of all cloud infrastructure accounts, Terraform scripts, and access credentials from day one. We never lock you into proprietary hosting platforms. Everything is clean, documented, and transferable standard code.'
    },
    {
      q: 'How do you handle 3:00 AM production emergencies for our clients?',
      a: 'We run a global 24/7/365 Follow-the-Sun SRE team with automated PagerDuty integration. When a client server or cluster experiences degradation, our automated failover scripts trigger, and a human senior SRE intervenes within 15 minutes, quietly resolving the issue before your client even notices.'
    },
    {
      q: 'What is the pricing model for agency partners?',
      a: 'We offer flexible wholesale agency rates — either flat monthly retainers per client environment, or a predictable revenue-share model. Because we bill you at wholesale rates, agencies typically add a 30% to 50% margin when billing their clients.'
    },
    {
      q: 'Can you assist us during client sales pitches and RFP presentations?',
      a: 'Yes! Pre-sales support is a core benefit of the partnership. Our Principal Infrastructure Architect joins your discovery calls, answers complex security questionnaires, and designs custom architecture diagrams to help you win larger $100k+ deals.'
    },
    {
      q: 'What frameworks and technologies do you support?',
      a: 'We support all modern agency stacks: Next.js/React, Node.js, Python, Go, Laravel/PHP, WordPress Enterprise, Shopify Headless, Ruby on Rails, along with cloud providers AWS, GCP, Azure, Cloudflare, Kubernetes, Docker, and PostgreSQL/MySQL.'
    }
  ];

  return (
    <section id="agency-partnership" className="py-24 bg-[#0A0F1E] text-slate-100 relative overflow-hidden border-t border-slate-800">
      
      {/* Background Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* HERO SECTION                                                              */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-4 pb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-400 text-xs font-mono">
            <Building className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-bold tracking-wider uppercase">STRATEGIC ENGINEERING ALLIANCE</span>
            <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.2 rounded font-sans font-semibold">AGENCY PROGRAM</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-sans leading-[1.15]">
            You build products. <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              We engineer the infrastructure behind them.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Win larger enterprise contracts, deliver bulletproof production stability, and expand recurring retainer margins—without taking on the cost and risk of hiring an internal DevOps team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenIntake('agency')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Apply for Partnership</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#partnership-models"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-emerald-500/50 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <Users className="w-4 h-4 text-emerald-400" />
              <span>Explore Partnership Models</span>
            </a>
          </div>

          {/* Micro Proof Ticker */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-3xl mx-auto bg-[#131A2D]/80 border border-slate-800 p-4 rounded-2xl backdrop-blur-md">
            <div>
              <div className="text-xs font-mono text-slate-400">PARTNER AGENCIES</div>
              <div className="text-xl font-bold text-white font-mono mt-0.5">38+ Studios</div>
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">AVG MARGIN UPLIFT</div>
              <div className="text-xl font-bold text-emerald-400 font-mono mt-0.5">+35% MRR</div>
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">DEV HOURS SAVED</div>
              <div className="text-xl font-bold text-white font-mono mt-0.5">850+ hrs/mo</div>
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">PRODUCTION SLA</div>
              <div className="text-xl font-bold text-blue-400 font-mono mt-0.5">99.999%</div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* WHY AGENCIES PARTNER WITH US (THE FRICTION VS FREEDOM MATRIX)             */}
        {/* ========================================================================= */}
        <div className="py-16 border-t border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase text-emerald-400 bg-slate-900 px-3 py-1 rounded border border-emerald-500/30">
              OPERATIONAL REALITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              Why Top Agencies Stop Doing In-House DevOps
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Building custom software is hard enough. Managing cloud servers, 3:00 AM outages, and complex Kubernetes clusters shouldn’t burn out your development team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Agency Pain */}
            <div className="bg-[#111625] border border-rose-900/30 rounded-2xl p-6 sm:p-8 relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold mb-6">
                ❌ THE IN-HOUSE DEVOPS TRAP
              </div>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold text-base">✕</span>
                  <span><strong>High Headcount Cost:</strong> Full-time Senior SREs cost $180k-$220k/yr each, squeezing agency margins.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold text-base">✕</span>
                  <span><strong>Developer Burnout:</strong> Senior full-stack devs spend 30% of their day fixing Nginx, Docker, or SSL errors instead of coding client features.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold text-base">✕</span>
                  <span><strong>3:00 AM Launch Anxiety:</strong> Outages during major client marketing campaigns lead to frantic late-night calls and lost trust.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-400 font-bold text-base">✕</span>
                  <span><strong>Lost Enterprise RFPs:</strong> Turning down lucrative $100k+ deals because the client requires strict security, multi-region failover, or specialized operational standards.</span>
                </li>
              </ul>
            </div>

            {/* Aetheria Strategic Alliance */}
            <div className="bg-[#111C2E] border border-emerald-500/40 rounded-2xl p-6 sm:p-8 relative shadow-xl shadow-emerald-500/5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold mb-6">
                ✓ THE AETHERIA ALLIANCE ADVANTAGE
              </div>
              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Predictable Wholesale Pricing:</strong> Access a full guild of cloud architects at a fraction of a single hire's cost.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>100% Focus on Code & Design:</strong> Your devs focus exclusively on features, UX, and client satisfaction while we run the backend.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Guaranteed 24/7/365 SLA:</strong> Global Follow-the-Sun monitoring fixes server issues in under 15 minutes before clients notice.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Win Enterprise RFPs:</strong> Bring a Principal Architect into your pitch calls to confidently close complex cloud & compliance deals.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PARTNERSHIP MODELS EXPLORER                                               */}
        {/* ========================================================================= */}
        <div id="partnership-models" className="py-16 border-t border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase text-emerald-400 bg-slate-900 px-3 py-1 rounded border border-emerald-500/30">
              FLEXIBLE ENGAGEMENT ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              Six Tailored Ways We Power Your Agency
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Select the engagement model that matches your current agency size and client retainer structure.
            </p>
          </div>

          {/* Model Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {models.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => setSelectedModel(idx)}
                className={`p-3 rounded-xl text-left transition-all border text-xs font-mono font-semibold cursor-pointer ${
                  selectedModel === idx
                    ? 'bg-slate-800 text-emerald-400 border-emerald-500 shadow-lg'
                    : 'bg-[#131A2D]/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="text-[10px] text-slate-500 font-sans mb-1">MODEL 0{idx + 1}</div>
                <div className="line-clamp-2 leading-tight">{m.title.split(' ')[0]} {m.title.split(' ')[1]}</div>
              </button>
            ))}
          </div>

          {/* Active Model Focus Detail Box */}
          {models[selectedModel] && (
            <div className="bg-[#131A2D] border border-emerald-500/40 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded font-bold">
                      {models[selectedModel].badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">MODEL 0{selectedModel + 1} OF 06</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-2">
                    {models[selectedModel].title}
                  </h3>
                  <p className="text-sm text-emerald-300/90 font-mono mt-1">
                    "{models[selectedModel].tagline}"
                  </p>
                </div>

                <button
                  onClick={() => onOpenIntake('agency')}
                  className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shrink-0 cursor-pointer"
                >
                  Request Model Specs
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {models[selectedModel].description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="bg-[#0A0F1E] p-3.5 rounded-xl border border-slate-800 text-xs">
                      <span className="text-slate-400 font-mono block mb-1">BEST FIT FOR:</span>
                      <span className="text-slate-200 font-medium">{models[selectedModel].fit}</span>
                    </div>
                    <div className="bg-[#0A0F1E] p-3.5 rounded-xl border border-slate-800 text-xs">
                      <span className="text-emerald-400 font-mono block mb-1">BUSINESS OUTCOME:</span>
                      <span className="text-emerald-300 font-semibold">{models[selectedModel].outcomes}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#0A0F1E] p-5 rounded-xl border border-slate-800 space-y-3 font-sans text-xs">
                  <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider block font-bold text-emerald-400">
                    KEY DELIVERABLES & GUARANTEES
                  </span>
                  {models[selectedModel].features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* HOW THE PARTNERSHIP WORKS (INTERACTIVE STEP-BY-STEP FLOW)                 */}
        {/* ========================================================================= */}
        <div className="py-16 border-t border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase text-emerald-400 bg-slate-900 px-3 py-1 rounded border border-emerald-500/30">
              FRICTIONLESS WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              How the Partnership Works in 5 Simple Steps
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              From lead discovery to post-launch maintenance, we integrate cleanly into your existing agency tools without changing your client workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.number}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer relative ${
                    activeStep === idx
                      ? 'bg-[#131A2D] border-emerald-500 shadow-xl shadow-emerald-500/10 scale-105 z-10'
                      : 'bg-[#0A0F1E] border-slate-800 hover:border-slate-700 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                      STEP {s.number}
                    </span>
                    <Icon className="w-4 h-4 text-slate-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{s.title}</h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2">{s.subtitle}</p>
                </div>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Card */}
          {steps[activeStep] && (
            <div className="mt-6 bg-[#131A2D] border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="text-xs font-mono text-emerald-400 uppercase font-semibold">
                  DEEP DIVE: STEP {steps[activeStep].number} — {steps[activeStep].title}
                </div>
                <p className="text-sm text-slate-200">
                  {steps[activeStep].description}
                </p>
                <p className="text-xs text-slate-400 font-mono">
                  💡 <strong>OPERATIONAL DETAIL:</strong> {steps[activeStep].detail}
                </p>
              </div>

              <button
                onClick={() => onOpenIntake('agency')}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-mono text-emerald-300 shrink-0 transition-colors"
              >
                Schedule Step-1 Discovery Call →
              </button>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* AGENCY GROWTH METRICS & REVENUE MARGIN CALCULATOR                         */}
        {/* ========================================================================= */}
        <div className="py-16 border-t border-slate-800">
          <div className="bg-[#111827] border border-emerald-500/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Sliders */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="text-xs font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded font-bold">
                    AGENCY GROWTH & MARGIN CALCULATOR
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                    Calculate Your Agency's Recurring Infrastructure Margin
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2">
                    See how much recurring monthly revenue and saved developer bandwidth your agency unlocks by partnering with Aetheria.
                  </p>
                </div>

                {/* Slider 1: Active Client Retainers */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">ACTIVE CLIENT ACCOUNTS / RETAINERS:</span>
                    <span className="text-emerald-400 font-bold">{activeClients} Clients</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="50"
                    value={activeClients}
                    onChange={(e) => setActiveClients(parseInt(e.target.value))}
                    className="w-full accent-emerald-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>2 Accounts</span>
                    <span>25 Accounts</span>
                    <span>50+ Accounts</span>
                  </div>
                </div>

                {/* Slider 2: Average Monthly Client Cloud Bill */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">AVG MONTHLY INFRASTRUCTURE BILL PER CLIENT:</span>
                    <span className="text-emerald-400 font-bold">${avgInfraSpend.toLocaleString()}/mo</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="250"
                    value={avgInfraSpend}
                    onChange={(e) => setAvgInfraSpend(parseInt(e.target.value))}
                    className="w-full accent-emerald-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>$500/mo</span>
                    <span>$5,000/mo</span>
                    <span>$10,000/mo</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Calculated Outcomes */}
              <div className="lg:col-span-5 bg-[#0B0F17] border border-slate-800 p-8 rounded-2xl space-y-6 text-center">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-slate-400">PROJECTED MONTHLY RECURRING MARGIN</div>
                  <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono">
                    +${calculatedMargin.toLocaleString()} <span className="text-xs font-sans text-slate-400 font-normal">/mo</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono pt-1">
                    (${annualMargin.toLocaleString()} annual added agency revenue)
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800 text-left">
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400">DEV HOURS SAVED</div>
                    <div className="text-lg font-bold text-white font-mono mt-0.5">~{calculatedDevHours} hrs/mo</div>
                  </div>
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                    <div className="text-[10px] font-mono text-slate-400">PRODUCTION SLA</div>
                    <div className="text-lg font-bold text-emerald-400 font-mono mt-0.5">99.999%</div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenIntake('agency')}
                  className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
                >
                  Lock In Agency Wholesale Pricing →
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE CAPABILITY EXPLORER FOR AGENCIES                              */}
        {/* ========================================================================= */}
        <div className="py-16 border-t border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase text-emerald-400 bg-slate-900 px-3 py-1 rounded border border-emerald-500/30">
              FULL-SPECTRUM COVERAGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              Engineering Capabilities Available To Your Agency
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Every capability is executed with infrastructure as code, automated audit trails, and zero-downtime guarantees.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {capabilityCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCapCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeCapCategory === cat.id
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="bg-[#131A2D] border border-slate-800 rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilityCategories.find(c => c.id === activeCapCategory)?.items.map((item, idx) => (
              <div key={idx} className="bg-[#0A0F1E] p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">{item}</div>
                  <div className="text-xs text-slate-400 font-mono mt-1">Fully documented with Terraform / Helm IaC modules</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DOWNLOADABLE PARTNER RESOURCES                                            */}
        {/* ========================================================================= */}
        <div className="py-16 border-t border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase text-emerald-400 bg-slate-900 px-3 py-1 rounded border border-emerald-500/30">
              PARTNER ENABLEMENT ASSETS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              Agency Partner Resource Handbook
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#131A2D] p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all group">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 w-fit mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                Agency Pre-Sales Pitch Deck
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Co-brandable slides for pitching enterprise AWS/GCP architecture and zero-trust security standards to prospective agency clients.
              </p>
              <button 
                onClick={() => onOpenIntake('agency')}
                className="mt-4 text-xs font-mono text-emerald-400 flex items-center gap-1.5 hover:underline cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Request Asset Package</span>
              </button>
            </div>

            <div className="bg-[#131A2D] p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all group">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 w-fit mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                White-Label Delivery SLA Framework
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Complete operational runbook outlining our 15-minute P1 incident SLA, zero-downtime cutover protocol, and communication policy.
              </p>
              <button 
                onClick={() => onOpenIntake('agency')}
                className="mt-4 text-xs font-mono text-blue-400 flex items-center gap-1.5 hover:underline cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Request Asset Package</span>
              </button>
            </div>

            <div className="bg-[#131A2D] p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all group">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 w-fit mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                Agency Mutual NDA & Code Ownership Standard
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Legal framework guaranteeing 100% agency & client ownership of all Terraform IaC scripts, secrets, and cloud accounts.
              </p>
              <button 
                onClick={() => onOpenIntake('agency')}
                className="mt-4 text-xs font-mono text-amber-400 flex items-center gap-1.5 hover:underline cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Request Asset Package</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FREQUENTLY ASKED QUESTIONS (ACCORDION)                                    */}
        {/* ========================================================================= */}
        <div className="py-16 border-t border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase text-emerald-400 bg-slate-900 px-3 py-1 rounded border border-emerald-500/30">
              CLARITY & CONFIDENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              Agency Partnership Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#131A2D] border border-slate-800 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/50 transition-colors"
                >
                  <span className="text-sm font-semibold text-white flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    {faq.q}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-300 font-sans leading-relaxed border-t border-slate-800/80 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FINAL HIGH-CONVERTING CALL TO ACTION                                      */}
        {/* ========================================================================= */}
        <div className="pt-12 pb-8">
          <div className="bg-gradient-to-br from-[#111827] via-[#0E1626] to-[#0A0F1E] border border-emerald-500/40 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-gradient-to-r from-emerald-500 via-cyan-400 to-blue-500 rounded-full" />
            
            <div className="max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-slate-900 border border-emerald-500/30 px-3.5 py-1.5 rounded-full">
                READY TO EXPAND YOUR AGENCY'S CAPABILITIES?
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Let’s Build Better Infrastructure Together.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                Expand your agency’s capabilities without expanding your payroll. Become the studio enterprise clients trust for every technical challenge.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => onOpenIntake('agency')}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply for Partnership Program</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>

                <button
                  onClick={() => onOpenIntake('agency')}
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800 text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Talk to Partnership Team</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-400 font-mono pt-4 flex flex-wrap items-center justify-center gap-4">
                <span>✓ 100% Mutual NDA Protected</span>
                <span>✓ Direct Slack / Teams Channel</span>
                <span>✓ Zero Headcount Overhead</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
