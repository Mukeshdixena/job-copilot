export interface Fact {
  k: string;
  v: string;
}

export const FACTS: Fact[] = [
  { k: "Experience", v: "0–2 years" },
  { k: "Stack", v: "Java 17 · Spring Boot 3" },
  { k: "Notice", v: "Immediate joiners" },
  { k: "Interview rounds", v: "3 + HR" },
  { k: "Applicants", v: "46 so far" },
  { k: "Posting age", v: "2 hours" },
];

export interface Breakdown {
  label: string;
  value: number;
  text: string;
}

export const BREAKDOWN: Breakdown[] = [
  { label: "Core skills (Java, Spring Boot, REST)", value: 98, text: "98%" },
  { label: "Experience band", value: 100, text: "in range" },
  { label: "Database & persistence", value: 92, text: "92%" },
  { label: "Infrastructure & cloud", value: 58, text: "58%" },
  { label: "Location & work mode", value: 100, text: "match" },
];

export interface WhyMatch {
  claim: string;
  evidence: string;
}

export const WHY: WhyMatch[] = [
  { claim: "Spring Boot REST services are your primary production experience", evidence: "Order Management API — 14 endpoints, deployed" },
  { claim: "JPA/Hibernate against MySQL matches their persistence layer exactly", evidence: "Quotation System — schema of 11 tables, custom queries" },
  { claim: "Docker experience covers their containerised local setup", evidence: "Both projects ship with docker-compose" },
  { claim: "Experience band 0–2 years sits inside their stated range", evidence: "Profile: 1.2 years, verified" },
];

export interface MissingRequirement {
  skill: string;
  note: string;
  effort: string;
  severity: string;
}

export const MISSING: MissingRequirement[] = [
  { skill: "Kafka", note: "Required for the event-driven pipeline they describe twice in the posting.", effort: "2–3 weeks", severity: "Blocker for round 2" },
  { skill: "AWS", note: "Deployment is on ECS. You have no cloud deployment evidence.", effort: "3–4 weeks", severity: "Blocker for round 2" },
  { skill: "Observability", note: "Mentioned once under 'nice to have'. Low risk.", effort: "1 week", severity: "Soft" },
];

export interface ResumeGap {
  icon: string;
  color: string;
  text: string;
  tag: string;
}

export const RESUME_GAPS: ResumeGap[] = [
  { icon: "✓", color: "#12915C", text: "Spring Boot and REST bullets already quantified", tag: "covered" },
  { icon: "△", color: "#D97706", text: "No line demonstrating message queues or async processing", tag: "add" },
  { icon: "△", color: "#D97706", text: "Testing evidence is one sentence; posting names JUnit + Mockito", tag: "strengthen" },
];

export interface CompanyFact {
  k: string;
  v: string;
}

export const COMPANY: CompanyFact[] = [
  { k: "Size", v: "~40 engineers" },
  { k: "Funding", v: "Series B" },
  { k: "Backend", v: "Java 17 · AWS" },
  { k: "Glassdoor", v: "3.9 / 5" },
];

export interface PrepItem {
  icon: string;
  color: string;
  label: string;
  meta: string;
  textColor: string;
}

export const PREP: PrepItem[] = [
  { icon: "✓", color: "#12915C", label: "Best resume selected", meta: "Backend-v3", textColor: "#334155" },
  { icon: "✓", color: "#12915C", label: "Job analysis complete", meta: "2h ago", textColor: "#334155" },
  { icon: "✓", color: "#12915C", label: "Application answers prepared", meta: "4 of 4", textColor: "#334155" },
  { icon: "◔", color: "#2F5BEA", label: "Cover letter drafted", meta: "needs review", textColor: "#334155" },
  { icon: "✓", color: "#12915C", label: "Recruiter identified", meta: "Priya Nair", textColor: "#334155" },
  { icon: "○", color: "#CBD5E1", label: "Outreach message not written", meta: "pending", textColor: "#94A3B8" },
];

export interface ReadinessItem {
  label: string;
  value: number;
}

export const READINESS: ReadinessItem[] = [
  { label: "Java core", value: 91 },
  { label: "Spring Boot", value: 86 },
  { label: "SQL & JPA", value: 78 },
  { label: "System design", value: 48 },
];

export interface Person {
  initials: string;
  name: string;
  role: string;
  cta: string;
}

export const PEOPLE: Person[] = [
  { initials: "PN", name: "Priya Nair", role: "Technical Recruiter · ABC Technologies", cta: "Draft" },
  { initials: "RS", name: "Rahul Shetty", role: "Engineering Manager, Backend", cta: "Draft" },
  { initials: "AV", name: "Anita Verma", role: "Alumni · same college, 2022 batch", cta: "Referral" },
];

export interface SimilarJob {
  title: string;
  company: string;
  loc: string;
  match: number;
}

export const SIMILAR: SimilarJob[] = [
  { title: "Java Backend Developer", company: "Zeta Suite", loc: "Bangalore", match: 91 },
  { title: "Spring Boot Engineer", company: "Freshworks", loc: "Chennai", match: 84 },
  { title: "Backend Developer (Java)", company: "Razorpay", loc: "Remote", match: 76 },
  { title: "Java Developer", company: "Mindtree", loc: "Hyderabad", match: 71 },
];

export const MATCH_TOP = 94;
export const READY_PCT = 78;
