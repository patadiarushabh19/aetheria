export interface InfrastructureMetric {
  id: string;
  label: string;
  value: string;
  unit: string;
  change: string;
  status: 'optimal' | 'warning' | 'critical';
  trend: number[];
}

export interface NodeStatus {
  id: string;
  name: string;
  region: string;
  provider: 'AWS' | 'GCP' | 'Azure' | 'Cloudflare';
  cpuUsage: number; // percentage
  memoryUsage: number; // percentage
  p99Latency: number; // ms
  status: 'healthy' | 'degraded' | 'rebalancing';
  activePodCount: number;
}

export interface ArchitectureComponent {
  id: string;
  name: string;
  category: 'Compute' | 'Database' | 'Networking' | 'Security' | 'Observability';
  provider: string;
  description: string;
  sla: string;
  monthlyEst: number;
  iacSnippet: string;
  iconName: string;
}

export interface ArchitectureBlueprint {
  id: string;
  title: string;
  targetAudience: string;
  description: string;
  slaTarget: string;
  estimatedWasteReduction: string;
  components: ArchitectureComponent[];
  topologyNodes: {
    id: string;
    label: string;
    type: string;
    x: number;
    y: number;
    connections: string[];
    status: 'active' | 'standby' | 'syncing';
  }[];
  terraformCode: string;
}

export interface IncidentStep {
  timeOffsetSeconds: number;
  phase: string;
  title: string;
  description: string;
  actor: 'Automated Monitor' | 'PagerDuty Engine' | 'Senior SRE On-Call' | 'GitOps Controller';
  actionTaken: string;
  status: 'completed' | 'in_progress' | 'pending';
}

export interface CaseStudy {
  id: string;
  clientType: string;
  clientIndustry: string;
  headline: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    label: string;
  }[];
  architectureSummary: string;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface TechPaper {
  id: string;
  title: string;
  category: 'Security' | 'FinOps' | 'High Availability' | 'Kubernetes' | 'Database';
  readTime: string;
  abstract: string;
  keyTakeaways: string[];
  codeSample?: string;
  publishedDate: string;
}

export interface PartnerAudience {
  id: 'agencies' | 'saas' | 'startups' | 'ctos';
  title: string;
  badge: string;
  headline: string;
  painPoints: string[];
  solutionFeatures: string[];
  slaGuarantee: string;
  keyMetric: string;
}

export interface FinOpsCalculatorInput {
  monthlyCloudSpend: number;
  activeNodesCount: number;
  engineeringTeamSize: number;
  monthlyIncidents: number;
  cloudProvider: 'AWS' | 'GCP' | 'Azure' | 'Multi-Cloud';
}

export interface AssessmentAnswers {
  cloudProvider: string;
  monthlySpend: string;
  teamSize: string;
  onCallBurden: string;
  complianceNeeds: string[];
  primaryGoal: string;
}
