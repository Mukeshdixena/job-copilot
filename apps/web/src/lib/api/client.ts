import type {
  AddProfileSkillRequest,
  AuthResponse,
  EducationRequest,
  EducationResponse,
  ExperienceRequest,
  ExperienceResponse,
  ProfileRequest,
  ProfileResponse,
  ProfileSkillResponse,
  ProjectRequest,
  ProjectResponse,
  SkillResponse,
  UpdateProfileSkillRequest,
  UserResponse,
} from "./types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8081";
const TOKEN_STORAGE_KEY = "jja_access_token";

export class ApiClientError extends Error {
  status: number;
  details: string[];

  constructor(status: number, message: string, details: string[] = []) {
    super(message);
    this.name = "ApiClientError";
    this.status = status;
    this.details = details;
  }
}

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(TOKEN_STORAGE_KEY);
}

export function setToken(token: string) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(TOKEN_STORAGE_KEY, token);
}

export function clearToken() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(TOKEN_STORAGE_KEY);
}

async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const headers = new Headers(options.headers);
  headers.set("Content-Type", "application/json");
  if (token) headers.set("Authorization", `Bearer ${token}`);

  const res = await fetch(`${API_BASE_URL}${path}`, { ...options, headers });

  if (res.status === 204) return undefined as T;

  const text = await res.text();
  const body = text ? JSON.parse(text) : null;

  if (!res.ok) {
    const message = body?.message ?? `Request failed with status ${res.status}`;
    const details = Array.isArray(body?.details) ? body.details : [];
    if (res.status === 401) clearToken();
    throw new ApiClientError(res.status, message, details);
  }

  return body as T;
}

export const authApi = {
  register: (email: string, password: string) =>
    apiFetch<AuthResponse>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
  login: (email: string, password: string) =>
    apiFetch<AuthResponse>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
};

export const usersApi = {
  me: () => apiFetch<UserResponse>("/api/users/me"),
};

export const profileApi = {
  get: () => apiFetch<ProfileResponse>("/api/profile"),
  upsert: (request: ProfileRequest) =>
    apiFetch<ProfileResponse>("/api/profile", { method: "PUT", body: JSON.stringify(request) }),
};

export const experiencesApi = {
  list: () => apiFetch<ExperienceResponse[]>("/api/profile/experiences"),
  create: (request: ExperienceRequest) =>
    apiFetch<ExperienceResponse>("/api/profile/experiences", {
      method: "POST",
      body: JSON.stringify(request),
    }),
  update: (id: string, request: ExperienceRequest) =>
    apiFetch<ExperienceResponse>(`/api/profile/experiences/${id}`, {
      method: "PUT",
      body: JSON.stringify(request),
    }),
  remove: (id: string) =>
    apiFetch<void>(`/api/profile/experiences/${id}`, { method: "DELETE" }),
};

export const educationsApi = {
  list: () => apiFetch<EducationResponse[]>("/api/profile/educations"),
  create: (request: EducationRequest) =>
    apiFetch<EducationResponse>("/api/profile/educations", {
      method: "POST",
      body: JSON.stringify(request),
    }),
  update: (id: string, request: EducationRequest) =>
    apiFetch<EducationResponse>(`/api/profile/educations/${id}`, {
      method: "PUT",
      body: JSON.stringify(request),
    }),
  remove: (id: string) => apiFetch<void>(`/api/profile/educations/${id}`, { method: "DELETE" }),
};

export const skillsApi = {
  search: (query?: string) =>
    apiFetch<SkillResponse[]>(`/api/skills${query ? `?query=${encodeURIComponent(query)}` : ""}`),
  createOrGet: (name: string, category?: string) =>
    apiFetch<SkillResponse>("/api/skills", {
      method: "POST",
      body: JSON.stringify({ name, category }),
    }),
};

export const profileSkillsApi = {
  list: () => apiFetch<ProfileSkillResponse[]>("/api/profile/skills"),
  add: (request: AddProfileSkillRequest) =>
    apiFetch<ProfileSkillResponse>("/api/profile/skills", {
      method: "POST",
      body: JSON.stringify(request),
    }),
  update: (id: string, request: UpdateProfileSkillRequest) =>
    apiFetch<ProfileSkillResponse>(`/api/profile/skills/${id}`, {
      method: "PUT",
      body: JSON.stringify(request),
    }),
  remove: (id: string) => apiFetch<void>(`/api/profile/skills/${id}`, { method: "DELETE" }),
};

export const projectsApi = {
  list: () => apiFetch<ProjectResponse[]>("/api/projects"),
  get: (id: string) => apiFetch<ProjectResponse>(`/api/projects/${id}`),
  create: (request: ProjectRequest) =>
    apiFetch<ProjectResponse>("/api/projects", { method: "POST", body: JSON.stringify(request) }),
  update: (id: string, request: ProjectRequest) =>
    apiFetch<ProjectResponse>(`/api/projects/${id}`, {
      method: "PUT",
      body: JSON.stringify(request),
    }),
  remove: (id: string) => apiFetch<void>(`/api/projects/${id}`, { method: "DELETE" }),
};
