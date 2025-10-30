// netlify/functions/send-contact-email.ts
import type { Handler } from "@netlify/functions";
import { Resend } from "resend";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
const jsonCors = { ...cors, "Content-Type": "application/json" };

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const handler: Handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: cors, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: jsonCors, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  try {
    const data: ContactFormData = event.body ? JSON.parse(event.body) : ({} as any);
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return { statusCode: 400, headers: jsonCors, body: JSON.stringify({ error: "Missing fields" }) };
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return { statusCode: 500, headers: jsonCors, body: JSON.stringify({ error: "Missing RESEND_API_KEY" }) };
    }

    const resend = new Resend(resendApiKey);

    // send to you
    await resend.emails.send({
      from: "Portfolio Contact <contact@shaneeza-hasnani.com>",
      to: ["hasnani.shaneeza@gmail.com"],
      subject: `New message from ${name}: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // auto-reply to sender
    await resend.emails.send({
      from: "Shaneeza Hasnani <contact@shaneeza-hasnani.com>",
      to: [email],
      subject: "Thank you for reaching out!",
      html: `<p>Hi ${name},</p><p>Thanks for contacting me about "${subject}". I'll reply soon!</p><p>– Shaneeza</p>`,
    });

    return { statusCode: 200, headers: jsonCors, body: JSON.stringify({ success: true }) };
  } catch (err: any) {
    return {
      statusCode: 500,
      headers: jsonCors,
      body: JSON.stringify({ error: "Failed to send email", details: err.message }),
    };
  }
};

export { handler };
