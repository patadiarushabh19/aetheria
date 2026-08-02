import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Server, 
  Terminal, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw,
  Clock,
  TrendingDown,
  Layers,
  Cpu
} from 'lucide-react';

export const TelemetryConsole: React.FC = () => {
  const [latencyHistory, setLatencyHistory] = useState<number[]>([12.4, 11.8, 12.1, 13.0, 12.2, 11.9, 12.5, 12.0]);
  const [p99Value, setP99Value] = useState(12.2);
  const [p95Value, setP95Value] = useState(6.4);
  const [errorRate, setErrorRate] = useState(0.0001);
  const [activePods, setActivePods] = useState(14820);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextP99 = parseFloat((11.5 + Math.random() * 2.2).toFixed(1));
      setP99Value(nextP99);
      setP95Value(parseFloat((nextP99 * 0.52).toFixed(1)));
      setLatencyHistory(prev => [...prev.slice(1), nextP99]);
      setActivePods(prev => prev + Math.floor((Math.random() - 0.5) * 8));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const regions = [
    { name: 'US-East (N. Virginia)', status: 'HEALTHY', latency: `${p99Value}ms`, pods: '5,820', load: '38%' },
    { name: 'EU-West (Ireland)', status: 'HEALTHY', latency: `${(p99Value * 1.15).toFixed(1)}ms`, pods: '4,100', load: '41%' },
    { name: 'US-West (Oregon)', status: 'HEALTHY', latency: `${(p99Value * 0.95).toFixed(1)}ms`, pods: '3,200', load: '32%' },
    { name: 'AP-East (Tokyo)', status: 'HEALTHY', latency: `${(p99Value * 1.35).toFixed(1)}ms`, pods: '1,700', load: '29%' }
  ];

  return (
    <section id="telemetry" className="py-24 bg-[#F7F7F5] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-slate-700 uppercase bg-white border border-slate-200 px-3 py-1 rounded-full shadow-xs">
            REAL-TIME OPERATIONAL METRICS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 mt-4 tracking-tight">
            Live Production Telemetry & SLA Engine
          </h2>
          <p className="text-slate-600 mt-4 text-base font-normal">
            We operate in the open. Inspect real-time performance indicators across our managed global cloud footprint.
          </p>
        </div>

        {/* Telemetry Dashboard Box */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8">
          
          {/* Top KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-[#FCFCFA] p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-slate-600">
                <span>GLOBAL P99 LATENCY</span>
                <Activity className="w-4 h-4 text-slate-900" />
              </div>
              <div className="text-3xl font-mono font-bold text-slate-900">{p99Value}ms</div>
              <div className="text-[11px] text-slate-500 font-mono">Target SLA: &lt; 50ms</div>
            </div>

            <div className="bg-[#FCFCFA] p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-slate-600">
                <span>ERROR RATE (4xx/5xx)</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-3xl font-mono font-bold text-slate-900">{errorRate}%</div>
              <div className="text-[11px] text-emerald-700 font-mono font-semibold">Zero Unhandled Faults</div>
            </div>

            <div className="bg-[#FCFCFA] p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-slate-600">
                <span>ACTIVE CONTAINERS</span>
                <Cpu className="w-4 h-4 text-slate-800" />
              </div>
              <div className="text-3xl font-mono font-bold text-slate-900">{activePods.toLocaleString()}</div>
              <div className="text-[11px] text-slate-500 font-mono">Across 1,280 Clusters</div>
            </div>

            <div className="bg-[#FCFCFA] p-5 rounded-xl border border-slate-200 space-y-2 shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-slate-600">
                <span>24/7 ON-CALL PAGER SLA</span>
                <Zap className="w-4 h-4 text-amber-600" />
              </div>
              <div className="text-3xl font-mono font-bold text-slate-900">&lt; 3.8m</div>
              <div className="text-[11px] text-slate-500 font-mono">Contractual Max: 15 mins</div>
            </div>

          </div>

          {/* Sparkline & Regional Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left 7 Cols: Latency Trend Visualizer */}
            <div className="lg:col-span-7 bg-[#FCFCFA] p-6 rounded-xl border border-slate-200 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4 text-xs font-mono text-slate-700">
                  <span className="font-semibold flex items-center gap-2 text-slate-900">
                    <TrendingDown className="w-4 h-4 text-slate-800" />
                    REAL-TIME P99 LATENCY STABILITY (LAST 60 SECONDS)
                  </span>
                  <span className="text-emerald-700 font-bold">100% SLA COMPLIANT</span>
                </div>

                {/* Simulated Latency Bar Chart */}
                <div className="h-40 flex items-end gap-3 pt-6 pb-2 border-b border-slate-200">
                  {latencyHistory.map((val, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                      <span className="text-[10px] font-mono text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        {val}ms
                      </span>
                      <div 
                        className="w-full bg-slate-900 rounded-t transition-all duration-500 hover:bg-slate-700"
                        style={{ height: `${(val / 20) * 100}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs font-mono text-slate-600">
                <span>p95: <strong className="text-slate-900">{p95Value}ms</strong></span>
                <span>p99: <strong className="text-slate-900">{p99Value}ms</strong></span>
                <span>p99.9: <strong className="text-slate-900">18.4ms</strong></span>
              </div>
            </div>

            {/* Right 5 Cols: Regional Health Telemetry */}
            <div className="lg:col-span-5 bg-[#FCFCFA] p-6 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-4 text-xs font-mono text-slate-700">
                <span className="font-semibold flex items-center gap-2 text-slate-900">
                  <Server className="w-4 h-4 text-slate-800" />
                  REGIONAL CLUSTER HEALTH
                </span>
                <span className="text-slate-500 text-[10px]">ANYCAST EDGE</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {regions.map((reg, i) => (
                  <div key={i} className="bg-white p-3 rounded-lg border border-slate-200 flex items-center justify-between shadow-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                        <span className="text-slate-900 font-medium">{reg.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 mt-0.5 block">{reg.pods} pods | Load {reg.load}</span>
                    </div>

                    <div className="text-right">
                      <span className="text-slate-900 font-bold">{reg.latency}</span>
                      <span className="text-[10px] text-slate-500 block">p99</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
