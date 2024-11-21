import { NextResponse } from "next/server";
import { getTotalTechnologies } from "@/lib/github";

export async function GET() {
  try {
    const data = await getTotalTechnologies();

    const headers = {
      // "Cache-Control": "public, max-age=3600, stale-while-revalidate=60",
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
