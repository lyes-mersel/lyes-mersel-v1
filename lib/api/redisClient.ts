import { Redis } from "@upstash/redis";

// Create a new Redis client and connect
export const redisClient = new Redis({
  url: process.env.REDIS_URL,
  token: process.env.REDIS_TOKEN,
});
