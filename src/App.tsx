import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PhilosophySection } from './components/PhilosophySection';
import { ArchitectureStudio } from './components/ArchitectureStudio';
import { TelemetryConsole } from './components/TelemetryConsole';
import { AudienceSolutions } from './components/AudienceSolutions';
import { StartupProgram } from './components/StartupProgram';
import { AgencyPartnershipProgram } from './components/AgencyPartnershipProgram';
import { FinOpsCalculator } from './components/FinOpsCalculator';
import { IncidentSimulator } from './components/IncidentSimulator';
import { RunbookLibrary } from './components/RunbookLibrary';
import { KnowledgeCenter } from './components/KnowledgeCenter';
import { CaseStudies } from './components/CaseStudies';
import { Footer } from './components/Footer';
import { ContactPage } from './components/ContactPage';
import { AboutPage } from './components/AboutPage';
import { ArchitectureAssessmentModal } from './components/ArchitectureAssessmentModal';
import { IntakeFormModal } from './components/IntakeFormModal';
import { CommandPalette } from './components/CommandPalette';
import { AssessmentAnswers } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);
  const [intakeModalOpen, setIntakeModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [assessmentAnswers, setAssessmentAnswers] = useState<AssessmentAnswers | null>(null);

  // Path routing state
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigate = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAssessment = () => {
    setAssessmentModalOpen(true);
  };

  const handleOpenIntake = () => {
    setIntakeModalOpen(true);
  };

  const handleOpenIntakeWithAnswers = (answers: AssessmentAnswers) => {
    setAssessmentAnswers(answers);
    setIntakeModalOpen(true);
  };

  const isContactPage = currentPath === '/contact';
  const isAboutPage = currentPath === '/about';

  return (
    <div className="min-h-screen bg-[#FCFCFA] text-slate-900 font-sans selection:bg-slate-900 selection:text-white antialiased">
      
      {/* Sticky Global Navigation */}
      <Header 
        onOpenAssessment={handleOpenAssessment}
        onOpenIntake={handleOpenIntake}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onNavigateContact={() => navigate('/contact')}
        onNavigateHome={() => navigate('/')}
        onNavigateAbout={() => navigate('/about')}
        currentPath={currentPath}
      />

      {isContactPage ? (
        /* Standalone Contact / Technical Discovery Page */
        <ContactPage onNavigateHome={() => navigate('/')} />
      ) : isAboutPage ? (
        /* Standalone About Us Page */
        <AboutPage 
          onNavigateHome={() => navigate('/')} 
          onNavigateContact={() => navigate('/contact')} 
        />
      ) : (
        /* Main Homepage Sections */
        <>
          {/* Main Hero Section with Interactive Console */}
          <Hero 
            onOpenAssessment={handleOpenAssessment}
            onOpenIntake={handleOpenIntake}
          />

          {/* Operating Philosophy & Agency vs Partner Matrix */}
          <PhilosophySection 
            onOpenIntake={handleOpenIntake}
          />

          {/* Interactive Multi-Cloud Architecture Studio */}
          <ArchitectureStudio 
            onOpenIntake={handleOpenIntake}
          />

          {/* Real-time Production Telemetry & SLA Engine */}
          <TelemetryConsole />

          {/* Target Audience Solutions (Agencies, SaaS, Startups, CTOs) */}
          <AudienceSolutions 
            onOpenIntake={handleOpenIntake}
          />

          {/* Flagship Startup Infrastructure Operating Partner Program */}
          <StartupProgram 
            onOpenIntake={handleOpenIntake}
          />

          {/* Flagship Agency Infrastructure Partnership Program */}
          <AgencyPartnershipProgram 
            onOpenIntake={handleOpenIntake}
          />

          {/* FinOps Cloud Waste & ROI Calculator */}
          <FinOpsCalculator 
            onOpenIntake={handleOpenIntake}
          />

          {/* 3-Minute Incident Remediation Drill Simulator */}
          <IncidentSimulator />

          {/* Flagship Engineering Academy & Open Knowledge Center */}
          <KnowledgeCenter 
            onOpenIntake={handleOpenIntake}
          />

          {/* Technical Runbooks & Architecture Decision Records */}
          <RunbookLibrary 
            onOpenIntake={handleOpenIntake}
          />

          {/* Hard Proven Case Studies */}
          <CaseStudies 
            onOpenIntake={handleOpenIntake}
          />
        </>
      )}

      {/* Enterprise Footer */}
      <Footer 
        onOpenAssessment={handleOpenAssessment}
        onOpenIntake={handleOpenIntake}
        setActiveSection={setActiveSection}
        onNavigateContact={() => navigate('/contact')}
        onNavigateHome={() => navigate('/')}
        onNavigateAbout={() => navigate('/about')}
      />

      {/* Interactive Diagnostic Wizard Modal */}
      <ArchitectureAssessmentModal 
        isOpen={assessmentModalOpen}
        onClose={() => setAssessmentModalOpen(false)}
        onOpenIntakeWithAnswers={handleOpenIntakeWithAnswers}
      />

      {/* Technical Intake Consultation Modal */}
      <IntakeFormModal 
        isOpen={intakeModalOpen}
        onClose={() => setIntakeModalOpen(false)}
        prefilledAnswers={assessmentAnswers}
      />

      {/* Command Palette (Cmd+K) */}
      <CommandPalette 
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenAssessment={handleOpenAssessment}
        onOpenIntake={handleOpenIntake}
        setActiveSection={setActiveSection}
      />

    </div>
  );
}
