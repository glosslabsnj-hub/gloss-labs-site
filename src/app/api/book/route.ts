import { NextRequest, NextResponse } from "next/server";
import { createBooking } from "@/lib/square";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { serviceVariationId, teamMemberId, startAt, customerNote, firstName, lastName, email, phone } = body;

    if (!serviceVariationId || !startAt || !firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const result = await createBooking({
      serviceVariationId,
      teamMemberId: teamMemberId || "TMkPKE793qw2zskX", // Default to Jack
      startAt,
      customerNote,
      customerFirstName: firstName,
      customerLastName: lastName,
      customerEmail: email,
      customerPhone: phone,
    });

    if (result.errors) {
      return NextResponse.json({ error: result.errors[0]?.detail || "Booking failed" }, { status: 400 });
    }

    return NextResponse.json({ booking: result.booking });
  } catch {
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
  }
}
