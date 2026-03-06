import { NextRequest, NextResponse } from "next/server";
import { createBooking } from "@/lib/square";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { serviceVariationId, teamMemberId, startAt, customerNote, firstName, lastName, email, phone } = body;

    if (!serviceVariationId || !startAt || !firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    const result = await createBooking({
      serviceVariationId,
      teamMemberId: teamMemberId || "TMkPKE793qw2zskX",
      startAt,
      customerNote,
      customerFirstName: firstName,
      customerLastName: lastName,
      customerEmail: email,
      customerPhone: phone,
    });

    if (result.errors?.length > 0) {
      const detail = result.errors[0]?.detail || "";
      // Translate Square errors into human-friendly messages
      if (detail.includes("not available")) {
        return NextResponse.json({ error: "That time slot is no longer available. Please pick another time." }, { status: 400 });
      }
      if (detail.includes("customer")) {
        return NextResponse.json({ error: "We couldn't save your info. Please check your email and phone number." }, { status: 400 });
      }
      return NextResponse.json({ error: detail || "Something went wrong. Please try again or call us at (609) 731-8641." }, { status: 400 });
    }

    return NextResponse.json({ booking: result.booking });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again or call us at (609) 731-8641." }, { status: 500 });
  }
}
