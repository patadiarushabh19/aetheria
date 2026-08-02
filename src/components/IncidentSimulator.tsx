import React, { useState } from 'react';
import { INCIDENT_RESPONSE_STEPS } from '../data/infrastructureData';
import { 
  AlertTriangle, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck, 
  Zap, 
  Clock, 
  UserCheck, 
  Cpu 
} from 'lucide-react';

export const IncidentSimulator: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentStep = INCIDENT_RESPONSE_STEPS[activeStepIndex];

  const handleNextStep = () => {
    if (activeStepIndex < INCIDENT_RESPONSE_STEPS.length - 1) {
      setActiveStepIndex(prev => prev + 1);
    } else {
      setActiveStepIndex(0);
    }
  };

  const handlePlayAll = () => {
    setIsPlaying(true);
    setActiveStepIndex(0);

    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      if (idx < INCIDENT_RESPONSE_STEPS.length) {
        setActiveStepIndex(idx);
      } else {
        clearInterval(interval);
        setIsPlaying(false);
      }
    }, 2200);
  };

  return (
    <section className="py-24 bg-[#FFFFFF] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-wider text-slate-800 uppercase bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full font-semibold shadow-xs">
            INCIDENT RESPONSE STANDARD OPERATING PROCEDURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 mt-4 tracking-tight">
            Our 3-Minute MTTR Incident Remediation Loop
          </h2>
          <p className="text-slate-600 mt-4 text-base font-normal leading-relaxed">
            When production outages occur, hope is not a strategy. Experience how our automated telemetry and embedded SREs resolve critical P0 incidents before your clients even notice.
          </p>
        </div>

        {/* Interactive Simulator Shell */}
        <div className="bg-[#FCFCFA] rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8">
          
          {/* Controls Bar */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span className="text-xs font-mono text-slate-900 font-semibold uppercase">
                INTERACTIVE DRILL SIMULATOR
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePlayAll}
                disabled={isPlaying}
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs font-mono transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 shadow-xs"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>{isPlaying ? 'Running Drill...' : 'Run Automated Drill'}</span>
              </button>

              <button
                onClick={() => { setActiveStepIndex(0); setIsPlaying(false); }}
                className="p-2 rounded-lg bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Timeline Step Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {INCIDENT_RESPONSE_STEPS.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  activeStepIndex === idx
                    ? 'bg-slate-900 text-white border-slate-900 font-semibold shadow-xs'
                    : idx < activeStepIndex
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className="text-[10px] font-mono text-slate-500 mb-1">
                  T+{step.timeOffsetSeconds}s ({step.phase})
                </div>
                <div className="text-xs font-bold truncate">{step.title}</div>
              </button>
            ))}
          </div>

          {/* Active Step Deep-Dive Card */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-xs">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase bg-slate-100 text-slate-900 border border-slate-200 px-2.5 py-1 rounded font-bold">
                  PHASE: {currentStep.phase}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  TIMESTAMP: T+{currentStep.timeOffsetSeconds} SECONDS
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-sans">{currentStep.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{currentStep.description}</p>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs font-mono text-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase mb-1">ACTION EXECUTED BY ({currentStep.actor}):</span>
                <div className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{currentStep.actionTaken}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 p-6 rounded-xl border border-slate-200 text-center space-y-4">
              <div className="inline-flex p-3 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block font-semibold">CLIENT IMPACT RESULT</span>
                <div className="text-lg font-mono font-bold text-emerald-800 mt-1">Zero Downtime Recorded</div>
              </div>
              <p className="text-xs text-slate-600">
                Client engineers slept through the night. Post-mortem report generated automatically in Slack.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
