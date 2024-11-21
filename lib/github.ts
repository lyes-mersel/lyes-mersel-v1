import {
  CacheData,
  CommitActivity,
  Languages,
  Repository,
  UserData,
} from "./types";
import NodeCache from "node-cache";

const GITHUB_API_URL = "https://api.github.com";

const cache = new NodeCache({ stdTTL: 60 });

/** Function to get GitHub token from environment variables */
const getAuthToken = (): string => {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error(
      "GitHub token is not defined in the environment variables."
    );
  }
  return token;
};

/** Generic function to fetch data from GitHub API */
const fetchGithubData = async <T>(endpoint: string): Promise<T> => {
  const token = getAuthToken();
  const cacheKey = `${endpoint}`;

  const cached = cache.get<CacheData<T>>(cacheKey);

  if (cached) {
    console.log(`Returning cached data for "${cacheKey}"...`);
    return cached.data;
  }

  await new Promise((resolve) => setTimeout(resolve, 100));

  console.log(`Fetching data from GitHub API for "${cacheKey}"...`);
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

  const data = (await response.json()) as T;
  cache.set(cacheKey, { data });

  return data;
};

/** Helper function to fetch repositories of a user */
const getUserRepositories = async (): Promise<Repository[]> => {
  return await fetchGithubData<Repository[]>(
    `/users/${process.env.GITHUB_USERNAME!}/repos`
  );
};

/** Fetch the total number of repositories for the authenticated user */
export const getTotalRepositories = async (): Promise<number> => {
  const userData = await fetchGithubData<UserData>("/user");
  return userData.public_repos;
};

/** Fetch the total number of unique technologies used across all repositories */
export const getTotalTechnologies = async (): Promise<number> => {
  const repos = await getUserRepositories();
  const uniqueTechnologies = new Set<string>();

  for (const repo of repos) {
    const repoName = repo.name;

    try {
      const languages = await fetchGithubData<Languages>(
        `/repos/${process.env.GITHUB_USERNAME!}/${repoName}/languages`
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
  const repos = await getUserRepositories();
  let totalCommits = 0;

  for (const repo of repos) {
    const repoName = repo.name;

    try {
      const commitActivity = await fetchGithubData<CommitActivity[] | object>(
        `/repos/${process.env
          .GITHUB_USERNAME!}/${repoName}/stats/commit_activity`
      );

      if (Array.isArray(commitActivity)) {
        const yearlyCommits = commitActivity.reduce(
          (sum, week) => sum + week.total,
          0
        );
        totalCommits += yearlyCommits;
      } else {
        console.log(`No commit data for repo "${repoName}"`);
      }
    } catch (error) {
      console.error(`Failed to fetch commits for repo "${repoName}":`, error);
    }
  }

  return totalCommits;
};

/** Function to refresh cache every hour automatically */
const startAutomaticDataFetch = () => {
  console.log("Starting automatic data refresh every hour...");

  setInterval(async () => {
    try {
      console.log("Refreshing data...");
      await getTotalRepositories();
      await getTotalTechnologies();
      await getTotalCommits();

      console.log("Data refreshed successfully!");
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  }, 60000); // 3600000ms = 1 hour
};

startAutomaticDataFetch();
