import React, { useState } from 'react';
import { 
  Server, 
  Database, 
  ShieldCheck, 
  Activity, 
  Code, 
  Layers, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Download, 
  AlertTriangle,
  RefreshCw,
  Cpu,
  Lock,
  Globe
} from 'lucide-react';
import { ARCHITECTURE_BLUEPRINTS } from '../data/infrastructureData';
import { ArchitectureComponent } from '../types';

interface ArchitectureStudioProps {
  onOpenIntake: () => void;
}

export const ArchitectureStudio: React.FC<ArchitectureStudioProps> = ({ onOpenIntake }) => {
  const [selectedBlueprintId, setSelectedBlueprintId] = useState(ARCHITECTURE_BLUEPRINTS[0].id);
  const [selectedComponent, setSelectedComponent] = useState<ArchitectureComponent | null>(ARCHITECTURE_BLUEPRINTS[0].components[0]);
  const [activeTab, setActiveTab] = useState<'topology' | 'components' | 'terraform'>('topology');
  const [copiedCode, setCopiedCode] = useState(false);
  const [stressTestStatus, setStressTestStatus] = useState<string | null>(null);

  const activeBlueprint = ARCHITECTURE_BLUEPRINTS.find(b => b.id === selectedBlueprintId) || ARCHITECTURE_BLUEPRINTS[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeBlueprint.terraformCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleRunStressTest = (type: 'region_down' | 'ddos' | 'db_spike') => {
    if (type === 'region_down') {
      setStressTestStatus('SIMULATION: Injecting AWS us-east-1 Outage... BGP Anycast routed 100% traffic to eu-west-1 in 380ms. Aurora Global read/write promoted. Zero lost packets.');
    } else if (type === 'ddos') {
      setStressTestStatus('SIMULATION: Injected 1.2 Million SYN Flood Requests... Cloudflare WAF dropped 99.98% at edge. Origin compute CPU load remained < 28%.');
    } else {
      setStressTestStatus('SIMULATION: Injecting 15,000 Concurrent DB Connections... AWS RDS Proxy connection pooling capped active worker connections to 240. App latency unchanged.');
    }
    setTimeout(() => setStressTestStatus(null), 8000);
  };

  return (
    <section id="architecture" className="py-24 bg-[#FFFFFF] relative border-t border-slate-200">
      
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest text-slate-700 uppercase bg-slate-100 border border-slate-200 px-3 py-1 rounded-full shadow-xs">
              INTERACTIVE ARCHITECTURE STUDIO
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 mt-4 tracking-tight">
              Production-Grade Enterprise Blueprints
            </h2>
            <p className="text-slate-600 mt-2 text-base font-normal max-w-2xl">
              Inspect vetted cloud infrastructure topologies designed for zero-downtime scalability, compliance, and cost efficiency.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200 self-start md:self-auto shadow-xs">
            {ARCHITECTURE_BLUEPRINTS.map(b => (
              <button
                key={b.id}
                onClick={() => {
                  setSelectedBlueprintId(b.id);
                  setSelectedComponent(b.components[0]);
                }}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedBlueprintId === b.id 
                    ? 'bg-slate-900 text-white font-semibold shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {b.id === 'saas-multi-region' && 'Multi-Region SaaS'}
                {b.id === 'agency-white-label' && 'Agency Cluster'}
                {b.id === 'fintech-security-vault' && 'Security Vault'}
              </button>
            ))}
          </div>
        </div>

        {/* Blueprint Overview Banner */}
        <div className="bg-[#FCFCFA] p-6 rounded-2xl border border-slate-200 mb-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-xs">
          <div className="md:col-span-8 space-y-2">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-slate-900 font-sans">{activeBlueprint.title}</h3>
              <span className="text-xs font-mono bg-slate-100 text-slate-800 border border-slate-200 px-2.5 py-0.5 rounded font-semibold">
                {activeBlueprint.slaTarget}
              </span>
            </div>
            <p className="text-sm text-slate-600 font-normal">{activeBlueprint.description}</p>
          </div>

          <div className="md:col-span-4 bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between space-y-3 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500">FINOPS WASTE SAVINGS:</span>
              <span className="text-slate-900 font-bold">{activeBlueprint.estimatedWasteReduction}</span>
            </div>
            <button
              onClick={onOpenIntake}
              className="w-full py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Deploy This Blueprint For Your Stack</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Interactive Workspace Studio */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          
          {/* Studio Navigation Bar */}
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('topology')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'topology' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Visual Topology Canvas</span>
              </button>

              <button
                onClick={() => setActiveTab('components')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'components' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Cpu className="w-4 h-4" />
                <span>Component Specifications</span>
              </button>

              <button
                onClick={() => setActiveTab('terraform')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'terraform' ? 'bg-slate-900 text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Code className="w-4 h-4" />
                <span>Terraform Code</span>
              </button>
            </div>

            {/* Stress Test Simulation Triggers */}
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-500 hidden lg:inline">Stress Test Node:</span>
              <button
                onClick={() => handleRunStressTest('region_down')}
                className="px-2.5 py-1 rounded bg-slate-100 border border-slate-300 text-slate-800 hover:bg-slate-200 transition-all cursor-pointer text-[11px]"
              >
                Simulate Outage
              </button>
              <button
                onClick={() => handleRunStressTest('ddos')}
                className="px-2.5 py-1 rounded bg-slate-100 border border-slate-300 text-slate-800 hover:bg-slate-200 transition-all cursor-pointer text-[11px]"
              >
                Simulate DDoS
              </button>
            </div>
          </div>

          {/* Stress Test Status Callout */}
          {stressTestStatus && (
            <div className="bg-slate-100 border-b border-slate-200 px-6 py-3 text-xs font-mono text-slate-800 flex items-center gap-3 animate-fadeIn">
              <RefreshCw className="w-4 h-4 animate-spin shrink-0 text-slate-900" />
              <span>{stressTestStatus}</span>
            </div>
          )}

          {/* Tab Content 1: Visual Topology Canvas */}
          {activeTab === 'topology' && (
            <div className="p-6 bg-[#FCFCFA]">
              <div className="relative min-h-[380px] bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between overflow-hidden shadow-xs">
                <div className="absolute inset-0 bg-dot-matrix opacity-40 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-600 mb-6">
                  <span className="flex items-center gap-2 text-slate-900 font-semibold">
                    <Globe className="w-4 h-4 text-slate-800" />
                    DECLARATIVE INFRASTRUCTURE TOPOLOGY (INTERACTIVE NODES)
                  </span>
                  <span>Click nodes to inspect Terraform specifications</span>
                </div>

                {/* Nodes Layout */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {activeBlueprint.topologyNodes.map((node) => (
                    <div 
                      key={node.id}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        node.status === 'active' 
                          ? 'bg-white border-slate-300 hover:border-slate-400 hover:shadow-md shadow-xs' 
                          : node.status === 'standby'
                          ? 'bg-slate-50 border-slate-200 opacity-80 hover:opacity-100'
                          : 'bg-amber-50 border-amber-300 text-amber-900'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono uppercase bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200 font-semibold">
                          {node.type}
                        </span>
                        <span className={`w-2 h-2 rounded-full ${
                          node.status === 'active' ? 'bg-emerald-600 animate-pulse' : 'bg-amber-600'
                        }`} />
                      </div>
                      <h4 className="text-sm font-semibold text-slate-900 font-sans">{node.label}</h4>
                      <div className="mt-2 text-[10px] font-mono text-slate-600 flex items-center justify-between">
                        <span>Status: <strong className="text-slate-900 uppercase">{node.status}</strong></span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative z-10 mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs font-mono text-slate-600">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" /> Active Traffic Route</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slate-400 inline-block" /> Standby Failover Target</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-600 inline-block" /> Cross-Region Syncing</span>
                  </div>
                  <span className="text-slate-500">100% Terraform / Helm GitOps Verified</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 2: Component Specs */}
          {activeTab === 'components' && (
            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#FCFCFA]">
              <div className="lg:col-span-5 space-y-3">
                <h4 className="text-xs font-mono text-slate-600 uppercase tracking-wider mb-2 font-semibold">Select Architecture Component</h4>
                {activeBlueprint.components.map((comp) => (
                  <div
                    key={comp.id}
                    onClick={() => setSelectedComponent(comp)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      selectedComponent?.id === comp.id
                        ? 'bg-white border-slate-900 text-slate-900 shadow-sm font-medium'
                        : 'bg-white/80 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-slate-900 font-semibold">{comp.category}</span>
                      <span className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">{comp.provider}</span>
                    </div>
                    <h5 className="font-semibold text-sm text-slate-900">{comp.name}</h5>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">{comp.description}</p>
                  </div>
                ))}
              </div>

              {selectedComponent && (
                <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                      <div>
                        <span className="text-xs font-mono text-slate-700 font-semibold uppercase">{selectedComponent.category} SPECIFICATION</span>
                        <h4 className="text-lg font-bold text-slate-900 font-sans mt-0.5">{selectedComponent.name}</h4>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono text-slate-500">SLA Guarantee:</span>
                        <p className="text-sm font-mono text-slate-900 font-bold">{selectedComponent.sla}</p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 mb-6">{selectedComponent.description}</p>

                    <div className="bg-slate-900 text-slate-200 p-4 rounded-lg border border-slate-800 font-mono text-xs">
                      <div className="text-slate-400 mb-2 text-[10px] uppercase tracking-wider">TERRAFORM DECLARATION SNIPPET:</div>
                      <pre className="text-slate-200 overflow-x-auto whitespace-pre-wrap">{selectedComponent.iacSnippet}</pre>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 mt-6 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-600">Estimated Monthly Cloud Allocation: <strong className="text-slate-900">${selectedComponent.monthlyEst}/mo</strong></span>
                    <span className="text-slate-900 font-semibold">Managed by Aetheria SRE</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab Content 3: Full Terraform Code */}
          {activeTab === 'terraform' && (
            <div className="p-6 bg-slate-900 text-slate-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-300">
                  Main Declarative IaC Entrypoint (<strong className="text-emerald-400">main.tf</strong>)
                </span>
                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1.5 rounded bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200 hover:text-white flex items-center gap-2 cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied to Clipboard' : 'Copy Terraform Blueprint'}</span>
                </button>
              </div>

              <pre className="bg-slate-950 p-6 rounded-xl border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
                {activeBlueprint.terraformCode}
              </pre>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
