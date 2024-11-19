import NodeCache from "node-cache";
import { NextResponse } from "next/server";
import { getTotalTechnologies } from "@/lib/github";

const cache = new NodeCache({ stdTTL: 3600 });

export async function GET() {
  try {
    const cacheKey = "totalTechnologies";
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      console.log("Serving from cache");
      return NextResponse.json(
        { data: cachedData, cached: true },
        { status: 200 }
      );
    }

    console.log("Fetching fresh data from GitHub");
    const data = await getTotalTechnologies();
    cache.set(cacheKey, data);

    return NextResponse.json({ data, cached: false }, { status: 200 });
  } catch (error) {
    console.error("Error fetching total technologies: ", error);
    return NextResponse.json(
      { error: "Failed to fetch total technologies" },
      { status: 500 }
    );
  }
}
