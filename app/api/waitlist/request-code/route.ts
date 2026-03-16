import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

function generateCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const normalised = email.toLowerCase().trim();

    const existing = await prisma.waitlistEntry.findUnique({
      where: { email: normalised },
    });

    if (existing) {
      return NextResponse.json(
        { alreadyOnWaitlist: true, isOG: existing.isOG },
        { status: 409 }
      );
    }

    // Invalidate old OTPs
    await prisma.waitlistOtp.updateMany({
      where: { email: normalised, used: false },
      data: { used: true },
    });

    const plainCode = generateCode();
    const hashed = await bcrypt.hash(plainCode, 10);

    await prisma.waitlistOtp.create({
      data: {
        email: normalised,
        code: hashed,
        expiresAt: new Date(Date.now() + 10 * 60 * 1000),
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: normalised,
      subject: "Your InternLink Waitlist Code",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 40px 24px; background: #F5F7F5;">
          <div style="background: #fff; border-radius: 16px; padding: 40px; border: 1px solid rgba(0,0,0,0.08);">
            <h1 style="font-size: 24px; font-weight: 700; color: #1E1E1E; margin: 0 0 8px;">Your verification code</h1>
            <p style="color: #6b7280; font-size: 15px; margin: 0 0 32px;">Enter this code to secure your spot on the InternLink waitlist.</p>
            <div style="background: #edf4f2; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 32px;">
              <span style="font-size: 40px; font-weight: 900; letter-spacing: 8px; color: #235347;">${plainCode}</span>
            </div>
            <p style="color: #9ca3af; font-size: 13px; margin: 0;">Expires in 10 minutes. If you didn't request this, ignore this email.</p>
          </div>
          <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 24px;">© ${new Date().getFullYear()} InternLink by FutureSpace</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[waitlist/request-code]", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
