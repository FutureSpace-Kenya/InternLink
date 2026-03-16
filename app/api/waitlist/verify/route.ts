import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { email, code, name, institution, type, role } = await req.json();

    if (!email || !code) {
      return NextResponse.json({ error: "Email and code are required" }, { status: 400 });
    }

    const normalised = email.toLowerCase().trim();

    const existing = await prisma.waitlistEntry.findUnique({
      where: { email: normalised },
    });
    if (existing) {
      return NextResponse.json(
        { alreadyOnWaitlist: true, isOG: existing.isOG, position: existing.position },
        { status: 409 }
      );
    }

    const otp = await prisma.waitlistOtp.findFirst({
      where: { email: normalised, used: false, expiresAt: { gt: new Date() } },
      orderBy: { createdAt: "desc" },
    });

    if (!otp) {
      return NextResponse.json(
        { error: "Code expired or not found. Please request a new one." },
        { status: 400 }
      );
    }

    const valid = await bcrypt.compare(code, otp.code);
    if (!valid) {
      return NextResponse.json({ error: "Invalid verification code" }, { status: 400 });
    }

    await prisma.waitlistOtp.update({ where: { id: otp.id }, data: { used: true } });

    const count = await prisma.waitlistEntry.count();
    const isOG = count < 100;

    const entry = await prisma.waitlistEntry.create({
      data: {
        email: normalised,
        name: name?.trim() || null,
        institution: institution?.trim() || null,
        type: role === "COMPANY" ? "INTERNSHIP" : type === "ATTACHMENT" ? "ATTACHMENT" : "INTERNSHIP",
        role: role === "COMPANY" ? "COMPANY" : "INTERN",
        isOG,
      },
    });

    return NextResponse.json({ ok: true, position: entry.position, isOG: entry.isOG });
  } catch (err) {
    console.error("[waitlist/verify]", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
