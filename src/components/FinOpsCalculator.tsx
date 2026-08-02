import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingDown, 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  PieChart,
  HelpCircle
} from 'lucide-react';
import { FinOpsCalculatorInput } from '../types';

interface FinOpsCalculatorProps {
  onOpenIntake: () => void;
}

export const FinOpsCalculator: React.FC<FinOpsCalculatorProps> = ({ onOpenIntake }) => {
  const [inputs, setInputs] = useState<FinOpsCalculatorInput>({
    monthlyCloudSpend: 25000,
    activeNodesCount: 85,
    engineeringTeamSize: 12,
    monthlyIncidents: 3,
    cloudProvider: 'AWS'
  });

  // Calculation formulas
  const annualCloudSpend = inputs.monthlyCloudSpend * 12;
  const estimatedSavingsMin = Math.round(annualCloudSpend * 0.28);
  const estimatedSavingsMax = Math.round(annualCloudSpend * 0.42);
  const devHoursSavedPerMonth = inputs.engineeringTeamSize * 18; // ~18 hours per dev per month saved from infra firestorms
  const annualDevHoursSaved = devHoursSavedPerMonth * 12;
  const devSalaryValueSaved = Math.round((annualDevHoursSaved * 95)); // $95/hr avg dev cost

  return (
    <section id="finops" className="py-24 bg-[#FFFFFF] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-wider text-slate-800 uppercase bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full font-semibold shadow-xs">
            FINOPS & OPERATIONAL ROI CALCULATOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 mt-4 tracking-tight">
            Calculate Your Cloud Waste & Operational Leverage
          </h2>
          <p className="text-slate-600 mt-4 text-base font-normal leading-relaxed">
            Most technology companies overpay for idle cloud compute by 30% to 50% while wasting precious engineering velocity fighting infrastructure fires.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="bg-[#FCFCFA] rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left 6 Cols: Input Controls */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-slate-950 font-sans flex items-center gap-2">
              <Calculator className="w-5 h-5 text-slate-900" />
              <span>Input Your Current Infrastructure Metrics</span>
            </h3>

            {/* Monthly Cloud Spend Slider */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3 shadow-xs">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-600 font-semibold">Monthly Cloud Bill (AWS/GCP/Azure)</span>
                <span className="text-slate-950 font-bold text-sm">${inputs.monthlyCloudSpend.toLocaleString()}/mo</span>
              </div>
              <input 
                type="range" 
                min="3000" 
                max="150000" 
                step="1000"
                value={inputs.monthlyCloudSpend}
                onChange={(e) => setInputs({ ...inputs, monthlyCloudSpend: Number(e.target.value) })}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>$3,000/mo</span>
                <span>$75,000/mo</span>
                <span>$150,000/mo+</span>
              </div>
            </div>

            {/* Active Nodes Slider */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3 shadow-xs">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-600 font-semibold">Estimated Active Compute Nodes / Servers</span>
                <span className="text-slate-950 font-bold text-sm">{inputs.activeNodesCount} Nodes</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="500" 
                step="5"
                value={inputs.activeNodesCount}
                onChange={(e) => setInputs({ ...inputs, activeNodesCount: Number(e.target.value) })}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
            </div>

            {/* Engineering Team Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 shadow-xs">
                <label className="text-xs font-mono text-slate-600 font-semibold block">Dev Team Size</label>
                <input 
                  type="number" 
                  min="2" 
                  max="200"
                  value={inputs.engineeringTeamSize}
                  onChange={(e) => setInputs({ ...inputs, engineeringTeamSize: Math.max(1, Number(e.target.value)) })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-sm text-slate-900 font-mono focus:border-slate-900 outline-none"
                />
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 shadow-xs">
                <label className="text-xs font-mono text-slate-600 font-semibold block">Monthly Incidents/Spikes</label>
                <input 
                  type="number" 
                  min="0" 
                  max="50"
                  value={inputs.monthlyIncidents}
                  onChange={(e) => setInputs({ ...inputs, monthlyIncidents: Math.max(0, Number(e.target.value)) })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-sm text-slate-900 font-mono focus:border-slate-900 outline-none"
                />
              </div>
            </div>

          </div>

          {/* Right 6 Cols: Calculated Impact Output */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 flex flex-col justify-between space-y-6 shadow-xs">
            
            <div>
              <span className="text-xs font-mono text-slate-800 uppercase tracking-wider font-semibold block mb-2">
                PROJECTED AETHERIA FINOPS IMPACT
              </span>
              <h4 className="text-xl font-bold text-slate-950 font-sans">Estimated Annual Savings & Velocity ROI</h4>

              {/* Big Savings Number Card */}
              <div className="mt-6 bg-slate-50 p-6 rounded-xl border border-slate-200 text-center space-y-2">
                <span className="text-xs font-mono text-slate-500 uppercase font-semibold">PROJECTED ANNUAL CLOUD WASTE REDUCTION</span>
                <div className="text-3xl sm:text-4xl font-mono font-bold text-emerald-700">
                  ${estimatedSavingsMin.toLocaleString()} – ${estimatedSavingsMax.toLocaleString()}
                </div>
                <p className="text-xs text-slate-600">
                  Via Karpenter Graviton spot fleets, right-sizing, and Aurora global pooling.
                </p>
              </div>

              {/* Dev Velocity Output */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1">
                  <span className="text-slate-500 block">ANNUAL DEV HOURS SAVED:</span>
                  <span className="text-lg font-bold text-slate-900">{annualDevHoursSaved.toLocaleString()} Hours</span>
                  <span className="text-[10px] text-slate-500 block">Redirected to product features</span>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1">
                  <span className="text-slate-500 block">ENGINEERING CAPACITY REGAINED:</span>
                  <span className="text-lg font-bold text-emerald-700">+${devSalaryValueSaved.toLocaleString()}</span>
                  <span className="text-[10px] text-slate-500 block">In developer productivity</span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={onOpenIntake}
                className="w-full py-4 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm shadow-xs"
              >
                <span>Request Custom FinOps Cloud Audit</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
