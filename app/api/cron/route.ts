import { NextResponse } from "next/server";
import { refreshCacheData } from "@/lib/github";

export async function GET() {
  try {
    await refreshCacheData();
    console.log("Cron job executed at", new Date().toISOString());
    return NextResponse.json(
      { message: "Cron job completed : Cache refreshed successfully" },
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
