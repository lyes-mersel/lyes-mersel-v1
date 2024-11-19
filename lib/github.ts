import { CommitActivity, Languages, Repository, UserData } from "./types";

const GITHUB_API_URL = "https://api.github.com";

/** Generic function to fetch data from GitHub API */
export const fetchGithubData = async <T>(
  endpoint: string,
  token: string
): Promise<T> => {
  const response = await fetch(`${GITHUB_API_URL}${endpoint}`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      `GitHub API Error: ${response.status} - ${response.statusText}`
    );
  }

  return response.json() as T;
};

/** Fetch the total number of repositories for the authenticated user */
export const getTotalRepositories = async (): Promise<number> => {
  const token = process.env.GITHUB_TOKEN!;
  const userData = await fetchGithubData<UserData>("/user", token);
  return userData.public_repos;
};

/** Fetch the total number of unique technologies used across all repositories */
export const getTotalTechnologies = async (): Promise<number> => {
  const username = process.env.GITHUB_USERNAME!;
  const token = process.env.GITHUB_TOKEN!;
  const uniqueTechnologies = new Set<string>();

  const repos = await fetchGithubData<Repository[]>(
    `/users/${username}/repos`,
    token
  );

  for (const repo of repos) {
    const repoName = repo.name;

    try {
      const languages = await fetchGithubData<Languages>(
        `/repos/${username}/${repoName}/languages`,
        token
      );

      Object.keys(languages).forEach((technology) =>
        uniqueTechnologies.add(technology)
      );
    } catch (error) {
      console.error(
        `Failed to fetch technologies for repo "${repoName}":`,
        error
      );
    }
  }

  return uniqueTechnologies.size;
};

/** Fetch the total number of commits across all repositories */
export const getTotalCommits = async (): Promise<number> => {
  const username = process.env.GITHUB_USERNAME!;
  const token = process.env.GITHUB_TOKEN!;
  let totalCommits = 0;

  const repos = await fetchGithubData<Repository[]>(
    `/users/${username}/repos`,
    token
  );

  for (const repo of repos) {
    const repoName = repo.name;

    try {
      const commitActivity = await fetchGithubData<CommitActivity[]>(
        `/repos/${username}/${repoName}/stats/commit_activity`,
        token
      );

      const yearlyCommits = commitActivity.reduce(
        (sum, week) => sum + week.total,
        0
      );
      totalCommits += yearlyCommits;
    } catch (error) {
      console.error(`Failed to fetch commits for repo "${repoName}":`, error);
    }
  }

  return totalCommits;
};
