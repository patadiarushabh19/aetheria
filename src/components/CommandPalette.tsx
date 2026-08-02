import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Calculator, 
  AlertTriangle, 
  BookOpen, 
  FileText, 
  Layers, 
  ArrowRight,
  X,
  Compass,
  Rocket
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAssessment: () => void;
  onOpenIntake: () => void;
  setActiveSection: (sectionId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenAssessment,
  onOpenIntake,
  setActiveSection,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled outside or via global listener
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (action: () => void) => {
    action();
    onClose();
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commands = [
    {
      category: 'Diagnostic & Intake',
      items: [
        {
          id: 'diag-wizard',
          title: 'Launch Infrastructure Diagnostic Wizard',
          subtitle: '3-step architecture readiness & security score',
          icon: ShieldCheck,
          action: () => handleSelect(onOpenAssessment),
          badge: 'DIAGNOSTIC'
        },
        {
          id: 'intake-form',
          title: 'Schedule Technical Discovery Consultation',
          subtitle: 'Direct calendar booking with Principal Infrastructure Architect',
          icon: Terminal,
          action: () => handleSelect(onOpenIntake),
          badge: 'CONSULT'
        }
      ]
    },
    {
      category: 'Platform Navigation',
      items: [
        {
          id: 'nav-arch',
          title: 'Multi-Cloud Architecture Studio',
          subtitle: 'Explore high-availability AWS, GCP, and Kubernetes blueprints with Terraform IaC',
          icon: Cpu,
          action: () => handleSelect(() => scrollToSection('architecture')),
          badge: 'BLUEPRINTS'
        },
        {
          id: 'nav-telemetry',
          title: 'Live Telemetry & SLA Engine',
          subtitle: 'Real-time p99 latency, zero-downtime failover, and regional health logs',
          icon: Activity,
          action: () => handleSelect(() => scrollToSection('telemetry')),
          badge: 'METRICS'
        },
        {
          id: 'nav-startup',
          title: 'Startup Infrastructure Operating Partner Program',
          subtitle: 'From MVP to global scale — architecture, CI/CD, 24/7 reliability & security readiness',
          icon: Rocket,
          action: () => handleSelect(() => scrollToSection('startup-program')),
          badge: 'STARTUPS'
        },
        {
          id: 'nav-agency',
          title: 'Agency Infrastructure Partnership Program',
          subtitle: 'White-label engineering, 35% margin uplift, pre-sales support & 24/7 SRE alliance',
          icon: Compass,
          action: () => handleSelect(() => scrollToSection('agency-partnership')),
          badge: 'ALLIANCE'
        },
        {
          id: 'nav-knowledge',
          title: 'Infrastructure Knowledge Academy & Interactive Tools',
          subtitle: '140+ ADRs, Terraform blueprints, security checklists, and Blueprint Generator™',
          icon: BookOpen,
          action: () => handleSelect(() => scrollToSection('knowledge-center')),
          badge: 'ACADEMY'
        },
        {
          id: 'nav-finops',
          title: 'FinOps Cloud Waste & ROI Calculator',
          subtitle: 'Calculate unoptimized EC2/EKS spend and projected annual savings',
          icon: Calculator,
          action: () => handleSelect(() => scrollToSection('finops')),
          badge: 'FINOPS'
        },
        {
          id: 'nav-incident',
          title: '3-Minute Incident Remediation Drill',
          subtitle: 'Simulate automated traffic rerouting and database pod failover under 180s',
          icon: AlertTriangle,
          action: () => handleSelect(() => scrollToSection('incident')),
          badge: 'DRILL'
        },
        {
          id: 'nav-runbooks',
          title: 'Technical Runbooks & ADR Library',
          subtitle: 'Production Architecture Decision Records, IaC standards, and zero-trust guides',
          icon: BookOpen,
          action: () => handleSelect(() => scrollToSection('runbooks')),
          badge: 'ADR'
        },
        {
          id: 'nav-cases',
          title: 'Enterprise Case Studies',
          subtitle: 'PayPulse FinTech (99.999% SLA), Apex Agency, and MediFlow HealthTech',
          icon: FileText,
          action: () => handleSelect(() => scrollToSection('cases')),
          badge: 'CASE STUDY'
        },
        {
          id: 'nav-philosophy',
          title: 'Operating Partner Model vs Traditional Agency',
          subtitle: 'Comprehensive 6-vector comparison matrix and engineering principles',
          icon: Layers,
          action: () => handleSelect(() => scrollToSection('philosophy')),
          badge: 'MODEL'
        }
      ]
    }
  ];

  const filteredCommands = commands.map(cat => ({
    ...cat,
    items: cat.items.filter(
      item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        item.badge.toLowerCase().includes(query.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/40 backdrop-blur-xs animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-[#FFFFFF] border border-slate-200 rounded-2xl shadow-2xl overflow-hidden text-slate-800 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 bg-[#FCFCFA]">
          <Search className="w-5 h-5 text-slate-700 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search platform features... (e.g. Terraform, FinOps, Security)"
            className="w-full bg-transparent text-sm sm:text-base text-slate-950 placeholder-slate-400 focus:outline-none font-mono font-medium"
            autoFocus
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-500 bg-slate-100 border border-slate-200 rounded mr-2 font-bold">
            ESC
          </kbd>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Command List Body */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4 font-sans">
          {filteredCommands.length === 0 ? (
            <div className="p-8 text-center text-slate-500 font-mono text-xs">
              <Compass className="w-8 h-8 text-slate-400 mx-auto mb-2 animate-pulse" />
              No matching commands or section runbooks found for "{query}".
            </div>
          ) : (
            filteredCommands.map((cat) => (
              <div key={cat.category} className="space-y-1">
                <div className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  {cat.category}
                </div>
                {cat.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all text-left group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-950 group-hover:text-slate-900 transition-colors flex items-center gap-2">
                            <span>{item.title}</span>
                          </div>
                          <div className="text-xs text-slate-600 line-clamp-1 font-normal">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors">
                          {item.badge}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer Shortcut Bar */}
        <div className="px-4 py-2.5 bg-[#FCFCFA] border-t border-slate-200 text-[11px] font-mono text-slate-500 flex items-center justify-between font-medium">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-slate-800 text-[10px] font-bold">↑</kbd> <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-slate-800 text-[10px] font-bold">↓</kbd> to navigate</span>
            <span><kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-slate-800 text-[10px] font-bold">↵</kbd> to select</span>
          </div>
          <span className="text-slate-700 font-bold">Aetheria Cmd-K Palette</span>
        </div>

      </div>
    </div>
  );
};
