import { NextResponse } from "next/server";
import { Resend } from "resend";
import { escapeHtml, parseContact, serviceLabels } from "@/lib/contact";
import { buildConfirmationEmail, businessEmail } from "@/lib/confirmation-email";

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
    if (notification.error) {
      console.error("[quote-owner-email] Provider rejected notification", { name: notification.error.name, statusCode: notification.error.statusCode });
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }
    // Provider acceptance of the owner notification is enough to acknowledge the lead.
    // A receipt failure must not invite a duplicate customer submission.
    try {
      const receipt = await resend.emails.send({
        from: "Coral Shield Marine <quotes@coralshieldmarine.com>",
        to: details.client_email,
        replyTo: businessEmail,
        ...buildConfirmationEmail(details),
      });
      if (receipt.error) {
        console.error("[quote-customer-email] Provider rejected receipt", { name: receipt.error.name, statusCode: receipt.error.statusCode });
      }
    } catch {
      console.error("[quote-customer-email] Receipt request failed after owner notification was accepted");
    }
    return NextResponse.json({ message: "Success" });
  } catch { return NextResponse.json({ error: "Failed to send" }, { status: 500 }); }
}
