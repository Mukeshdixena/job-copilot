import type { Job } from "@/lib/types";

export const JOBS_LIST: Job[] = [
  { title: "Java Spring Boot Developer", company: "ABC Technologies", location: "Bangalore", exp: "0–2 yrs", match: 94, have: ["Java", "Spring Boot", "REST", "JPA", "MySQL", "Docker"], missing: ["Kafka", "AWS"], posted: "Posted 2h ago", deadline: null, source: "LinkedIn" },
  { title: "Backend Engineer — Java", company: "Zeta Suite", location: "Bangalore · Hybrid", exp: "1–3 yrs", match: 91, have: ["Java", "Spring Boot", "REST", "SQL", "Git"], missing: ["Kafka", "Redis", "AWS"], posted: "Posted 6h ago", deadline: "Closes in 8 days", source: "Naukri", flag: "Referral path" },
  { title: "Java Developer (Microservices)", company: "Infosys", location: "Pune · Onsite", exp: "0–2 yrs", match: 88, have: ["Java", "Spring Boot", "JPA", "MySQL"], missing: ["Microservices depth", "Kubernetes"], posted: "Posted 1d ago", deadline: "Closes tonight", source: "Campus" },
  { title: "Software Engineer — Backend (Java)", company: "Freshworks", location: "Chennai · Hybrid", exp: "0–2 yrs", match: 84, have: ["Java", "Spring Boot", "REST", "SQL"], missing: ["Kafka", "AWS", "JUnit depth"], posted: "Posted 1d ago", deadline: null, source: "Company site" },
  { title: "Associate Java Developer", company: "TCS Digital", location: "Hyderabad", exp: "0–1 yrs", match: 79, have: ["Java", "Spring Boot", "JPA"], missing: ["Spring Security", "Docker"], posted: "Posted 2d ago", deadline: "Drive closes today", source: "Campus", flag: "Placement drive" },
  { title: "Backend Developer — Java 17", company: "Razorpay", location: "Bangalore · Remote", exp: "1–3 yrs", match: 76, have: ["Java", "Spring Boot", "REST", "MySQL"], missing: ["Kafka", "Redis", "System design"], posted: "Posted 3d ago", deadline: null, source: "LinkedIn" },
];

export interface StackChip {
  name: string;
  on: boolean;
}

export const STACK_CHIPS: StackChip[] = [
  { name: "Java", on: true },
  { name: "Spring Boot", on: true },
  { name: "Backend", on: true },
  { name: "Microservices", on: false },
  { name: "Kafka", on: false },
  { name: "AWS", on: false },
];

export interface FilterOption {
  label: string;
  n: number;
  on: boolean;
}

export interface FilterGroup {
  title: string;
  open: boolean;
  options: FilterOption[];
}

export const FILTER_GROUPS: FilterGroup[] = [
  { title: "Experience", open: true, options: [
    { label: "0–1 years", n: 41, on: true },
    { label: "0–2 years", n: 68, on: true },
    { label: "1–3 years", n: 52, on: false },
    { label: "3+ years", n: 19, on: false },
  ] },
  { title: "Location", open: true, options: [
    { label: "Bangalore", n: 54, on: true },
    { label: "Hyderabad", n: 27, on: true },
    { label: "Pune", n: 22, on: false },
    { label: "Chennai", n: 14, on: false },
    { label: "Remote", n: 18, on: true },
  ] },
  { title: "Work mode", open: false, options: [
    { label: "Onsite", n: 61, on: false },
    { label: "Hybrid", n: 44, on: false },
    { label: "Remote", n: 18, on: false },
  ] },
  { title: "Salary", open: false, options: [
    { label: "3–6 LPA", n: 39, on: false },
    { label: "6–10 LPA", n: 47, on: false },
    { label: "10+ LPA", n: 21, on: false },
  ] },
  { title: "Posted", open: true, options: [
    { label: "Last 24 hours", n: 12, on: true },
    { label: "Last 3 days", n: 34, on: false },
    { label: "Last week", n: 71, on: false },
  ] },
  { title: "Source", open: false, options: [
    { label: "LinkedIn", n: 48, on: false },
    { label: "Naukri", n: 36, on: false },
    { label: "Company site", n: 22, on: false },
    { label: "Campus / placement", n: 18, on: false },
  ] },
  { title: "Company", open: false, options: [
    { label: "Product", n: 42, on: false },
    { label: "Service / IT", n: 58, on: false },
    { label: "Startup", n: 28, on: false },
  ] },
  { title: "Placement & campus", open: false, options: [
    { label: "Eligible drives", n: 9, on: false },
    { label: "Campus only", n: 6, on: false },
  ] },
  { title: "Application status", open: false, options: [
    { label: "Not applied", n: 96, on: true },
    { label: "Saved", n: 34, on: false },
    { label: "Applied", n: 22, on: false },
    { label: "Rejected", n: 7, on: false },
  ] },
];

export const ACTIVE_FILTERS = ["Java", "Spring Boot", "Backend", "0–2 yrs", "Match ≥ 75%", "Last 24h", "Not applied"];
