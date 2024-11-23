import { NextRequest, NextResponse } from "next/server";
import { refreshCacheData } from "@/lib/api/fetchData";

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return new Response("Unauthorized", {
        status: 401,
      });
    }

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
