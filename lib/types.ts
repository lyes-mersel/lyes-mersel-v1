export interface CacheData<T> {
  data: T;
}

export interface StatsDataT {
  experience: number;
  projects: number;
  technologies: number;
  commits: number;
}

export interface Repository {
  id: number;
  name: string;
  // private: boolean;
}

export interface UserData {
  public_repos: number;
}

export interface CommitActivity {
  week: number;
  total: number;
  days: number[];
}

export interface Languages {
  [language: string]: number;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}