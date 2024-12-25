import { retry } from "./fetchData";
import { redisClient } from "./redisClient";

export const getToggleCacheState = async () => {
  return retry(async () => {
    const data = (await redisClient.get("cacheState")) as string | null;
    return data;
  });
};

export const setToggleCacheState = async (prop: string) => {
  await retry(async () => {
    await redisClient.set("cacheState", JSON.stringify(prop));
  });
};
