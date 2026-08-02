import React, { useState } from 'react';
import {
  Rocket,
  ShieldCheck,
  Zap,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Users,
  TrendingUp,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Terminal,
  Clock,
  Layers,
  Check,
  HelpCircle,
  Server,
  Activity,
  Download,
  PhoneCall,
  Compass,
  Database,
  Lock,
  GitBranch,
  Gauge,
  BarChart3,
  Award,
  AlertTriangle,
  RefreshCw,
  Sliders,
  FileCheck2,
  DollarSign,
  Workflow
} from 'lucide-react';

interface StartupProgramProps {
  onOpenIntake: (defaultCategory?: string) => void;
}

export const StartupProgram: React.FC<StartupProgramProps> = ({ onOpenIntake }) => {
  // Journey Stage State
  const [activeStage, setActiveStage] = useState<number>(2); // Default MVP/Launch

  // Framework Step State
  const [activeFrameworkStep, setActiveFrameworkStep] = useState<number>(0);

  // Challenge Card Filter
  const [activeChallenge, setActiveChallenge] = useState<number>(0);

  // Technical Assessment State
  const [assessmentStep, setAssessmentStep] = useState<number>(0);
  const [scores, setScores] = useState<Record<string, number>>({
    infra: 2,
    deploy: 2,
    monitoring: 1,
    security: 2,
    cost: 1
  });
  const [isSubmittedAssessment, setIsSubmittedAssessment] = useState<boolean>(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Tech Stack Category Filter
  const [activeTechCategory, setActiveTechCategory] = useState<string>('cloud');

  // Startup Stages
  const journeyStages = [
    {
      id: 'idea',
      stage: '01. Idea',
      title: 'Idea & Architecture Planning',
      badge: 'PRE-SEED',
      tagline: 'Design the right architecture before writing a single line of IaC.',
      focus: 'Preventing early architectural debt and picking cost-efficient serverless or managed primitives.',
      stack: 'AWS App Runner, Vercel/Cloudflare, Supabase / Managed PostgreSQL, Terraform Basics',
      deliverables: [
        'Cloud Architecture Blueprint & Threat Model',
        'Cost projection modeling ($50-$200/mo initial budget)',
        'CI/CD pipeline foundation for 1-click deployments'
      ]
    },
    {
      id: 'prototype',
      stage: '02. Prototype',
      title: 'Prototype & Rapid Testing',
      badge: 'PRE-SEED',
      tagline: 'Ship features every day without breaking staging or database states.',
      focus: 'Developer velocity and automated preview environments for every pull request.',
      stack: 'Docker, GitHub Actions, Ephemeral Preview Staging, Managed Cloud DB',
      deliverables: [
        'Automated preview environments for product team testing',
        'Secrets management & environment variable hygiene',
        'Automated database migration triggers'
      ]
    },
    {
      id: 'mvp',
      stage: '03. MVP Launch',
      title: 'MVP & Public Launch',
      badge: 'SEED READY',
      tagline: 'Zero-downtime public launch with automated surge protection.',
      focus: 'Production uptime, SSL/TLS security, and real-time error logging when early users land.',
      stack: 'AWS ECS / GCP Cloud Run, Cloudflare Enterprise WAF, Sentry, Datadog Basic',
      deliverables: [
        'Hardened production environment with automated SSL & DDoS defense',
        '24/7 basic health alerts & error escalation hooks',
        'Investor-ready technical architecture documentation'
      ]
    },
    {
      id: 'growth',
      stage: '04. Growth',
      title: 'Growth & Traction Scaling',
      badge: 'SEED / SERIES A',
      tagline: 'Auto-scaling infrastructure that handles 10x traffic spikes effortlessly.',
      focus: 'High availability, read-replica database scaling, and sub-100ms API responses.',
      stack: 'Kubernetes (EKS/GKE), Redis Cache Cluster, Postgres Read Replicas, Prometheus/Grafana',
      deliverables: [
        'Multi-pod Kubernetes auto-scaling with HPA',
        'Database query optimization & connection pooling',
        'Security hardening & least-privilege RBAC policies'
      ]
    },
    {
      id: 'scale',
      stage: '05. Scale',
      title: 'Series A Scale & Expansion',
      badge: 'SERIES A / B',
      tagline: 'Multi-region redundancy, zero-trust security controls, and 99.99% SLAs.',
      focus: 'Eliminating single points of failure, zero-trust security, and FinOps budget controls.',
      stack: 'Multi-Region AWS/GCP, Istio Service Mesh, HashiCorp Vault, Datadog APM',
      deliverables: [
        'Active-active or active-passive cross-region failover',
        'Automated security posture and evidence logging',
        'FinOps cloud cost optimization (reducing cloud bill by 25-40%)'
      ]
    },
    {
      id: 'global',
      stage: '06. Global Platform',
      title: 'Global Platform Operations',
      badge: 'SCALEUP',
      tagline: 'Enterprise reliability, sub-10ms global edge latency, and 24/7/365 SRE team.',
      focus: 'Continuous Chaos Engineering, custom internal developer platforms (IDP), and 99.999% uptime.',
      stack: 'Global Edge Anycast, Distributed DB (Spanner/CockroachDB), Backstage IDP, Dedicated SRE Pod',
      deliverables: [
        '24/7/365 dedicated Senior SRE pod on speed dial',
        'Global edge routing with multi-cloud redundancy',
        'Custom Internal Developer Platform for 50+ engineers'
      ]
    }
  ];

  // Startup Infrastructure Framework™ Steps
  const frameworkSteps = [
    {
      num: '01',
      title: 'Foundations',
      desc: 'Immutable IaC, Least-Privilege IAM, and Modular Cloud VPC Layouts.',
      details: 'We write modular Terraform/Pulumi scripts that construct isolated production, staging, and development environments with zero manual click-ops.',
      metric: '100% Reprodicible Infrastructure'
    },
    {
      num: '02',
      title: 'Velocity',
      desc: 'Automated CI/CD, Ephemeral Preview Deployments, and Fast Build Caching.',
      details: 'Developers merge PRs with complete confidence. Ephemeral preview environments spin up automatically and tear down on branch close.',
      metric: '< 4 Min Build & Deploy Pipelines'
    },
    {
      num: '03',
      title: 'Reliability',
      desc: 'Self-Healing Containers, Automated DB Backups, and Health Probes.',
      details: 'Liveness and readiness probes restart degraded pods before users experience errors. Automated point-in-time database restoration is tested weekly.',
      metric: '99.99% Production Uptime'
    },
    {
      num: '04',
      title: 'Growth',
      desc: 'Horizontal Pod Autoscaling, Caching Layers, and CDN Offloading.',
      details: 'As traffic surges from ProductHunt or press coverage, autoscalers add node capacity instantly without manual engineer intervention.',
      metric: '10x Traffic Spike Readiness'
    },
    {
      num: '05',
      title: 'Scale',
      desc: 'Multi-Region Failover, Zero-Trust Architecture, and Security Hardening.',
      details: 'Isolate workloads across multiple availability zones and cloud regions with automated DNS failover and end-to-end telemetry auditing.',
      metric: 'Sub-180s Automated Failover'
    },
    {
      num: '06',
      title: 'Optimization',
      desc: 'FinOps Resource Rightsizing, Spot Instance Usage, and Savings Plans.',
      details: 'Eliminate idle cloud compute waste. Continuous rightsizing keeps cloud burn predictably lean so capital goes into product development.',
      metric: '30-45% Reduced Cloud Spend'
    }
  ];

  // Founder Challenges & Solutions
  const challenges = [
    {
      title: 'No Dedicated DevOps Engineer',
      problem: 'Full-stack founders spend 30%+ of their time debugging Docker, Nginx, or AWS permissions instead of building core features.',
      solution: 'Aetheria provides a fractional Senior SRE pod instantly. Your team gets enterprise infrastructure expertise without taking on a $200k/yr salary.'
    },
    {
      title: 'Deployment & Migration Anxiety',
      problem: 'Deployments require manual steps, late-night maintenance windows, or prayer that the database schema migration won’t lock tables.',
      solution: 'Fully automated CI/CD pipelines with zero-downtime blue/green rollouts, automated database migrations, and instant 1-click rollback guarantees.'
    },
    {
      title: 'Unexpected Cloud Cost Surges',
      problem: 'AWS or GCP bills spike unpredictably due to unmonitored NAT gateways, oversized database instances, or forgotten staging pods.',
      solution: 'FinOps cost guardrails with real-time budget anomaly alerts, auto-sleeping staging environments, and reserved instance optimization.'
    },
    {
      title: 'Uncertainty During Traffic Spikes',
      problem: 'A TechCrunch feature or Viral HackerNews post could crash your single EC2 or database instance, burning precious first impressions.',
      solution: 'Pre-tested horizontal pod autoscaling and Redis cache offloading that absorbs 20x traffic surges effortlessly.'
    },
    {
      title: 'Passing Investor Technical Due Diligence',
      problem: 'Series A VCs and enterprise buyers ask for documented security controls, architecture diagrams, and disaster recovery plans.',
      solution: 'We provide co-authored, security-hardened cloud architecture diagrams, threat models, and DR runbooks that pass VC scrutiny.'
    },
    {
      title: 'Vendor Lock-in Concerns',
      problem: 'Worry about being trapped in proprietary PaaS platforms (Heroku/Render) as costs balloon at 100k MAU.',
      solution: '100% standard open Terraform and Kubernetes code. You own every repository, credential, and cloud account completely.'
    }
  ];

  // Tech Stack Matrix
  const techCategories = [
    {
      id: 'cloud',
      name: 'Cloud Infrastructure',
      tools: ['Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)', 'Microsoft Azure', 'Cloudflare Edge Network', 'DigitalOcean / Hetzner Hybrid']
    },
    {
      id: 'containers',
      name: 'Containers & Orchestration',
      tools: ['Kubernetes (EKS / GKE)', 'Docker & Helm', 'AWS ECS / Fargate', 'HashiCorp Nomad', 'Istio Service Mesh']
    },
    {
      id: 'automation',
      name: 'IaC & CI/CD',
      tools: ['Terraform & OpenTofu', 'Pulumi TypeScript', 'GitHub Actions Automation', 'GitLab CI / ArgoCD', 'HashiCorp Vault']
    },
    {
      id: 'monitoring',
      name: 'Observability & APM',
      tools: ['Datadog Enterprise', 'Prometheus & Grafana', 'OpenTelemetry Standard', 'Sentry Error Tracking', 'Better Stack / PagerDuty']
    },
    {
      id: 'ai_infra',
      name: 'AI & Data Infrastructure',
      tools: ['Pinecone & Qdrant Vector DBs', 'pgvector PostgreSQL', 'GPU Cluster Orchestration (NVIDIA)', 'vLLM & Ollama Deployment', 'Kafka & Redpanda Streams']
    }
  ];

  // FAQ Items
  const faqs = [
    {
      q: 'Do we need Kubernetes as an early-stage startup?',
      a: 'Not necessarily! We never push unnecessary complexity. For pre-seed and seed startups, serverless containers (AWS ECS, GCP Cloud Run) or simple managed services are usually faster and cheaper. We only introduce Kubernetes when microservices or scale demand it.'
    },
    {
      q: 'How early should a startup invest in proper infrastructure?',
      a: 'The ideal time is right before public launch or seed funding. Setting up clean Terraform IaC and CI/CD early takes 3-5 days and saves hundreds of hours of technical debt, security refactoring, and deployment fires down the line.'
    },
    {
      q: 'How do you work alongside our existing software developers?',
      a: 'We integrate seamlessly into your team’s Slack, GitHub, and Jira. Your developers write code, open PRs, and deploy via git. We handle the underlying cloud architecture, IAM roles, database scalability, and 24/7 monitoring in the background.'
    },
    {
      q: 'Can you join investor due diligence calls with prospective VC funds?',
      a: 'Yes! Our Principal Architects frequently join Series A technical due diligence calls as your Head of Infrastructure, presenting architecture blueprints, compliance postures, and scalability roadmaps to give investors 100% confidence.'
    },
    {
      q: 'Who owns the cloud accounts, code, and Terraform scripts?',
      a: 'You own 100% of everything from day one. All Terraform scripts, GitHub workflows, IAM roles, and cloud credentials reside in your company’s accounts. There are zero proprietary lock-in layers.'
    },
    {
      q: 'What is the pricing model for the Startup Program?',
      a: 'We offer founder-friendly flat monthly retainers tailored to startup funding stages (Pre-Seed, Seed, Series A+), with no long-term lock-in contracts. You get a full senior SRE team for less than a quarter of a single full-time hire.'
    }
  ];

  // Helper for Technical Assessment calculation
  const handleScoreChange = (category: string, value: number) => {
    setScores(prev => ({ ...prev, [category]: value }));
  };

  const calculateHealthScore = () => {
    const total = Object.values(scores).reduce<number>((a, b) => a + Number(b), 0);
    // max score = 12 (4 categories * 3 max points)
    return Math.round((total / 12) * 100);
  };

  const healthScore = calculateHealthScore();

  return (
    <section id="startup-program" className="py-24 bg-[#FFFFFF] relative border-t border-slate-200">
      
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================================= */}
        {/* HERO SECTION                                                              */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-4 pb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono shadow-xs">
            <Rocket className="w-3.5 h-3.5 text-slate-900" />
            <span className="font-bold tracking-wider uppercase">STARTUP INFRASTRUCTURE ALLIANCE</span>
            <span className="bg-slate-200 text-slate-900 text-[10px] px-2 py-0.5 rounded font-sans font-semibold">FROM MVP TO SCALE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight font-sans leading-[1.12]">
            Build your startup. <br />
            <span className="text-slate-700">
              We'll engineer everything behind it.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed">
            From your first deployment to millions of active users, we become your long-term infrastructure operating partner—designing cloud architecture, automating deployments, improving reliability, and helping your engineering team ship faster.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenIntake('startup')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wide shadow-xs transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Book Startup Discovery Call</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#startup-journey"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <Compass className="w-4 h-4 text-slate-700" />
              <span>Explore Startup Program</span>
            </a>
          </div>

          {/* Interactive Node Growth Visual Preview */}
          <div className="pt-10 max-w-3xl mx-auto">
            <div className="bg-[#FCFCFA] border border-slate-200 rounded-2xl p-6 shadow-xs relative">
              <div className="flex items-center justify-between text-xs font-mono text-slate-600 border-b border-slate-200 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                  <span className="text-slate-900 font-bold">INFRASTRUCTURE EVOLUTION SIMULATOR</span>
                </div>
                <span className="text-slate-900 font-semibold">ACTIVE NODES: MULTI-REGION KUBERNETES</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-500">DEPLOYMENT SPEED</div>
                  <div className="text-lg font-bold text-slate-900 font-mono mt-1">3.2 Minutes</div>
                  <div className="text-[10px] text-emerald-700 font-mono mt-0.5">Automated CI/CD Pipeline</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-500">AUTOSCALING CAPACITY</div>
                  <div className="text-lg font-bold text-slate-900 font-mono mt-1">10x Traffic Spike</div>
                  <div className="text-[10px] text-slate-700 font-mono mt-0.5">Tested & Hardened</div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="text-[11px] font-mono text-slate-500">UPTIME SLA</div>
                  <div className="text-lg font-bold text-slate-900 font-mono mt-1">99.999%</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">24/7 SRE Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* STARTUP JOURNEY STAGE TIMELINE                                            */}
        {/* ========================================================================= */}
        <div id="startup-journey" className="py-16 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase text-slate-800 bg-slate-100 px-3 py-1 rounded border border-slate-200 font-semibold shadow-xs">
              EVOLUTIONARY PARTNERSHIP
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-3">
              How Infrastructure Evolves With Your Startup
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Select your startup’s current milestone to see how our engineering partnership adapts to your immediate priorities and capital stage.
            </p>
          </div>

          {/* Timeline Stage Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {journeyStages.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveStage(idx)}
                className={`p-3 rounded-xl text-left transition-all border text-xs font-mono font-semibold cursor-pointer ${
                  activeStage === idx
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="text-[10px] opacity-75 font-sans mb-1">{s.badge}</div>
                <div className="line-clamp-1">{s.stage}</div>
              </button>
            ))}
          </div>

          {/* Active Stage Detail Panel */}
          {journeyStages[activeStage] && (
            <div className="bg-[#FCFCFA] border border-slate-200 rounded-2xl p-8 shadow-xs relative">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono bg-slate-200 text-slate-900 border border-slate-300 px-2.5 py-0.5 rounded font-bold">
                      STAGE 0{activeStage + 1}: {journeyStages[activeStage].badge}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">STEP {activeStage + 1} OF 6</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mt-2">
                    {journeyStages[activeStage].title}
                  </h3>
                  <p className="text-sm text-slate-600 font-mono mt-1">
                    "{journeyStages[activeStage].tagline}"
                  </p>
                </div>

                <button
                  onClick={() => onOpenIntake('startup')}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shrink-0 cursor-pointer shadow-xs"
                >
                  Book Stage {activeStage + 1} Discovery
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                <div className="lg:col-span-7 space-y-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-xs font-mono text-slate-500 block mb-1">PRIMARY ARCHITECTURAL FOCUS:</span>
                    <p className="text-sm text-slate-800 font-medium">{journeyStages[activeStage].focus}</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <span className="text-xs font-mono text-slate-900 font-semibold block mb-1">RECOMMENDED TECH STACK PRIMITIVES:</span>
                    <p className="text-xs font-mono text-slate-700">{journeyStages[activeStage].stack}</p>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-slate-200 space-y-3 text-xs shadow-xs">
                  <span className="text-slate-900 font-mono text-[11px] uppercase tracking-wider block font-bold">
                    CORE DELIVERABLES FOR STAGE 0{activeStage + 1}
                  </span>
                  {journeyStages[activeStage].deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* STARTUP INFRASTRUCTURE FRAMEWORK™                                         */}
        {/* ========================================================================= */}
        <div className="py-16 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase text-slate-800 bg-slate-100 px-3 py-1 rounded border border-slate-200 font-semibold shadow-xs">
              METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-3">
              The Startup Infrastructure Framework™
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              A 6-pillar engineering system designed to transition early software prototypes into resilient, enterprise-grade platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 mb-6">
            {frameworkSteps.map((step, idx) => (
              <button
                key={step.num}
                onClick={() => setActiveFrameworkStep(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  activeFrameworkStep === idx
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm z-10'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className={`text-xs font-mono font-bold mb-1 ${activeFrameworkStep === idx ? 'text-slate-200' : 'text-slate-900'}`}>{step.num}. {step.title}</div>
                <div className={`text-[10px] line-clamp-2 ${activeFrameworkStep === idx ? 'text-slate-300' : 'text-slate-500'}`}>{step.desc}</div>
              </button>
            ))}
          </div>

          {/* Detailed Framework Active Card */}
          {frameworkSteps[activeFrameworkStep] && (
            <div className="bg-[#FCFCFA] border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
              <div className="space-y-2 max-w-2xl">
                <div className="text-xs font-mono text-slate-900 uppercase font-semibold">
                  PILLAR {frameworkSteps[activeFrameworkStep].num} — {frameworkSteps[activeFrameworkStep].title}
                </div>
                <h4 className="text-lg font-bold text-slate-900 font-sans">
                  {frameworkSteps[activeFrameworkStep].desc}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {frameworkSteps[activeFrameworkStep].details}
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-4 rounded-xl text-center shrink-0 w-full md:w-auto shadow-xs">
                <div className="text-[10px] font-mono text-slate-500">PILLAR BENCHMARK</div>
                <div className="text-lg font-bold text-slate-900 font-mono mt-0.5">
                  {frameworkSteps[activeFrameworkStep].metric}
                </div>
                <div className="text-[10px] text-emerald-700 font-mono mt-1">✓ Automated Enforcement</div>
              </div>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* COMMON FOUNDER CHALLENGES & PARTNER SOLUTIONS                             */}
        {/* ========================================================================= */}
        <div className="py-16 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase text-slate-800 bg-slate-100 px-3 py-1 rounded border border-slate-200 font-semibold shadow-xs">
              FOUNDER REALITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-3">
              Solving the 6 Infrastructure Bottlenecks Facing Founders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((c, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 hover:border-slate-300 transition-all shadow-xs">
                <div className="flex items-center gap-2 text-slate-900 text-xs font-mono font-bold">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600" />
                  <span>CHALLENGE: {c.title.toUpperCase()}</span>
                </div>
                <p className="text-xs text-slate-600 font-sans leading-relaxed pl-6 border-l border-amber-200">
                  "{c.problem}"
                </p>

                <div className="pt-2 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-slate-900 text-xs font-mono font-bold mb-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>AETHERIA PARTNER SOLUTION:</span>
                  </div>
                  <p className="text-xs text-slate-700 font-sans leading-relaxed pl-6 border-l border-emerald-200">
                    {c.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE TECHNICAL READINESS DIAGNOSTIC FOR STARTUPS                   */}
        {/* ========================================================================= */}
        <div className="py-16 border-t border-slate-200">
          <div className="bg-[#FCFCFA] border border-slate-200 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xs">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-8">
              <span className="text-xs font-mono uppercase bg-slate-100 text-slate-900 border border-slate-200 px-3 py-1 rounded font-bold shadow-xs">
                STARTUP HEALTH DIAGNOSTIC
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
                Interactive Startup Infrastructure Health Check
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Rate your current setup across 5 core dimensions to instantly calculate your Startup Technical Health Score & risk indicators.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Question Sliders */}
              <div className="md:col-span-7 space-y-5 text-xs font-mono">
                
                {/* Q1: IaC Maturity */}
                <div className="space-y-1.5 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-700 font-semibold">1. INFRASTRUCTURE AS CODE (IaC):</span>
                    <span className="text-slate-900 font-bold">
                      {scores.infra === 1 ? 'Manual Click-Ops' : scores.infra === 2 ? 'Partial Scripts' : '100% Terraform / Pulumi'}
                    </span>
                  </div>
                  <div className="flex gap-2 pt-1">
                    {[1, 2, 3].map(v => (
                      <button
                        key={v}
                        onClick={() => handleScoreChange('infra', v)}
                        className={`flex-1 py-1.5 rounded text-[11px] border cursor-pointer ${
                          scores.infra === v ? 'bg-slate-900 text-white font-bold border-slate-900' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {v === 1 ? 'Manual' : v === 2 ? 'Semi-Automated' : 'Complete IaC'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Q2: CI/CD & Deployments */}
                <div className="space-y-1.5 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-700 font-semibold">2. DEPLOYMENT PIPELINE:</span>
                    <span className="text-slate-900 font-bold">
                      {scores.deploy === 1 ? 'Local SSH / FTP' : scores.deploy === 2 ? 'Basic GitHub Actions' : 'Zero-Downtime Blue/Green'}
                    </span>
                  </div>
                  <div className="flex gap-2 pt-1">
                    {[1, 2, 3].map(v => (
                      <button
                        key={v}
                        onClick={() => handleScoreChange('deploy', v)}
                        className={`flex-1 py-1.5 rounded text-[11px] border cursor-pointer ${
                          scores.deploy === v ? 'bg-slate-900 text-white font-bold border-slate-900' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {v === 1 ? 'Manual Push' : v === 2 ? 'Basic CI' : 'Advanced CI/CD'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Q3: Monitoring & Alerts */}
                <div className="space-y-1.5 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-700 font-semibold">3. MONITORING & OBSERVABILITY:</span>
                    <span className="text-slate-900 font-bold">
                      {scores.monitoring === 1 ? 'User Complaints' : scores.monitoring === 2 ? 'Basic Ping/Uptime' : '24/7 APM & PagerDuty'}
                    </span>
                  </div>
                  <div className="flex gap-2 pt-1">
                    {[1, 2, 3].map(v => (
                      <button
                        key={v}
                        onClick={() => handleScoreChange('monitoring', v)}
                        className={`flex-1 py-1.5 rounded text-[11px] border cursor-pointer ${
                          scores.monitoring === v ? 'bg-slate-900 text-white font-bold border-slate-900' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {v === 1 ? 'Reactive' : v === 2 ? 'Basic Logs' : '24/7 APM Telemetry'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Q4: Security & Secrets */}
                <div className="space-y-1.5 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-700 font-semibold">4. SECURITY & SECRETS HYGIENE:</span>
                    <span className="text-slate-900 font-bold">
                      {scores.security === 1 ? '.env in Slack' : scores.security === 2 ? 'Cloud Secrets Manager' : 'Vault + Zero-Trust Hardened'}
                    </span>
                  </div>
                  <div className="flex gap-2 pt-1">
                    {[1, 2, 3].map(v => (
                      <button
                        key={v}
                        onClick={() => handleScoreChange('security', v)}
                        className={`flex-1 py-1.5 rounded text-[11px] border cursor-pointer ${
                          scores.security === v ? 'bg-slate-900 text-white font-bold border-slate-900' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {v === 1 ? 'Unmanaged' : v === 2 ? 'Standard Secrets' : 'Zero-Trust Hardened'}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Calculated Score Display Box */}
              <div className="md:col-span-5 bg-white border border-slate-200 p-8 rounded-2xl text-center space-y-6 shadow-xs">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-slate-500">YOUR TECHNICAL HEALTH SCORE</div>
                  <div className={`text-5xl font-black font-mono ${
                    healthScore >= 80 ? 'text-emerald-700' : healthScore >= 50 ? 'text-amber-700' : 'text-rose-700'
                  }`}>
                    {healthScore} <span className="text-lg text-slate-400 font-normal">/ 100</span>
                  </div>
                  <div className="text-xs font-mono mt-2">
                    {healthScore >= 80 ? (
                      <span className="text-emerald-700 font-semibold">✓ Production Ready Architecture</span>
                    ) : healthScore >= 50 ? (
                      <span className="text-amber-700 font-semibold">⚠️ Moderate Technical Debt & Scaling Risk</span>
                    ) : (
                      <span className="text-rose-700 font-semibold">🚨 High Outage & Security Risk</span>
                    )}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs font-sans text-slate-700 leading-relaxed">
                  💡 <strong>AETHERIA RECOMMENDATION:</strong> {
                    healthScore < 60
                      ? 'Your infrastructure has manual dependencies that will cause outage friction during traffic surges. Schedule a 30-minute Architecture Audit to eliminate deployment bottlenecks.'
                      : 'Good foundation! You are well-positioned for Series A growth. Let us help you implement zero-trust security controls and 24/7 APM monitoring.'
                  }
                </div>

                <button
                  onClick={() => onOpenIntake('startup')}
                  className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                >
                  Schedule Detailed 1-on-1 Diagnostic →
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TECH STACK MATRIX                                                         */}
        {/* ========================================================================= */}
        <div className="py-16 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase text-slate-800 bg-slate-100 px-3 py-1 rounded border border-slate-200 font-semibold shadow-xs">
              TECH STACK COMPATIBILITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-3">
              Modern Cloud & Developer Tooling Stack
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              We work with standard open-source tools and leading cloud platforms so your engineering team retains total freedom.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {techCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTechCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeTechCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="bg-[#FCFCFA] border border-slate-200 rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 shadow-xs">
            {techCategories.find(c => c.id === activeTechCategory)?.tools.map((tool, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3 shadow-xs">
                <Server className="w-4 h-4 text-slate-800 shrink-0" />
                <span className="text-sm font-semibold text-slate-900">{tool}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* STARTUP RESOURCE HUB                                                      */}
        {/* ========================================================================= */}
        <div className="py-16 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase text-slate-800 bg-slate-100 px-3 py-1 rounded border border-slate-200 font-semibold shadow-xs">
              FOUNDER KNOWLEDGE CENTER
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-3">
              Essential Infrastructure Playbooks for Founders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all group shadow-xs">
              <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 w-fit mb-4">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                Series A Cloud Architecture Guide
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Step-by-step blueprints for transitioning an early MVP into a high-availability, multi-region AWS/GCP setup.
              </p>
              <button
                onClick={() => onOpenIntake('startup')}
                className="mt-4 text-xs font-mono text-slate-900 font-semibold flex items-center gap-1.5 hover:underline cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Request Founder Guide</span>
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all group shadow-xs">
              <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 w-fit mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                Zero-to-Launch Security & Hardening Checklist
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Essential IAM roles, encryption policies, and vulnerability scanners required before onboarding enterprise B2B customers.
              </p>
              <button
                onClick={() => onOpenIntake('startup')}
                className="mt-4 text-xs font-mono text-slate-900 font-semibold flex items-center gap-1.5 hover:underline cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Request Founder Guide</span>
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all group shadow-xs">
              <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 w-fit mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                Startup FinOps Cloud Optimization Playbook
              </h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Practical tactics to cut AWS/GCP bills by 30-50% without compromising performance or staging environments.
              </p>
              <button
                onClick={() => onOpenIntake('startup')}
                className="mt-4 text-xs font-mono text-slate-900 font-semibold flex items-center gap-1.5 hover:underline cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Request Founder Guide</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FREQUENTLY ASKED QUESTIONS (ACCORDION)                                    */}
        {/* ========================================================================= */}
        <div className="py-16 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase text-slate-800 bg-slate-100 px-3 py-1 rounded border border-slate-200 font-semibold shadow-xs">
              FOUNDER FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-3">
              Startup Infrastructure Questions Answered
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-slate-800 shrink-0" />
                    {faq.q}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 font-sans leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FINAL CALL TO ACTION                                                      */}
        {/* ========================================================================= */}
        <div className="pt-12 pb-8">
          <div className="bg-[#FCFCFA] border border-slate-200 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-xs">
            <div className="max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-800 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full shadow-xs">
                READY TO SCALE YOUR STARTUP?
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
                Let's Build Infrastructure That Grows With Your Startup.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                Whether you're preparing your MVP, launching publicly, or scaling globally, we'll become the engineering partner that helps your infrastructure evolve with your business.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => onOpenIntake('startup')}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wide shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start the Conversation</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                <button
                  onClick={() => onOpenIntake('startup')}
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <PhoneCall className="w-4 h-4 text-slate-700" />
                  <span>Book Infrastructure Assessment</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-500 font-mono pt-4 flex flex-wrap items-center justify-center gap-4">
                <span>✓ 100% Code & Account Ownership</span>
                <span>✓ Direct Slack Channel Integration</span>
                <span>✓ Zero Long-Term Lock-in</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
