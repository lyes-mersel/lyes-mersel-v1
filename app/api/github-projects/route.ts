import { getTotalRepositories } from "@/lib/github";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getTotalRepositories();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching total repositories: ", error);
    return NextResponse.json(
      { error: "Failed to fetch total repositories" },
      { status: 500 }
    );
  }
}
