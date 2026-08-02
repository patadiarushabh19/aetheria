import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/infrastructureData';
import { CaseStudy } from '../types';
import { 
  Building2, 
  TrendingUp, 
  Quote, 
  CheckCircle2, 
  ArrowRight, 
  Award,
  Layers
} from 'lucide-react';

interface CaseStudiesProps {
  onOpenIntake: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenIntake }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy>(CASE_STUDIES[0]);

  return (
    <section id="cases" className="py-24 bg-[#FFFFFF] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-wider text-slate-800 uppercase bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full font-semibold shadow-xs">
            PROVEN OPERATIONAL RESULTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 mt-4 tracking-tight">
            Trusted with Production-Critical Systems
          </h2>
          <p className="text-slate-600 mt-4 text-base font-normal leading-relaxed">
            Read how digital agencies, FinTech gateways, and HealthTech SaaS leaders scale reliably with Aetheria as their Infrastructure Operating Partner.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {CASE_STUDIES.map((study) => (
            <button
              key={study.id}
              onClick={() => setSelectedCase(study)}
              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer shadow-xs ${
                selectedCase.id === study.id
                  ? 'bg-slate-900 border-slate-900 text-white'
                  : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300'
              }`}
            >
              <div className={`text-[10px] font-mono uppercase mb-1 ${selectedCase.id === study.id ? 'text-slate-300' : 'text-slate-500 font-semibold'}`}>{study.clientIndustry}</div>
              <h4 className="font-bold text-sm">{study.clientType}</h4>
              <p className={`text-xs mt-2 line-clamp-2 ${selectedCase.id === study.id ? 'text-slate-300' : 'text-slate-600'}`}>{study.headline}</p>
            </button>
          ))}
        </div>

        {/* Selected Case Deep Dive Card */}
        <div className="bg-[#FCFCFA] rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono uppercase text-slate-800 font-bold">{selectedCase.clientIndustry}</span>
              <h3 className="text-2xl font-bold text-slate-950 font-sans mt-1">{selectedCase.clientType}</h3>
            </div>
            <div className="text-xs font-mono bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg shadow-xs font-semibold">
              Architecture: <strong className="text-slate-950">{selectedCase.architectureSummary}</strong>
            </div>
          </div>

          {/* Hard Metrics Showcase Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {selectedCase.results.map((res, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 space-y-1 shadow-xs">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-emerald-700">{res.metric}</div>
                <div className="text-xs font-bold text-slate-900 uppercase font-mono">{res.value}</div>
                <div className="text-[11px] text-slate-600">{res.label}</div>
              </div>
            ))}
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2 shadow-xs">
              <span className="text-xs font-mono text-amber-700 uppercase font-bold">THE OPERATIONAL CHALLENGE</span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{selectedCase.challenge}</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2 shadow-xs">
              <span className="text-xs font-mono text-emerald-700 uppercase font-bold">AETHERIA OPERATING SOLUTION</span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{selectedCase.solution}</p>
            </div>
          </div>

          {/* Quote Block */}
          {selectedCase.quote && (
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex items-start gap-4">
              <Quote className="w-8 h-8 text-slate-400 shrink-0 mt-1 opacity-60" />
              <div className="space-y-2">
                <p className="text-sm italic text-slate-800 leading-relaxed font-normal">"{selectedCase.quote.text}"</p>
                <div className="text-xs font-mono">
                  <strong className="text-slate-950">{selectedCase.quote.author}</strong> — <span className="text-slate-600 font-medium">{selectedCase.quote.role}</span>
                </div>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-slate-200 flex justify-end">
            <button
              onClick={onOpenIntake}
              className="px-6 py-3 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center gap-2 cursor-pointer text-xs shadow-xs"
            >
              <span>Schedule Technical Discovery Call</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
