import { NextResponse } from "next/server";
import { getTotalCommits } from "@/lib/github";

export async function GET() {
  try {
    const data = await getTotalCommits();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching total commits: ", error);
    return NextResponse.json(
      { error: "Failed to fetch total commits" },
      { status: 500 }
    );
  }
}
