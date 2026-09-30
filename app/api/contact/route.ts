import { NextResponse } from "next/server";
import { Resend } from "resend";
import { escapeHtml, parseContact, serviceLabels } from "@/lib/contact";

export async function POST(request: Request) {
  try {
    const raw = await request.text();
    if (raw.length > 12000) return NextResponse.json({ error: "Request too large" }, { status: 413 });
    let body: unknown;
    try { body = JSON.parse(raw); } catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }
    if (body && typeof body === "object" && "website" in body && body.website) {
      return NextResponse.json({ message: "Success" });
    }
    const details = parseContact(body);
    if (!details) return NextResponse.json({ error: "Please check your contact and vessel details" }, { status: 400 });
    if (!process.env.RESEND_API_KEY) return NextResponse.json({ error: "Contact service unavailable" }, { status: 503 });
    const resend = new Resend(process.env.RESEND_API_KEY);
    const safe = Object.fromEntries(Object.entries(details).map(([key, value]) => [key, escapeHtml(value)]));
    const service = serviceLabels[details.service];
    const notification = await resend.emails.send({
      from: "Coral Shield Marine <quotes@coralshieldmarine.com>",
      to: "benedicto@coralshieldmarine.com",
      replyTo: details.client_email,
      subject: `New quote request: ${service}`,
      text: `Name: ${details.client_name}\nPhone: ${details.phone_number}\nEmail: ${details.client_email}\nService: ${service}\nBoat: ${details.boat_details || "Waterfront service"}\nLocation: ${details.marina_location}\nNotes: ${details.notes || "None"}`,
      html: `<h2>New Coral Shield quote request</h2><p><strong>Name:</strong> ${safe.client_name}</p><p><strong>Phone:</strong> ${safe.phone_number}</p><p><strong>Email:</strong> ${safe.client_email}</p><p><strong>Service:</strong> ${service}</p><p><strong>Boat:</strong> ${safe.boat_details || "Waterfront service"}</p><p><strong>Location:</strong> ${safe.marina_location}</p><p><strong>Notes:</strong> ${safe.notes || "None"}</p>`,
    });
    if (notification.error) return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    // The lead is delivered. A receipt failure must not trigger duplicate submissions.
    try {
      await resend.emails.send({
        from: "Coral Shield Marine <quotes@coralshieldmarine.com>",
        to: details.client_email,
        subject: "Quote request received | Coral Shield Marine",
        text: `Hi ${details.client_name},\n\nThank you for your ${service.toLowerCase()} inquiry at ${details.marina_location}. I’ll review your details and follow up with pricing and availability. Your request does not confirm a booking.\n\nFor recovery or entanglement inquiries, call or text (561) 679-7240.\n\nBenedicto\nCoral Shield Marine`,
        html: `<div style="font-family:sans-serif;color:#01395f"><h2>Request received.</h2><p>Hi ${safe.client_name},</p><p>Thank you for your inquiry at ${safe.marina_location}. I’ll review your details and follow up with pricing and availability. Your request does not confirm a booking.</p><p>For recovery or entanglement inquiries, call or text <strong>(561) 679-7240</strong>.</p><p>Benedicto<br>Coral Shield Marine</p></div>`,
      });
    } catch { /* Preserve success after the owner notification was delivered. */ }
    return NextResponse.json({ message: "Success" });
  } catch { return NextResponse.json({ error: "Failed to send" }, { status: 500 }); }
}
