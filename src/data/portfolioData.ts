export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'cloud-security' | 'fullstack' | 'systems';
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  features: string[];
  impact: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  date: string;
  stats?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  department?: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Proficient';
    context?: string;
  }[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  coursework: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  url?: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Raghu Bharathi K P",
  shortName: "Raghu Bharathi",
  title: "Backend & Cloud Security Engineer",
  subtitle: "Applied Machine Learning & Distributed Systems",
  location: "Chennai, Tamil Nadu, India",
  email: "raghubharathi82@gmail.com",
  phone: "+91 9123582259",
  linkedin: "https://www.linkedin.com/in/raghu-bharathi-983837323/",
  github: "https://github.com/RaghuBharathi3",
  resumePath: `${import.meta.env.BASE_URL}RaghuBharathi.pdf`,
  profilePhoto: `${import.meta.env.BASE_URL}profile.jpg`,
  bio: "Software Engineering undergraduate with enterprise internship experience at Zoho Corporation, specializing in resilient backend architectures, cloud security systems, and applied machine learning. Proven track record in designing multi-cloud telemetry pipelines, threat classification models, and deterministic risk-scoring engines across AWS, Azure, GCP, and OCI mapped to NIST CSF and ISO 27001 standards.",
  aboutMe: {
    identity: "I am a Software Engineering undergraduate at Rajalakshmi Engineering College with enterprise internship experience at Zoho Corporation. My work is focused on backend engineering, cloud platforms, and security-conscious software design.",
    interests: "Technically, I am drawn to distributed data flows, deterministic risk scoring, and cloud telemetry normalization. I enjoy working at the boundary between software services and infrastructure—building APIs that are predictable, defensive, and observable under real-world conditions.",
    skillsAndApproach: "My engineering foundation is built on Python, TypeScript, and SQL. Having shipped production business logic and RESTful integrations at Zoho Corporation, I prioritize clean schema validation (Pydantic), strict access controls (RBAC), and automated testing suites (Pytest) over speculative complexity.",
    careerDirection: "I am actively seeking software engineering roles where I can contribute to production backend services, cloud security telemetry pipelines, and distributed architectures within a high-standard engineering team."
  },
  status: "Available for Software Engineering & Security Roles",
  metrics: [
    { label: "Enterprise Internship", value: "Zoho Corp", detail: "CRM Automation & REST APIs" },
    { label: "Cloud Platforms", value: "4 Clouds", detail: "AWS, Azure, GCP, OCI Telemetry" },
    { label: "Automated Tests", value: "31 Unit Tests", detail: "Full Pytest Coverage in Core Framework" },
    { label: "Compliance Alignment", value: "3 Standards", detail: "NIST CSF 2.0, CIS v8, ISO 27001" },
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: "zoho-corp",
    company: "Zoho Corporation",
    role: "CRM Engineering Intern",
    department: "Enterprise CRM & Business Automation",
    location: "Chennai, Tamil Nadu",
    period: "June 2025 – July 2025",
    type: "Internship",
    description: "Collaborated within an enterprise engineering group to architect, debug, and deliver business-critical CRM automation pipelines and cross-platform RESTful synchronizations.",
    responsibilities: [
      "Collaborated with a seven-member engineering team to design, debug, and deliver enterprise-grade CRM automation modules following Agile methodologies.",
      "Developed bespoke Deluge scripts and workflow rules across Zoho CRM and Zoho Books to automate record routing and field validation.",
      "Integrated Zoho CRM REST APIs for secure, bidirectional data synchronization between distributed internal platforms.",
      "Diagnosed and resolved edge-case workflow bugs, authoring standardized debugging playbooks to maintain pipeline reliability."
    ],
    technologies: ["Zoho CRM REST APIs", "Deluge Scripting", "Zoho Books", "API Integration", "JSON/REST", "Agile / Scrum", "Data Synchronization"],
    highlights: [
      "Automated lead assignment and validation rules, reducing manual dispatch errors",
      "Eliminated sync discrepancies between CRM records and cross-functional platforms",
      "Delivered production-ready scripts adhering strictly to enterprise security guidelines"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "multi-cloud-threat-eval",
    title: "Multi-Cloud Security Risk Evaluation Framework",
    tagline: "Automated multi-cloud audit log ingestion, Random Forest threat scoring, and compliance mapping",
    category: "cloud-security",
    date: "2024 – 2025",
    featured: true,
    overview: "An enterprise cloud security analysis platform that ingests, validates, and normalizes disparate audit logs and security telemetry across AWS, Microsoft Azure, Google Cloud Platform (GCP), and Oracle Cloud Infrastructure (OCI). The engine pairs an ensemble Random Forest classifier with a deterministic heuristic engine to compute risk scores (0–100) and correlates findings directly to NIST CSF 2.0, CIS Controls v8, and ISO/IEC 27001:2022 frameworks.",
    problem: "Heterogeneous multi-cloud infrastructures generate siloed, incompatible audit streams (AWS CloudTrail/GuardDuty, Azure Activity Logs, GCP Cloud Audit, OCI Audit). Security teams face massive alert fatigue and lack unified risk scoring that evaluates multi-cloud exploit drift against recognized compliance standards.",
    solution: "Built a modular cloud adapter layer that transforms vendor-specific payloads into a Pydantic-enforced canonical event schema. Evaluated anomalies with a scikit-learn Random Forest model, supplemented with a deterministic heuristic risk engine, FastAPI async REST endpoints, granular RBAC, and automated regulatory control mapping.",
    architecture: [
      "Cloud Adapters Layer: Normalizes AWS GuardDuty, Azure Sentinel/Activity, GCP Audit, and OCI Audit into a Canonical Event Schema",
      "Validation Engine: Pydantic schemas validating timestamp, resource ARN, principal identity, and action vectors with batch error isolation",
      "Inference & Scoring Pipeline: Trained Random Forest classifier paired with weighted heuristic risk calculation (0–100 score)",
      "Regulatory Compliance Engine: Direct lookup mapping threat signatures to NIST CSF 2.0 (PR.AC, DE.CM), CIS Controls v8 (3.3, 5.4), and ISO 27001:2022 (A.9.2, A.12.4)",
      "Asynchronous REST API: High-throughput FastAPI endpoints with SQLite persistence, live telemetry metrics, and 31 passing Pytest suites"
    ],
    techStack: ["Python", "FastAPI", "scikit-learn", "Random Forest", "SQLite", "Pytest", "Pydantic", "SHAP", "REST APIs", "RBAC"],
    features: [
      "Unified ingestion schema for AWS, Azure, GCP, and OCI",
      "Deterministic 0–100 composite risk scoring engine",
      "Automated compliance crosswalk to NIST CSF 2.0, CIS v8, and ISO 27001",
      "31 comprehensive automated unit tests in Pytest",
      "Granular Role-Based Access Control (RBAC) and secure secret management",
      "Production-ready asynchronous endpoints with live telemetry metrics"
    ],
    impact: "Unifies multi-cloud threat visibility into a deterministic risk metric, cutting triage overhead and providing instant compliance evidence.",
    githubUrl: "https://github.com/RaghuBharathi3/real-time-cloud-threat-analysis",
    stats: [
      { label: "Supported Clouds", value: "4 (AWS, Azure, GCP, OCI)" },
      { label: "Automated Tests", value: "31 Pytest Suites" },
      { label: "Risk Scale", value: "0 – 100 Deterministic" },
      { label: "Frameworks Mapped", value: "NIST, CIS, ISO 27001" }
    ]
  },
  {
    id: "quicklink-platform",
    title: "QuickLink — Scalable URL Management & QR Platform",
    tagline: "Low-latency link shortening, real-time analytics telemetry, and dynamic vector QR generation",
    category: "fullstack",
    date: "2024",
    featured: true,
    overview: "A production-grade link management and analytics SaaS platform engineered with Next.js, TypeScript, PostgreSQL, and Supabase. Features real-time click telemetry, dynamic vector QR code synthesis, transactional billing tiers via Razorpay webhooks, and strict Row-Level Security (RLS).",
    problem: "Most URL shorteners lack customizable branded QR codes, actionable click telemetry (device/referrer breakdown), and robust multi-tenant authorization models.",
    solution: "Architected a typed full-stack system utilizing PostgreSQL for relational schemas, Supabase for authentication and Row-Level Security policies, and Next.js server/client components for sub-millisecond redirection and responsive analytics dashboards.",
    architecture: [
      "Frontend: Next.js App Router, React 19, TypeScript, Tailwind CSS, Lucide icons, and Recharts analytics visualizations",
      "Data & Auth: PostgreSQL relational schema managed via Supabase with granular RLS policies isolating user links and analytics records",
      "Payments & Webhooks: Secure Razorpay transactional integration for subscription tier management and automated webhook receipt verification",
      "Dynamic Synthesis: Vector QR generation with customizable styling and low-latency redirect endpoints"
    ],
    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS", "Razorpay", "Recharts", "Zod"],
    features: [
      "Low-latency link redirection with referrer, country, and device telemetry capture",
      "Dynamic, customizable vector QR code generator",
      "Row-Level Security (RLS) policies guaranteeing multi-tenant data isolation",
      "Razorpay webhook integration with verified signature validation",
      "Interactive analytics dashboard featuring click trends and device breakdown charts"
    ],
    impact: "Provides enterprise-grade link management with end-to-end type safety and validated payment flows.",
    githubUrl: "https://github.com/RaghuBharathi3/QuickLink",
    stats: [
      { label: "Framework", value: "Next.js + TypeScript" },
      { label: "Database", value: "PostgreSQL / Supabase" },
      { label: "Security", value: "Row-Level Security (RLS)" },
      { label: "Payments", value: "Razorpay Webhooks" }
    ]
  },
  {
    id: "safar-transit-spa",
    title: "Safar — High-Performance Intercity Transit Reservation Platform",
    tagline: "Deterministic procedural route synthesis, multi-deck seat matrices, and session-resilient checkout",
    category: "fullstack",
    date: "2024",
    featured: true,
    overview: "An enterprise-grade Single Page Application (SPA) for intercity transit discovery, seat allocation, and booking management across India. Built with React 19 and Vite, Safar eliminates traditional server latency through a deterministic procedural generation engine and a dual-tier client storage model.",
    problem: "Transit booking interfaces often suffer from sluggish server roundtrips, state loss during page refreshes, and convoluted seat selection for multi-deck sleeper and seater coaches.",
    solution: "Engineered a client-side procedural transit synthesis engine that deterministically computes schedules, fares, and coach configurations for Indian city pairs. Built an interactive 2D multi-deck coach matrix (Upper/Lower berths, Seater) with Ladies-Priority safety allocation and session-buffered checkout.",
    architecture: [
      "Procedural Transit Synthesis: Deterministically derives schedules, pricing, ratings, and amenity profiles for any Indian city pair without live database latency",
      "Interactive Multi-Deck Seat Matrix: Visualizes 2D layouts for Sleeper (Lower/Upper decks) and Seater coaches with live availability, booked states, and designated Ladies-Priority safety berths",
      "Session-Resilient Checkout: Preserves passenger manifests and active seat buffers in sessionStorage, guaranteeing zero data loss across page refreshes",
      "Optimized Bundle Architecture: Built with React 19 and Vite, verified with Oxlint (0 errors, 337kB total bundle size)"
    ],
    techStack: ["React 19", "Vite", "JavaScript", "Tailwind CSS", "Oxlint", "Client Storage Architecture"],
    features: [
      "Zero-latency procedural transit generation for intercity bus routes across India",
      "Interactive 2D coach visualizer (Sleeper Upper/Lower deck + Seater)",
      "Gender-aware safety allocation with designated Ladies-Priority berths",
      "Session-resilient passenger checkout flow with coupon discount engine",
      "Ultra-compact production bundle (337kB total, 93kB gzip) with zero linter errors"
    ],
    impact: "Demonstrates frontend performance engineering, state resilience, and intuitive multi-tiered user interaction design.",
    githubUrl: "https://github.com/RaghuBharathi3/BUS",
    stats: [
      { label: "Bundle Size", value: "337 kB (93 kB gzip)" },
      { label: "Linter Errors", value: "0 Oxlint Errors" },
      { label: "Coach Models", value: "Sleeper & Seater" },
      { label: "State Reliability", value: "Dual-Tier Storage" }
    ]
  },
  {
    id: "kseb-smart-monitor",
    title: "KSEB Smart Line Monitor",
    tagline: "Real-time electrical grid telemetry, power line state visualization, and anomaly tracking",
    category: "systems",
    date: "2024",
    featured: false,
    overview: "A utility grid infrastructure telemetry platform designed to monitor distributed electrical transmission lines. Provides utility dispatchers with real-time sensor visualization, power distribution metrics, and automated fault alert indicators.",
    problem: "Field engineers and grid operators require fast, responsive visibility into distributed transmission line parameters without relying on fragmented legacy software.",
    solution: "Created a modular web dashboard that structures sensor inputs into operational health indicators, line tension/temperature telemetry, and actionable incident alerts.",
    architecture: [
      "Sensor Aggregation: Structures line sensor feeds into unified metric cards",
      "Frontend Interface: Built with Next.js and TypeScript for rapid triage and line status filtering",
      "Alert Logic: Highlights threshold violations to assist field dispatchers"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Sensor Telemetry"],
    features: [
      "Line condition status indicators (normal, warning, critical)",
      "Real-time sensor metrics dashboard for voltage, current, and temperature",
      "Responsive field-ready interface optimized for tablets and laptops"
    ],
    impact: "Provides structured telemetry visualization for infrastructure monitoring.",
    githubUrl: "https://github.com/RaghuBharathi3/kseb-smart-line-monitor"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages & Core",
    description: "Foundation languages for backend services, data logic, and systems engineering",
    skills: [
      { name: "Python", level: "Proficient", context: "FastAPI, Pytest, automated data normalization pipelines" },
      { name: "TypeScript", level: "Proficient", context: "Type-safe full-stack interfaces, React architectures" },
      { name: "JavaScript", level: "Proficient", context: "Modern ES6+, asynchronous programming, event handling" },
      { name: "SQL", level: "Proficient", context: "Relational queries, index optimization, constraints" },
      { name: "Bash & Shell Scripting", level: "Proficient", context: "Linux automation, process triage, environment scripting" },
      { name: "HTML5 & Modern CSS", level: "Proficient", context: "Semantic document structures, responsive layouts" }
    ]
  },
  {
    title: "Cloud Platforms & Infrastructure",
    description: "Hands-on experience with multi-cloud environments and audit logging feeds",
    skills: [
      { name: "Amazon Web Services (AWS)", level: "Proficient", context: "IAM policies, CloudTrail, GuardDuty, S3 security" },
      { name: "Microsoft Azure", level: "Proficient", context: "Activity Logs, Sentinel, RBAC governance models" },
      { name: "Google Cloud Platform (GCP)", level: "Proficient", context: "Cloud Audit Logs, IAM policies, Storage buckets" },
      { name: "Oracle Cloud Infrastructure (OCI)", level: "Proficient", context: "Audit events, security lists, identity domains" },
      { name: "Linux System Administration", level: "Proficient", context: "systemd, access permissions, process debugging" },
      { name: "Cloud Telemetry Ingestion", level: "Proficient", context: "Parsing disparate provider JSON into canonical events" }
    ]
  },
  {
    title: "Backend & Systems Development",
    description: "Developing resilient RESTful services, integrations, and business workflows",
    skills: [
      { name: "FastAPI", level: "Proficient", context: "Asynchronous endpoints, dependency injection, Pydantic" },
      { name: "RESTful API Architecture", level: "Proficient", context: "Resource modeling, idempotency, structured error handling" },
      { name: "API Integration & Webhooks", level: "Proficient", context: "Bidirectional sync, signature verification, Razorpay" },
      { name: "Next.js App Router", level: "Proficient", context: "Server and client components, typed API route handlers" },
      { name: "Node.js", level: "Proficient", context: "Backend scripting, microservices, npm ecosystem" },
      { name: "Asynchronous Request Pipelines", level: "Proficient", context: "Non-blocking I/O, event queues, throughput tuning" }
    ]
  },
  {
    title: "Cloud Security & Governance",
    description: "Threat identification, deterministic risk quantification, and audit mappings",
    skills: [
      { name: "Cloud Security Posture", level: "Proficient", context: "Detecting policy drift and public asset exposures" },
      { name: "Threat Analysis & Detection", level: "Proficient", context: "Privilege escalation and unauthorized ingress vectors" },
      { name: "Deterministic Risk Scoring", level: "Proficient", context: "Reproducible 0–100 composite risk scoring engines" },
      { name: "NIST CSF 2.0 Mapping", level: "Proficient", context: "PR.AC (Access Control), DE.CM (Continuous Monitoring)" },
      { name: "CIS Controls v8", level: "Proficient", context: "Control 3.3 (Data Protection), Control 5.4 (Admin Rights)" },
      { name: "ISO/IEC 27001:2022", level: "Proficient", context: "A.9.2 (User Access Rights), A.12.4 (Audit Logging)" }
    ]
  },
  {
    title: "Databases & Data Management",
    description: "Relational modeling, secure access policies, and query reliability",
    skills: [
      { name: "PostgreSQL", level: "Proficient", context: "Relational schema design, foreign keys, table indexing" },
      { name: "Supabase", level: "Proficient", context: "Hosted PostgreSQL, Row-Level Security (RLS), Auth tokens" },
      { name: "SQLite", level: "Proficient", context: "Embedded transactional persistence for local engines" },
      { name: "MySQL", level: "Proficient", context: "Structured relational tables, transactional queries" },
      { name: "Row-Level Security (RLS)", level: "Proficient", context: "Multi-tenant data isolation and authorization policies" },
      { name: "Relational Schema Design", level: "Proficient", context: "Data normalization, referential integrity, constraints" }
    ]
  },
  {
    title: "Developer Tools & Engineering Practices",
    description: "Maintaining deterministic reliability, test coverage, and clean SDLC",
    skills: [
      { name: "Pytest & Automated Testing", level: "Proficient", context: "31 automated unit tests with fixtures and edge cases" },
      { name: "Git & GitHub", level: "Proficient", context: "Branch workflows, code reviews, version control" },
      { name: "Postman & API Contracts", level: "Proficient", context: "Endpoint testing, JSON schema validation, collections" },
      { name: "Agile & Scrum Methodologies", level: "Proficient", context: "Enterprise sprint cycles during Zoho CRM internship" },
      { name: "Role-Based Access Control (RBAC)", level: "Proficient", context: "Principle of least privilege, token validation" },
      { name: "VS Code & Streamlit", level: "Proficient", context: "Development tooling, rapid data prototyping interfaces" }
    ]
  }
];

export const EDUCATION: Education = {
  institution: "Rajalakshmi Engineering College",
  degree: "Bachelor of Technology",
  field: "Information Technology",
  period: "2023 – 2027",
  location: "Chennai, Tamil Nadu, India",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Computer Networks & Protocols",
    "Operating Systems & Process Management",
    "Software Engineering & Architecture",
    "Object-Oriented Programming (OOP)"
  ]
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: "ibm-prompt-eng",
    title: "Prompt Engineering for Everyone",
    issuer: "IBM Developer Skills Network & Cognitive Class",
    date: "April 2026",
    credentialId: "c476dd890fc7447d8da1a1c355994123",
    url: "https://courses.cognitiveclass.ai/certificates/c476dd890fc7447d8da1a1c355994123",
    description: "Verified foundational competency in generative AI prompting methodologies, chain-of-thought steering, persona formulation, and LLM evaluation on IBM watsonx."
  },
  {
    id: "zoho-cert",
    title: "Certificate of Enterprise Internship Completion",
    issuer: "Zoho Corporation",
    date: "July 2025",
    credentialId: "Zoho CRM Engineering Team",
    description: "Completed full-time enterprise engineering internship focusing on CRM automation, Deluge scripting, and RESTful service integrations."
  },
  {
    id: "security-framework-research",
    title: "Multi-Cloud Security Risk Evaluation Framework",
    issuer: "Engineering Research & Implementation",
    date: "2024 – 2025",
    credentialId: "NIST CSF 2.0 / ISO 27001 Mapping",
    url: "https://github.com/RaghuBharathi3/real-time-cloud-threat-analysis",
    description: "Designed, implemented, and verified cross-cloud security event normalization and deterministic risk scoring engine backed by 31 Pytest test suites."
  }
];

