# Aetheria — Enterprise Infrastructure Operations Platform

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-61dafb.svg?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646cff.svg?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38bdf8.svg?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-4.21-000000.svg?style=flat-square&logo=express)](https://expressjs.com/)
[![Google Gemini API](https://img.shields.io/badge/Google_Gemini_API-%40google%2Fgenai-4285f4.svg?style=flat-square&logo=googlecloud)](https://ai.google.dev/)

> **Aetheria** is an enterprise-grade **Infrastructure Operations Partner platform** designed for SaaS scaleups, high-growth startups, digital agencies, and CTOs. It moves beyond traditional ticket-taking DevOps contractors by providing declarative Infrastructure as Code (IaC), real-time production telemetry, interactive architecture blueprinting, 3-minute incident drill simulations, FinOps waste calculation, and an open SRE Knowledge Base.

---

## 📋 Table of Contents

- [Executive Summary](#-executive-summary)
- [Key Features & Interactive Modules](#-key-features--interactive-modules)
- [Application Architecture](#-application-architecture)
- [Tech Stack](#-tech-stack)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started & Local Development](#-getting-started--local-development)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Development Server](#development-server)
  - [Production Build & Run](#production-build--run)
  - [Linting & Type Check](#linting--type-check)
- [Component Reference](#-component-reference)
- [The Infrastructure Operating System™ Framework](#-the-infrastructure-operating-system-framework)
- [Engineering Principles](#-engineering-principles)
- [Deployment & Cloud Run Setup](#-deployment--cloud-run-setup)
- [License & Credits](#-license--credits)

---

## 🚀 Executive Summary

Modern digital platforms cannot afford downtime, configuration drift, or opaque cloud spend. Traditional agencies operate on hourly tickets and static PDF recommendations, leaving internal engineering teams trapped in manual firefighting. 

**Aetheria** operates as an embedded **Infrastructure Operations Partner**. We design, automate, and operate cloud systems using deterministic Infrastructure as Code, zero-trust security guardrails, automated telemetry monitoring, and transparent Architecture Decision Records (ADRs).

This web application serves as the complete digital hub for Aetheria's platform, offering interactive tools for CTOs, SRE leads, and founders to evaluate, simulate, model, and deploy enterprise cloud architectures.

---

## ✨ Key Features & Interactive Modules

### 1. 🏗️ Interactive Multi-Cloud Architecture Studio (`ArchitectureStudio.tsx`)
- **Interactive Visual Topology**: Explore real-time node connections across compute, database, networking, security, and observability layers for AWS, GCP, and Multi-Cloud setups.
- **Declarative IaC Snippets**: Instant view and copy of modular Terraform and Pulumi code blocks for every topology node.
- **SLA & Cost Estimator**: Live calculation of architecture SLA targets and projected monthly cloud spend.

### 2. 📊 Real-Time Production Telemetry Console (`TelemetryConsole.tsx`)
- **Global Node Monitor**: Track live node health across global AWS, GCP, Azure, and Cloudflare regions.
- **Metrics Dashboard**: Monitor CPU usage, memory allocation, p99 ingress latency, and active Kubernetes pod counts.
- **Simulated Rebalancing**: Test automated pod rebalancing and zone failover scenarios in real-time.

### 3. 🚨 3-Minute Incident Remediation Drill Simulator (`IncidentSimulator.tsx`)
- **Interactive Incident Playbook**: Walk through a simulated p99 ingress spike & database connection pool exhaustion incident step-by-step.
- **Time-Offset Traces**: Step from T+00s (Automated Alarm) to T+45s (Karpenter Auto-scaling), T+90s (PgBouncer connection recycling), and T+180s (Full Recovery).
- **Actor Attribution**: Clear breakdown of automated monitors, PagerDuty engines, SRE on-call engineers, and GitOps controllers.

### 4. 💰 FinOps Cloud Waste & ROI Calculator (`FinOpsCalculator.tsx`)
- **Interactive Input Sliders**: Adjust monthly cloud spend, node counts, team size, and monthly incident counts.
- **Cloud Waste Breakdown**: Visual analysis of over-provisioned compute, idle staging environments, unattached EBS volumes, and missing savings plans.
- **ROI Projections**: Estimate immediate 25–40% cost reductions and engineering hours saved per month.

### 5. 🔍 Architecture Diagnostic Wizard Modal (`ArchitectureAssessmentModal.tsx`)
- **Multi-Step Diagnostic**: Guided questionnaire evaluating cloud providers, monthly cloud spend, team size, on-call burdens, compliance needs (SOC 2, HIPAA, ISO 27001), and primary growth goals.
- **Customized Blueprint Generation**: Generates tailor-made architecture recommendations and actionable next steps upon completion.

### 6. 📚 SRE Runbook Library & Knowledge Center (`KnowledgeCenter.tsx`, `RunbookLibrary.tsx`)
- **Open ADRs (Architecture Decision Records)**: Technical whitepapers on Kubernetes Karpenter scaling, zero-trust VPC peering, PostgreSQL HA, and FinOps practices.
- **Copyable Code Snippets**: Terraform modules, Helm values, and Prometheus alerting rules ready for production use.
- **Filterable Categories**: Sort by Security, FinOps, High Availability, Kubernetes, and Databases.

### 7. 🎯 Target Audience Solution Portals (`AudienceSolutions.tsx`, `StartupProgram.tsx`, `AgencyPartnershipProgram.tsx`)
- **Agency Alliance Program**: White-label cloud SRE, infrastructure onboarding, and client retainer support for digital development agencies.
- **Startup Infrastructure Operating Partner**: Turnkey architecture foundation for seed-to-Series B startups needing enterprise-grade reliability without hiring a $600k/yr SRE team.
- **SaaS Platforms & CTO Solutions**: Deep multi-region HA, p99 latency guarantees, and SOC 2 / HIPAA compliance enablement.

### 8. 📖 Standalone About Us Page (`AboutPage.tsx` at `/about`)
- **Interactive Evolving Blueprint**: Multi-layer blueprint diagram covering Cloud, Application, Network, Security, Automation, Monitoring, and Growth layers.
- **Interactive Story Journey**: 5-stage milestone progression exploring the problem, observation, engineering philosophy, company formation, and future vision.
- **Infrastructure Operating System™**: Detailed 5-layer framework explorer.
- **6 Engineering Principles**: Expandable cards with engineering examples and business impacts.

### 9. ✉️ Standalone Contact Page (`ContactPage.tsx` at `/contact`)
- **Technical Discovery Intake**: Detailed intake form specifying project scope, timeline, current cloud setup, and primary operational bottlenecks.
- **Lottie Success Animation**: Micro-engineered checkmark animation upon form submission validating technical intake processing.

### 10. ⌨️ Global Command Palette (`CommandPalette.tsx` — `Cmd+K` / `Ctrl+K`)
- **Instant Search & Navigation**: Quick keyboard navigation across all site pages, architecture blueprints, runbooks, and interactive tools.

---

## 🏛️ Application Architecture

The application uses a full-stack **Express + Vite + React** architecture configured to serve both client-side routes and server-side API proxying (such as Google Gemini API calls):

```
┌─────────────────────────────────────────────────────────────┐
│                      Client Browser                         │
│   React 19 SPA (Router via State / History API, Motion)     │
└──────────────────────────────┬──────────────────────────────┘
                               │
                      HTTP / WebSocket (Port 3000)
                               │
┌──────────────────────────────▼──────────────────────────────┐
│                  Express Backend (server.ts)                │
│  - Static Asset Serving (dist/)                             │
│  - Vite Middleware (Development Mode)                       │
│  - API Routes (/api/*)                                      │
│  - Server-Side Google GenAI SDK (@google/genai)             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 + TypeScript 5.8
- **Build Tool**: Vite 6.2 with `@vitejs/plugin-react` & `@tailwindcss/vite`
- **Styling**: Tailwind CSS v4 (configured via `@import "tailwindcss";`)
- **Animations**: `motion` (Framer Motion v12) for smooth section reveals and page transitions
- **Icons**: `lucide-react`
- **Lottie Animations**: `lottie-react`

### Backend & Server
- **Server**: Express 4.21 running on Node.js
- **TypeScript Runner**: `tsx` in development, `esbuild` for production CommonJS bundling (`dist/server.cjs`)
- **AI Integration**: `@google/genai` (Google GenAI SDK for Gemini API integration)
- **Environment Management**: `dotenv`

---

## 📁 Project Directory Structure

```
.
├── metadata.json                 # AI Studio applet name, description & capabilities
├── package.json                  # Dependencies, scripts, and package management
├── tsconfig.json                 # TypeScript compiler configuration
├── tsconfig.app.json             # Frontend TypeScript settings
├── tsconfig.node.json            # Node/Vite server TypeScript settings
├── vite.config.ts                # Vite configuration with Tailwind CSS plugin
├── .env.example                  # Environment variables template
├── public/                       # Static public assets
└── src/
    ├── main.tsx                  # Client entry point
    ├── App.tsx                   # Main layout, client-side routing & modal states
    ├── index.css                 # Global Tailwind CSS entry
    ├── types.ts                  # Shared TypeScript interfaces & domain models
    ├── data/
    │   └── mockData.ts           # Architecture blueprints, runbooks, and telemetry data
    └── components/
        ├── Header.tsx            # Navigation header with mega-menus & search trigger
        ├── Hero.tsx              # Main hero section with interactive terminal console
        ├── PhilosophySection.tsx # Manifesto & Agency vs. Partner matrix
        ├── ArchitectureStudio.tsx# Multi-Cloud topology visualizer & IaC generator
        ├── TelemetryConsole.tsx  # Live global node telemetry & SLA engine
        ├── AudienceSolutions.tsx # Tailored partner solutions (Agencies, SaaS, Startups, CTOs)
        ├── StartupProgram.tsx    # Flagship Startup Infrastructure Operating Partner program
        ├── AgencyPartnershipProgram.tsx # Flagship Agency Infrastructure SRE alliance
        ├── FinOpsCalculator.tsx  # Cloud waste & ROI calculator
        ├── IncidentSimulator.tsx # 3-minute incident remediation drill simulator
        ├── KnowledgeCenter.tsx   # SRE Engineering Academy & Open Knowledge Center
        ├── RunbookLibrary.tsx    # SRE Runbooks & Architecture Decision Records (ADRs)
        ├── CaseStudies.tsx       # Hard-proven client case studies
        ├── ContactPage.tsx       # Standalone Contact / Technical Discovery page (/contact)
        ├── AboutPage.tsx         # Standalone About Us page (/about)
        ├── CommandPalette.tsx    # Cmd+K global search & command modal
        ├── ArchitectureAssessmentModal.tsx # Guided architectural wizard modal
        ├── IntakeFormModal.tsx   # Project intake modal
        └── Footer.tsx            # Enterprise footer & navigation links
```

---

## 💻 Getting Started & Local Development

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or pnpm / yarn)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-org/aetheria-platform.git
   cd aetheria-platform
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Environment Variables

Copy `.env.example` to `.env` (or set environment variables in your deployment environment):

```bash
cp .env.example .env
```

Define required variables:
```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Google Gemini API Key (Server-Side Only)
GEMINI_API_KEY=your_gemini_api_key_here
```

> ⚠️ **Security Note**: Never expose `GEMINI_API_KEY` to the client browser. All Gemini API calls must be proxied through backend routes.

### Development Server

Start the local development server:

```bash
npm run dev
```

The application will be accessible at:
👉 `http://localhost:3000`

### Production Build & Run

1. **Compile the app**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm run start
   ```

### Linting & Type Check

Run TypeScript validation across the codebase:

```bash
npm run lint
```

---

## 🧩 Component Reference

| Component File | Role & Primary Responsibility |
| :--- | :--- |
| `App.tsx` | Main application shell, route listener (`/`, `/about`, `/contact`), global modals manager. |
| `Header.tsx` | Sticky top navigation bar, active section indicators, mega-menus, search trigger. |
| `Hero.tsx` | High-impact hero banner with interactive terminal preview and primary CTAs. |
| `PhilosophySection.tsx` | Operating philosophy manifesto and comparison matrix vs. traditional agencies. |
| `ArchitectureStudio.tsx` | Multi-Cloud visual topology canvas, Terraform code viewer, component inspector. |
| `TelemetryConsole.tsx` | Real-time global node monitor across AWS, GCP, Azure, and Cloudflare regions. |
| `AudienceSolutions.tsx` | Interactive tabbed solutions for Agencies, SaaS platforms, Startups, and CTOs. |
| `StartupProgram.tsx` | Turnkey operating partner program overview for scaling startups. |
| `AgencyPartnershipProgram.tsx` | White-label cloud SRE partner alliance for digital agencies. |
| `FinOpsCalculator.tsx` | Financial engineering modeler estimating cloud waste reduction and ROI. |
| `IncidentSimulator.tsx` | Step-by-step 3-minute SRE incident remediation drill simulator. |
| `KnowledgeCenter.tsx` | SRE engineering academy and open technical whitepapers. |
| `RunbookLibrary.tsx` | Open Architecture Decision Records (ADRs) with copyable IaC snippets. |
| `CaseStudies.tsx` | Real-world client case studies detailing challenge, solution, and metric outcomes. |
| `AboutPage.tsx` | Full standalone page (`/about`) with interactive story, 5-layer framework, and culture pillars. |
| `ContactPage.tsx` | Standalone page (`/contact`) for technical discovery intake with Lottie confirmation. |
| `CommandPalette.tsx` | Global `Cmd+K` keyboard search modal. |
| `ArchitectureAssessmentModal.tsx` | Interactive diagnostic wizard for tailored architecture recommendations. |
| `IntakeFormModal.tsx` | Project intake form modal. |
| `Footer.tsx` | Enterprise footer with navigational links, status indicator, and copyright. |

---

## ⚙️ The Infrastructure Operating System™ Framework

Aetheria organizes all infrastructure engagements into a structured 5-layer methodology:

```
┌─────────────────────────────────────────────────────────────┐
│ 05. CONTINUITY   — Zero-Trust IAM, KMS & Disaster Recovery  │
├─────────────────────────────────────────────────────────────┤
│ 04. GROWTH       — Karpenter Fleet & FinOps Waste Reduction │
├─────────────────────────────────────────────────────────────┤
│ 03. RELIABILITY  — Datadog/Prometheus Telemetry & SLA Guards│
├─────────────────────────────────────────────────────────────┤
│ 02. VELOCITY     — GitOps, Helm, Blue/Green Deployments     │
├─────────────────────────────────────────────────────────────┤
│ 01. FOUNDATION   — Multi-Region VPCs, Transit Gateways & IaC│
└─────────────────────────────────────────────────────────────┘
```

1. **Layer 01 — Foundation**: Immutable cloud architecture, multi-region VPC topologies, and declarative Terraform/Pulumi blueprints.
2. **Layer 02 — Velocity**: Automated CI/CD, GitOps with ArgoCD, Helm packaging, and zero-downtime canary releases.
3. **Layer 03 — Reliability**: Real-time observability, p99 ingress latency protection, and 24/7 automated SRE incident response.
4. **Layer 04 — Growth**: Dynamic Karpenter pod auto-scaling, Graviton migration, and continuous cloud spend optimization.
5. **Layer 05 — Continuity**: Least-privilege RBAC, KMS envelope encryption, and automated cross-region disaster recovery drills.

---

## 📐 Engineering Principles

Every architectural decision and blueprint at Aetheria follows 6 core principles:

1. **Reliability First** — Systems must be engineered for failure; single points of failure are eliminated at the blueprint level.
2. **Automation Over Repetition** — Any operational task executed more than twice must be codified in Infrastructure as Code.
3. **Documentation Creates Scale** — Knowledge lives in Architecture Decision Records (ADRs) and version-controlled runbooks, never in tribal memory.
4. **Security By Design** — Zero-trust network boundaries and least-privilege IAM are enforced from day one.
5. **Simple Systems Scale Better** — Complexity increases failure surface area; clean, modular designs ensure fast MTTR.
6. **Business Outcomes Matter** — Technology decisions must align directly with product velocity, customer uptime, and cost efficiency.

---

## ☁️ Deployment & Cloud Run Setup

### Port Configuration
The application is pre-configured to bind to **Port 3000** on host `0.0.0.0` as required by containerized ingress routing proxies (such as Google Cloud Run):

```ts
// server.ts
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Production Container Command
To start the application in production:
```bash
npm run build && npm run start
```

This compiles the static React bundle into `dist/` and runs the optimized Node CommonJS server entry (`dist/server.cjs`).

---

## 📄 License & Credits

Built with precision by **Aetheria Infrastructure Operations**. All rights reserved. Designed for enterprise cloud reliability, developer velocity, and operational transparency.
