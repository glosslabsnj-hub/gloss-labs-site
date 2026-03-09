import { NextRequest, NextResponse } from "next/server";
import { createBooking } from "@/lib/square";

const GLOSS_TENANT_ID = "582b44cf-3026-4a34-a0f9-515c95797405";
const SUPABASE_URL = "https://yltzlvzgwkidbeqaoevp.supabase.co";

function formatPhoneE164(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return `+${digits}`;
}

/** Send SMS through Flux Receptionist (same number for all booking channels) */
async function sendSms(to: string, body: string): Promise<boolean> {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) {
    console.error("SMS: SUPABASE_SERVICE_ROLE_KEY not configured");
    return false;
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/functions/v1/send-sms-internal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${serviceKey}`,
        "x-internal-key": serviceKey,
      },
      body: JSON.stringify({
        tenant_id: GLOSS_TENANT_ID,
        to,
        body,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error("SMS error:", res.status, errBody);
      return false;
    }
    console.log("SMS sent to", to);
    return true;
  } catch (e) {
    console.error("SMS send error:", e);
    return false;
  }
}

function titleCase(s: string): string {
  return s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { serviceVariationId, serviceName, teamMemberId, startAt, customerNote, firstName, lastName, email, phone, locationType, vehicleYear, vehicleMake, vehicleModel } = body;

    if (!serviceVariationId || !startAt || !firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    // Tag the booking source so webhook processor knows this came from the website
    // and skips duplicate notifications (website already sends SMS directly below)
    const taggedNote = customerNote
      ? `${customerNote} [source:website]`
      : "[source:website]";

    const result = await createBooking({
      serviceVariationId,
      teamMemberId: teamMemberId || "TMkPKE793qw2zskX",
      startAt,
      customerNote: taggedNote,
      customerFirstName: firstName,
      customerLastName: lastName,
      customerEmail: email,
      customerPhone: phone,
      locationType: locationType || "BUSINESS_LOCATION",
    });

    if (result.errors?.length > 0) {
      const detail = result.errors[0]?.detail || "";
      if (detail.includes("not available")) {
        return NextResponse.json({ error: "That time slot is no longer available. Please pick another time." }, { status: 400 });
      }
      if (detail.includes("customer")) {
        return NextResponse.json({ error: "We couldn't save your info. Please check your email and phone number." }, { status: 400 });
      }
      return NextResponse.json({ error: detail || "Something went wrong. Please try again or call us at (609) 944-9705." }, { status: 400 });
    }

    // Booking succeeded — send SMS notifications (non-blocking)
    const customerPhone = formatPhoneE164(phone);
    const service = titleCase(serviceName || "your service");
    const date = new Date(startAt);
    const dateStr = date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      timeZone: "America/New_York",
    });
    const timeStr = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/New_York",
    });

    // Send SMS notifications (must await — Vercel kills pending promises after response)
    const smsPromises: Promise<boolean>[] = [];

    // 1. Confirmation SMS to customer
    smsPromises.push(
      sendSms(
        customerPhone,
        `Hey ${firstName}! You're all set with Gloss Labs for ${service} on ${dateStr} at ${timeStr}. We'll see you then! Questions? Reply to this text or call (609) 944-9705.`
      )
    );

    // 2. Notification SMS to Jack
    const ownerPhone = process.env.OWNER_NOTIFY_PHONE;
    if (ownerPhone) {
      const location = locationType === "CUSTOMER_LOCATION" ? "MOBILE" : "SHOP";
      const vehicleStr = [vehicleYear, vehicleMake, vehicleModel].filter(Boolean).join(" ");
      smsPromises.push(
        sendSms(
          ownerPhone,
          `New booking!\n${firstName} ${lastName}\n${service}\n${dateStr} at ${timeStr}\nLocation: ${location}\n${vehicleStr ? `Vehicle: ${vehicleStr}\n` : ""}Phone: ${phone}\n${customerNote || ""}`
        )
      );
    }

    await Promise.allSettled(smsPromises);

    return NextResponse.json({ booking: result.booking });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again or call us at (609) 944-9705." }, { status: 500 });
  }
}
