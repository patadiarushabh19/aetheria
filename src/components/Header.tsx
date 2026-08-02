import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Activity, 
  Cpu, 
  Terminal, 
  ChevronRight, 
  ChevronDown,
  Menu, 
  X, 
  Sparkles,
  Search,
  Server,
  Cloud,
  Zap,
  Shield,
  Layers,
  Compass,
  Code,
  BookOpen,
  FileText,
  CheckCircle2,
  Calculator,
  Rocket,
  Building2,
  Users,
  Flame,
  Sun,
  Moon,
  Lock,
  Database,
  Network,
  ArrowRight,
  GraduationCap,
  Globe,
  FileCheck2,
  BarChart2,
  Wrench,
  Award,
  Sliders,
  Check
} from 'lucide-react';

interface HeaderProps {
  onOpenAssessment: () => void;
  onOpenIntake: (defaultCategory?: string) => void;
  onOpenCommandPalette?: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  onNavigateContact?: () => void;
  onNavigateHome?: () => void;
  onNavigateAbout?: () => void;
  currentPath?: string;
}

type MegaMenuType = 'capabilities' | 'solutions' | 'resources' | 'company' | null;

export const Header: React.FC<HeaderProps> = ({
  onOpenAssessment,
  onOpenIntake,
  onOpenCommandPalette,
  activeSection,
  setActiveSection,
  onNavigateContact,
  onNavigateHome,
  onNavigateAbout,
  currentPath = '/'
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<MegaMenuType>(null);
  
  // Desktop Active Mega Menu
  const [activeMegaMenu, setActiveMegaMenu] = useState<MegaMenuType>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Theme mode toggle indicator state (Default: Production Dark Mode as per Brand System)
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: MegaMenuType) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveMegaMenu(menu);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // CAPABILITIES ITEMS
  const capabilitiesGroups = [
    {
      title: "Cloud & Platform Engineering",
      items: [
        {
          name: "AWS & GCP Landing Zones",
          desc: "Multi-account Control Tower, transit gateways & zero-trust IAM",
          outcomes: "100% IaC, Zero configuration drift",
          tech: "Terraform, OpenTofu, AWS, GCP",
          action: () => scrollToSection('architecture')
        },
        {
          name: "Kubernetes & Containers",
          desc: "EKS/GKE autoscaling, Karpenter node provisioning & ArgoCD GitOps",
          outcomes: "Sub-45s pod spin-up, 38% compute savings",
          tech: "Kubernetes, Karpenter, Docker, Helm",
          action: () => scrollToSection('architecture')
        }
      ]
    },
    {
      title: "Operations & Reliability",
      items: [
        {
          name: "24/7 Managed SRE Operations",
          desc: "Proactive telemetry, incident escalation & 3.8-minute MTTR SLA",
          outcomes: "99.999% production availability",
          tech: "Datadog, Prometheus, PagerDuty",
          action: () => scrollToSection('telemetry')
        },
        {
          name: "FinOps & Cost Optimization",
          desc: "Continuous cloud waste elimination, spot pools & compute rightsizing",
          outcomes: "35% average annual spend reduction",
          tech: "AWS Cost Explorer, Kubecost",
          action: () => scrollToSection('finops')
        }
      ]
    },
    {
      title: "Security & Resilience",
      items: [
        {
          name: "Zero-Trust & Security Hardening",
          desc: "KMS key rotation, automated audit trail & Cloudflare anti-DDoS",
          outcomes: "Production-ready in 14 days",
          tech: "AWS KMS, Vault, Cloudflare WAF",
          action: () => scrollToSection('telemetry')
        },
        {
          name: "Zero-Downtime Migrations",
          desc: "Logical replication, multi-TB database cutover & failover drills",
          outcomes: "Zero data loss, < 5s cutover lag",
          tech: "PostgreSQL, Aurora, pgcopydb",
          action: () => scrollToSection('cases')
        }
      ]
    }
  ];

  // SOLUTIONS ITEMS
  const audienceSolutions = [
    {
      title: "For Digital Agencies",
      badge: "AGENCY ALLIANCE",
      desc: "White-label infrastructure, pre-sales engineering & 35% margin uplift",
      outcomes: "Eliminate client downtime & expand retainer revenue",
      action: () => scrollToSection('agency-partnership'),
      icon: Building2
    },
    {
      title: "For Tech Startups",
      badge: "STARTUP PROGRAM",
      desc: "From MVP to global scale — architecture, CI/CD, security posture & cloud optimization",
      outcomes: "Launch 3x faster with production-grade reliability",
      action: () => scrollToSection('startup-program'),
      icon: Rocket
    },
    {
      title: "For SaaS & AI Platforms",
      badge: "SCALED PLATFORMS",
      desc: "Multi-tenant isolation, GPU node scaling, vector DB clusters & 99.999% uptime",
      outcomes: "Scale to millions of requests without architectural redesign",
      action: () => scrollToSection('solutions'),
      icon: Zap
    },
    {
      title: "For Enterprise Teams",
      badge: "ENTERPRISE SRE",
      desc: "Hybrid multi-cloud, governance guardrails, dedicated SRE squads & custom SLAs",
      outcomes: "Modernize legacy stacks with zero business disruption",
      action: () => scrollToSection('solutions'),
      icon: ShieldCheck
    }
  ];

  // RESOURCES ITEMS
  const resourceHighlights = [
    {
      name: "Engineering Academy & Knowledge Base",
      desc: "140+ Architecture Decision Records (ADRs), Terraform modules & guides",
      type: "KNOWLEDGE HUB",
      action: () => scrollToSection('knowledge-center')
    },
    {
      name: "Interactive Infrastructure Tools™",
      desc: "Blueprint Generator, Production Readiness Score & FinOps Calculator",
      type: "SPECIAL TOOLS",
      action: () => scrollToSection('knowledge-center')
    },
    {
      name: "Runbook & Decision Matrix Library",
      desc: "Zero-downtime DB migrations, Karpenter HPA & Incident Drills",
      type: "PRODUCTION RUNBOOKS",
      action: () => scrollToSection('runbooks')
    },
    {
      name: "Structured Learning Paths",
      desc: "4 to 6-week curriculum for Founders, SREs, and Tech Leads",
      type: "ACADEMY PATHS",
      action: () => scrollToSection('knowledge-center')
    }
  ];

  // COMPANY ITEMS
  const companyLinks = [
    { name: "About Us", desc: "Our story, engineering philosophy & mission", action: () => { if (onNavigateAbout) onNavigateAbout(); else if (onNavigateHome) onNavigateHome(); } },
    { name: "Operating Philosophy & Manifesto", desc: "Why infrastructure is a strategic business asset", action: () => { if (onNavigateHome) onNavigateHome(); scrollToSection('philosophy'); } },
    { name: "Live Telemetry & Global SLA", desc: "Real-time verification of 48,000+ active nodes", action: () => { if (onNavigateHome) onNavigateHome(); scrollToSection('telemetry'); } },
    { name: "Proven Case Studies", desc: "How we saved clients $14.2M in annual cloud waste", action: () => { if (onNavigateHome) onNavigateHome(); scrollToSection('cases'); } },
    { name: "Agency Alliance Program", desc: "Empowering agencies with white-label cloud SRE", action: () => { if (onNavigateHome) onNavigateHome(); scrollToSection('agency-partnership'); } },
    { name: "Startup Growth Program", desc: "Architectural foundation for high-growth tech teams", action: () => { if (onNavigateHome) onNavigateHome(); scrollToSection('startup-program'); } }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Live Infrastructure Telemetry Bar */}
      <div className="bg-slate-900 text-xs text-slate-300 py-1.5 px-4 font-mono overflow-x-auto whitespace-nowrap border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              GLOBAL TELEMETRY: 99.999% SLA
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400">ACTIVE NODES: <strong className="text-slate-200">48,520</strong></span>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">AVG MTTR: <strong className="text-emerald-400">3.8 MINS</strong></span>
            <span className="text-slate-700 hidden md:inline">|</span>
            <span className="text-slate-400 hidden md:inline">SAVINGS GENERATED: <strong className="text-slate-200">$14.2M/YR</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] bg-slate-800 text-slate-300 border border-slate-700 px-2 py-0.5 rounded font-mono">
              SECURITY BEST PRACTICES
            </span>
            <span className="text-[10px] bg-slate-800 text-slate-300 border border-slate-700 px-2 py-0.5 rounded font-mono hidden lg:inline">
              OPERATIONAL EXCELLENCE
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`transition-all duration-200 relative ${
          isScrolled 
            ? 'bg-white/95 border-b border-slate-200 shadow-sm backdrop-blur-md py-3' 
            : 'bg-[#FCFCFA]/90 border-b border-slate-200/80 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => {
              if (onNavigateHome) {
                onNavigateHome();
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="h-9 w-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-white shadow-sm group-hover:bg-slate-800 transition-all">
              <Cpu className="w-4 h-4 text-white group-hover:scale-105 transition-transform" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base tracking-wider text-slate-900 font-mono">AETHERIA</span>
                <span className="text-[10px] font-mono tracking-widest uppercase bg-slate-100 border border-slate-200 text-slate-700 px-1.5 py-0.5 rounded">
                  INFRA OPS
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-sans tracking-tight">Infrastructure Operating Partner</p>
            </div>
          </div>

          {/* Desktop Navigation Links with Mega Menu Triggers */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200">
            
            {/* CAPABILITIES MEGA MENU TRIGGER */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('capabilities')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => {
                  if (onNavigateHome) onNavigateHome();
                  scrollToSection('architecture');
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeMegaMenu === 'capabilities' 
                    ? 'bg-white text-slate-900 shadow-sm font-semibold border border-slate-200' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <span>Capabilities</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${activeMegaMenu === 'capabilities' ? 'rotate-180 text-slate-900' : ''}`} />
              </button>
            </div>

            {/* SOLUTIONS MEGA MENU TRIGGER */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => {
                  if (onNavigateHome) onNavigateHome();
                  scrollToSection('solutions');
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeMegaMenu === 'solutions' 
                    ? 'bg-white text-slate-900 shadow-sm font-semibold border border-slate-200' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${activeMegaMenu === 'solutions' ? 'rotate-180 text-slate-900' : ''}`} />
              </button>
            </div>

            {/* RESOURCES MEGA MENU TRIGGER */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => {
                  if (onNavigateHome) onNavigateHome();
                  scrollToSection('knowledge-center');
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeMegaMenu === 'resources' 
                    ? 'bg-white text-slate-900 shadow-sm font-semibold border border-slate-200' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <span>Resources</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${activeMegaMenu === 'resources' ? 'rotate-180 text-slate-900' : ''}`} />
              </button>
            </div>

            {/* COMPANY MEGA MENU TRIGGER */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => {
                  if (onNavigateHome) onNavigateHome();
                  scrollToSection('philosophy');
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeMegaMenu === 'company' 
                    ? 'bg-white text-slate-900 shadow-sm font-semibold border border-slate-200' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <span>Company</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${activeMegaMenu === 'company' ? 'rotate-180 text-slate-900' : ''}`} />
              </button>
            </div>

            {/* ABOUT US NAV LINK */}
            <button
              onClick={() => {
                if (onNavigateAbout) onNavigateAbout();
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                currentPath === '/about' 
                  ? 'bg-slate-950 text-white shadow-sm font-semibold' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <span>About Us</span>
            </button>

            {/* CONTACT / DISCOVERY NAV LINK */}
            <button
              onClick={() => {
                if (onNavigateContact) onNavigateContact();
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                currentPath === '/contact' 
                  ? 'bg-slate-950 text-white shadow-sm font-semibold' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <span>Contact</span>
            </button>

          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Command Palette Trigger */}
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="px-3 py-2 rounded-xl text-xs font-mono text-slate-600 bg-white border border-slate-200 hover:border-slate-300 hover:text-slate-900 transition-all flex items-center gap-2 shadow-xs group cursor-pointer"
                title="Search platform commands and runbooks (⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-slate-500 group-hover:scale-105 transition-transform" />
                <span className="hidden lg:inline text-slate-600">Search</span>
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500 bg-slate-100 border border-slate-200 rounded">
                  ⌘K
                </kbd>
              </button>
            )}

            {/* Primary Action Button: Book Discovery */}
            <button
              onClick={() => onOpenIntake()}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-900 shadow-xs transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Book Technical Discovery</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-slate-300" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenIntake()}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-900 md:hidden cursor-pointer"
            >
              Book Discovery
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* DESKTOP MEGA MENU DROPDOWN PANELS                                          */}
        {/* ========================================================================= */}
        {activeMegaMenu && (
          <div 
            onMouseEnter={() => handleMouseEnter(activeMegaMenu)}
            onMouseLeave={handleMouseLeave}
            className="hidden lg:block absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl backdrop-blur-2xl transition-all animate-in fade-in slide-in-from-top-2 duration-200 z-50"
          >
            <div className="max-w-7xl mx-auto px-6 py-8">
              
              {/* 1. CAPABILITIES MEGA MENU */}
              {activeMegaMenu === 'capabilities' && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-8 grid grid-cols-3 gap-6">
                    {capabilitiesGroups.map((group, idx) => (
                      <div key={idx} className="space-y-4">
                        <div className="text-[11px] font-mono font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                          {group.title}
                        </div>
                        <div className="space-y-3">
                          {group.items.map((item, i) => (
                            <div 
                              key={i}
                              onClick={item.action}
                              className="group p-3 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 hover:bg-white transition-all cursor-pointer shadow-xs"
                            >
                              <div className="font-bold text-xs text-slate-900 group-hover:text-blue-900 flex items-center justify-between">
                                <span>{item.name}</span>
                                <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all" />
                              </div>
                              <p className="text-[11px] text-slate-600 mt-1 leading-normal line-clamp-2">{item.desc}</p>
                              <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono text-slate-700">
                                <span>{item.outcomes}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Side Panel: Featured Diagnostics */}
                  <div className="col-span-4 bg-[#FCFCFA] border border-slate-200 p-6 rounded-2xl space-y-4 shadow-xs">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-slate-700" />
                      <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">FEATURED ASSESSMENTS</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Evaluate your cloud architecture against battle-tested SRE standards before scaling.
                    </p>
                    <div className="space-y-2 pt-1">
                      {[
                        { title: "Infrastructure Health Check™", action: onOpenAssessment, badge: "DIAGNOSTIC" },
                        { title: "Production Readiness Assessment™", action: onOpenAssessment, badge: "AUDIT" },
                        { title: "Cloud Cost Opportunity Review™", action: () => scrollToSection('finops'), badge: "FINOPS" }
                      ].map((ass, i) => (
                        <button
                          key={i}
                          onClick={ass.action}
                          className="w-full text-left p-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-xs font-semibold text-slate-800 hover:text-slate-950 flex items-center justify-between transition-colors shadow-xs cursor-pointer"
                        >
                          <span>{ass.title}</span>
                          <span className="text-[9px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                            {ass.badge}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 2. SOLUTIONS MEGA MENU */}
              {activeMegaMenu === 'solutions' && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-8 grid grid-cols-2 gap-4">
                    {audienceSolutions.map((sol, idx) => {
                      const Icon = sol.icon;
                      return (
                        <div
                          key={idx}
                          onClick={sol.action}
                          className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 hover:bg-white transition-all cursor-pointer group flex items-start gap-4 shadow-xs"
                        >
                          <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 group-hover:text-blue-900 transition-colors shrink-0 shadow-xs">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-900">{sol.title}</h4>
                              <span className="text-[9px] font-mono bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded border border-slate-200">
                                {sol.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-600 leading-normal">{sol.desc}</p>
                            <p className="text-[10px] font-mono text-slate-700 pt-1">
                              ✓ {sol.outcomes}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Right Side Panel: Special Partnerships */}
                  <div className="col-span-4 bg-[#FCFCFA] border border-slate-200 p-6 rounded-2xl space-y-4 shadow-xs">
                    <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider block">
                      FLAGSHIP PROGRAMS
                    </span>
                    <div className="space-y-3">
                      <div 
                        onClick={() => scrollToSection('agency-partnership')}
                        className="p-3 bg-white rounded-xl border border-slate-200 hover:border-slate-300 cursor-pointer shadow-xs"
                      >
                        <h5 className="text-xs font-bold text-slate-900">Agency Alliance Program</h5>
                        <p className="text-[11px] text-slate-600 mt-1">Pre-sales engineering, 35% margin share & 24/7 client SLA guarantee.</p>
                      </div>
                      <div 
                        onClick={() => scrollToSection('startup-program')}
                        className="p-3 bg-white rounded-xl border border-slate-200 hover:border-slate-300 cursor-pointer shadow-xs"
                      >
                        <h5 className="text-xs font-bold text-slate-900">Startup Operating Partner Program</h5>
                        <p className="text-[11px] text-slate-600 mt-1">From Seed to Series B — zero-downtime architecture & security readiness.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. RESOURCES MEGA MENU */}
              {activeMegaMenu === 'resources' && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-8 grid grid-cols-2 gap-4">
                    {resourceHighlights.map((res, idx) => (
                      <div
                        key={idx}
                        onClick={res.action}
                        className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 hover:bg-white transition-all cursor-pointer group space-y-2 shadow-xs"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                            {res.type}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-800 group-hover:translate-x-0.5 transition-all" />
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-900">{res.name}</h4>
                        <p className="text-[11px] text-slate-600 leading-normal">{res.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Right Side Panel: Featured Knowledge Base Entry */}
                  <div className="col-span-4 bg-[#FCFCFA] border border-slate-200 p-6 rounded-2xl space-y-3 shadow-xs">
                    <span className="text-[10px] font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 font-bold">
                      FEATURED ADR BLUEPRINT
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">Production Kubernetes Autoscaling & Karpenter HPA</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      How to achieve sub-45 second JIT pod provisioning on AWS EKS with zero eviction latency.
                    </p>
                    <button
                      onClick={() => scrollToSection('knowledge-center')}
                      className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs font-mono rounded-lg transition-colors cursor-pointer shadow-xs"
                    >
                      Read Technical Article →
                    </button>
                  </div>
                </div>
              )}

              {/* 4. COMPANY MEGA MENU */}
              {activeMegaMenu === 'company' && (
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-8 grid grid-cols-2 gap-3">
                    {companyLinks.map((link, idx) => (
                      <div
                        key={idx}
                        onClick={link.action}
                        className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 hover:bg-white transition-all cursor-pointer group shadow-xs"
                      >
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-900 flex items-center justify-between">
                          <span>{link.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-800 transition-transform" />
                        </h4>
                        <p className="text-[11px] text-slate-600 mt-1">{link.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="col-span-4 bg-[#FCFCFA] border border-slate-200 p-6 rounded-2xl space-y-3 shadow-xs">
                    <span className="text-xs font-mono text-slate-800 font-bold block">
                      OUR CORE COMMITMENT
                    </span>
                    <blockquote className="text-xs text-slate-700 italic leading-relaxed border-l-2 border-slate-900 pl-3">
                      "Infrastructure is not a department. It is the foundation of every successful digital business."
                    </blockquote>
                    <button
                      onClick={() => onOpenIntake()}
                      className="w-full py-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-xs font-mono text-slate-900 transition-colors shadow-xs cursor-pointer"
                    >
                      Speak with Lead Architect →
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* MOBILE FULL-SCREEN NAVIGATION DRAWER                                      */}
        {/* ========================================================================= */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-8 mt-2 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
            
            {/* Search Input Button */}
            {onOpenCommandPalette && (
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenCommandPalette(); }}
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-slate-600" />
                  <span>Search Runbooks & Commands...</span>
                </span>
                <kbd className="px-2 py-0.5 text-[10px] bg-white border border-slate-200 text-slate-500 rounded">⌘K</kbd>
              </button>
            )}

            {/* Mobile Accordion Navigation Sections */}
            <div className="space-y-2">
              
              {/* Capabilities Accordion */}
              <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
                <button
                  onClick={() => setMobileAccordion(mobileAccordion === 'capabilities' ? null : 'capabilities')}
                  className="w-full p-3.5 text-left text-xs font-bold text-slate-900 flex items-center justify-between"
                >
                  <span>Capabilities & Engineering</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobileAccordion === 'capabilities' ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === 'capabilities' && (
                  <div className="p-3 pt-0 space-y-2 text-xs font-mono text-slate-700 border-t border-slate-200">
                    <button onClick={() => scrollToSection('architecture')} className="block w-full text-left py-1.5 text-slate-900 hover:underline">AWS/GCP Architecture Studio</button>
                    <button onClick={() => scrollToSection('telemetry')} className="block w-full text-left py-1.5 text-slate-900 hover:underline">24/7 Managed Telemetry & SRE</button>
                    <button onClick={() => scrollToSection('finops')} className="block w-full text-left py-1.5 text-slate-900 hover:underline">FinOps Cloud Cost Optimization</button>
                  </div>
                )}
              </div>

              {/* Solutions Accordion */}
              <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
                <button
                  onClick={() => setMobileAccordion(mobileAccordion === 'solutions' ? null : 'solutions')}
                  className="w-full p-3.5 text-left text-xs font-bold text-slate-900 flex items-center justify-between"
                >
                  <span>Target Programs & Solutions</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobileAccordion === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === 'solutions' && (
                  <div className="p-3 pt-0 space-y-2 text-xs font-mono text-slate-700 border-t border-slate-200">
                    <button onClick={() => scrollToSection('agency-partnership')} className="block w-full text-left py-1.5 text-slate-900 hover:underline">Agency Alliance Partnership</button>
                    <button onClick={() => scrollToSection('startup-program')} className="block w-full text-left py-1.5 text-slate-900 hover:underline">Startup Operating Partner Program</button>
                    <button onClick={() => scrollToSection('solutions')} className="block w-full text-left py-1.5 text-slate-900 hover:underline">SaaS & Enterprise Engineering</button>
                  </div>
                )}
              </div>

              {/* Resources Accordion */}
              <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
                <button
                  onClick={() => setMobileAccordion(mobileAccordion === 'resources' ? null : 'resources')}
                  className="w-full p-3.5 text-left text-xs font-bold text-slate-900 flex items-center justify-between"
                >
                  <span>Knowledge Base & Tools</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobileAccordion === 'resources' ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === 'resources' && (
                  <div className="p-3 pt-0 space-y-2 text-xs font-mono text-slate-700 border-t border-slate-200">
                    <button onClick={() => scrollToSection('knowledge-center')} className="block w-full text-left py-1.5 text-slate-900 hover:underline">Engineering Knowledge Base</button>
                    <button onClick={() => scrollToSection('runbooks')} className="block w-full text-left py-1.5 text-slate-900 hover:underline">Runbook Library & Decision Matrix</button>
                  </div>
                )}
              </div>

              {/* Direct Quick Links */}
              <button onClick={() => scrollToSection('philosophy')} className="w-full p-3.5 text-left text-xs font-bold text-slate-700 hover:text-slate-900 block">Operating Philosophy</button>
              <button onClick={() => scrollToSection('cases')} className="w-full p-3.5 text-left text-xs font-bold text-slate-700 hover:text-slate-900 block">Proven Case Studies</button>
            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAssessment(); }}
                className="w-full py-3 rounded-xl text-xs font-semibold text-slate-800 bg-slate-100 border border-slate-200 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-slate-600" />
                <span>Run Infrastructure Diagnostic</span>
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenIntake(); }}
                className="w-full py-3 rounded-xl text-xs font-bold text-white bg-slate-900 flex items-center justify-center gap-2"
              >
                <span>Book Technical Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </nav>
    </header>
  );
};
