import { getTotalRepositories } from "@/lib/github";
import { NextResponse } from "next/server";
import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 3600 });

export async function GET() {
  try {
    const cacheKey = "totalRepositories";
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      console.log("Serving from cache");
      return NextResponse.json(
        { data: cachedData, cached: true },
        { status: 200 }
      );
    }

    console.log("Fetching fresh data from GitHub");
    const data = await getTotalRepositories();
    cache.set(cacheKey, data);

    return NextResponse.json({ data, cached: false }, { status: 200 });
  } catch (error) {
    console.error("Error fetching total repositories: ", error);
    return NextResponse.json(
      { error: "Failed to fetch total repositories" },
      { status: 500 }
    );
  }
}
