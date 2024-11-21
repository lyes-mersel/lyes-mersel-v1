import { NextResponse } from "next/server";
import {
  getTotalRepositories,
  getTotalTechnologies,
  getTotalCommits,
} from "@/lib/github";

export async function GET() {
  try {
    console.log("Refreshing data...");
    await getTotalRepositories();
    await getTotalTechnologies();
    await getTotalCommits();

    console.log("Data refreshed successfully!");
    return NextResponse.json({ message: "Cache refreshed" });
  } catch (error) {
    console.error("Error refreshing data:", error);
    return NextResponse.json(
      { error: "Error refreshing data" },
      { status: 500 }
    );
  }
}
