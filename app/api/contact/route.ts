import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { boat_details, marina_location, client_name, phone_number, client_email } = body;

    // 1. Send the Lead Notification to YOUR Inbox
    await resend.emails.send({
      from: 'Coral Shield System <quotes@coralshieldmarine.com>', // Updated!
      to: 'benedicto@coralshieldmarine.com',
      subject: `🚨 New Dive Quote: ${boat_details}`,
      html: `
        <h2>New Lead from Coral Shield Website</h2>
        <p><strong>Name:</strong> ${client_name}</p>
        <p><strong>Phone:</strong> ${phone_number}</p>
        <p><strong>Email:</strong> ${client_email}</p>
        <p><strong>Boat:</strong> ${boat_details}</p>
        <p><strong>Location:</strong> ${marina_location}</p>
      `,
    });

    // 2. Send the Premium Auto-Responder to the CLIENT
    await resend.emails.send({
      from: 'Coral Shield Marine <quotes@coralshieldmarine.com>', // Updated!
      to: client_email,
      subject: 'Dive Quote Received - Coral Shield Marine',
      html: `
        <div style="font-family: sans-serif; color: #0F2C4A;">
          <h2 style="color: #007A9B;">Request Received.</h2>
          <p>Hi ${client_name},</p>
          <p>I received your request for maintenance on your ${boat_details} at ${marina_location}.</p>
          <p>As a 100% owner-operator business, I am currently out on the water servicing vessels, but I will review your details and contact you shortly with a precise quote and scheduling availability.</p>
          <p>If this is an emergency (entanglement or dropped item), please call or text my cell directly at <strong>(561) 679-7240</strong>.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>Benedicto</strong><br/>Owner & Lead Diver<br/>Coral Shield Marine LLC</p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}