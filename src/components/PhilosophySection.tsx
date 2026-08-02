import React from 'react';
import { 
  ShieldCheck, 
  XCircle, 
  CheckCircle2, 
  HelpCircle, 
  Zap, 
  Users, 
  TrendingUp, 
  Award,
  Layers,
  ArrowRight,
  Clock,
  DollarSign
} from 'lucide-react';

interface PhilosophySectionProps {
  onOpenIntake: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ onOpenIntake }) => {
  const comparisonRows = [
    {
      feature: 'Operational Relationship',
      agency: 'Transactional ticket-taker (Hourly billing)',
      inHouse: 'Expensive full-time headcount ($220k+/yr)',
      aetheria: 'Embedded SRE Operating Partner (Fractional or Dedicated)',
      highlight: true
    },
    {
      feature: 'SLA Liability & Financial Backing',
      agency: 'Zero liability or uptime guarantees',
      inHouse: 'No SLA backstop (Staff burnout risk)',
      aetheria: 'Contractually backed 99.999% SLA Guarantee',
      highlight: true
    },
    {
      feature: '24/7 Incident Paging & Response',
      agency: '9 to 5 support (Overtime charges apply)',
      inHouse: 'On-call fatigue & developer midnight pages',
      aetheria: 'Under 15-Min P3 to P0 Guaranteed SRE On-Call',
      highlight: true
    },
    {
      feature: 'Infrastructure Delivery Standard',
      agency: 'Ad-hoc manual cloud clicks / legacy scripts',
      inHouse: 'Varies by engineer seniority & documentation',
      aetheria: '100% Declarative Terraform / Helm GitOps Blueprints',
      highlight: false
    },
    {
      feature: 'Security & Compliance Posture',
      agency: 'Manual security patches (Extra invoice)',
      inHouse: 'Requires hiring separate SecOps specialists',
      aetheria: 'Turnkey Zero-Trust Security & Hardened Controls',
      highlight: false
    },
    {
      feature: 'Continuous Cloud Cost Optimization',
      agency: 'Incentivized when you spend more hours',
      inHouse: 'Rarely prioritized over product roadmap',
      aetheria: 'FinOps SRE guarantee targeting 25–40% waste reduction',
      highlight: true
    }
  ];

  return (
    <section id="philosophy" className="py-24 bg-[#F7F7F5] relative overflow-hidden border-t border-slate-200">
      
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-dot-matrix opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-slate-700 uppercase bg-white border border-slate-200 px-3 py-1 rounded-full shadow-xs">
            THE OPERATING MODEL DIFFERENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 mt-4 tracking-tight">
            Why Technology Leaders Choose an <br />
            <span className="text-slate-900">
              Infrastructure Operating Partner
            </span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg font-normal leading-relaxed">
            Hiring full-time SREs is slow and expensive. Hiring traditional agencies yields fragmented, unmaintained scripts. Aetheria provides an operating partnership model designed for long-term scalability.
          </p>
        </div>

        {/* Brand Philosophy Callout Card */}
        <div className="mb-16 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-mono text-slate-700 tracking-wider uppercase font-semibold">
                OUR GUIDING PHILOSOPHY
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                "Infrastructure is not a department. It’s the foundation of every successful digital business."
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                When your cloud infrastructure is fragile, every product release is fraught with risk, developer morale drops, and customer trust degrades. As your Operating Partner, we treat your system architecture with the same urgency, rigor, and pride as an internal co-founder.
              </p>
            </div>

            <div className="md:col-span-4 bg-[#FCFCFA] p-6 rounded-xl border border-slate-200 text-center space-y-3 shadow-xs">
              <div className="text-3xl font-mono font-bold text-slate-900">99.999%</div>
              <div className="text-xs font-mono text-slate-700 uppercase tracking-wider font-semibold">PRODUCTION UPTIME TARGET</div>
              <p className="text-xs text-slate-600">Backing your SaaS, Agency, or FinTech platform with guaranteed contractual SLAs.</p>
            </div>
          </div>
        </div>

        {/* Comparison Matrix Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-sans">Operating Model Matrix</h3>
              <p className="text-xs text-slate-600">Detailed comparison across execution, cost, and SLA accountability.</p>
            </div>
            <span className="text-xs font-mono bg-white border border-slate-200 text-slate-800 px-3 py-1 rounded-full font-semibold shadow-xs">
              ENGINEERING RIGOR GUARANTEED
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#FCFCFA] text-slate-600 font-mono text-[11px] uppercase border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6 font-semibold w-1/4">Operating Vector</th>
                  <th className="py-4 px-6 font-semibold text-slate-500 w-1/4">Traditional Agency</th>
                  <th className="py-4 px-6 font-semibold text-slate-500 w-1/4">In-House SRE Hire</th>
                  <th className="py-4 px-6 font-semibold text-slate-900 bg-slate-100/70 border-x border-slate-200 w-1/4">
                    AETHERIA OPERATING PARTNER
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={row.highlight ? 'bg-slate-50/50' : 'hover:bg-slate-50/80'}>
                    <td className="py-4 px-6 font-semibold text-slate-900 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{row.agency}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{row.inHouse}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 bg-slate-100/70 border-x border-slate-200 text-slate-950 font-semibold">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                        <span className="text-slate-900">{row.aetheria}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-[#FCFCFA] border-t border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-600 font-mono text-left">
              Ready to replace guesswork with deterministic infrastructure reliability?
            </p>
            <button
              onClick={onOpenIntake}
              className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-xs"
            >
              <span>Explore Partner Engagement Models</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
