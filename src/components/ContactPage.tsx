import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Lottie from 'lottie-react';
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
  RotateCcw,
  Compass,
  ChevronDown
} from 'lucide-react';

// Subtle engineered validation checkmark Lottie JSON structure
const successLottieData = {
  v: "5.5.2",
  fr: 60,
  ip: 0,
  op: 60,
  w: 120,
  h: 120,
  nm: "Success Engineering Validation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Checkmark",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  i: [[0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0]],
                  v: [[-14, 2], [-4, 12], [16, -10]],
                  c: false
                }
              }
            },
            {
              ty: "st",
              c: { a: 0, k: [0.06, 0.72, 0.43, 1] },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 5 },
              lc: 2,
              lj: 2
            },
            {
              ty: "tm",
              s: { a: 0, k: 0 },
              e: {
                a: 1,
                k: [
                  { t: 10, s: [0], h: 1 },
                  { t: 40, s: [100], h: 1 }
                ]
              },
              o: { a: 0, k: 0 }
            },
            { ty: "tr", p: { a: 0, k: [0, 0] }, r: { a: 0, k: 0 }, s: { a: 0, k: [100, 100] }, o: { a: 0, k: 100 } }
          ]
        }
      ]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Outer Ring",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [76, 76] }
        },
        {
          ty: "st",
          c: { a: 0, k: [0.06, 0.72, 0.43, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 3 }
        },
        {
          ty: "tm",
          s: { a: 0, k: 0 },
          e: {
            a: 1,
            k: [
              { t: 0, s: [0], h: 1 },
              { t: 30, s: [100], h: 1 }
            ]
          },
          o: { a: 0, k: -90 }
        }
      ]
    }
  ]
};

