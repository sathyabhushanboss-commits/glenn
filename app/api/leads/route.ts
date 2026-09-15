import { NextRequest, NextResponse } from "next/server";

export type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location?: string;
  message?: string;
};

function isValidLead(body: unknown): body is LeadPayload {
  if (typeof body !== "object" || body === null) return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.phone === "string" &&
    b.phone.trim().length > 0 &&
    typeof b.email === "string" &&
    b.email.trim().length > 0 &&
    typeof b.projectType === "string" &&
    b.projectType.trim().length > 0
  );
}

// This route intentionally has no external integrations wired up yet.
// It validates and logs leads server-side so the frontend has a real
// endpoint to call. To go live, connect one or more of:
//   - a database (e.g. Postgres via Prisma) to persist leads
//   - an email service (e.g. Resend, SES) to notify the sales team
//   - a CRM (e.g. HubSpot, Zoho) via its REST API
//   - WhatsApp Business API for automated follow-up
//   - Google Sheets via the Sheets API for a lightweight lead log
// Do not claim any of the above is connected until real credentials
// and integration code are in place.
export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  if (!isValidLead(body)) {
    return NextResponse.json(
      { ok: false, error: "Missing required lead fields." },
      { status: 400 }
    );
  }

  // Placeholder: log the lead server-side. Replace with a real
  // persistence/notification step before going to production.
  console.log("[glenn-interior] New lead received:", {
    ...body,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
