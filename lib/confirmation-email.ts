import { escapeHtml, serviceLabels, type ContactDetails } from "./contact";

export const businessEmail = "benedicto@coralshieldmarine.com";
export const logoUrl = "https://www.coralshieldmarine.com/logo.png";
const website = "https://www.coralshieldmarine.com";

export function signatureHtml(includeLogo = true): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="font-family:Arial,Helvetica,sans-serif;color:#01395f;border-collapse:collapse;">
${includeLogo ? `<tr><td style="padding:0 0 16px;"><a href="${website}" style="text-decoration:none;"><img src="${logoUrl}" width="210" height="70" alt="Coral Shield Marine" border="0" style="display:block;width:210px;height:70px;background-color:#ffffff;"></a></td></tr>` : ""}
<tr><td style="font-size:18px;font-weight:bold;line-height:24px;padding:0;">Benedicto Amaty</td></tr>
<tr><td style="font-size:12px;line-height:20px;padding:2px 0 12px;color:#526979;">Owner &nbsp;|&nbsp; Coral Shield Marine</td></tr>
<tr><td style="border-top:2px solid #ff573e;padding:12px 0 0;font-size:13px;line-height:22px;"><a href="tel:+15616797240" style="color:#01395f;text-decoration:none;">(561) 679-7240</a> &nbsp;&middot;&nbsp; <a href="sms:+15616797240" style="color:#066196;text-decoration:none;">Call or text</a></td></tr>
<tr><td style="font-size:13px;line-height:22px;"><a href="mailto:${businessEmail}" style="color:#066196;text-decoration:none;">${businessEmail}</a></td></tr>
<tr><td style="font-size:13px;line-height:22px;"><a href="${website}" style="color:#066196;text-decoration:none;">coralshieldmarine.com</a></td></tr>
<tr><td style="padding-top:10px;font-size:11px;line-height:18px;color:#526979;">Underwater marine maintenance &nbsp;|&nbsp; Palm Beach County, FL</td></tr>
</table>`;
}

export function buildConfirmationEmail(details: ContactDetails) {
  const firstName = details.client_name.trim().split(/\s+/)[0];
  const service = serviceLabels[details.service];
  const rows = [["Service", service], ...(details.boat_details ? [["Vessel", details.boat_details]] : []), ["Location", details.marina_location]];
  const summary = rows.map(([label,value]) => `<tr><td valign="top" style="padding:8px 12px 8px 0;width:72px;font-size:13px;line-height:21px;color:#526979;">${label}</td><td style="padding:8px 0;font-size:14px;line-height:21px;color:#01395f;word-break:break-word;">${escapeHtml(value)}</td></tr>`).join("");
  const subject = "We received your quote request | Coral Shield Marine";
  const text = `Hi ${firstName},\n\nThank you for contacting Coral Shield Marine. I’ve received your quote request and will review the details you provided.\n\nYOUR REQUEST\n${rows.map(([label,value]) => `${label}: ${value}`).join("\n")}\n\nI’ll follow up with pricing and availability. If I need any additional information, I’ll reach out before preparing your quote.\n\nYour service appointment is not yet confirmed. We’ll agree on the service details and pricing before scheduling.\n\nYou can reply to this email with questions or additional details. For time-sensitive recovery or entanglement questions, call or text (561) 679-7240.\n\nThank you for considering Coral Shield Marine.\n\nBenedicto Baltodano\nOwner | Coral Shield Marine\n(561) 679-7240\n${businessEmail}\ncoralshieldmarine.com`;
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${subject}</title></head><body style="margin:0;padding:0;background-color:#eef4f7;font-family:Arial,Helvetica,sans-serif;">
<div style="display:none;font-size:1px;color:#eef4f7;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">Your request is with Benedicto. We’ll follow up with pricing and availability.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="padding:24px 12px;">
<!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:#ffffff;border:1px solid #dce6ec;">
<tr><td style="padding:28px 28px 22px;border-bottom:3px solid #ff573e;"><a href="${website}"><img src="${logoUrl}" width="225" height="75" alt="Coral Shield Marine" border="0" style="display:block;width:225px;height:75px;background-color:#ffffff;"></a></td></tr>
<tr><td style="padding:28px;color:#01395f;font-size:15px;line-height:25px;">
<p style="margin:0 0 10px;color:#066196;font-size:10px;font-weight:bold;letter-spacing:1.5px;">QUOTE REQUEST RECEIVED</p>
<h1 style="margin:0 0 24px;font-size:28px;line-height:34px;color:#01395f;">Thank you for reaching out.</h1>
<p style="margin:0 0 16px;">Hi ${escapeHtml(firstName)},</p>
<p style="margin:0 0 24px;">Thank you for contacting Coral Shield Marine. I’ve received your quote request and will review the details you provided.</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f0f5f8;"><tr><td style="padding:18px 20px;"><p style="margin:0 0 6px;font-size:10px;letter-spacing:1.2px;font-weight:bold;color:#066196;">YOUR REQUEST</p><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${summary}</table></td></tr></table>
<p style="margin:24px 0 16px;">I’ll follow up with pricing and availability. If I need any additional information, I’ll reach out before preparing your quote.</p>
<p style="margin:0 0 16px;">Your service appointment is not yet confirmed. We’ll agree on the service details and pricing before scheduling.</p>
<p style="margin:0 0 16px;">You can reply to this email with questions or additional details. For time-sensitive recovery or entanglement questions, call or text <a href="tel:+15616797240" style="color:#066196;text-decoration:underline;">(561) 679-7240</a>.</p>
<p style="margin:0 0 24px;">Thank you for considering Coral Shield Marine.</p>
${signatureHtml(false)}
</td></tr></table>
<!--[if mso]></td></tr></table><![endif]-->
<p style="margin:18px 0 0;color:#526979;font-size:10px;line-height:17px;">You received this confirmation because a quote was requested from Coral Shield Marine.</p>
</td></tr></table></body></html>`;
  return { subject, text, html };
}
