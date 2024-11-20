import NodeCache from "node-cache";
import { NextResponse } from "next/server";
import { getTotalRepositories } from "@/lib/github";

const cache = new NodeCache({ stdTTL: 3600 });

export async function GET() {
  try {
    const cacheKey = "totalRepositories";
    let data = cache.get(cacheKey);

    if (!data) {
      data = await getTotalRepositories();
      cache.set(cacheKey, data);
    }

    const headers = {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=60",
    };
    return NextResponse.json({ data }, { status: 200, headers });
  } catch (error) {
    console.error("Error fetching total repositories: ", error);
    return NextResponse.json(
      { error: "Failed to fetch total repositories" },
      { status: 500 }
    );
  }
}
