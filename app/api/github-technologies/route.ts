import NodeCache from "node-cache";
import { NextResponse } from "next/server";
import { getTotalTechnologies } from "@/lib/github";

const cache = new NodeCache({ stdTTL: 3600 });

export async function GET() {
  try {
    const cacheKey = "totalTechnologies";
    let data = cache.get(cacheKey);

    if (!data) {
      data = await getTotalTechnologies();
      cache.set(cacheKey, data);
    }

    const headers = {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=60",
    };
    return NextResponse.json({ data }, { status: 200, headers });
  } catch (error) {
    console.error("Error fetching total technologies: ", error);
    return NextResponse.json(
      { error: "Failed to fetch total technologies" },
      { status: 500 }
    );
  }
}
