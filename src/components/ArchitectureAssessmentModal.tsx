import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Activity, Award } from 'lucide-react';
import { AssessmentAnswers } from '../types';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenIntakeWithAnswers: (answers: AssessmentAnswers) => void;
}

export const ArchitectureAssessmentModal: React.FC<AssessmentModalProps> = ({
  isOpen,
  onClose,
  onOpenIntakeWithAnswers
}) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<AssessmentAnswers>({
    cloudProvider: 'AWS',
    monthlySpend: '$10k - $50k/mo',
    teamSize: '10 - 30 Engineers',
    onCallBurden: 'High - Developers get midnight pages',
    complianceNeeds: ['Security Hardening'],
    primaryGoal: 'Achieve 99.999% SLA & Eliminate Outages'
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleCalculateScore = () => {
    onOpenIntakeWithAnswers(answers);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#FFFFFF] border border-slate-200 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative">
        
        {/* Modal Header */}
        <div className="bg-[#FCFCFA] p-6 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span className="font-bold text-slate-950 text-base font-sans">Infrastructure Maturity Diagnostic</span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {step === 1 && (
            <div className="space-y-4">
              <span className="text-xs font-mono text-slate-800 font-bold uppercase tracking-wider">STEP 1 OF 3: INFRASTRUCTURE PROFILE</span>
              <h3 className="text-lg font-bold text-slate-950">Select Primary Cloud Environment & Monthly Spend</h3>

              <div className="space-y-3">
                <label className="text-xs font-mono text-slate-600 block font-semibold">Primary Cloud Provider</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                  {['AWS', 'GCP', 'Azure', 'Multi-Cloud'].map((provider) => (
                    <button
                      key={provider}
                      onClick={() => setAnswers({ ...answers, cloudProvider: provider })}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer shadow-xs ${
                        answers.cloudProvider === provider
                          ? 'bg-slate-900 border-slate-900 text-white font-bold'
                          : 'bg-white border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-300 font-medium'
                      }`}
                    >
                      {provider}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-mono text-slate-600 block font-semibold">Current Monthly Cloud Spend</label>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  {['Under $10k/mo', '$10k - $50k/mo', '$50k - $150k/mo', '$150k+/mo'].map((spend) => (
                    <button
                      key={spend}
                      onClick={() => setAnswers({ ...answers, monthlySpend: spend })}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer shadow-xs ${
                        answers.monthlySpend === spend
                          ? 'bg-slate-900 border-slate-900 text-white font-bold'
                          : 'bg-white border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-300 font-medium'
                      }`}
                    >
                      {spend}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <span className="text-xs font-mono text-slate-800 font-bold uppercase tracking-wider">STEP 2 OF 3: OPERATIONAL FRICTION</span>
              <h3 className="text-lg font-bold text-slate-950">What is your biggest operational pain point today?</h3>

              <div className="space-y-2 text-xs font-mono">
                {[
                  'High - Developers get midnight pages & burnout',
                  'Moderate - On-call rotation exists but slows down feature releases',
                  'Low - No dedicated on-call, outages handled ad-hoc',
                  'Critical - High security & reliability requirements with zero SecOps team'
                ].map((burden) => (
                  <button
                    key={burden}
                    onClick={() => setAnswers({ ...answers, onCallBurden: burden })}
                    className={`w-full p-3 rounded-xl border text-left transition-all cursor-pointer shadow-xs ${
                      answers.onCallBurden === burden
                        ? 'bg-slate-900 border-slate-900 text-white font-bold'
                        : 'bg-white border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-300 font-medium'
                    }`}
                  >
                    {burden}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <span className="text-xs font-mono text-slate-800 font-bold uppercase tracking-wider">STEP 3 OF 3: DESIRED OUTCOME</span>
              <h3 className="text-lg font-bold text-slate-950">Select Your Primary Operating Goal</h3>

              <div className="space-y-2 text-xs font-mono">
                {[
                  'Achieve 99.999% SLA & Eliminate Unplanned Outages',
                  'Offload 24/7 On-Call Paging from Feature Developers',
                  'Cut Cloud Spend by 30-40% via FinOps Optimization',
                  'Implement Zero-Trust & Production Security Hardening'
                ].map((goal) => (
                  <button
                    key={goal}
                    onClick={() => setAnswers({ ...answers, primaryGoal: goal })}
                    className={`w-full p-3 rounded-xl border text-left transition-all cursor-pointer shadow-xs ${
                      answers.primaryGoal === goal
                        ? 'bg-slate-900 border-slate-900 text-white font-bold'
                        : 'bg-white border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-300 font-medium'
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-[#FCFCFA] p-6 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500 font-medium">Aetheria Security & Privacy Guaranteed</span>

          {step < 3 ? (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Next Question</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          ) : (
            <button
              onClick={handleCalculateScore}
              className="px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Generate Diagnostic Brief</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
