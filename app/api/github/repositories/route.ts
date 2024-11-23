import { NextResponse } from "next/server";
import { getTotalRepositories } from "@/lib/api/fetchData";

export async function GET() {
  try {
    const data = await getTotalRepositories();

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
