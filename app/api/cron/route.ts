import { NextResponse } from "next/server";
import { refreshCasheData } from "@/lib/github";

export async function GET() {
  try {
    await refreshCasheData();
    return NextResponse.json(
      { message: "Cache refreshed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error refreshing data:", error);
    return NextResponse.json(
      { error: "Error refreshing data" },
      { status: 500 }
    );
  }
}
