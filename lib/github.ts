import { Redis } from "@upstash/redis";
import { CommitActivity, Languages, Repository, UserData } from "./types";

const DEFAULT_EXPIRATION = 3600;
const GITHUB_API_URL = "https://api.github.com";

// Create a new Redis client and connect
const redisClient = new Redis({
  url: process.env.REDIS_URL,
  token: process.env.REDIS_TOKEN,
});

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

/** Function to fetch data from cache */
const getOrSetCache = async <T>(
  key: string,
  fetchFunction: () => Promise<T>,
  expiration = DEFAULT_EXPIRATION
): Promise<T> => {
  try {
    const cachedData = await retry(
      async () => {
        const data = (await redisClient.get(key)) as string | null;
        return data;
      },
      5,
      10
    );

    if (cachedData) {
      console.log(`Cache hit for key: ${key}`);
      return JSON.parse(cachedData) as T;
    }

    const freshData = await fetchFunction();
    await retry(
      async () => {
        await redisClient.setex(key, expiration, JSON.stringify(freshData));
      },
      5,
      10
    );

    console.log(`Cache miss for key: ${key}`);
    return freshData;
  } catch (error) {
    throw new Error(`Cache error for key ${key}: ${error}`);
  }
};

/* Retry function with exponential backoff to handle network connection errors */
const retry = async <T>(
  fn: () => Promise<T>,
  retries = 10,
  delay = 10,
  maxDelay = 1000
): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) throw error;

    const nextDelay = Math.min(delay * 2, maxDelay);
    await new Promise((resolve) => setTimeout(resolve, nextDelay));

    return retry(fn, retries - 1, nextDelay, maxDelay);
  }
};

/** Generic function to fetch data from GitHub API */
const fetchGithubData = async <T>(endpoint: string): Promise<T> => {
  const token = getAuthToken();
  return retry(async () => {
    const response = await fetch(`${GITHUB_API_URL}${endpoint}`, {
      headers: { Authorization: `token ${token}` },
    });

    // Handle 202 status code (Accepted) for async processing
    if (response.status === 202) {
      throw new Error("Processing... Retry initiated.");
    }

    if (!response.ok) {
      throw new Error(
        `GitHub API Error: ${response.status} - ${response.statusText}`
      );
    }

    const data = (await response.json()) as T;
    return data;
  });
};

/** Fetch the total number of repositories for the authenticated user */
export const getTotalRepositories = async (): Promise<number> => {
  try {
    const totalRepositories = await getOrSetCache(
      "totalRepositories",
      async () => {
        return (await fetchGithubData<UserData>("/user")).public_repos;
      }
    );
    return totalRepositories;
  } catch (error) {
    throw new Error(`Error in getTotalRepositories: ${error}`);
  }
};

/** Fetch the total number of unique technologies used across all repositories */
export const getTotalTechnologies = async (): Promise<number> => {
  try {
    const totalTechnologies = await getOrSetCache(
      "totalTechnologies",
      async () => {
        const repos = await fetchGithubData<Repository[]>(
          `/users/${process.env.GITHUB_USERNAME!}/repos`
        );
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
      }
    );

    return totalTechnologies;
  } catch (error) {
    throw new Error(`Error in getTotalTechnologies: ${error}`);
  }
};

/** Fetch the total number of commits across all repositories */
export const getTotalCommits = async (): Promise<number> => {
  try {
    const totalCommits = await getOrSetCache("totalCommits", async () => {
      const repos = await fetchGithubData<Repository[]>(
        `/users/${process.env.GITHUB_USERNAME!}/repos`
      );
      let totalCommits = 0;

      for (const repo of repos) {
        const repoName = repo.name;

        try {
          const commitActivity = await fetchGithubData<CommitActivity[]>(
            `/repos/${process.env
              .GITHUB_USERNAME!}/${repoName}/stats/commit_activity`
          );

          if (Array.isArray(commitActivity)) {
            const yearlyCommits = commitActivity.reduce(
              (sum, week) => sum + week.total,
              0
            );
            totalCommits += yearlyCommits;
          }
        } catch (error) {
          console.error(
            `Failed to fetch commits for repo "${repoName}":`,
            error
          );
        }
      }

      return totalCommits;
    });
    return totalCommits;
  } catch (error) {
    throw new Error(`Error in getTotalCommits: ${error}`);
  }
};

/* check my rate limit status */
const checkRateLimit = async () => {
  const data = await fetchGithubData<{
    rate: { limit: number; used: number; remaining: number; reset: number };
  }>("/rate_limit");

  console.log(
    `\n\nRate limit: ${data.rate.remaining}/${data.rate.limit} remaining, ` +
      `Used: ${data.rate.used}, ` +
      `Resets at ${new Date(data.rate.reset * 1000).toLocaleTimeString()}\n`
  );
};

/** Function to refresh the cache data by fetching the latest data from GitHub API */
export const refreshCacheData = async () => {
  try {
    await redisClient.flushall();
    console.log("Cache cleared...Refreshing data...");

    await Promise.all([
      getTotalRepositories(),
      getTotalTechnologies(),
      getTotalCommits(),
    ]);
    console.log("Cache data refreshed successfully!");

    await checkRateLimit();
  } catch (error) {
    console.error("Error refreshing cache data:", error);
  }
};
