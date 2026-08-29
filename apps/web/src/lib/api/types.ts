export interface ApiErrorBody {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
  details: string[];
}

export interface AuthResponse {
  accessToken: string;
  tokenType: string;
  expiresInSeconds: number;
  userId: string;
  email: string;
}

export interface UserResponse {
  id: string;
  email: string;
  role: string;
  createdAt: string;
}

export type RemoteWorkPreference = "ONSITE" | "HYBRID" | "REMOTE" | "OPEN";

export interface ProfileResponse {
  userId: string | null;
  phone: string | null;
  location: string | null;
  targetRoles: string[];
  preferredLocations: string[];
  remoteWorkPreference: RemoteWorkPreference | null;
  experienceBandMin: number | null;
  experienceBandMax: number | null;
  noticePeriod: string | null;
  salaryExpectationMin: number | null;
  salaryExpectationMax: number | null;
  summary: string | null;
  githubUrl: string | null;
  linkedinUrl: string | null;
  portfolioUrl: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface ProfileRequest {
  phone?: string | null;
  location?: string | null;
  targetRoles?: string[];
  preferredLocations?: string[];
  remoteWorkPreference?: RemoteWorkPreference | null;
  experienceBandMin?: number | null;
  experienceBandMax?: number | null;
  noticePeriod?: string | null;
  salaryExpectationMin?: number | null;
  salaryExpectationMax?: number | null;
  summary?: string | null;
  githubUrl?: string | null;
  linkedinUrl?: string | null;
  portfolioUrl?: string | null;
}

export interface ExperienceResponse {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate: string | null;
  technologies: string[];
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ExperienceRequest {
  title: string;
  organization: string;
  startDate: string;
  endDate?: string | null;
  technologies?: string[];
  description?: string | null;
}

export interface EducationResponse {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startYear: number;
  endYear: number | null;
  gpa: number | null;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface EducationRequest {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startYear: number;
  endYear?: number | null;
  gpa?: number | null;
}

export type Proficiency = "NONE" | "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

export interface SkillResponse {
  id: string;
  name: string;
  category: string | null;
  createdAt: string;
}

export interface ProfileSkillResponse {
  id: string;
  skillId: string;
  skillName: string;
  skillCategory: string | null;
  proficiency: Proficiency;
  lastUsed: string | null;
  interviewReady: boolean;
  evidence: string[];
  createdAt: string;
  updatedAt: string;
}

export interface AddProfileSkillRequest {
  skillId?: string | null;
  skillName?: string | null;
  proficiency?: Proficiency;
  lastUsed?: string | null;
  interviewReady?: boolean;
  evidence?: string[];
}

export interface UpdateProfileSkillRequest {
  proficiency: Proficiency;
  lastUsed?: string | null;
  interviewReady: boolean;
  evidence: string[];
}

export type ProjectStatus =
  | "IN_PROGRESS"
  | "DEPLOYED"
  | "LIVE_WITH_CLIENT"
  | "ARCHIVED"
  | "UNFINISHED";

export interface ProjectResponse {
  id: string;
  userId: string;
  name: string;
  description: string | null;
  startDate: string | null;
  endDate: string | null;
  repoUrl: string | null;
  deployed: boolean;
  status: ProjectStatus;
  technologies: string[];
  healthScore: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectRequest {
  name: string;
  description?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  repoUrl?: string | null;
  deployed: boolean;
  status: ProjectStatus;
  technologies?: string[];
  healthScore?: number | null;
}
