export const identity = {
  name: "Andrew Hinson",
  title: "Platform Engineer",
  signal: "Kafka · Terraform · Flink · AWS",
  lede:
    "Platform Engineer with 5+ years of experience designing durable, distributed systems across Kafka-based event streaming, Kubernetes-native infrastructure, and AWS cloud environments. Proven track record delivering high-throughput data pipelines, self-service platform tooling, and CI/CD automation for multi-tenant production systems. Works primarily in Go, Python, and Java, with a systems engineering mindset focused on reliability, observability, and self-service developer tooling.",
};

export const links = {
  email: "mailto:wahinsondev@gmail.com",
  emailLabel: "wahinsondev@gmail.com",
  github: "https://github.com/Andrew-Hinson",
  linkedin: "https://www.linkedin.com/in/william-a-hinson",
  resume: "/andrew-hinson-resume.pdf",
};

export const skills = [
  "Kafka",
  "Kafka Connect",
  "Flink",
  "Terraform",
  "AWS",
  "Kubernetes",
  "Go",
] as const;

export const writeupsContext =
  "Fetch Rewards · Data Engineer, Data Platform · Jan 2023 - Aug 2025";

export const writeups: string[] = [
  "Built and maintained FSD, the internal PaaS every service at Fetch shipped on: a Go GitOps engine where developers declared infrastructure in one YAML, and FSD provisioned any AWS service in use at Fetch and deployed to ECS or EKS.",
  "Owned the Kafka Connect path in FSD, running connectors on Strimzi on EKS so teams could connect Kafka to data sources without a platform ticket, and scaled them to handle millions of concurrent users during the 2025 Super Bowl ad campaign.",
  "Owned the Slack and Airflow integrations for an n8n LLM workflow that turned dbt, Airflow, and Snowflake run data into concise pipeline failure summaries for on-call.",
  "Managed telemetry pipeline reliability and mapped data lineage into DataHub using Kubernetes, Helm, and AWS cloud environments enabling teams to cut spend by easily identifying unused assets.",
  "Owned Kafka pipeline on-call, building Grafana alerting wired to PagerDuty for platform and analytics teams.",
  "Reduced S3 and cloud infrastructure costs by $70k/month by building internal automation tools for storage lifecycle management.",
  "Built Flink-on-Kafka pipelines tracking real-time user interactions and signups, delivering minute-level KPIs to senior stakeholders via InfluxDB and Grafana.",
  "Built a Snowflake access-control pipeline that centralized permissions and enforced data governance for high-scale environments.",
];

export type Role = {
  title: string;
  dates: string;
  note?: string;
};

export type CareerEntry = {
  org: string;
  dates?: string;
  context?: string;
  note?: string;
  roles?: Role[];
};

export const career: CareerEntry[] = [
  {
    org: "Louisiana Blue",
    dates: "Jan 2026 - Present",
    context: "Data Engineer, Data Platform",
    note: "Rolled out Unity Catalog across 200+ tables for HIPAA-aligned row- and column-level access control, and tuned PySpark ETL on Databricks Workflows to cut compute spend 25%.",
  },
  {
    org: "Fetch Rewards",
    dates: "Jun 2021 - Aug 2025",
    context: "Remote",
    roles: [
      { title: "Data Engineer, Data Platform", dates: "Jan 2023 - Aug 2025" },
      { title: "Data Engineer, Social Media Feed", dates: "Mar 2022 - Dec 2022" },
      { title: "Tableau Server Admin", dates: "Jun 2021 - Mar 2022" },
    ],
  },
  {
    org: "U.S. Army National Guard",
    context: "Infantry",
    note: "Honorably discharged after 6 years in disaster recovery and security operations.",
  },
];

export const lab = {
  title: "stream-join-lab",
  blurb:
    "Public lab: Postgres CDC into Kafka, Flink joins the streams, Iceberg is the sink.",
  href: "https://github.com/Andrew-Hinson/stream-join-lab",
};
