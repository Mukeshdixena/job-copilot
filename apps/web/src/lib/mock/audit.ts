export interface AuditBucket {
  label: string;
  n: number;
  dot: string;
  bg: string;
  bd: string;
  fg: string;
  note: string;
}

export const BUCKETS: AuditBucket[] = [
  { label: "Critical", n: 3, dot: "#DC2626", bg: "#FEF6F6", bd: "#FCA5A5", fg: "#A3170F", note: "Blocking interviews now" },
  { label: "Improve", n: 6, dot: "#D97706", bg: "#FFFCF7", bd: "#FDBA74", fg: "#9A4A08", note: "Worth 2–4 weeks of work" },
  { label: "Strong", n: 9, dot: "#12915C", bg: "#FAFEFB", bd: "#A7E3C4", fg: "#0B6E45", note: "Lead with these" },
  { label: "Unverified", n: 4, dot: "#7C3AED", bg: "#FBFAFF", bd: "#DDD6FE", fg: "#5B21B6", note: "Claims without evidence" },
];

export interface CriticalFinding {
  title: string;
  why: string;
  evidence: string;
  action: string;
  impact: string;
  href: string;
}

export const CRITICAL: CriticalFinding[] = [
  {
    title: "Spring Boot project lacks production depth",
    why: "Postings at your match level ask for evidence of running services, not just building them. Nine of your top ten matches mention deployment, monitoring, or scale.",
    evidence: "Order Management API — no CI/CD, no logging strategy, no health checks. Deployed manually once.",
    action: "Add CI on push, structured logging, and an actuator health endpoint. Two evenings of work, and it changes what you can say in every interview.",
    impact: "High",
    href: "/projects/1",
  },
  {
    title: "No strong testing evidence",
    why: "JUnit and Mockito are named in 39% of your matched postings and are asked about in every second-round interview you have had.",
    evidence: "One integration test on the ordering flow. No unit tests on the service layer. Coverage not measured.",
    action: "Write service-layer unit tests with Mockito for the order and quotation services, then record coverage on the profile.",
    impact: "High",
    href: "/projects/1",
  },
  {
    title: "System design evidence is weak",
    why: "Readiness sits at 48% and it is the lowest track in your interview prep. Two rejections cited depth on scale and design.",
    evidence: "No design write-up on any project. No discussion of trade-offs, caching, or failure handling in your notes.",
    action: "Write a one-page design note for the Order Management API covering data model, failure modes, and what you would change at 100× traffic.",
    impact: "High",
    href: "/interviews",
  },
];

export interface ImproveItem {
  skill: string;
  note: string;
}

export const IMPROVE: ImproveItem[] = [
  { skill: "Redis", note: "Named in 43% of matched postings. No caching evidence anywhere on the profile." },
  { skill: "Kafka", note: "49% demand. Two rejections cited it directly. Highest-leverage single gap." },
  { skill: "AWS", note: "57% demand. You have no cloud deployment on record — even one ECS deploy would count." },
  { skill: "Microservices", note: "Readiness 58%. You can describe the pattern but not a boundary you drew yourself." },
];

export interface StrongItem {
  skill: string;
  note: string;
  tag: string;
}

export const STRONG: StrongItem[] = [
  { skill: "Java", note: "Verified across two projects, coursework, and 340 solved problems.", tag: "91% ready" },
  { skill: "Spring Boot", note: "Production usage with real endpoints and a real client.", tag: "86% ready" },
  { skill: "REST", note: "14 documented endpoints with validation and error mapping.", tag: "88% ready" },
  { skill: "SQL", note: "11-table schema, custom queries, one index-tuning story.", tag: "82% ready" },
];
