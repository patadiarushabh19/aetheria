import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Users, 
  FileText, 
  Cloud, 
  Server, 
  Activity, 
  ChevronRight, 
  HelpCircle, 
  Check, 
  Building2, 
  Rocket, 
  Globe, 
  Wrench, 
  Layers, 
  Terminal, 
  Sparkles,
  Zap,
  Lock,
  BarChart2,
  Code,
  Send,
  Compass,
  BookOpen,
  Eye,
  Sliders,
  Target,
  Workflow,
  Heart,
  ChevronDown
} from 'lucide-react';

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome, onNavigateContact }) => {
  // SEO Setup on mount
  useEffect(() => {
    document.title = "About Us | Aetheria Infrastructure Operations Partner";

    // Set or update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Learn about Aetheria, our engineering philosophy, our story, and how we operate as an Infrastructure Operations Partner for digital businesses.'
    );

    // Schema Organization JSON-LD Injection
    const schemaId = 'about-page-schema';
    let schemaScript = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Aetheria",
      "url": "https://aetheria.io",
      "logo": "https://aetheria.io/logo.png",
      "description": "Infrastructure Operations Partner helping digital businesses build, operate, and scale reliable cloud architectures.",
      "knowsAbout": ["Cloud Infrastructure", "DevOps", "Site Reliability Engineering", "Kubernetes", "Terraform", "FinOps"]
    });

    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      document.title = "Aetheria | Infrastructure Operating Partner";
    };
  }, []);

  // Section 1: Blueprint Active Layer state
  const [activeHeroLayer, setActiveHeroLayer] = useState<number>(0);

  // Section 2: Story Journey Active Stage
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);

  // Section 4: Engineering Principles Expandable Card state
  const [expandedPrinciple, setExpandedPrinciple] = useState<number | null>(0);

  // Section 5: Infrastructure Operating System Layer state
  const [activeIOSLayer, setActiveIOSLayer] = useState<number>(0);

  // Section 6: Interactive Comparison Slider position (0 = Traditional, 100 = Aetheria)
  const [sliderPos, setSliderPos] = useState<number>(80);

  // Section 1 Story Data
  const heroLayers = [
    { title: 'Cloud Layer', subtitle: 'AWS / GCP / Multi-Cloud', desc: 'Isolated VPC topologies, Transit Gateways, and high-availability compute pools.', icon: Cloud },
    { title: 'Application Layer', subtitle: 'Kubernetes & Containers', desc: 'Zero-downtime rolling deployments, Karpenter auto-scaling, and health probes.', icon: Server },
    { title: 'Network Layer', subtitle: 'Global Ingress & Mesh', desc: 'Cloudflare Enterprise WAF, Istio service mesh, and Anycast DNS routing.', icon: Globe },
    { title: 'Security Layer', subtitle: 'Zero-Trust Guardrails', desc: 'AWS KMS CMK encryption at rest, Vault secrets, and strict RBAC policies.', icon: Lock },
    { title: 'Automation Layer', subtitle: 'Declarative IaC', desc: 'Modular Terraform & Pulumi blueprints version-controlled in Git repositories.', icon: Terminal },
    { title: 'Monitoring Layer', subtitle: 'Real-Time Telemetry', desc: 'Datadog APM, Prometheus metrics, and automated 24/7 p99 latency alerts.', icon: Activity },
    { title: 'Growth Layer', subtitle: 'FinOps & Scale', desc: 'Continuous cost optimization targeting 25–40% immediate cloud waste reduction.', icon: BarChart2 }
  ];

  // Section 2 Story Journey Stages
  const storyStages = [
    {
      num: '01',
      stage: 'The Problem',
      headline: 'Fragile, Fragile Cloud Setups Silently Blocked Growth',
      learned: 'Most digital businesses build great product code, but their underlying infrastructure is assembled piecemeal under tight deadlines. When traffic surges arrive, brittle manual setups crumble, causing expensive outages and developer burnout.',
      mattered: 'Unreliable systems directly damage user trust, inflate AWS bills with unused compute, and consume over 30% of engineering bandwidth on emergency firefighting.',
      approach: 'We recognized that digital businesses do not need another ticket-taking agency—they need an embedded engineering partner that owns infrastructure reliability end-to-end.'
    },
    {
      num: '02',
      stage: 'The Observation',
      headline: 'Traditional DevOps Billing Hours Created Misaligned Incentives',
      learned: 'Conventional agencies bill by the hour or project milestone. They have zero skin in the game when a system crashes at 2 AM on a Sunday.',
      mattered: 'Founders and CTOs were paying premium rates for static consultancy PDFs while their internal teams remained trapped in manual deployment cycles.',
      approach: 'We structured Aetheria around SLA accountability, declarative Infrastructure as Code, and shared engineering runbooks.'
    },
    {
      num: '03',
      stage: 'Engineering Philosophy',
      headline: 'Infrastructure Is Code, Systems Are Built For Failure',
      learned: 'Hardware, networks, and cloud APIs will fail eventually. High availability is not achieved by hoping systems stay up, but by mathematically engineering for automatic failure isolation and seamless recovery.',
      mattered: 'Automated failover drills, KMS key rotations, and git-driven deployments turn infrastructure from a chaotic bottleneck into a silent growth engine.',
      approach: 'Every single component we build is codified in Terraform/Pulumi, thoroughly documented, and tested against automated incident scenarios.'
    },
    {
      num: '04',
      stage: 'Company Formation',
      headline: 'A Guild of Principal SREs Dedicated to Digital Ambition',
      learned: 'Hiring a full in-house SecOps and SRE team costs over $600k/year—an impossible barrier for most scaling startups and digital agencies.',
      mattered: 'By pooling Senior Cloud Architects and SRE specialists into an operational partner guild, we make enterprise-grade reliability accessible at a fraction of headcount cost.',
      approach: 'We operate as an extended engineering arm, embedding directly into client Slack channels, GitHub repos, and architecture reviews.'
    },
    {
      num: '05',
      stage: 'Future Vision',
      headline: 'An Autonomous, Self-Healing Infrastructure Ecosystem',
      learned: 'The next era of cloud infrastructure will combine human architectural wisdom with self-healing telemetry and automated drift correction.',
      mattered: 'Teams that adopt declarative, intelligent infrastructure operations will ship software 10x faster with zero fear of deployment downtime.',
      approach: 'We are continually building open ADR libraries, IaC generators, and automated telemetry tools that empower engineering teams worldwide.'
    }
  ];

  // Section 4 Principles Data
  const principles = [
    {
      title: 'Reliability First',
      statement: 'Systems should be designed for failure.',
      explanation: 'Every cloud component, node, or zone will experience transient failures. We design architectures with zero single points of failure, multi-AZ redundancy, and automated health checks.',
      example: 'AWS Aurora Multi-AZ failover with Karpenter pod anti-affinity policies.',
      impact: 'Guaranteed 99.999% SLA uptime (< 5.25 mins unplanned downtime per year).'
    },
    {
      title: 'Automation Over Repetition',
      statement: 'Manual work should become systems.',
      explanation: 'If a operational task must be performed more than twice, it must be codified in Infrastructure as Code (IaC) or automated via CI/CD pipelines. Manual click-ops is strictly banned.',
      example: 'Automated GitHub Actions workflow triggering Terraform plan & apply on PR merge.',
      impact: 'Zero configuration drift and 90% reduction in deployment release time.'
    },
    {
      title: 'Documentation Creates Scale',
      statement: 'Knowledge should never live only in people\'s heads.',
      explanation: 'Unwritten tribal knowledge is a major operational vulnerability. We author comprehensive Architecture Decision Records (ADRs) and disaster recovery runbooks for every deployment.',
      example: '140+ open ADRs, disaster recovery playbooks, and version-controlled architecture diagrams.',
      impact: 'Instant developer onboarding and zero reliance on single key individuals.'
    },
    {
      title: 'Security By Design',
      statement: 'Protection should be built into every layer.',
      explanation: 'Security is not an afterthought added before an audit. We enforce zero-trust network boundaries, KMS envelope encryption, and least-privilege RBAC from line one.',
      example: 'Transit Gateway VPC isolation with HashiCorp Vault secrets management.',
      impact: 'Turnkey enterprise security posture and audit readiness in 14 days.'
    },
    {
      title: 'Simple Systems Scale Better',
      statement: 'Complexity is the enemy of reliability.',
      explanation: 'Over-engineered architectures with dozens of unneeded microservices increase operational failure surface area. We advocate for clean, modular, and understandable system design.',
      example: 'Pragmatic Kubernetes clusters configured with Karpenter auto-scaling over complex multi-mesh abstractions.',
      impact: 'Faster MTTR (Mean Time to Resolution) and significantly lower maintenance overhead.'
    },
    {
      title: 'Business Outcomes Matter',
      statement: 'Technology decisions should create business value.',
      explanation: 'Infrastructure exists to serve product speed, customer happiness, and business growth—not to showcase arbitrary technology stacks.',
      example: 'FinOps cloud waste elimination strategies aligning cloud spend directly with active user metrics.',
      impact: '25–40% immediate reduction in monthly cloud bill without compromising performance.'
    }
  ];

  // Section 5 Infrastructure Operating System Layers Data
  const iosLayers = [
    {
      id: 'foundation',
      num: '01',
      title: 'Foundation',
      subtitle: 'Cloud Architecture & Topology',
      philosophy: 'A solid foundation requires immutable infrastructure, isolated VPC environments, and explicit cloud network boundaries.',
      capabilities: ['AWS & GCP Multi-Region Blueprinting', 'VPC Transit Gateway Peering', 'High-Availability Database Cluster Setup', 'Infrastructure as Code (Terraform / Pulumi)'],
      example: 'Deploying isolated production, staging, and dev VPC environments with zero shared state.'
    },
    {
      id: 'velocity',
      num: '02',
      title: 'Velocity',
      subtitle: 'Automation & Deployment Pipelines',
      philosophy: 'Developers should ship code to production seamlessly without needing manual infrastructure tickets or release fire-drills.',
      capabilities: ['GitOps & ArgoCD Pipeline Setup', 'Container Registry & Helm Packaging', 'Zero-Downtime Blue/Green & Canary Releases', 'Automated Integration Test Integration'],
      example: 'Automated staging preview environments generated dynamically per GitHub pull request.'
    },
    {
      id: 'reliability',
      num: '03',
      title: 'Reliability',
      subtitle: 'Monitoring & Operations',
      philosophy: 'Observability is not just storing logs—it is real-time telemetry that predicts and mitigates incidents before users notice.',
      capabilities: ['Datadog & Prometheus Telemetry Integration', 'Distributed Tracing & APM Setup', 'p99 Ingress Latency SLA Guards', '24/7 Automated SRE Incident Response'],
      example: 'Automated circuit breakers halting traffic to unhealthy pods before latency spills to end users.'
    },
    {
      id: 'growth',
      num: '04',
      title: 'Growth',
      subtitle: 'Scaling & Optimization',
      philosophy: 'Infrastructure must scale dynamically with user traffic while keeping monthly cloud costs strictly aligned with revenue.',
      capabilities: ['Kubernetes Karpenter Auto-Scaling Fleet', 'FinOps Cloud Spend & Waste Reduction', 'Database Query Optimization & Connection Pooling', 'Global CDN & Cache Invalidation'],
      example: 'Spinning up 500+ AWS Graviton spot instances in 12 seconds during sudden viral traffic surges.'
    },
    {
      id: 'continuity',
      num: '05',
      title: 'Continuity',
      subtitle: 'Security & Resilience',
      philosophy: 'Business continuity requires proactive threat modeling, immutable backups, and regular disaster recovery exercises.',
      capabilities: ['Zero-Trust IAM & Least-Privilege Guardrails', 'AWS KMS Envelope Encryption at Rest', 'Automated Disaster Recovery Runbooks', 'Continuous Vulnerability Scanning'],
      example: 'Executing automated cross-region database failover drills with zero data loss.'
    }
  ];

  // Section 7 Culture Pillars
  const culturePillars = [
    { title: 'Engineering Curiosity', desc: 'We systematically question assumptions, benchmark new tools, and stay at the frontier of cloud technology.', icon: Zap },
    { title: 'Continuous Learning', desc: 'Every outage, post-mortem, and architecture decision is documented as an ADR to level up the entire team.', icon: BookOpen },
    { title: 'Ownership Mindset', desc: 'We take direct accountability for uptime, latency, and cloud spend—never passing blame to external vendors.', icon: Target },
    { title: 'Clear Communication', desc: 'We communicate in clear, concise technical language without sales fluff, hiding behind jargon, or obfuscating metrics.', icon: Workflow },
    { title: 'Problem Solving', desc: 'We break complex multi-cloud challenges down into simple, modular, and elegant engineering components.', icon: Cpu },
    { title: 'Craftsmanship', desc: 'We treat Infrastructure as Code as high art, taking pride in clean indentation, explicit tags, and robust error handling.', icon: Sparkles }
  ];

  // Section 9 Values Data
  const companyValues = [
    { name: 'Trust', desc: 'Earning confidence through transparent metrics, deterministic SLAs, and radical technical honesty.', bg: 'bg-slate-900 text-white border-slate-800' },
    { name: 'Precision', desc: 'Executing IaC deployments with exactness—eliminating manual guesswork and human configuration error.', bg: 'bg-blue-950 text-blue-100 border-blue-900' },
    { name: 'Ownership', desc: 'Taking full accountability for system reliability, performance, and operational excellence 24/7/365.', bg: 'bg-teal-950 text-teal-100 border-teal-900' },
    { name: 'Learning', desc: 'Continuously refining our blueprints, sharing ADRs, and contributing knowledge back to the engineering ecosystem.', bg: 'bg-stone-900 text-stone-100 border-stone-800' },
    { name: 'Partnership', desc: 'Integrating seamlessly with client engineering teams as long-term advisors and embedded SRE operational leads.', bg: 'bg-slate-800 text-slate-100 border-slate-700' },
    { name: 'Excellence', desc: 'Uncompromising standards across architecture design, security controls, and code craftsmanship.', bg: 'bg-purple-950 text-purple-100 border-purple-900' }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#FCFCFA] text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      
      {/* Breadcrumb Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <button 
            onClick={onNavigateHome}
            className="hover:text-slate-900 transition-colors cursor-pointer flex items-center gap-1"
          >
            Aetheria
          </button>
          <span>/</span>
          <span className="text-slate-900 font-semibold">About Us</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: HERO                                                           */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden py-12 lg:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Typography & Primary CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono">
                <Building2 className="w-3.5 h-3.5 text-slate-700" />
                <span>INFRASTRUCTURE OPERATIONS PARTNER</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Building The Infrastructure Behind Digital Ambition.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                Every successful digital business depends on invisible systems working perfectly. We design, automate, and operate the infrastructure that allows companies to move faster, scale confidently, and build without limits.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onNavigateContact}
                  className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 border border-slate-900 shadow-sm transition-all flex items-center gap-2.5 group cursor-pointer"
                >
                  <span>Start Technical Discovery</span>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onNavigateHome}
                  className="px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Layers className="w-4 h-4 text-slate-500" />
                  <span>Explore Capabilities</span>
                </button>
              </div>

              {/* Stat Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 text-xs font-mono">
                <div>
                  <div className="text-xl font-bold text-slate-950">99.999%</div>
                  <div className="text-slate-500 mt-0.5">SLA SLA Guarantee</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-950">140+</div>
                  <div className="text-slate-500 mt-0.5">Open ADR Blueprints</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-950">25–40%</div>
                  <div className="text-slate-500 mt-0.5">Avg Cloud Waste Saved</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Evolving Infrastructure Blueprint Diagram */}
            <div className="lg:col-span-5 relative">
              <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 text-slate-100 shadow-2xl relative overflow-hidden font-mono text-xs">
                
                {/* Grid Pattern */}
                <div 
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
                    backgroundSize: '16px 16px'
                  }}
                />

                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
                      SYSTEM ARCHITECTURE LAYERS
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    INTERACTIVE
                  </span>
                </div>

                {/* Layer Selector */}
                <div className="space-y-2 relative z-10">
                  {heroLayers.map((layer, idx) => {
                    const Icon = layer.icon;
                    const isActive = activeHeroLayer === idx;
                    return (
                      <div
                        key={layer.title}
                        onClick={() => setActiveHeroLayer(idx)}
                        className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          isActive
                            ? 'bg-slate-800 border-slate-600 text-white shadow-xs'
                            : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                          <div>
                            <div className="font-bold text-[11px] text-slate-200">{layer.title}</div>
                            <div className="text-[10px] text-slate-500">{layer.subtitle}</div>
                          </div>
                        </div>
                        {isActive && (
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Layer Inspector Detail Box */}
                <div className="mt-4 p-3 bg-slate-900 rounded-xl border border-slate-800 text-[11px] space-y-1 relative z-10">
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{heroLayers[activeHeroLayer].title} Active</span>
                  </div>
                  <p className="text-slate-300 font-sans text-xs leading-relaxed">
                    {heroLayers[activeHeroLayer].desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
                  <span>STATUS: SYSTEM OPERATIONAL</span>
                  <span>AETHERIA ARCHITECTURE ENGINE</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 2: OUR STORY (Interactive Storytelling Journey)                  */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono">
              <Compass className="w-3.5 h-3.5 text-slate-700" />
              <span>THE EVOLUTION OF AETHERIA</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              Our Journey & Engineering Origin
            </h2>
            <p className="text-sm text-slate-600">
              How years of battling fragile cloud setups and opaque DevOps agencies led us to build a better way.
            </p>
          </div>

          {/* Interactive Journey Timeline Navigation Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 max-w-4xl mx-auto">
            {storyStages.map((st, idx) => (
              <button
                key={st.num}
                onClick={() => setActiveStoryIndex(idx)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer font-mono text-xs ${
                  activeStoryIndex === idx
                    ? 'bg-slate-950 text-white border-slate-950 shadow-xs'
                    : 'bg-[#FCFCFA] text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className={`text-[10px] font-bold ${activeStoryIndex === idx ? 'text-emerald-400' : 'text-slate-400'}`}>
                  STAGE {st.num}
                </div>
                <div className="font-bold mt-1 text-xs truncate">{st.stage}</div>
              </button>
            ))}
          </div>

          {/* Active Story Card Display */}
          <motion.div 
            key={activeStoryIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#FCFCFA] p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm max-w-4xl mx-auto space-y-8"
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-slate-400">
                  MILESTONE {storyStages[activeStoryIndex].num}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mt-1">
                  {storyStages[activeStoryIndex].headline}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-semibold text-slate-800 hidden sm:inline-block">
                {storyStages[activeStoryIndex].stage}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed">
              
              {/* Box 1: What We Learned */}
              <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-950 uppercase tracking-wider font-mono text-[11px]">
                  1. WHAT WE LEARNED
                </div>
                <p className="text-slate-600 font-sans">
                  {storyStages[activeStoryIndex].learned}
                </p>
              </div>

              {/* Box 2: Why It Mattered */}
              <div className="p-5 bg-white rounded-xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-950 uppercase tracking-wider font-mono text-[11px]">
                  2. WHY IT MATTERED
                </div>
                <p className="text-slate-600 font-sans">
                  {storyStages[activeStoryIndex].mattered}
                </p>
              </div>

              {/* Box 3: How It Shaped Our Approach */}
              <div className="p-5 bg-slate-900 text-white rounded-xl border border-slate-800 space-y-2">
                <div className="font-bold text-emerald-400 uppercase tracking-wider font-mono text-[11px]">
                  3. OUR APPROACH
                </div>
                <p className="text-slate-300 font-sans">
                  {storyStages[activeStoryIndex].approach}
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 3: OUR BELIEF (Immersive Statement with Mesh Gradient)            */}
      {/* ========================================================================= */}
      <section className="py-20 relative overflow-hidden bg-slate-950 text-white border-b border-slate-800">
        
        {/* Subtle Mesh Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, #1e3a8a 0%, transparent 50%), radial-gradient(circle at 80% 70%, #0d9488 0%, transparent 50%), radial-gradient(circle at 50% 50%, #4338ca 0%, transparent 60%)`
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
            <Heart className="w-3.5 h-3.5 text-emerald-400" />
            <span>CORE BELIEF</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-4xl mx-auto">
            “Infrastructure Is Not A Department. <br className="hidden sm:inline" />
            It Is The Foundation Of Every Successful Digital Business.”
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
            When software infrastructure is designed with discipline, automation, and clear documentation, engineering teams move faster, systems scale effortlessly, and businesses thrive.
          </p>

          {/* Diagram Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 font-mono text-xs">
            <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-left space-y-1">
              <div className="text-emerald-400 font-bold">01. PREDICTABLE</div>
              <div className="text-slate-300">Deterministic uptime SLAs</div>
            </div>
            <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-left space-y-1">
              <div className="text-emerald-400 font-bold">02. AUTOMATED</div>
              <div className="text-slate-300">Zero manual click-ops</div>
            </div>
            <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-left space-y-1">
              <div className="text-emerald-400 font-bold">03. AUDITABLE</div>
              <div className="text-slate-300">100% version controlled</div>
            </div>
            <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-left space-y-1">
              <div className="text-emerald-400 font-bold">04. COST-ALIGNED</div>
              <div className="text-slate-300">Zero cloud waste</div>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 4: OUR ENGINEERING PRINCIPLES (Expandable Cards)                 */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#FCFCFA] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-700" />
              <span>GUIDING TECHNICAL DISCIPLINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              Our 6 Engineering Principles
            </h2>
            <p className="text-sm text-slate-600">
              The fundamental architectural rules that dictate every line of code, blueprint, and runbook we produce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((pr, idx) => {
              const isExpanded = expandedPrinciple === idx;
              return (
                <div
                  key={pr.title}
                  onClick={() => setExpandedPrinciple(isExpanded ? null : idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isExpanded 
                      ? 'bg-white border-slate-950 shadow-md ring-1 ring-slate-950'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded">
                        0{idx + 1}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isExpanded ? 'rotate-180 text-slate-950' : ''}`} />
                    </div>

                    <h3 className="font-bold text-base text-slate-950">{pr.title}</h3>
                    <p className="text-xs font-semibold text-slate-700 italic">
                      "{pr.statement}"
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {pr.explanation}
                    </p>
                  </div>

                  {/* Expanded Content Box */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-slate-100 space-y-3 text-[11px] font-mono"
                      >
                        <div>
                          <span className="text-slate-400 block font-bold">ENGINEERING EXAMPLE:</span>
                          <span className="text-slate-800 font-medium">{pr.example}</span>
                        </div>
                        <div>
                          <span className="text-emerald-700 block font-bold">BUSINESS IMPACT:</span>
                          <span className="text-slate-900 font-bold">{pr.impact}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!isExpanded && (
                    <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                      <span>CLICK TO INSPECT</span>
                      <span>DETAILS →</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 5: HOW WE THINK (Infrastructure Operating System™ Framework)      */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono">
              <Cpu className="w-3.5 h-3.5 text-slate-700" />
              <span>THE ARCHITECTURAL FRAMEWORK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              Infrastructure Operating System™
            </h2>
            <p className="text-sm text-slate-600">
              Our 5-layer methodology for transforming ad-hoc server setups into self-healing enterprise platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Stack Layers List */}
            <div className="lg:col-span-5 space-y-2">
              {iosLayers.map((layer, idx) => {
                const isActive = activeIOSLayer === idx;
                return (
                  <div
                    key={layer.id}
                    onClick={() => setActiveIOSLayer(idx)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-slate-950 text-white border-slate-950 shadow-md'
                        : 'bg-[#FCFCFA] text-slate-800 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono font-bold ${isActive ? 'text-emerald-400' : 'text-slate-400'}`}>
                        {layer.num}
                      </span>
                      <div>
                        <div className="font-bold text-sm">{layer.title}</div>
                        <div className={`text-xs ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                          {layer.subtitle}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                  </div>
                );
              })}
            </div>

            {/* Right Column: Layer Inspector Visual */}
            <div className="lg:col-span-7">
              <motion.div
                key={activeIOSLayer}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-8 bg-[#FCFCFA] rounded-2xl border border-slate-200 space-y-6 shadow-sm"
              >
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      LAYER {iosLayers[activeIOSLayer].num}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-950 mt-1">
                      {iosLayers[activeIOSLayer].title}: {iosLayers[activeIOSLayer].subtitle}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider block mb-1">
                      OPERATIONAL PHILOSOPHY:
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {iosLayers[activeIOSLayer].philosophy}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider block mb-2">
                      CORE CAPABILITIES INCLUDED:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
                      {iosLayers[activeIOSLayer].capabilities.map((cap) => (
                        <div key={cap} className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-800 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 font-mono text-xs space-y-1">
                    <span className="text-emerald-400 font-bold block">REAL-WORLD EXECUTION EXAMPLE:</span>
                    <p className="text-slate-300 font-sans text-xs">
                      {iosLayers[activeIOSLayer].example}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 6: WHAT MAKES US DIFFERENT (Interactive Comparison Slider)        */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#FCFCFA] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono">
              <Sliders className="w-3.5 h-3.5 text-slate-700" />
              <span>THE OPERATIONAL DIFFERENCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              Traditional DevOps vs. Aetheria Partnership
            </h2>
            <p className="text-sm text-slate-600">
              Why leading software startups, SaaS providers, and agencies switch from ticket-based vendors to an integrated operating partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Column 1: Traditional Infrastructure Approach */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span>Traditional Agency / Contractor</span>
                </h3>
                <span className="text-[10px] font-mono text-slate-400">TICKET BASED</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>Reactive Support:</strong> Waits for you to file a support ticket after users report an outage.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>Bill-by-the-Hour:</strong> Hourly billing creates financial incentives to make work take longer.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>Tool-Focused:</strong> Sells arbitrary software licenses and complex tools without business context.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>Short-Term Projects:</strong> Leaves static PDF recommendations and vanishes when issues occur.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span><strong>Limited Documentation:</strong> Tribal knowledge stays trapped in contractor notes.</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Our Partnership Approach */}
            <div className="p-6 bg-slate-950 text-white rounded-2xl border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="font-bold text-base text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Aetheria Operating Partnership</span>
                </h3>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded">
                  SLA BACKED
                </span>
              </div>

              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Proactive Engineering:</strong> Automated telemetry guards system health before incidents happen.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Strategic Partnership:</strong> Fixed transparent models aligned strictly with your uptime and growth.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Outcome-Focused:</strong> Directly reduces cloud spend, release bottlenecks, and MTTR metrics.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Long-Term Improvement:</strong> Continuously optimizes your architecture as your product evolves.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Knowledge-Driven Operations:</strong> Authoring open ADRs and IaC code repositories fully owned by you.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 7: OUR CULTURE (Human Technical Craftsmanship)                    */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono">
              <Users className="w-3.5 h-3.5 text-slate-700" />
              <span>THE ENGINEERING GUILD</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              Our Culture & Values
            </h2>
            <p className="text-sm text-slate-600">
              Built by engineers who value craftsmanship, deep technical curiosity, and direct human accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturePillars.map((cp) => {
              const Icon = cp.icon;
              return (
                <div key={cp.title} className="p-6 bg-[#FCFCFA] rounded-2xl border border-slate-200 space-y-3 hover:border-slate-300 transition-all shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-slate-950">{cp.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cp.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 8: THE FUTURE WE ARE BUILDING (Vision Evolution)                  */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#FCFCFA] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono">
              <Eye className="w-3.5 h-3.5 text-slate-700" />
              <span>LONG-TERM ROADMAP</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              The Future We Are Building
            </h2>
            <p className="text-sm text-slate-600">
              Transforming how digital infrastructure is designed, codified, and operated worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Today */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4 shadow-xs relative">
              <div className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded inline-block">
                TODAY
              </div>
              <h3 className="font-bold text-lg text-slate-950">Infrastructure Services</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Providing high-touch SRE operating partnerships, Terraform IaC blueprints, and FinOps optimization for scaling startups and agencies.
              </p>
            </div>

            {/* Tomorrow */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4 shadow-xs relative">
              <div className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded inline-block">
                TOMORROW
              </div>
              <h3 className="font-bold text-lg text-slate-950">Infrastructure Platform</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Releasing modular, open-source IaC generators, telemetry monitoring extensions, and automated compliance auditing tools.
              </p>
            </div>

            {/* Future */}
            <div className="p-6 bg-slate-950 text-white rounded-2xl border border-slate-800 space-y-4 shadow-md relative">
              <div className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 border border-emerald-800 px-2.5 py-1 rounded inline-block">
                FUTURE
              </div>
              <h3 className="font-bold text-lg text-white">Intelligent Operations</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Combining human SRE wisdom with autonomous, self-healing cloud telemetry and predictive traffic failover controls.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 9: VALUES (Muted Expressive Visual Blocks)                        */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-slate-700" />
              <span>CORE VALUES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              Principles That Define Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyValues.map((val) => (
              <div
                key={val.name}
                className={`p-6 rounded-2xl border shadow-sm space-y-3 ${val.bg}`}
              >
                <div className="font-mono font-bold text-xs uppercase tracking-wider opacity-60">
                  {val.name}
                </div>
                <h3 className="font-bold text-xl">{val.name}</h3>
                <p className="text-xs leading-relaxed opacity-90 font-sans">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 10: FINAL CTA                                                     */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#FCFCFA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl text-center space-y-6 relative overflow-hidden">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
              <Rocket className="w-3.5 h-3.5 text-emerald-400" />
              <span>BUILD WITH CONFIDENCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white max-w-2xl mx-auto leading-tight">
              Let's Build The Systems That Power Your Growth.
            </h2>

            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
              Whether you are launching, scaling, or improving your infrastructure, we would love to understand your journey and engineering goals.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={onNavigateContact}
                className="px-6 py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Start Technical Discovery</span>
                <ArrowRight className="w-4 h-4 text-slate-700" />
              </button>

              <button
                onClick={onNavigateHome}
                className="px-6 py-3.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-slate-400" />
                <span>Explore Capabilities</span>
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
