import React from 'react';
import { Cpu, ShieldCheck, Activity, Terminal, Lock } from 'lucide-react';

interface FooterProps {
  onOpenAssessment: () => void;
  onOpenIntake: () => void;
  setActiveSection: (section: string) => void;
  onNavigateContact?: () => void;
  onNavigateHome?: () => void;
  onNavigateAbout?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAssessment,
  onOpenIntake,
  setActiveSection,
  onNavigateContact,
  onNavigateHome,
  onNavigateAbout
}) => {
  const scrollTo = (id: string) => {
    if (onNavigateHome) onNavigateHome();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#FCFCFA] border-t border-slate-200 text-slate-600 font-sans pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand Col 5 */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-900 flex items-center justify-center text-white shadow-xs">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-wider text-slate-950 font-mono">AETHERIA</span>
                <span className="text-[10px] font-mono uppercase bg-slate-200 text-slate-800 px-1.5 py-0.5 rounded font-semibold">
                  INFRA OPS
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed max-w-md">
              "Infrastructure is not a department. It’s the foundation of every successful digital business."
            </p>
            <p className="text-xs text-slate-600 font-normal max-w-md leading-relaxed">
              Aetheria is the Infrastructure Operating Partner behind modern digital agencies, SaaS scaleups, FinTech platforms, and technology leaders worldwide.
            </p>

            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-900 text-xs font-mono font-semibold shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>ALL SYSTEMS OPERATIONAL (99.999% SLA)</span>
            </div>
          </div>

          {/* Nav Col 3 */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-slate-950 font-bold uppercase tracking-wider block">OPERATING PLATFORM</span>
            <ul className="space-y-2 text-slate-600 font-medium">
              <li><button onClick={() => onNavigateAbout ? onNavigateAbout() : scrollTo('philosophy')} className="hover:text-slate-950 transition-colors">About Us</button></li>
              <li><button onClick={() => scrollTo('philosophy')} className="hover:text-slate-950 transition-colors">Operating Model</button></li>
              <li><button onClick={() => scrollTo('architecture')} className="hover:text-slate-950 transition-colors">Architecture Studio</button></li>
              <li><button onClick={() => scrollTo('telemetry')} className="hover:text-slate-950 transition-colors">Live Telemetry Engine</button></li>
              <li><button onClick={() => scrollTo('solutions')} className="hover:text-slate-950 transition-colors">Target Personas</button></li>
              <li><button onClick={() => scrollTo('startup-program')} className="hover:text-slate-950 transition-colors">Startup Operating Partner Program</button></li>
              <li><button onClick={() => scrollTo('agency-partnership')} className="hover:text-slate-950 transition-colors">Agency Alliance Program</button></li>
              <li><button onClick={() => scrollTo('finops')} className="hover:text-slate-950 transition-colors">FinOps & ROI Calculator</button></li>
              <li><button onClick={() => scrollTo('cases')} className="hover:text-slate-950 transition-colors">Proven Case Studies</button></li>
              <li><button onClick={() => scrollTo('runbooks')} className="hover:text-slate-950 transition-colors">Technical Runbooks & ADRs</button></li>
              <li><button onClick={() => onNavigateContact ? onNavigateContact() : scrollTo('contact')} className="text-slate-900 font-semibold hover:underline transition-colors flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Contact / Discovery</button></li>
            </ul>
          </div>

          {/* Security & Operational Standards Col 4 */}
          <div className="md:col-span-4 space-y-4 font-mono text-xs">
            <span className="text-slate-950 font-bold uppercase tracking-wider block">SECURITY & OPERATIONAL STANDARDS</span>
            <p className="text-slate-600 text-[11px] leading-relaxed font-sans font-normal">
              All infrastructure operating procedures strictly follow industry-recognized security controls, zero-trust architecture, and documented engineering guardrails.
            </p>

            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="bg-white p-2 rounded-lg border border-slate-200 text-slate-800 flex items-center gap-1.5 font-semibold shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>SECURITY BEST PRACTICES</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-slate-200 text-slate-800 flex items-center gap-1.5 font-semibold shadow-xs">
                <Lock className="w-3.5 h-3.5 text-slate-900" />
                <span>OPERATIONAL EXCELLENCE</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-slate-200 text-slate-800 flex items-center gap-1.5 font-semibold shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>ZERO-TRUST ARCHITECTURE</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-slate-200 text-slate-800 flex items-center gap-1.5 font-semibold shadow-xs">
                <Lock className="w-3.5 h-3.5 text-slate-900" />
                <span>DOCUMENTATION FIRST</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenIntake}
                className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs font-sans transition-all text-center shadow-xs cursor-pointer"
              >
                Schedule Technical Intake
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © 2026 Aetheria Infrastructure Operations Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Security Whitepaper</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">SLA Agreement</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
