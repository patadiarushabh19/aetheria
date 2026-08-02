import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  FileText,
  CheckCircle2,
  Code,
  Copy,
  Check,
  ArrowRight,
  Download,
  Bookmark,
  Search,
  Filter,
  Cpu,
  Shield,
  Zap,
  Terminal,
  RefreshCw,
  BarChart2,
  Layers,
  Sliders,
  PlayCircle,
  Eye,
  Share2,
  Sparkles,
  AlertCircle,
  HelpCircle,
  FileCheck2,
  Database,
  Network,
  Server,
  Globe,
  Lock,
  Activity,
  Wrench,
  Settings,
  ChevronRight,
  ListOrdered,
  Flame,
  Printer,
  ExternalLink,
  GraduationCap,
  Calculator,
  Compass,
  Building
} from 'lucide-react';

interface KnowledgeCenterProps {
  onOpenIntake: (defaultCategory?: string) => void;
}

// Resource Item Interface
interface ResourceItem {
  id: string;
  title: string;
  category: string;
  type: 'Guide' | 'Playbook' | 'Blueprint' | 'Checklist' | 'Architecture Pattern' | 'Template' | 'Runbook' | 'Cheat Sheet';
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Enterprise';
  publishedDate: string;
  abstract: string;
  keyTakeaways: string[];
  codeSample?: string;
  codeLanguage?: string;
  author: string;
  views: number;
  bookmarked?: boolean;
}

// Special Tools Interface
interface SpecialTool {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: React.ElementType;
}