interface ContactPageProps {
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  // SEO Setup on mount
  useEffect(() => {
    document.title = "Start Your Infrastructure Journey | Technical Discovery";

    // Set or update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Discuss your cloud architecture, DevOps, migration, reliability, and infrastructure challenges with experienced engineering specialists.'
    );

    // Schema ContactPoint JSON-LD Injection
    const schemaId = 'contact-page-schema';
    let schemaScript = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPoint",
      "contactType": "technical discovery",
      "areaServed": "Global",
      "availableLanguage": "English",
      "description": "Discuss your cloud architecture, DevOps, migration, reliability, and infrastructure challenges with experienced engineering specialists."
    });

    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      // Clean up title on unmount if needed
      document.title = "Aetheria | Infrastructure Operating Partner";
    };
  }, []);

  // Multi-step form state
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    persona: '',
    requirements: [] as string[],
    cloudProvider: '',
    techStack: '',
    appType: '',
    infraSize: '',
    teamSize: '',
    challenge: '',
    timeline: '',
    contactName: '',
    company: '',
    email: '',
    website: '',
    linkedIn: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Discovery Options
  const personaOptions = [
    { id: 'startup', title: 'Startup Founder', desc: 'Building & launching early to mid-stage tech platforms', icon: Rocket },
    { id: 'agency', title: 'Digital Agency', desc: 'Expanding cloud & DevOps capabilities for client work', icon: Building2 },
    { id: 'saas', title: 'SaaS Company', desc: 'Scaling infrastructure, reliability, and automated CI/CD', icon: Cloud },
    { id: 'engineering', title: 'Engineering Team', desc: 'Offloading SRE overhead & optimizing architecture', icon: Code },
    { id: 'enterprise', title: 'Enterprise Company', desc: 'Multi-region redundancy & zero-trust security', icon: Layers },
    { id: 'other', title: 'Other', desc: 'Unique cloud architecture or consulting need', icon: Compass }
  ];

  const requirementOptions = [
    'Cloud Architecture',
    'Infrastructure Migration',
    'DevOps Automation',
    'CI/CD',
    'Kubernetes',
    'Cloud Optimization',
    'Security Improvement',
    'Monitoring',
    'Performance',
    'Managed Infrastructure',
    'Technical Advisory'
  ];

  const cloudProviders = ['AWS', 'Google Cloud (GCP)', 'Microsoft Azure', 'Multi-Cloud', 'On-Premise / Hybrid', 'Other'];
  const infraSizes = ['< $5k/mo', '$5k – $25k/mo', '$25k – $100k/mo', '$100k+/mo', 'Not yet deployed'];
  const teamSizes = ['1–5 engineers', '6–20 engineers', '21–50 engineers', '50+ engineers'];
  const timelineOptions = ['Planning', 'Within 30 days', '1–3 months', 'Urgent production issue', 'Future planning'];

  const toggleRequirement = (req: string) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.includes(req)
        ? prev.requirements.filter(r => r !== req)
        : [...prev.requirements, req]
    }));
  };

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(prev => prev + 1);
      const el = document.getElementById('discovery-form-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      const el = document.getElementById('discovery-form-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    const el = document.getElementById('discovery-form-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setFormData({
      persona: '',
      requirements: [],
      cloudProvider: '',
      techStack: '',
      appType: '',
      infraSize: '',
      teamSize: '',
      challenge: '',
      timeline: '',
      contactName: '',
      company: '',
      email: '',
      website: '',
      linkedIn: ''
    });
  };

  const scrollToDiscovery = () => {
    const el = document.getElementById('discovery-form-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // FAQs
  const faqs = [
    {
      q: 'Do you work with existing developers?',
      a: 'Yes. We seamlessly embed with your engineering team, functioning as an extension of your staff. We co-author Infrastructure as Code (IaC), share production runbooks, and level-up your internal DevOps capabilities without creating vendor lock-in or developer bottlenecks.'
    },
    {
      q: 'Can you work with our current cloud provider?',
      a: 'Optionally and flexibly, yes. We specialize in AWS, Google Cloud Platform (GCP), and Azure, as well as hybrid and multi-cloud environments. We work directly within your existing cloud accounts and organization structure.'
    },
    {
      q: 'Do you support early-stage startups?',
      a: 'Yes. Through our Startup Program, we help early-stage teams build production-grade infrastructure baselines from day one, avoiding technical debt while keeping monthly burn rates strictly optimized.'
    },
    {
      q: 'Do you provide ongoing support?',
      a: 'Yes. We offer continuous 24/7 SRE operations, proactive telemetry monitoring, automated incident response, and ongoing FinOps cost optimization under formal uptime SLA guarantees.'
    },
    {
      q: 'Do you replace internal teams?',
      a: 'No. We augment your existing team by handling complex cloud architecture, CI/CD pipelines, security controls, and on-call SRE workloads so your developers can stay 100% focused on shipping core product features.'
    },
    {
      q: 'How quickly can we start?',
      a: 'Following our initial Technical Discovery conversation and requirements review, we can typically kick off an assessment, blueprint architecture draft, or engineering engagement within 3 to 5 business days.'
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#FCFCFA] text-slate-900 font-sans">
      
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
          <span className="text-slate-900 font-semibold">Technical Discovery</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: HERO                                                           */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden py-12 lg:py-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Typography & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono">
                <Cpu className="w-3.5 h-3.5 text-slate-700" />
                <span>DIRECT TECHNICAL DISCOVERY</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Let's Build Infrastructure That Supports Your Growth.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                Whether you are launching a startup, scaling a SaaS platform, expanding your agency capabilities, or improving existing production systems, we help you build reliable infrastructure designed for long-term growth.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={scrollToDiscovery}
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

              {/* Trust Indicators Pill Row */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-mono">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>No Sales Pitches</span>
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-slate-700" />
                  <span>Direct Architect Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-700" />
                  <span>24h Response Window</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Blueprint Visual (No AI / Neon) */}
            <div className="lg:col-span-5 relative">
              <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-slate-100 shadow-2xl relative overflow-hidden font-mono text-xs">
                {/* Blueprint Background Grid */}
                <div 
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
                    backgroundSize: '16px 16px'
                  }}
                />

                {/* Blueprint Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
                      AETHERIA TOPOLOGY BLUEPRINT v4.2
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    SLA: 99.999%
                  </span>
                </div>

                {/* Architecture Topology Layers Diagram */}
                <div className="space-y-4 relative z-10">
                  {/* Layer 1: Ingress Edge */}
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Globe className="w-4 h-4 text-emerald-400" />
                      <div>
                        <div className="font-bold text-slate-200">Global Edge & WAF Ingress</div>
                        <div className="text-[10px] text-slate-400">Cloudflare Enterprise • Anycast Routing</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded">
                      12.4ms
                    </span>
                  </div>

                  {/* Animated Connecting Line */}
                  <div className="flex justify-center my-1">
                    <div className="w-0.5 h-4 bg-slate-700 relative overflow-hidden">
                      <motion.div 
                        animate={{ y: [0, 16] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="w-full h-2 bg-emerald-400"
                      />
                    </div>
                  </div>

                  {/* Layer 2: Compute Cluster */}
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Server className="w-4 h-4 text-slate-300" />
                      <div>
                        <div className="font-bold text-slate-200">Multi-Region Kubernetes Fleet</div>
                        <div className="text-[10px] text-slate-400">EKS/GKE • Karpenter HPA Auto-scaler</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-300 bg-slate-700 px-2 py-0.5 rounded">
                      Zero Drift
                    </span>
                  </div>

                  {/* Animated Connecting Line */}
                  <div className="flex justify-center my-1">
                    <div className="w-0.5 h-4 bg-slate-700 relative overflow-hidden">
                      <motion.div 
                        animate={{ y: [0, 16] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.5 }}
                        className="w-full h-2 bg-emerald-400"
                      />
                    </div>
                  </div>

                  {/* Layer 3: Database & Vault */}
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Lock className="w-4 h-4 text-slate-300" />
                      <div>
                        <div className="font-bold text-slate-200">Encrypted Storage & KMS Vault</div>
                        <div className="text-[10px] text-slate-400">Aurora Multi-AZ • HashiCorp Secrets</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded">
                      Encrypted
                    </span>
                  </div>
                </div>

                {/* Footer Telemetry Banner */}
                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                  <span>SYSTEM STATUS: OPTIMAL</span>
                  <span className="text-slate-300">DOCUMENTED ARCHITECTURE</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 2: DISCOVERY START (Multi-Step Interactive Form)                  */}
      {/* ========================================================================= */}
      <section id="discovery-form-section" className="py-16 bg-white border-b border-slate-200/80 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-slate-700" />
              <span>STEP {currentStep} OF 6</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              Tell us about your situation.
            </h2>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              Share your current architecture setup and operational priorities so our Principal Engineers can review before our call.
            </p>

            {/* Progress Bar */}
            {!isSubmitted && (
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden max-w-xl mx-auto mt-6">
                <div 
                  className="bg-slate-900 h-full transition-all duration-300 ease-out"
                  style={{ width: `${(currentStep / 6) * 100}%` }}
                />
              </div>
            )}
          </div>

          {/* Submitted State Confirmation */}
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#FCFCFA] p-8 sm:p-12 rounded-2xl border border-slate-200 text-center space-y-6 shadow-sm"
            >
              <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto border border-emerald-200/80 shadow-xs relative overflow-hidden">
                <Lottie 
                  animationData={successLottieData} 
                  loop={false}
                  autoplay={true}
                  style={{ width: 68, height: 68 }}
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-950">
                  Technical Discovery Request Received
                </h3>
                <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.contactName || 'Engineer'}</strong>! Our Senior Infrastructure Specialists are reviewing your submission for <strong className="text-slate-900">{formData.company || 'your organization'}</strong>.
                </p>
              </div>

              {/* Summary of Inputs */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 text-left font-mono text-xs space-y-3 max-w-xl mx-auto">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
                  DISCOVERY SUMMARY CONFIRMATION
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-slate-700">
                  <div><strong>Role:</strong> {formData.persona || 'Not specified'}</div>
                  <div><strong>Cloud Provider:</strong> {formData.cloudProvider || 'Flexible'}</div>
                  <div><strong>Timeline:</strong> {formData.timeline || 'Planning'}</div>
                  <div><strong>Team Size:</strong> {formData.teamSize || 'N/A'}</div>
                </div>
                {formData.requirements.length > 0 && (
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-slate-500">Focus Areas:</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {formData.requirements.map(req => (
                        <span key={req} className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded text-[10px]">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-700 max-w-xl mx-auto flex items-center gap-3">
                <Clock className="w-4 h-4 text-slate-600 shrink-0" />
                <span>Next Step: A Principal Engineer will follow up via email within 24 hours with calendar availability for your Technical Discovery session.</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={resetForm}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors flex items-center gap-2 mx-auto cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                  <span>Submit Another Technical Discovery Request</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="bg-[#FCFCFA] p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* STEP 1: Who are you? */}
                {currentStep === 1 && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">Who are you?</h3>
                      <p className="text-xs text-slate-600 mt-1">Select the option that best describes your organization or role.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {personaOptions.map((opt) => {
                        const Icon = opt.icon;
                        const isSelected = formData.persona === opt.title;
                        return (
                          <div
                            key={opt.id}
                            onClick={() => setFormData({ ...formData, persona: opt.title })}
                            className={`p-5 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                              isSelected
                                ? 'bg-slate-950 text-white border-slate-950 shadow-sm'
                                : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <div className={`p-2.5 rounded-lg border shrink-0 ${
                              isSelected ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-100 border-slate-200 text-slate-700'
                            }`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-bold text-sm">{opt.title}</div>
                              <div className={`text-xs mt-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                                {opt.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: What are you looking for? */}
                {currentStep === 2 && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">What are you looking for?</h3>
                      <p className="text-xs text-slate-600 mt-1">Select all functional areas relevant to your immediate or future goals.</p>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {requirementOptions.map((req) => {
                        const isSelected = formData.requirements.includes(req);
                        return (
                          <button
                            type="button"
                            key={req}
                            onClick={() => toggleRequirement(req)}
                            className={`px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center gap-2 ${
                              isSelected
                                ? 'bg-slate-950 text-white border-slate-950 shadow-xs'
                                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            {isSelected ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            ) : (
                              <span className="w-3.5 h-3.5 rounded-full border border-slate-300 shrink-0" />
                            )}
                            <span>{req}</span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Current Environment */}
                {currentStep === 3 && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">Current Environment</h3>
                      <p className="text-xs text-slate-600 mt-1">Help us understand your current technical setup and scale.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Cloud Provider */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block font-mono">
                          Primary Cloud Provider
                        </label>
                        <select
                          value={formData.cloudProvider}
                          onChange={(e) => setFormData({ ...formData, cloudProvider: e.target.value })}
                          className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:border-slate-900"
                        >
                          <option value="">Select Cloud Provider...</option>
                          {cloudProviders.map(cp => (
                            <option key={cp} value={cp}>{cp}</option>
                          ))}
                        </select>
                      </div>

                      {/* Tech Stack */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block font-mono">
                          Technology Stack
                        </label>
                        <input
                          type="text"
                          value={formData.techStack}
                          onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                          placeholder="e.g. Node.js, Kubernetes, Terraform, Postgres..."
                          className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                        />
                      </div>

                      {/* Application Type */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block font-mono">
                          Application Type
                        </label>
                        <input
                          type="text"
                          value={formData.appType}
                          onChange={(e) => setFormData({ ...formData, appType: e.target.value })}
                          placeholder="e.g. B2B SaaS, Microservices, E-commerce, Mobile API..."
                          className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                        />
                      </div>

                      {/* Infrastructure Size */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block font-mono">
                          Infrastructure Spend / Scale
                        </label>
                        <select
                          value={formData.infraSize}
                          onChange={(e) => setFormData({ ...formData, infraSize: e.target.value })}
                          className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:border-slate-900"
                        >
                          <option value="">Select Spend / Scale...</option>
                          {infraSizes.map(is => (
                            <option key={is} value={is}>{is}</option>
                          ))}
                        </select>
                      </div>

                      {/* Team Size */}
                      <div className="space-y-2 sm:col-span-2">
                        <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block font-mono">
                          Engineering Team Size
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {teamSizes.map((ts) => (
                            <button
                              type="button"
                              key={ts}
                              onClick={() => setFormData({ ...formData, teamSize: ts })}
                              className={`p-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                                formData.teamSize === ts
                                  ? 'bg-slate-950 text-white border-slate-950'
                                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              {ts}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Current Challenge */}
                {currentStep === 4 && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">Current Challenge</h3>
                      <p className="text-xs text-slate-600 mt-1">What primary infrastructure, operational, or scaling issue are you trying to solve?</p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block font-mono">
                        Describe Your Situation
                      </label>
                      <textarea
                        rows={5}
                        value={formData.challenge}
                        onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                        placeholder="What infrastructure challenge are you trying to solve? (e.g. deployment outages during peak traffic, manual release bottleneck, high monthly AWS bill, lack of disaster recovery, preparing for growth)..."
                        className="w-full p-4 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 leading-relaxed"
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: Timeline */}
                {currentStep === 5 && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">Timeline</h3>
                      <p className="text-xs text-slate-600 mt-1">How quickly do you plan to take action or begin engineering execution?</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {timelineOptions.map((tl) => (
                        <div
                          key={tl}
                          onClick={() => setFormData({ ...formData, timeline: tl })}
                          className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                            formData.timeline === tl
                              ? 'bg-slate-950 text-white border-slate-950 shadow-xs'
                              : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <span className="font-semibold text-xs">{tl}</span>
                          {formData.timeline === tl && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 6: Contact Details */}
                {currentStep === 6 && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">Contact Details</h3>
                      <p className="text-xs text-slate-600 mt-1">Provide your details so our engineering lead can review and connect with you.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block font-mono">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.contactName}
                          onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block font-mono">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Systems"
                          className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block font-mono">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@acme.com"
                          className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block font-mono">
                          Website (Optional)
                        </label>
                        <input
                          type="url"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          placeholder="https://acme.com"
                          className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                        />
                      </div>

                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block font-mono">
                          LinkedIn Profile (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.linkedIn}
                          onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                          placeholder="https://linkedin.com/in/janedoe"
                          className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Form Controls Navigation */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 6 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>Continue to Step {currentStep + 1}</span>
                      <ChevronRight className="w-4 h-4 text-slate-300" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                    >
                      <Send className="w-4 h-4 text-emerald-400" />
                      <span>Submit Technical Discovery Request</span>
                    </button>
                  )}
                </div>

              </form>
            </div>
          )}

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 3: WHAT HAPPENS AFTER SUBMISSION                                  */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#FCFCFA] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono">
              <Clock className="w-3.5 h-3.5 text-slate-700" />
              <span>TRANSPARENT PROCESS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              What Happens After Submission
            </h2>
            <p className="text-sm text-slate-600">
              We respect your time. Here is our direct, engineer-led process from submission to operational execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs relative space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded">
                  STEP 01
                </span>
                <FileText className="w-5 h-5 text-slate-700" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-950">Technical Review</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  We review your requirements, stack, and current setup before our conversation.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs relative space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded">
                  STEP 02
                </span>
                <Users className="w-5 h-5 text-slate-700" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-950">Discovery Call</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  We understand your goals, constraints, traffic metrics, and reliability targets.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs relative space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded">
                  STEP 03
                </span>
                <Cpu className="w-5 h-5 text-slate-700" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-950">Infrastructure Recommendation</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  We suggest the right approach, architecture blueprints, and execution roadmap.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs relative space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded">
                  STEP 04
                </span>
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-950">Execution Partnership</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  We help build, improve, and operate your infrastructure with documented SLAs.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 4: ENGAGEMENT TYPES                                               */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono">
              <Layers className="w-3.5 h-3.5 text-slate-700" />
              <span>FLEXIBLE ENGAGEMENTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              Structured Engagement Models
            </h2>
            <p className="text-sm text-slate-600">
              Adaptable options tailored to your engineering maturity, timeline, and team requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="p-6 bg-[#FCFCFA] rounded-2xl border border-slate-200 space-y-4 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-950">Infrastructure Assessment</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For teams evaluating their current setup, performance bottlenecks, cost efficiency, and security posture.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-500">
                Fixed-Scope Review
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-[#FCFCFA] rounded-2xl border border-slate-200 space-y-4 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-950">Project Delivery</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For cloud migrations, architecture overhauls, IaC implementations, Kubernetes deployments, and reliability upgrades.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-500">
                Milestone Execution
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-[#FCFCFA] rounded-2xl border border-slate-200 space-y-4 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-bold text-base text-slate-950">Long-Term Partnership</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For companies needing ongoing, embedded infrastructure expertise, 24/7 telemetry monitoring, and SRE operations.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-500">
                Continuous Operations
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-6 bg-[#FCFCFA] rounded-2xl border border-slate-200 space-y-4 hover:border-slate-300 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-950">Agency Collaboration</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For digital studios looking for a trusted engineering partner to deliver robust multi-cloud solutions for client projects.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-500">
                White-Label Support
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 5: WHY COMPANIES TALK TO US                                       */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#FCFCFA] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-slate-700" />
              <span>CORE DIFFERENTIATORS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              Why Companies Talk To Us
            </h2>
            <p className="text-sm text-slate-600">
              We combine deep engineering rigor with strategic business execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-base text-slate-950">Engineering Expertise</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct guidance from senior cloud architects with extensive hands-on experience in AWS, GCP, and Kubernetes ecosystems.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
                <BarChart2 className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-base text-slate-950">Business Understanding</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Infrastructure decisions aligned with monthly cloud budget, customer SLAs, product delivery velocity, and business scale.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-base text-slate-950">Clear Documentation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprehensive Architecture Decision Records (ADRs), 100% Terraform IaC repositories, and step-by-step incident runbooks.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-base text-slate-950">Long-Term Partnership</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We function as a dependable operating partner, continually refining architecture as your platform grows.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
                <Terminal className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-base text-slate-950">Automation First Mindset</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Eliminating manual click-ops interventions and human error through declarative, repeatable deployment automation.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <h3 className="font-bold text-base text-slate-950">Reliable Operations</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sustained 99.999% availability with automated health checks, self-healing pod topologies, and rapid incident resolution.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 6: FAQ                                                            */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono">
              <HelpCircle className="w-3.5 h-3.5 text-slate-700" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950">
              Technical Discovery Questions
            </h2>
            <p className="text-sm text-slate-600">
              Common questions about working with our infrastructure engineering team.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-[#FCFCFA] rounded-xl border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-950 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* SECTION 7: FINAL CTA                                                      */}
      {/* ========================================================================= */}
      <section className="py-16 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span>READY TO CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Build Infrastructure With Confidence.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Every successful digital business depends on reliable infrastructure. Start a conversation with engineers who understand systems, scalability, and operations.
          </p>

          <div className="pt-4">
            <button
              onClick={scrollToDiscovery}
              className="px-8 py-4 rounded-xl text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 border border-white transition-all shadow-lg inline-flex items-center gap-2.5 cursor-pointer"
            >
              <span>Begin Technical Discovery</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
