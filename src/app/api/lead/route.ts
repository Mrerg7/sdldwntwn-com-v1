import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

type LeadBody = {
  email?: string;
  name?: string;
  offer?: string;
  message?: string;
  mode?: string;
  domain?: string;
  source?: string;
  offerCode?: string;
};

export async function POST(request: Request) {
  let body: LeadBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = body.email?.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  // Local/mock fallback: log structured lead. Wire to CRM/email when secrets exist.
  const payload = {
    receivedAt: new Date().toISOString(),
    to: SITE.email,
    ...body,
    email,
  };
  console.info("[lead]", JSON.stringify(payload));

  return NextResponse.json({
    ok: true,
    message: `Inquiry queued. Expect a reply from ${SITE.email} within 24–48 hours.`,
  });
}