export const KnowledgeCenter: React.FC<KnowledgeCenterProps> = ({ onOpenIntake }) => {
  // Navigation & View Mode State
  const [activeTab, setActiveTab] = useState<'hub' | 'tools' | 'learning-paths'>('hub');
  
  // Search Query
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Category Filter
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Resource Type Filter
  const [selectedType, setSelectedType] = useState<string>('All');

  // Bookmarked IDs
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set(['k8s-autoscale-adr', 'terraform-landing-zone']));

  // Selected Article for Reading View Modal/Panel
  const [activeArticle, setActiveArticle] = useState<ResourceItem | null>(null);

  // Copy State
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // Active Tool in Interactive Tools Suite
  const [activeToolId, setActiveToolId] = useState<string>('blueprint-gen');

  // Tool 1: Infrastructure Blueprint Generator State
  const [bpCloud, setBpCloud] = useState<'aws' | 'gcp' | 'azure'>('aws');
  const [bpWorkload, setBpWorkload] = useState<'eks' | 'serverless' | 'vm-cluster'>('eks');
  const [bpSecurity, setBpSecurity] = useState<'hardened' | 'encryption' | 'standard'>('hardened');

  // Tool 2: Production Readiness Score State
  const [prScoreChecks, setPrScoreChecks] = useState<Record<string, boolean>>({
    iac: true,
    ci_cd: true,
    alerts: true,
    backups: true,
    ssl_waf: true,
    db_replicas: false,
    dr_drill: false,
    finops_budget: true
  });

  // Tool 3: Cloud Cost Opportunity Calculator State
  const [monthlySpend, setMonthlySpend] = useState<number>(12000);
  const [hasIdleCompute, setHasIdleCompute] = useState<boolean>(true);
  const [hasNatWaste, setHasNatWaste] = useState<boolean>(true);

  // Content Hub Categories
  const categories = [
    'All',
    'Cloud Engineering',
    'Platform Engineering',
    'Kubernetes & Docker',
    'DevOps & CI/CD',
    'Terraform & IaC',
    'Cloud Security',
    'Observability',
    'Disaster Recovery',
    'Cloud Cost (FinOps)',
    'Incident Management'
  ];

  // Resource Types
  const resourceTypes = [
    'All',
    'Guide',
    'Playbook',
    'Blueprint',
    'Checklist',
    'Architecture Pattern',
    'Runbook',
    'Cheat Sheet'
  ];

  // Knowledge Base Catalog Data
  const resources: ResourceItem[] = [
    {
      id: 'k8s-autoscale-adr',
      title: 'Production Kubernetes Autoscaling & Karpenter HPA Architecture Pattern',
      category: 'Kubernetes & Docker',
      type: 'Architecture Pattern',
      readTime: '12 min read',
      difficulty: 'Advanced',
      publishedDate: 'July 2026',
      author: 'Principal SRE Team',
      views: 3420,
      abstract: 'How we configured Karpenter JIT (Just-In-Time) node provisioning with Horizontal Pod Autoscalers (HPA) to handle 15,000 req/sec surges with zero pod eviction latency while cutting EC2 compute waste by 38%.',
      keyTakeaways: [
        'Prefer Karpenter over standard Cluster Autoscaler for sub-45s node provisioning',
        'Consolidated spot instance node pools with automated fallback to on-demand',
        'Strict pod disruption budgets (PDBs) to prevent cascading node drains during traffic spikes',
        'Memory-limit enforcement to eradicate OOMKilled container restarts'
      ],
      codeLanguage: 'yaml',
      codeSample: `apiVersion: karpenter.sh/v1alpha5
kind: Provisioner
metadata:
  name: default-production
spec:
  requirements:
    - key: "karpenter.k8s.aws/instance-category"
      operator: In
      values: ["c6i", "m6i", "c6a"]
    - key: "karpenter.sh/capacity-type"
      operator: In
      values: ["spot", "on-demand"]
  limits:
    resources:
      cpu: "1000"
      memory: 2000Gi
  providerRef:
    name: default-node-template
  ttlSecondsAfterEmpty: 30
  ttlSecondsUntilExpired: 2592000`
    },
    {
      id: 'terraform-landing-zone',
      title: 'Zero-Trust AWS Multi-Account Landing Zone with OpenTofu & IaC',
      category: 'Terraform & IaC',
      type: 'Blueprint',
      readTime: '15 min read',
      difficulty: 'Enterprise',
      publishedDate: 'June 2026',
      author: 'Lead Cloud Architect',
      views: 2890,
      abstract: 'Complete Terraform module architecture for provisioning AWS Control Tower, transit gateways, central logging buckets, and least-privilege IAM roles across Dev, Staging, and Prod organizational units.',
      keyTakeaways: [
        'Strict isolation between security, shared-services, and application workloads',
        'Centralized AWS CloudTrail and GuardDuty S3 log bucket with object lock',
        'Automated IAM Identity Center SSO role mapping via Terraform IaC',
        'Zero public IP addresses for database and backend application subnets'
      ],
      codeLanguage: 'hcl',
      codeSample: `module "aws_landing_zone" {
  source  = "git::https://github.com/aetheria/terraform-aws-landingzone.git?ref=v2.4.0"

  org_name              = "acme-corp"
  enable_control_tower  = true
  central_logging_s3    = "arn:aws:s3:::acme-security-audit-logs"
  
  vpc_cidrs = {
    management  = "10.100.0.0/16"
    production  = "10.200.0.0/16"
    staging     = "10.300.0.0/16"
  }

  enable_guardduty     = true
  enable_security_hub  = true
}`
    },
    {
      id: 'zero-downtime-postgres-migration',
      title: 'Zero-Downtime Multi-Terabyte PostgreSQL Migration Playbook',
      category: 'Disaster Recovery',
      type: 'Playbook',
      readTime: '18 min read',
      difficulty: 'Advanced',
      publishedDate: 'July 2026',
      author: 'Database Engineering Guild',
      views: 4150,
      abstract: 'Step-by-step production runbook for migrating a 4.2TB live PostgreSQL database from self-hosted EC2 to AWS Aurora Serverless v2 using Logical Replication and pgcopydb with < 5 seconds total switchover lag.',
      keyTakeaways: [
        'Pre-migration schema verification and sequence sync protocol',
        'Setting max_replication_slots and wal_level = logical without service restarts',
        'Synthetic write verification and dual-tailing lag validation before cutover',
        'Instant DNS rroute fallback procedure in case of unexpected replication lag'
      ],
      codeLanguage: 'bash',
      codeSample: `# 1. Verify Logical Replication Lag
select client_addr, state, sync_state, 
       pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn) as lag_bytes 
from pg_stat_replication;

# 2. Trigger pgcopydb follow mode cutover
pgcopydb follow \\
  --source "host=prod-old-db.internal port=5432 dbname=app user=migrator" \\
  --target "host=aurora-new-db.internal port=5432 dbname=app user=migrator"`
    },
    {
      id: 'cloud-hardening-checklist',
      title: 'The 12-Point Startup Cloud Hardening & Security Checklist',
      category: 'Cloud Security',
      type: 'Checklist',
      readTime: '8 min read',
      difficulty: 'Intermediate',
      publishedDate: 'June 2026',
      author: 'Security & Infrastructure Lead',
      views: 5200,
      abstract: 'The definitive technical checklist required to harden cloud infrastructure on AWS and GCP. Includes automated evidence logging scripts, KMS key rotation, and Datadog audit trails.',
      keyTakeaways: [
        'Enforce MFA and IP-whitelisted SSO across all cloud management consoles',
        'Automate EBS and RDS storage volume encryption at rest using AWS KMS CMKs',
        'Implement 90-day automated log retention policies in write-once S3 buckets',
        'Enforce GitHub branch protection rules requiring 2 senior code reviews for main'
      ],
      codeLanguage: 'json',
      codeSample: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "EnforceKMSEncryptionAtRest",
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:PutObject",
      "Resource": "arn:aws:s3:::acme-audit-logs/*",
      "Condition": {
        "StringNotEquals": {
          "s3:x-amz-server-side-encryption": "aws:kms"
        }
      }
    }
  ]
}`
    },
    {
      id: 'finops-cloud-waste-guide',
      title: 'Eliminating Unused Compute & Idle NAT Gateways: A FinOps Guide',
      category: 'Cloud Cost (FinOps)',
      type: 'Guide',
      readTime: '10 min read',
      difficulty: 'Intermediate',
      publishedDate: 'May 2026',
      author: 'FinOps Practice Lead',
      views: 2980,
      abstract: 'How engineering teams can reclaim 30%+ of their monthly AWS/GCP bill by identifying unattached EBS volumes, oversized NAT Gateways, idle dev clusters, and unoptimized CloudWatch metric cardinality.',
      keyTakeaways: [
        'Replacing multi-AZ NAT Gateways with VPC Endpoints for S3 and DynamoDB',
        'Auto-sleeping non-production Kubernetes node pools outside business hours',
        'Migrating fixed RDS instances to Aurora Serverless v2 auto-pause scaling',
        'Purchasing 3-year Compute Savings Plans after rightsizing baseline workloads'
      ],
      codeLanguage: 'bash',
      codeSample: `# AWS CLI Command to find unattached EBS volumes wasting money
