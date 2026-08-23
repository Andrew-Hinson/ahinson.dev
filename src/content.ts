export const identity = {
  name: "Andrew Hinson",
  title: "Data Platform Engineer",
  signal: "Kafka · Terraform · Flink · AWS",
  lede:
    "Built and operated Fetch's data platform; scaled Kafka for the 2025 Super Bowl launch; cut data-lake spend $70k/month.",
};

export const links = {
  email: "mailto:andrew.hinson@proton.me",
  emailLabel: "andrew.hinson@proton.me",
  github: "https://github.com/Andrew-Hinson",
  linkedin: "https://www.linkedin.com/in/william-hinson-a052189a/",
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

export type Writeup = {
  title: string;
  problem: string;
  built: string;
  outcome: string;
};

export const writeups: Writeup[] = [
  {
    title: "Kafka for the Super Bowl launch",
    problem:
      "Fetch's 2025 Super Bowl ad would send millions of users through the streaming platform.",
    built:
      "I scaled Kafka connectors and topics ahead of the launch so the cluster could absorb that traffic.",
    outcome: "The platform held through the ad.",
  },
  {
    title: "S3 lake tiering",
    problem:
      "Data-lake objects sat in the wrong storage tier and the bill stayed high.",
    built:
      "I built an internal tool that let teams move data between Standard Infrequent Access and Glacier without a ticket.",
    outcome: "Lake storage cost dropped $70k per month.",
  },
  {
    title: "Terraform for Kafka Connect",
    problem:
      "Teams waited on platform to stand up Kafka Connect pipelines.",
    built:
      "I parameterized Terraform so a team could provision those pipelines themselves.",
    outcome: "Teams stopped waiting on platform for Connect.",
  },
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
    context: "Data Engineer",
    note: "Develop and operate production data pipelines supporting health-plan operations.",
  },
  {
    org: "Fetch Rewards",
    dates: "Jun 2021 - Jul 2025",
    context: "Remote",
    roles: [
      { title: "Data Platform Engineer", dates: "Jan 2023 - Jul 2025" },
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
