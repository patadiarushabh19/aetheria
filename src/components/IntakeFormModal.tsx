import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Calendar, Clock, Terminal } from 'lucide-react';
import { AssessmentAnswers } from '../types';

interface IntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledAnswers?: AssessmentAnswers | null;
}

export const IntakeFormModal: React.FC<IntakeModalProps> = ({
  isOpen,
  onClose,
  prefilledAnswers
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'CTO / VP Engineering',
    monthlySpend: prefilledAnswers?.monthlySpend || '$10k - $50k/mo',
    primaryGoal: prefilledAnswers?.primaryGoal || 'Achieve 99.999% SLA & Eliminate Outages',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#FFFFFF] border border-slate-200 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-[#FCFCFA] p-6 border-b border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-slate-800 uppercase tracking-wider block font-bold">TECHNICAL INTAKE</span>
            <h3 className="text-lg font-bold text-slate-950 font-sans">Schedule Partner Discovery Consultation</h3>
          </div>
          <button 
            onClick={() => { setSubmitted(false); onClose(); }}
            className="p-2 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {prefilledAnswers && (
                <div className="bg-slate-100 border border-slate-200 p-3.5 rounded-xl text-xs font-mono text-slate-800 shadow-xs">
                  <span className="font-bold block mb-1 text-slate-950">Diagnostic Brief Attached:</span>
                  <span>Provider: {prefilledAnswers.cloudProvider} | Spend: {prefilledAnswers.monthlySpend} | Goal: {prefilledAnswers.primaryGoal}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 text-xs font-mono">
                  <label className="text-slate-600 block font-semibold">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-slate-900 font-sans focus:border-slate-900 outline-none shadow-xs"
                  />
                </div>

                <div className="space-y-1 text-xs font-mono">
                  <label className="text-slate-600 block font-semibold">Work Email *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-slate-900 font-sans focus:border-slate-900 outline-none shadow-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 text-xs font-mono">
                  <label className="text-slate-600 block font-semibold">Company Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Company Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-slate-900 font-sans focus:border-slate-900 outline-none shadow-xs"
                  />
                </div>

                <div className="space-y-1 text-xs font-mono">
                  <label className="text-slate-600 block font-semibold">Role *</label>
                  <select 
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-slate-900 font-sans focus:border-slate-900 outline-none shadow-xs"
                  >
                    <option>CTO / VP Engineering</option>
                    <option>Startup Founder / CEO</option>
                    <option>Agency Principal / Partner</option>
                    <option>Engineering Manager</option>
                    <option>Principal Architect</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1 text-xs font-mono">
                <label className="text-slate-600 block font-semibold">Infrastructure & Architecture Notes (Optional)</label>
                <textarea 
                  rows={3}
                  placeholder="Tell us about your current stack, pain points, or upcoming migration goals..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-slate-900 font-sans focus:border-slate-900 outline-none text-xs shadow-xs"
                />
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-600 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>NDA Protected & Confidential</span>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Submit Intake & Schedule Call</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>

            </form>
          ) : (
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono text-slate-800 uppercase tracking-wider block font-bold">CONFIRMED — BRIEF #AETH-8921</span>
                <h3 className="text-2xl font-bold text-slate-950 font-sans mt-1">Partnership Brief Received</h3>
                <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto leading-relaxed">
                  A Principal Systems Architect has been assigned to <strong className="text-slate-950">{formData.company}</strong>. We will review your architecture specs and send a calendar invitation to <strong className="text-slate-950 font-semibold">{formData.email}</strong> shortly.
                </p>
              </div>

              <div className="bg-[#FCFCFA] p-4 rounded-xl border border-slate-200 text-left font-mono text-xs max-w-md mx-auto space-y-2 shadow-xs">
                <div className="text-slate-500 text-[10px] uppercase font-bold">NEXT STEPS IN YOUR OPERATIONAL ONBOARDING:</div>
                <div className="text-slate-800 font-medium">1. Receive confidential technical intake review</div>
                <div className="text-slate-800 font-medium">2. 30-Minute Architecture Deep-Dive with Principal SRE</div>
                <div className="text-slate-800 font-medium">3. Receive custom IaC Blueprint & SLA proposal</div>
              </div>

              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="px-8 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-xs cursor-pointer"
              >
                Return to Website
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