aws ec2 describe-volumes \\
  --filters Name=status,Values=available \\
  --query "Volumes[*].{ID:VolumeId,Size:Size,Zone:AvailabilityZone,Type:VolumeType}" \\
  --output table`
    },
    {
      id: 'github-actions-fast-builds',
      title: 'Accelerating CI/CD Pipelines: From 22 Minutes to 3.5 Minutes',
      category: 'DevOps & CI/CD',
      type: 'Runbook',
      readTime: '9 min read',
      difficulty: 'Intermediate',
      publishedDate: 'May 2026',
      author: 'Platform Engineering Guild',
      views: 3890,
      abstract: 'A deep-dive runbook on docker layer caching, parallel test matrix splitting, and GitHub Actions self-hosted ephemeral runner autoscaling on AWS Spot instances.',
      keyTakeaways: [
        'Utilize gha cache backend for Docker Buildx to reuse intermediate build layers',
        'Split integration tests across 8 parallel runner jobs with dynamic timing split',
        'Cache node_modules and target directories using content-based hash keys',
        'Automate ephemeral preview environment cleanup on pull-request merge'
      ],
      codeLanguage: 'yaml',
      codeSample: `- name: Set up Docker Buildx
  uses: docker/setup-buildx-action@v3

- name: Build and push with GHA Cache
  uses: docker/build-push-action@v5
  with:
    context: .
    push: true
    tags: ghcr.io/org/app:\${{ github.sha }}
    cache-from: type=gha
    cache-to: type=gha,mode=max`
    }
  ];

  // Learning Paths Data
  const learningPaths = [
    {
      title: 'Startup Production Foundation Path',
      duration: '4 Weeks • 6 Modules',
      target: 'Founders & Lead Engineers',
      description: 'Master the transition from local prototype to zero-downtime, security-hardened cloud infrastructure on AWS/GCP.',
      modules: ['IaC Essentials (Terraform)', 'CI/CD Pipeline Automation', 'Production Secrets Hygiene', 'Basic Observability & Alerting', 'Cloud Security Guardrails']
    },
    {
      title: 'Kubernetes Platform Engineering Path',
      duration: '6 Weeks • 8 Modules',
      target: 'Senior SREs & DevOps Engineers',
      description: 'Learn to build scalable Kubernetes internal developer platforms (IDP) with Karpenter, ArgoCD, and Istio Service Mesh.',
      modules: ['EKS/GKE Cluster Design', 'GitOps with ArgoCD', 'Karpenter Autoscaling', 'Service Mesh Security (Istio)', 'Production Observability']
    },
    {
      title: 'Agency White-Label Infrastructure Mastery',
      duration: '3 Weeks • 5 Modules',
      target: 'Agency Tech Leads & Founders',
      description: 'How to deliver co-branded enterprise cloud architectures to clients while maximizing recurring retainer margins.',
      modules: ['Pre-Sales Architecture Proposals', 'Co-Branded Client Dashboards', 'Zero-Downtime Migration Runbooks', 'Client SLA Management']
    }
  ];

  // Filtered Catalog
  const filteredResources = useMemo(() => {
    return resources.filter(res => {
      const matchesSearch = searchQuery === '' || 
        res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat = selectedCategory === 'All' || res.category === selectedCategory;
      const matchesType = selectedType === 'All' || res.type === selectedType;

      return matchesSearch && matchesCat && matchesType;
    });
  }, [searchQuery, selectedCategory, selectedType]);

  // Toggle Bookmark
  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarks(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Copy Code Snippet
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Special Tools List
  const specialTools: SpecialTool[] = [
    {
      id: 'blueprint-gen',
      title: 'Infrastructure Blueprint Generator™',
      badge: 'TERRAFORM / IaC',
      description: 'Generate modular, security-hardened Terraform IaC code for AWS or GCP in seconds.',
      icon: Terminal
    },
    {
      id: 'readiness-score',
      title: 'Production Readiness Score™',
      badge: '12-POINT AUDIT',
      description: 'Evaluate your deployment pipeline, backup policies, and failover health before public launch.',
      icon: FileCheck2
    },
    {
      id: 'cost-calculator',
      title: 'Cloud Cost Opportunity Calculator™',
      badge: 'FINOPS AUDIT',
      description: 'Calculate hidden cloud compute waste, idle NAT gateways, and potential annual savings.',
      icon: Calculator
    }
  ];

  return (
    <section id="knowledge-center" className="py-24 bg-[#FFFFFF] text-slate-900 relative overflow-hidden border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================================= */}
        {/* HEADER SECTION                                                            */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-4 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-semibold shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-slate-900" />
            <span className="font-bold tracking-wider uppercase">ENGINEERING ACADEMY & KNOWLEDGE CENTER</span>
            <span className="bg-slate-200 text-slate-800 text-[10px] px-2 py-0.5 rounded font-sans font-semibold">OPEN SOURCE STANDARDS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight font-sans leading-[1.12]">
            Educate First. <br />
            <span className="text-slate-800">
              Build Production Trust Second.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed">
            The open technical repository for founders, SREs, and agencies. Access battle-tested Architecture Decision Records (ADRs), Terraform blueprints, security checklists, and zero-downtime runbooks.
          </p>

          {/* Navigation Bar Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => setActiveTab('hub')}
              className={`px-6 py-3 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'hub'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Knowledge Hub & Blueprints</span>
            </button>

            <button
              onClick={() => setActiveTab('tools')}
              className={`px-6 py-3 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'tools'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Interactive Engineering Tools</span>
            </button>

            <button
              onClick={() => setActiveTab('learning-paths')}
              className={`px-6 py-3 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'learning-paths'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Structured Learning Paths</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: KNOWLEDGE HUB & SEARCHABLE CATALOG                                 */}
        {/* ========================================================================= */}
        {activeTab === 'hub' && (
          <div className="space-y-10">
            
            {/* Search Bar & Filter Controls */}
            <div className="bg-[#FCFCFA] p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 140+ architecture decision records, Terraform blueprints, security checklists..."
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors font-sans shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-slate-900"
                  >
                    CLEAR
                  </button>
                )}
              </div>

              {/* Categories Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                <span className="text-xs font-mono text-slate-500 shrink-0 mr-1 flex items-center gap-1 font-semibold">
                  <Filter className="w-3.5 h-3.5 text-slate-700" />
                  TOPIC:
                </span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono shrink-0 transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-slate-900 text-white font-bold shadow-xs'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Resource Types Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pt-1 border-t border-slate-200">
                <span className="text-xs font-mono text-slate-500 shrink-0 mr-1 flex items-center gap-1 font-semibold">
                  <FileText className="w-3.5 h-3.5 text-slate-700" />
                  TYPE:
                </span>
                {resourceTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-1 rounded-md text-[11px] font-mono shrink-0 transition-all cursor-pointer ${
                      selectedType === type
                        ? 'bg-slate-800 text-white font-bold'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Catalog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveArticle(item)}
                  className="bg-white border border-slate-200 hover:border-slate-400 rounded-2xl p-6 flex flex-col justify-between transition-all cursor-pointer group shadow-xs relative overflow-hidden"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="bg-slate-100 text-slate-800 border border-slate-200 px-2 py-0.5 rounded font-bold">
                        {item.category}
                      </span>
                      <button
                        onClick={(e) => toggleBookmark(item.id, e)}
                        className="text-slate-400 hover:text-amber-500 transition-colors p-1"
                        title="Bookmark Resource"
                      >
                        <Bookmark className={`w-4 h-4 ${bookmarks.has(item.id) ? 'text-amber-500 fill-amber-500' : ''}`} />
                      </button>
                    </div>

                    <h3 className="text-lg font-bold text-slate-950 group-hover:text-slate-800 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-normal">
                      {item.abstract}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="bg-slate-50 px-2 py-1 rounded border border-slate-200 text-slate-800 font-semibold">
                      {item.type}
                    </span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              ))}
            </div>

            {filteredResources.length === 0 && (
              <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl shadow-xs">
                <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                <h4 className="text-slate-950 font-bold">No matching technical resources found</h4>
                <p className="text-xs text-slate-600 mt-1">Try broadening your search term or resetting category filters.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedType('All'); }}
                  className="mt-4 px-4 py-2 bg-slate-900 text-xs font-mono text-white rounded-lg hover:bg-slate-800 shadow-xs"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: INTERACTIVE ENGINEERING TOOLS SUITE                                */}
        {/* ========================================================================= */}
        {activeTab === 'tools' && (
          <div className="space-y-10">
            {/* Tool Selector Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {specialTools.map((t) => {
                const Icon = t.icon;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveToolId(t.id)}
                    className={`p-6 rounded-2xl border text-left transition-all cursor-pointer shadow-xs ${
                      activeToolId === t.id
                        ? 'bg-slate-900 border-slate-900 text-white'
                        : 'bg-white border-slate-200 hover:border-slate-300 text-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                        activeToolId === t.id
                          ? 'bg-slate-800 text-slate-200 border-slate-700'
                          : 'bg-slate-100 text-slate-800 border-slate-200'
                      }`}>
                        {t.badge}
                      </span>
                      <Icon className={`w-5 h-5 ${activeToolId === t.id ? 'text-white' : 'text-slate-900'}`} />
                    </div>
                    <h3 className={`text-base font-bold mb-1 ${activeToolId === t.id ? 'text-white' : 'text-slate-950'}`}>{t.title}</h3>
                    <p className={`text-xs leading-relaxed ${activeToolId === t.id ? 'text-slate-300' : 'text-slate-600'}`}>{t.description}</p>
                  </button>
                );
              })}
            </div>

            {/* Tool 1: Infrastructure Blueprint Generator */}
            {activeToolId === 'blueprint-gen' && (
              <div className="bg-[#FCFCFA] border border-slate-200 rounded-3xl p-8 sm:p-10 space-y-6 shadow-xs">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
                  <div>
                    <span className="text-xs font-mono uppercase bg-slate-100 text-slate-900 border border-slate-200 px-3 py-1 rounded font-bold">
                      INTERACTIVE TOOL 01
                    </span>
                    <h2 className="text-2xl font-bold text-slate-950 mt-2">
                      Infrastructure Blueprint Generator™
                    </h2>
                    <p className="text-xs text-slate-600 mt-1">
                      Configure your cloud parameters below to generate production-grade Terraform IaC code instantly.
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopyCode(
                      `# Generated Terraform IaC Blueprint for ${bpCloud.toUpperCase()} (${bpWorkload.toUpperCase()})\nmodule "production_cluster" {\n  source = "aetheria/${bpCloud}/${bpWorkload}"\n  compliance = "${bpSecurity}"\n  enable_auto_scaling = true\n  enable_waf_defense  = true\n}`
                    )}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs font-mono flex items-center gap-2 transition-all cursor-pointer shrink-0 shadow-xs"
                  >
                    <Copy className="w-4 h-4" />
                    <span>{copiedCode ? 'Copied to Clipboard!' : 'Copy Terraform IaC'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Selector Options */}
                  <div className="lg:col-span-5 space-y-5 text-xs font-mono">
                    <div>
                      <label className="text-slate-600 block mb-2 font-bold">1. TARGET CLOUD PROVIDER:</label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['aws', 'gcp', 'azure'] as const).map(c => (
                          <button
                            key={c}
                            onClick={() => setBpCloud(c)}
                            className={`py-2 rounded-lg border font-bold uppercase transition-all cursor-pointer ${
                              bpCloud === c ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200'
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-slate-600 block mb-2 font-bold">2. WORKLOAD ARCHITECTURE:</label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['eks', 'serverless', 'vm-cluster'] as const).map(w => (
                          <button
                            key={w}
                            onClick={() => setBpWorkload(w)}
                            className={`py-2 rounded-lg border font-bold uppercase transition-all cursor-pointer text-[10px] ${
                              bpWorkload === w ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200'
                            }`}
                          >
                            {w === 'eks' ? 'Kubernetes' : w === 'serverless' ? 'Serverless' : 'VM Cluster'}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-slate-600 block mb-2 font-bold">3. COMPLIANCE & SECURITY PROFILE:</label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['hardened', 'encryption', 'standard'] as const).map(s => (
                          <button
                            key={s}
                            onClick={() => setBpSecurity(s)}
                            className={`py-2 rounded-lg border font-bold uppercase transition-all cursor-pointer ${
                              bpSecurity === s ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200'
                            }`}
                          >
                            {s === 'hardened' ? 'Hardened' : s === 'encryption' ? 'Encrypted' : 'Standard'}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Generated Code Preview */}
                  <div className="lg:col-span-7 bg-slate-950 p-5 rounded-2xl border border-slate-800 relative font-mono text-xs text-slate-300 space-y-2 overflow-x-auto shadow-xs">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2 mb-2">
                      <span>main.tf (Terraform OpenTofu Specification)</span>
                      <span className="text-emerald-400">✓ Validated Modular IaC</span>
                    </div>
                    <pre className="text-emerald-400 leading-relaxed">
{`# Generated Infrastructure Blueprint
# Provider: ${bpCloud.toUpperCase()} | Workload: ${bpWorkload.toUpperCase()} | Standard: ${bpSecurity.toUpperCase()}

module "aetheria_production_blueprint" {
  source  = "aetheria/${bpCloud}/architecture"
  version = "~> 3.4.0"

  environment          = "production"
  compliance_profile   = "${bpSecurity}"
  enable_multi_az      = true
  enable_kms_encryption = true

  cluster_config = {
    type              = "${bpWorkload}"
    min_node_capacity = 3
    max_node_capacity = 50
    enable_karpenter  = true
  }

  security_guardrails = {
    enable_guardduty = true
    enable_waf       = true
    block_public_s3  = true
  }
}`}
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* Tool 2: Production Readiness Score */}
            {activeToolId === 'readiness-score' && (
              <div className="bg-[#FCFCFA] border border-slate-200 rounded-3xl p-8 sm:p-10 space-y-6 shadow-xs">
                <div>
                  <span className="text-xs font-mono uppercase bg-slate-100 text-slate-900 border border-slate-200 px-3 py-1 rounded font-bold">
                    INTERACTIVE TOOL 02
                  </span>
                  <h2 className="text-2xl font-bold text-slate-950 mt-2">
                    Production Readiness Score Calculator™
                  </h2>
                  <p className="text-xs text-slate-600 mt-1">
                    Check off your active production safeguards to calculate your pre-launch readiness rating.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { key: 'iac', label: '100% Terraform/Pulumi Infrastructure as Code' },
                    { key: 'ci_cd', label: 'Automated CI/CD Pipelines with Zero-Downtime Rollouts' },
                    { key: 'alerts', label: '24/7 PagerDuty / Sentry Alert Escalation Hooks' },
                    { key: 'backups', label: 'Automated Point-in-Time Database Backups & Tested Restoration' },
                    { key: 'ssl_waf', label: 'Cloudflare / AWS WAF Anti-DDoS Defense Enabled' },
                    { key: 'db_replicas', label: 'Multi-AZ Database Read Replicas' },
                    { key: 'dr_drill', label: 'Quarterly Simulated Failover & Chaos Drills' },
                    { key: 'finops_budget', label: 'FinOps Anomaly Cost Alerts Configured' }
                  ].map(item => (
                    <button
                      key={item.key}
                      onClick={() => setPrScoreChecks(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 text-xs font-semibold ${
                        prScoreChecks[item.key]
                          ? 'bg-slate-900 border-slate-900 text-white'
                          : 'bg-white border-slate-200 text-slate-700'
                      }`}
                    >
                      <span>{item.label}</span>
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${prScoreChecks[item.key] ? 'text-emerald-400' : 'text-slate-300'}`} />
                    </button>
                  ))}
                </div>

                {/* Score Banner */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                  <div>
                    <div className="text-xs font-mono text-slate-500 font-semibold">CALCULATED READINESS SCORE</div>
                    <div className="text-3xl font-black text-slate-950 font-mono mt-1">
                      {Object.values(prScoreChecks).filter(Boolean).length * 12.5}% / 100%
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenIntake('assessment')}
                    className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-xs"
                  >
                    Request Comprehensive SRE Review →
                  </button>
                </div>
              </div>
            )}

            {/* Tool 3: Cloud Cost Opportunity Calculator */}
            {activeToolId === 'cost-calculator' && (
              <div className="bg-[#FCFCFA] border border-slate-200 rounded-3xl p-8 sm:p-10 space-y-6 shadow-xs">
                <div>
                  <span className="text-xs font-mono uppercase bg-slate-100 text-slate-900 border border-slate-200 px-3 py-1 rounded font-bold">
                    INTERACTIVE TOOL 03
                  </span>
                  <h2 className="text-2xl font-bold text-slate-950 mt-2">
                    Cloud Cost Opportunity Calculator™
                  </h2>
                  <p className="text-xs text-slate-600 mt-1">
                    Calculate potential annual savings from rightsizing compute, eliminating NAT gateway transfer, and spot instance integration.
                  </p>
                </div>

                <div className="space-y-4 max-w-xl mx-auto">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-slate-700 mb-2 font-semibold">
                      <span>ESTIMATED MONTHLY AWS / GCP BILL:</span>
                      <span className="text-slate-950 font-bold">${monthlySpend.toLocaleString()} / mo</span>
                    </div>
                    <input
                      type="range"
                      min="2000"
                      max="100000"
                      step="1000"
                      value={monthlySpend}
                      onChange={(e) => setMonthlySpend(Number(e.target.value))}
                      className="w-full accent-slate-900 bg-slate-200 h-2 rounded-lg cursor-pointer"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-white p-5 rounded-xl border border-slate-200 text-center shadow-xs">
                      <div className="text-xs font-mono text-slate-500 font-semibold">POTENTIAL ANNUAL SAVINGS</div>
                      <div className="text-3xl font-black text-emerald-700 font-mono mt-1">
                        ${Math.round(monthlySpend * 12 * 0.32).toLocaleString()}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono mt-1">Based on 32% average FinOps reduction</div>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200 text-center shadow-xs">
                      <div className="text-xs font-mono text-slate-500 font-semibold">PAYBACK PERIOD</div>
                      <div className="text-3xl font-black text-slate-950 font-mono mt-1">
                        &lt; 30 Days
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono mt-1">Zero downtime optimization</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: STRUCTURED LEARNING PATHS                                          */}
        {/* ========================================================================= */}
        {activeTab === 'learning-paths' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningPaths.map((lp, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-xs">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="bg-slate-100 text-slate-800 border border-slate-200 px-2.5 py-0.5 rounded font-bold">
                      {lp.duration}
                    </span>
                    <span className="text-slate-500 font-semibold">{lp.target}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 leading-snug">{lp.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{lp.description}</p>

                  <div className="mt-6 space-y-2">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                      CURRICULUM MODULES:
                    </span>
                    {lp.modules.map((m, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2 rounded border border-slate-200 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Module 0{i + 1}: {m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenIntake('academy')}
                  className="w-full py-3 rounded-xl bg-slate-900 border border-slate-900 hover:bg-slate-800 text-xs font-mono text-white transition-colors cursor-pointer font-semibold shadow-xs"
                >
                  Access Learning Path Materials →
                </button>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* ARTICLE READING MODAL / DEEP DIVE                                         */}
        {/* ========================================================================= */}
        {activeArticle && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white border border-slate-200 rounded-3xl max-w-4xl w-full p-6 sm:p-10 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-slate-900" />
                  <span className="text-xs font-mono text-slate-900 uppercase font-bold">
                    {activeArticle.category} • {activeArticle.type}
                  </span>
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-mono font-semibold"
                >
                  CLOSE [ESC]
                </button>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-sans">{activeArticle.title}</h2>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 mt-2">
                  <span>Author: {activeArticle.author}</span>
                  <span>•</span>
                  <span>Published: {activeArticle.publishedDate}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-sans border-l-2 border-slate-900 pl-4 py-1">
                {activeArticle.abstract}
              </p>

              <div className="space-y-3">
                <span className="text-xs font-mono text-slate-900 uppercase tracking-wider block font-bold">
                  KEY ARCHITECTURAL TAKEAWAYS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeArticle.keyTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {activeArticle.codeSample && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>Reference Code / Spec ({activeArticle.codeLanguage})</span>
                    <button
                      onClick={() => handleCopyCode(activeArticle.codeSample!)}
                      className="text-slate-900 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                    </button>
                  </div>
                  <pre className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed">
                    {activeArticle.codeSample}
                  </pre>
                </div>
              )}

              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs font-mono text-slate-600 font-medium">
                  💡 Need help applying this architecture pattern to your cloud?
                </span>
                <button
                  onClick={() => { setActiveArticle(null); onOpenIntake('architecture'); }}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shrink-0 shadow-xs"
                >
                  Schedule Architect Review Call →
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
