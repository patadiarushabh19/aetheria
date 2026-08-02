import React, { useState } from 'react';
import { PARTNER_AUDIENCES } from '../data/infrastructureData';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle, 
  Zap, 
  Sparkles,
  Building,
  Rocket,
  Code2,
  Briefcase
} from 'lucide-react';

interface AudienceSolutionsProps {
  onOpenIntake: () => void;
}

export const AudienceSolutions: React.FC<AudienceSolutionsProps> = ({ onOpenIntake }) => {
  const [activeAudienceId, setActiveAudienceId] = useState<'saas' | 'agencies' | 'startups' | 'ctos'>('saas');

  const currentAudience = PARTNER_AUDIENCES.find(a => a.id === activeAudienceId) || PARTNER_AUDIENCES[0];

  return (
    <section id="solutions" className="py-24 bg-[#FFFFFF] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-slate-700 uppercase bg-slate-100 border border-slate-200 px-3 py-1 rounded-full shadow-xs">
            TAILORED OPERATING PARTNERSHIPS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 mt-4 tracking-tight">
            Architected for Your Specific Business Phase
          </h2>
          <p className="text-slate-600 mt-4 text-base font-normal">
            Whether you run a digital agency with 50+ clients or a scaling FinTech SaaS, our Operating Partner model seamlessly adapts to your organizational needs.
          </p>
        </div>

        {/* Audience Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PARTNER_AUDIENCES.map((aud) => (
            <button
              key={aud.id}
              onClick={() => setActiveAudienceId(aud.id)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 cursor-pointer ${
                activeAudienceId === aud.id
                  ? 'bg-slate-900 text-white shadow-xs font-bold scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {aud.id === 'saas' && <Rocket className="w-4 h-4" />}
              {aud.id === 'agencies' && <Building className="w-4 h-4" />}
              {aud.id === 'startups' && <Sparkles className="w-4 h-4" />}
              {aud.id === 'ctos' && <Code2 className="w-4 h-4" />}
              <span>{aud.title}</span>
            </button>
          ))}
        </div>

        {/* Detailed Audience Persona Card */}
        <div className="bg-[#FCFCFA] rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Problem & Solution Breakdown */}
            <div className="lg:col-span-8 space-y-6">
              
              <div>
                <span className="text-xs font-mono uppercase bg-white text-slate-800 border border-slate-200 px-3 py-1 rounded-md font-semibold shadow-xs">
                  {currentAudience.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3 font-sans leading-snug">
                  {currentAudience.headline}
                </h3>
              </div>

              {/* Friction & Pain Points */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3 shadow-xs">
                <span className="text-xs font-mono text-amber-800 font-semibold uppercase flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700" />
                  Primary Operational Friction We Eliminate
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                  {currentAudience.painPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-amber-700 shrink-0 font-bold">•</span>
                      <span className="text-slate-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Features */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-slate-900 font-semibold uppercase flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-slate-800" />
                  What You Receive as an Aetheria Operating Partner
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                  {currentAudience.solutionFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Key Guarantee & Action Box */}
            <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 text-center space-y-6 flex flex-col justify-between shadow-xs">
              
              <div className="space-y-4">
                <div className="inline-flex p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-900">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">CONTRACTUAL SLA GUARANTEE</span>
                  <div className="text-xl font-bold text-slate-900 mt-1 font-mono">{currentAudience.slaGuarantee}</div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">KEY OPERATIONAL IMPACT</span>
                  <div className="text-2xl font-mono font-bold text-slate-900 mt-1">{currentAudience.keyMetric}</div>
                </div>
              </div>

              <button
                onClick={onOpenIntake}
                className="w-full py-3.5 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-900 shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <span>Initiate Partner Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
