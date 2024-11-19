import { NextResponse } from "next/server";
import { getTotalTechnologies } from "@/lib/github";

export async function GET() {
  try {
    const data = await getTotalTechnologies();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching total technologies: ", error);
    return NextResponse.json(
      { error: "Failed to fetch total technologies" },
      { status: 500 }
    );
  }
}
