import { appendFile, mkdir } from "fs/promises";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { tmpdir } from "os";
import path from "path";

const STORAGE_DIR = process.env.VERCEL
  ? path.join(tmpdir(), "reserve-ai")
  : path.join(process.cwd(), ".data");
const STORAGE_FILE = path.join(STORAGE_DIR, "contact-inbox.jsonl");
// Where contact-form submissions are delivered. Cloudflare Email Routing
// forwards this address on to the team inbox.
const INBOX_EMAIL = "contact@re-serveai.com";

// The account nodemailer authenticates against. Cloudflare Email Routing is
// receive-only and cannot send, so outbound still goes through Gmail SMTP.
// Override with GMAIL_USER once a sending identity exists for the domain.
const SMTP_FALLBACK_USER = "reserveaivox@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const firstName =
      typeof body.firstName === "string" ? body.firstName.trim() : "";
    const lastName =
      typeof body.lastName === "string" ? body.lastName.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const businessType =
      typeof body.businessType === "string" ? body.businessType.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const entry = {
      firstName,
      lastName,
      email,
      phone,
      businessType,
      message,
      inbox: INBOX_EMAIL,
      createdAt: new Date().toISOString(),
      source: "contact-page",
    };

    await mkdir(STORAGE_DIR, { recursive: true });
    await appendFile(STORAGE_FILE, `${JSON.stringify(entry)}\n`, "utf8");

    const gmailUser = process.env.GMAIL_USER || SMTP_FALLBACK_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailAppPassword) {
      return NextResponse.json(
        {
          error: "Gmail is not configured",
          requiresConfiguration: true,
        },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `"Reserve AI Contact Form" <${gmailUser}>`,
      to: INBOX_EMAIL,
      replyTo: email,
      subject: `New contact message from ${firstName} ${lastName}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Phone: ${phone || "-"}`,
        `Business type: ${businessType || "-"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin-bottom: 16px;">New contact message</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "-"}</p>
          <p><strong>Business type:</strong> ${businessType || "-"}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact mail send failed", error);
    return NextResponse.json(
      { error: "Unable to save message" },
      { status: 500 },
    );
  }
}
