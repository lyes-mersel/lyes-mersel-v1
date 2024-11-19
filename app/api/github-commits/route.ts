import NodeCache from "node-cache";
import { NextResponse } from "next/server";
import { getTotalCommits } from "@/lib/github";

const cache = new NodeCache({ stdTTL: 3600 });

export async function GET() {
  try {
    const cacheKey = "totalCommits";
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      console.log("Serving from cache");
      return NextResponse.json(
        { data: cachedData, cached: true },
        { status: 200 }
      );
    }

    console.log("Fetching fresh data from GitHub");
    const data = await getTotalCommits();
    cache.set(cacheKey, data);

    return NextResponse.json({ data, cached: false }, { status: 200 });
  } catch (error) {
    console.error("Error fetching total commits: ", error);
    return NextResponse.json(
      { error: "Failed to fetch total commits" },
      { status: 500 }
    );
  }
}
