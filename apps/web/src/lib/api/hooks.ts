import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  educationsApi,
  experiencesApi,
  profileApi,
  profileSkillsApi,
  projectsApi,
  skillsApi,
} from "./client";
import type {
  AddProfileSkillRequest,
  EducationRequest,
  ExperienceRequest,
  ProfileRequest,
  ProjectRequest,
  UpdateProfileSkillRequest,
} from "./types";

export function useProfile() {
  return useQuery({ queryKey: ["profile"], queryFn: profileApi.get });
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: ProfileRequest) => profileApi.upsert(request),
    onSuccess: (data) => queryClient.setQueryData(["profile"], data),
  });
}

export function useExperiences() {
  return useQuery({ queryKey: ["experiences"], queryFn: experiencesApi.list });
}

export function useCreateExperience() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: ExperienceRequest) => experiencesApi.create(request),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["experiences"] }),
  });
}

export function useUpdateExperience() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, request }: { id: string; request: ExperienceRequest }) =>
      experiencesApi.update(id, request),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["experiences"] }),
  });
}

export function useDeleteExperience() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => experiencesApi.remove(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["experiences"] }),
  });
}

export function useEducations() {
  return useQuery({ queryKey: ["educations"], queryFn: educationsApi.list });
}

export function useCreateEducation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: EducationRequest) => educationsApi.create(request),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["educations"] }),
  });
}

export function useUpdateEducation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, request }: { id: string; request: EducationRequest }) =>
      educationsApi.update(id, request),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["educations"] }),
  });
}

export function useDeleteEducation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => educationsApi.remove(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["educations"] }),
  });
}

export function useSkillSearch(query: string) {
  return useQuery({
    queryKey: ["skills", "search", query],
    queryFn: () => skillsApi.search(query || undefined),
    enabled: query.length > 0,
  });
}

export function useProfileSkills() {
  return useQuery({ queryKey: ["profileSkills"], queryFn: profileSkillsApi.list });
}

export function useAddProfileSkill() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: AddProfileSkillRequest) => profileSkillsApi.add(request),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["profileSkills"] }),
  });
}

export function useUpdateProfileSkill() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, request }: { id: string; request: UpdateProfileSkillRequest }) =>
      profileSkillsApi.update(id, request),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["profileSkills"] }),
  });
}

export function useDeleteProfileSkill() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => profileSkillsApi.remove(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["profileSkills"] }),
  });
}

export function useProjects() {
  return useQuery({ queryKey: ["projects"], queryFn: projectsApi.list });
}

export function useProject(id: string) {
  return useQuery({ queryKey: ["projects", id], queryFn: () => projectsApi.get(id), enabled: !!id });
}

export function useCreateProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (request: ProjectRequest) => projectsApi.create(request),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projects"] }),
  });
}

export function useUpdateProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, request }: { id: string; request: ProjectRequest }) =>
      projectsApi.update(id, request),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projects"] }),
  });
}

export function useDeleteProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => projectsApi.remove(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projects"] }),
  });
}
