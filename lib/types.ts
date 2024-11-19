export interface StatsDataT {
  experience: number;
  projects: number;
  technologies: number;
  commits: number;
}

export interface Repository {
  id: number;
  name: string;
  private: boolean;
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
