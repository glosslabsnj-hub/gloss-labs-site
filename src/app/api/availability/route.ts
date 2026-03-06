import { NextRequest, NextResponse } from "next/server";
import { getBookableServices, searchAvailability } from "@/lib/square";

export async function GET() {
  try {
    const { services, addOns } = await getBookableServices();
    return NextResponse.json({ services, addOns });
  } catch {
    return NextResponse.json({ error: "Failed to load services" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { serviceVariationId, startDate, endDate } = await req.json();
    if (!serviceVariationId || !startDate || !endDate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const availabilities = await searchAvailability(serviceVariationId, startDate, endDate);
    return NextResponse.json({ availabilities });
  } catch {
    return NextResponse.json({ error: "Failed to search availability" }, { status: 500 });
  }
}
