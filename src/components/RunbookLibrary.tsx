import React, { useState } from 'react';
import { TECH_PAPERS } from '../data/infrastructureData';
import { TechPaper } from '../types';
import { 
  BookOpen, 
  FileText, 
  CheckCircle2, 
  Code, 
  Copy, 
  Check, 
  ArrowRight,
  Download,
  Bookmark
} from 'lucide-react';

interface RunbookLibraryProps {
  onOpenIntake: () => void;
}

export const RunbookLibrary: React.FC<RunbookLibraryProps> = ({ onOpenIntake }) => {
  const [selectedPaper, setSelectedPaper] = useState<TechPaper>(TECH_PAPERS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    if (selectedPaper.codeSample) {
      navigator.clipboard.writeText(selectedPaper.codeSample);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="runbooks" className="py-24 bg-[#FFFFFF] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-wider text-slate-800 uppercase bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full font-semibold shadow-xs">
            TECHNICAL KNOWLEDGE BASE & RUNBOOKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950 mt-4 tracking-tight">
            Educate First. Build Trust Second.
          </h2>
          <p className="text-slate-600 mt-4 text-base font-normal leading-relaxed">
            We openly share our Architecture Decision Records (ADRs), production runbooks, and disaster recovery playbooks with the engineering community.
          </p>
        </div>

        {/* Paper Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left 4 Cols: Paper List */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-2 font-semibold">
              ARCHITECTURE DECISION RECORDS (ADRs)
            </span>
            {TECH_PAPERS.map((paper) => (
              <div
                key={paper.id}
                onClick={() => setSelectedPaper(paper)}
                className={`p-4 rounded-xl border cursor-pointer transition-all shadow-xs ${
                  selectedPaper.id === paper.id
                    ? 'bg-slate-900 border-slate-900 text-white'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className={`font-semibold ${selectedPaper.id === paper.id ? 'text-slate-200' : 'text-slate-900'}`}>{paper.category}</span>
                  <span className={selectedPaper.id === paper.id ? 'text-slate-400' : 'text-slate-500'}>{paper.readTime}</span>
                </div>
                <h4 className="font-bold text-sm leading-snug">{paper.title}</h4>
                <p className={`text-xs mt-2 line-clamp-2 ${selectedPaper.id === paper.id ? 'text-slate-300' : 'text-slate-600'}`}>{paper.abstract}</p>
              </div>
            ))}
          </div>

          {/* Right 8 Cols: Selected ADR Deep Dive */}
          <div className="lg:col-span-8 bg-[#FCFCFA] p-6 sm:p-8 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-6 shadow-xs">
            
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-slate-900" />
                  <span className="text-xs font-mono text-slate-900 uppercase font-semibold">{selectedPaper.category} WHITE PAPER</span>
                </div>
                <span className="text-xs font-mono text-slate-500">{selectedPaper.publishedDate}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mt-4 font-sans">{selectedPaper.title}</h3>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed font-normal">{selectedPaper.abstract}</p>

              {/* Key Engineering Takeaways */}
              <div className="mt-6 space-y-2">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block font-semibold">KEY ARCHITECTURAL TAKEAWAYS:</span>
                <div className="space-y-2">
                  {selectedPaper.keyTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Snippet if Available */}
              {selectedPaper.codeSample && (
                <div className="mt-6 bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-[10px] uppercase">PRODUCTION CODE BLUEPRINT</span>
                    <button
                      onClick={handleCopyCode}
                      className="text-slate-300 hover:text-white flex items-center gap-1 text-[10px]"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="text-emerald-400 overflow-x-auto">{selectedPaper.codeSample}</pre>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-600 font-mono font-medium">
                Need a custom ADR crafted for your infrastructure refactoring?
              </span>
              <button
                onClick={onOpenIntake}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-xs"
              >
                <span>Request Technical ADR Consultation</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
