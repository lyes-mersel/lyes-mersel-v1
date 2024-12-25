import { NextRequest, NextResponse } from "next/server";
import { refreshCacheData } from "@/lib/api/fetchData";
import {
  getToggleCacheState,
  setToggleCacheState,
} from "@/lib/api/toggleCacheState";

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return new Response("Unauthorized", { status: 401 });
    }

    // Retrieve the current toggle state from the cache
    const currentPart = (await getToggleCacheState()) || "A";
    await refreshCacheData(currentPart);

    // Update the toggle state for the next run
    const nextPart = currentPart === "A" ? "B" : "A";
    await setToggleCacheState(nextPart);

    console.log(
      `Cron job executed at ${new Date().toISOString()} for the half ${currentPart} of the data`
    );

    return NextResponse.json(
      {
        message: `Cron job completed: Refreshed ${currentPart} half of the data`,
      },
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