// Interactive Telemetry Simulation Data for the Live Demo Component
export interface TelemetrySample {
  id: string;
  cloud: 'AWS' | 'Azure' | 'GCP' | 'OCI';
  eventTitle: string;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  rawEvent: Record<string, unknown>;
  normalizedEvent: {
    event_id: string;
    cloud_provider: string;
    timestamp: string;
    principal_identity: string;
    resource_id: string;
    action_type: string;
    ip_address: string;
    anomaly_flag: boolean;
  };
  evaluation: {
    rf_anomaly_probability: number;
    heuristic_weight: number;
    final_risk_score: number;
    risk_level: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
    mapped_controls: {
      nist: string;
      cis: string;
      iso: string;
    };
    remediation: string;
  };
}

export const TELEMETRY_SAMPLES: TelemetrySample[] = [
  {
    id: "sample-aws-1",
    cloud: "AWS",
    eventTitle: "Privilege Escalation via IAM Policy Modification",
    severity: "CRITICAL",
    rawEvent: {
      eventVersion: "1.08",
      userIdentity: {
        type: "IAMUser",
        principalId: "AIDAJ45TESTEXAMPLE",
        arn: "arn:aws:iam::123456789012:user/dev-intern",
        accountId: "123456789012"
      },
      eventTime: "2025-02-14T08:24:19Z",
      eventSource: "iam.amazonaws.com",
      eventName: "AttachUserPolicy",
      awsRegion: "us-east-1",
      sourceIPAddress: "198.51.100.44",
      requestParameters: {
        userName: "dev-intern",
        policyArn: "arn:aws:iam::aws:policy/AdministratorAccess"
      }
    },
    normalizedEvent: {
      event_id: "evt-aws-849204",
      cloud_provider: "AWS",
      timestamp: "2025-02-14T08:24:19Z",
      principal_identity: "arn:aws:iam::123456789012:user/dev-intern",
      resource_id: "arn:aws:iam::aws:policy/AdministratorAccess",
      action_type: "iam:AttachUserPolicy",
      ip_address: "198.51.100.44",
      anomaly_flag: true
    },
    evaluation: {
      rf_anomaly_probability: 0.94,
      heuristic_weight: 0.88,
      final_risk_score: 93,
      risk_level: "CRITICAL",
      mapped_controls: {
        nist: "PR.AC-1 (Identities and credentials for authorized users)",
        cis: "Control 5.4 (Restrict administrator privileges to dedicated admin accounts)",
        iso: "A.9.2.3 (Management of privileged access rights)"
      },
      remediation: "Immediately detach AdministratorAccess policy from dev-intern. Revoke active STS sessions and rotate IAM credentials."
    }
  },
  {
    id: "sample-azure-2",
    cloud: "Azure",
    eventTitle: "Unauthorized Role Assignment at Subscription Scope",
    severity: "HIGH",
    rawEvent: {
      time: "2025-02-14T09:12:05Z",
      resourceId: "/subscriptions/d4a8-sub-01/providers/Microsoft.Authorization/roleAssignments/role-99",
      operationName: "Microsoft.Authorization/roleAssignments/write",
      category: "Administrative",
      caller: "contractor-svc@tenant.onmicrosoft.com",
      callerIpAddress: "203.0.113.89",
      properties: {
        roleDefinitionId: "/subscriptions/d4a8-sub-01/providers/Microsoft.Authorization/roleDefinitions/Owner",
        principalType: "ServicePrincipal"
      }
    },
    normalizedEvent: {
      event_id: "evt-az-309121",
      cloud_provider: "Azure",
      timestamp: "2025-02-14T09:12:05Z",
      principal_identity: "contractor-svc@tenant.onmicrosoft.com",
      resource_id: "/subscriptions/d4a8-sub-01/roleAssignments/role-99",
      action_type: "roleAssignments:write [Owner]",
      ip_address: "203.0.113.89",
      anomaly_flag: true
    },
    evaluation: {
      rf_anomaly_probability: 0.86,
      heuristic_weight: 0.82,
      final_risk_score: 84,
      risk_level: "HIGH",
      mapped_controls: {
        nist: "PR.AC-4 (Access permissions are managed according to principle of least privilege)",
        cis: "Control 5.1 (Establish an Access Granting Process)",
        iso: "A.9.4.1 (Information access restriction)"
      },
      remediation: "Audit subscription-level role assignments. Enforce Privileged Identity Management (PIM) with mandatory MFA."
    }
  },
  {
    id: "sample-gcp-3",
    cloud: "GCP",
    eventTitle: "Public Read Grant on Cloud Storage Production Bucket",
    severity: "HIGH",
    rawEvent: {
      timestamp: "2025-02-14T10:04:30Z",
      protoPayload: {
        serviceName: "storage.googleapis.com",
        methodName: "storage.setIamPermissions",
        authenticationInfo: {
          principalEmail: "data-pipeline-admin@gcp-prod-infra.iam.gserviceaccount.com"
        },
        serviceData: {
          policyDelta: {
            bindingDeltas: [
              { action: "ADD", role: "roles/storage.objectViewer", member: "allUsers" }
            ]
          }
        }
      }
    },
    normalizedEvent: {
      event_id: "evt-gcp-710238",
      cloud_provider: "GCP",
      timestamp: "2025-02-14T10:04:30Z",
      principal_identity: "data-pipeline-admin@gcp-prod-infra.iam.gserviceaccount.com",
      resource_id: "gs://gcp-prod-infra-telemetry",
      action_type: "storage.setIamPermissions [allUsers]",
      ip_address: "198.51.100.12",
      anomaly_flag: true
    },
    evaluation: {
      rf_anomaly_probability: 0.89,
      heuristic_weight: 0.85,
      final_risk_score: 87,
      risk_level: "HIGH",
      mapped_controls: {
        nist: "PR.DS-1 (Data-at-rest is protected against unauthorized exposure)",
        cis: "Control 3.3 (Configure Data Access Control Lists)",
        iso: "A.8.2.3 (Classification of information and public exposure handling)"
      },
      remediation: "Enable Organization Policy 'constraints/storage.publicAccessPrevention' to enforce uniform bucket-level access."
    }
  },
  {
    id: "sample-oci-4",
    cloud: "OCI",
    eventTitle: "Security List Ingress Rule Opened to 0.0.0.0/0 on Port 22",
    severity: "CRITICAL",
    rawEvent: {
      eventTime: "2025-02-14T11:45:10Z",
      cloudProvider: "Oracle Cloud Infrastructure",
      eventType: "com.oraclecloud.virtualnetwork.updatesecuritylist",
      principalName: "ocid1.user.oc1..aaaaaaaaxample",
      request: {
        securityListId: "ocid1.securitylist.oc1.iad.aaaaaaaexample",
        ingressSecurityRules: [
          { protocol: "6", source: "0.0.0.0/0", tcpOptions: { destinationPortRange: { min: 22, max: 22 } } }
        ]
      }
    },
    normalizedEvent: {
      event_id: "evt-oci-991204",
      cloud_provider: "OCI",
      timestamp: "2025-02-14T11:45:10Z",
      principal_identity: "ocid1.user.oc1..aaaaaaaaxample",
      resource_id: "ocid1.securitylist.oc1.iad.aaaaaaaexample",
      action_type: "virtualnetwork.updatesecuritylist [SSH 0.0.0.0/0]",
      ip_address: "198.51.100.77",
      anomaly_flag: true
    },
    evaluation: {
      rf_anomaly_probability: 0.96,
      heuristic_weight: 0.92,
      final_risk_score: 95,
      risk_level: "CRITICAL",
      mapped_controls: {
        nist: "PR.AC-5 (Network integrity is protected via boundary controls)",
        cis: "Control 4.4 (Deny Communication Over Unauthorized Ports)",
        iso: "A.13.1.1 (Network controls & perimeter filtering)"
      },
      remediation: "Restrict SSH ingress (Port 22) strictly to internal Bastion host or VPN subnet. Delete 0.0.0.0/0 rule."
    }
  }
];
