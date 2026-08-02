import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Activity, 
  Terminal, 
  ArrowRight, 
  Server, 
  Zap, 
  RefreshCw, 
  CheckCircle2, 
  Lock, 
  Cpu, 
  Layers, 
  TrendingUp,
  AlertTriangle,
  Code
} from 'lucide-react';
import { HERO_CLUSTER_NODES, ARCHITECTURE_BLUEPRINTS } from '../data/infrastructureData';

interface HeroProps {
  onOpenAssessment: () => void;
  onOpenIntake: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAssessment, onOpenIntake }) => {
  const [selectedBlueprintId, setSelectedBlueprintId] = useState('saas-multi-region');
  const [nodes, setNodes] = useState(HERO_CLUSTER_NODES);
  const [isSimulatingLoad, setIsSimulatingLoad] = useState(false);
  const [isSimulatingFailover, setIsSimulatingFailover] = useState(false);
  const [logStream, setLogStream] = useState<string[]>([
    '[00:00:01] [INFO] Aetheria SRE Controller v4.2.1 initialized across 48,520 nodes',
    '[00:00:02] [VERIFIED] AWS KMS envelope keys validated in us-east-1 & eu-west-1',
    '[00:00:04] [METRIC] Global p99 ingress latency: 12.4ms (99.999% SLA active)',
    '[00:00:05] [KARPENTER] Graviton3 spot node fleet auto-consolidated (-34% cost savings)'
  ]);
  const [activeTab, setActiveTab] = useState<'console' | 'iac'>('console');

  const currentBlueprint = ARCHITECTURE_BLUEPRINTS.find(b => b.id === selectedBlueprintId) || ARCHITECTURE_BLUEPRINTS[0];

  // Simulated telemetry ticker for live feel
  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prevNodes => 
        prevNodes.map(node => {
          const cpuDelta = (Math.random() - 0.5) * 4;
          const newCpu = Math.min(Math.max(Math.round(node.cpuUsage + cpuDelta), 15), 85);
          const latencyDelta = (Math.random() - 0.5) * 0.8;
          const newLatency = parseFloat((node.p99Latency + latencyDelta).toFixed(1));
          return {
            ...node,
            cpuUsage: newCpu,
            p99Latency: Math.max(newLatency, 3.2)
          };
        })
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleSimulateLoad = () => {
    setIsSimulatingLoad(true);
    const time = new Date().toLocaleTimeString();
    setLogStream(prev => [
      `[${time}] [WARN] Simulated traffic spike detected: +25,000 rps on ingress gateway`,
      `[${time}] [AUTOSCALE] Karpenter provisioned 18 additional c7g.xlarge Graviton3 instances in 1.4s`,
      `[${time}] [SUCCESS] p99 Latency stabilized at 14.8ms. Zero dropped connections.`,
      ...prev.slice(0, 5)
    ]);

    setNodes(prev => prev.map(n => ({ ...n, cpuUsage: Math.min(n.cpuUsage + 25, 78), activePodCount: n.activePodCount + 40 })));

    setTimeout(() => {
      setIsSimulatingLoad(false);
    }, 3000);
  };

  const handleSimulateFailover = () => {
    setIsSimulatingFailover(true);
    const time = new Date().toLocaleTimeString();
    setLogStream(prev => [
      `[${time}] [SIMULATION] Injecting us-east-1 region network partition`,
      `[${time}] [FAILOVER] BGP Anycast automatically steered 100% ingress traffic to eu-west-1`,
      `[${time}] [AURORA] Primary database promote sequence completed in 420ms`,
      `[${time}] [RESOLVED] Zero user impact. SLA intact. Status 100% operational.`,
      ...prev.slice(0, 5)
    ]);

    setNodes(prev => prev.map(n => {
      if (n.region === 'us-east-1') {
        return { ...n, status: 'rebalancing' };
      }
      return { ...n, cpuUsage: Math.min(n.cpuUsage + 18, 75) };
    }));

    setTimeout(() => {
      setNodes(HERO_CLUSTER_NODES);
      setIsSimulatingFailover(false);
    }, 4500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FCFCFA] border-b border-slate-200/80">
      {/* Background Subtle Blueprint Grid & Architectural Lines */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-slate-200/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Partner Badge */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-mono mb-6 shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-slate-900"></span>
            <span className="font-semibold uppercase tracking-wider text-slate-900">Infrastructure Operating Partner</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">Not an Agency. Your Embedded SRE Team.</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 max-w-5xl leading-[1.1] mb-6 font-sans">
            Infrastructure is not a department. <br className="hidden sm:inline" />
            <span className="text-slate-900">
              It’s the foundation of your business.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl font-normal leading-relaxed mb-8">
            We embed principal SRE engineers directly into your technology stack, take full SLA ownership, and transform complex cloud operations into a predictable, zero-downtime growth asset.
          </p>

          {/* Primary CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenIntake}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-900 shadow-sm transition-all flex items-center justify-center gap-3 group cursor-pointer text-base"
            >
              <span>Schedule Partner Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-slate-300" />
            </button>

            <button
              onClick={onOpenAssessment}
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-medium text-slate-800 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all flex items-center justify-center gap-2.5 text-base shadow-xs"
            >
              <Activity className="w-5 h-5 text-slate-700" />
              <span>Run Architectural Diagnostic</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>99.999% SLA Financial backing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>&lt; 15-Minute PagerDuty Response</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Security Best Practices & Isolation</span>
            </div>
          </div>
        </div>

        {/* Interactive Infrastructure Operating Console Preview */}
        <div className="mt-12 rounded-2xl bg-white border border-slate-200/90 shadow-md overflow-hidden">
          
          {/* Console Header Bar */}
          <div className="bg-slate-50 px-5 py-3.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
            
            {/* Left: Window Controls & Title */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-300 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-slate-300 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-slate-300 inline-block"></span>
              </div>
              <span className="text-slate-300 font-mono text-xs">|</span>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-800">
                <Terminal className="w-4 h-4 text-slate-900" />
                <span className="font-semibold">AETHERIA INFRASTRUCTURE OPERATING CONSOLE</span>
                <span className="text-[10px] bg-slate-200 text-slate-800 border border-slate-300 px-2 py-0.5 rounded font-mono">
                  LIVE TELEMETRY
                </span>
              </div>
            </div>

            {/* Middle: Architecture Selector Toggles */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 text-xs font-mono">
              {ARCHITECTURE_BLUEPRINTS.map(blueprint => (
                <button
                  key={blueprint.id}
                  onClick={() => setSelectedBlueprintId(blueprint.id)}
                  className={`px-3 py-1 rounded transition-all cursor-pointer ${
                    selectedBlueprintId === blueprint.id 
                      ? 'bg-slate-900 text-white font-semibold shadow-xs' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {blueprint.id === 'saas-multi-region' && 'SaaS Scaleup'}
                  {blueprint.id === 'agency-white-label' && 'Agency Platform'}
                  {blueprint.id === 'fintech-security-vault' && 'Security Vault'}
                </button>
              ))}
            </div>

            {/* Right: Console Tab View Switcher */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('console')}
                className={`px-2.5 py-1 rounded text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'console' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Telemetry</span>
              </button>
              <button
                onClick={() => setActiveTab('iac')}
                className={`px-2.5 py-1 rounded text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'iac' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>Terraform IaC</span>
              </button>
            </div>

          </div>

          {/* Console Body */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#FCFCFA]">
            
            {activeTab === 'console' ? (
              <>
                {/* Left 8 Cols: Live Node Health Grid & Simulation Actions */}
                <div className="lg:col-span-8 space-y-6">
                  
                  {/* Active Blueprint Summary */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-4 shadow-xs">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-semibold">
                        ACTIVE OPERATING BLUEPRINT
                      </span>
                      <h4 className="text-slate-900 font-semibold text-base">{currentBlueprint.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5">{currentBlueprint.targetAudience} — {currentBlueprint.slaTarget}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleSimulateLoad}
                        disabled={isSimulatingLoad}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono hover:bg-slate-200 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                      >
                        <Zap className={`w-3.5 h-3.5 ${isSimulatingLoad ? 'animate-bounce' : ''}`} />
                        <span>{isSimulatingLoad ? 'Injecting Load...' : 'Simulate Traffic Surge'}</span>
                      </button>

                      <button
                        onClick={handleSimulateFailover}
                        disabled={isSimulatingFailover}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-300 text-slate-800 text-xs font-mono hover:bg-slate-200 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isSimulatingFailover ? 'animate-spin' : ''}`} />
                        <span>{isSimulatingFailover ? 'Failing Over...' : 'Test Region Failover'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Live Node Clusters Metric Table */}
                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-600">
                      <span className="flex items-center gap-2">
                        <Server className="w-4 h-4 text-slate-600" />
                        GLOBAL CLUSTER NODES (REAL-TIME TELEMETRY)
                      </span>
                      <span className="text-slate-400">Auto-refresh: 2.5s</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {nodes.map(node => (
                        <div key={node.id} className="bg-white p-3.5 rounded-xl border border-slate-200 hover:border-slate-300 transition-all shadow-xs">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full ${
                                node.status === 'healthy' ? 'bg-emerald-600' : 'bg-amber-600 animate-ping'
                              }`} />
                              <span className="font-mono text-xs font-semibold text-slate-900">{node.name}</span>
                            </div>
                            <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                              {node.provider} ({node.region})
                            </span>
                          </div>

                          {/* CPU & Latency Bars */}
                          <div className="space-y-2 text-xs font-mono">
                            <div>
                              <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                                <span>CPU Utilization</span>
                                <span className={node.cpuUsage > 70 ? 'text-amber-700 font-bold' : 'text-slate-900'}>{node.cpuUsage}%</span>
                              </div>
                              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                                <div 
                                  className={`h-full transition-all duration-500 ${
                                    node.cpuUsage > 70 ? 'bg-amber-600' : 'bg-slate-900'
                                  }`} 
                                  style={{ width: `${node.cpuUsage}%` }}
                                />
                              </div>
                            </div>

                            <div className="flex items-center justify-between pt-1 text-[11px]">
                              <span className="text-slate-600">p99 Latency: <strong className="text-slate-900">{node.p99Latency}ms</strong></span>
                              <span className="text-slate-600">Active Pods: <strong className="text-slate-900">{node.activePodCount}</strong></span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right 4 Cols: Live Controller Log Stream */}
                <div className="lg:col-span-4 bg-slate-900 text-slate-200 p-4 rounded-xl border border-slate-800 font-mono text-xs flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 mb-3">
                      <span className="flex items-center gap-2 text-emerald-400 font-semibold">
                        <Terminal className="w-4 h-4" />
                        SRE ENGINE LOGS
                      </span>
                      <span className="text-[10px] text-slate-400">Auto-Synced</span>
                    </div>

                    <div className="space-y-2.5 text-[11px] text-slate-300 overflow-hidden">
                      {logStream.map((log, index) => (
                        <div key={index} className="leading-relaxed border-l-2 border-emerald-500 pl-2 py-0.5 bg-slate-850/60 rounded-r">
                          <span className={
                            log.includes('[WARN]') ? 'text-amber-300' :
                            log.includes('[SUCCESS]') || log.includes('[RESOLVED]') ? 'text-emerald-300 font-semibold' :
                            log.includes('[SIMULATION]') ? 'text-blue-300' : 'text-slate-300'
                          }>
                            {log}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 mt-4">
                    <div className="bg-slate-800 border border-slate-700 p-3 rounded-lg text-slate-200 text-[11px]">
                      <div className="font-semibold flex items-center gap-1.5 mb-1 text-emerald-400">
                        <ShieldCheck className="w-4 h-4" />
                        <span>SLA Guarantee Status: 100% Active</span>
                      </div>
                      <p className="text-slate-400 text-[10px] leading-normal">
                        All production nodes backed by Aetheria 24/7 SRE page response agreement.
                      </p>
                    </div>
                  </div>

                </div>
              </>
            ) : (
              /* IaC View */
              <div className="lg:col-span-12 bg-slate-900 text-slate-200 p-5 rounded-xl border border-slate-800 font-mono text-xs overflow-x-auto">
                <div className="flex items-center justify-between mb-3 text-slate-400 text-xs">
                  <span className="flex items-center gap-2 font-semibold text-slate-200">
                    <Code className="w-4 h-4 text-emerald-400" />
                    DECLARATIVE TERRAFORM IaC BLUEPRINT ({currentBlueprint.title})
                  </span>
                  <span className="text-[10px] bg-slate-800 text-slate-300 border border-slate-700 px-2 py-0.5 rounded">
                    GitOps Enforced
                  </span>
                </div>
                <pre className="text-[12px] leading-relaxed text-slate-300 bg-slate-950 p-4 rounded-lg border border-slate-800 overflow-x-auto">
                  {currentBlueprint.terraformCode}
                </pre>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
