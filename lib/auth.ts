import crypto from "crypto";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";

const OTP_EXPIRY_MINUTES = 10;
const SESSION_EXPIRY_DAYS = 30;
const BCRYPT_ROUNDS = 12;

// ─── OTP ──────────────────────────────────────────────────────────────────

export function generateOtpCode(): string {
  // Cryptographically secure 6-digit OTP
  return String(crypto.randomInt(100000, 999999));
}

export async function createOtp(userId: string): Promise<string> {
  // Invalidate any previous unused OTPs for this user
  await prisma.otp.updateMany({
    where: { userId, used: false },
    data: { used: true },
  });

  const code = generateOtpCode();
  const hashed = await bcrypt.hash(code, BCRYPT_ROUNDS);
  const expiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);

  await prisma.otp.create({
    data: { userId, code: hashed, expiresAt },
  });

  return code; // return plain code to send via email
}

export async function verifyOtp(userId: string, plainCode: string): Promise<boolean> {
  const otp = await prisma.otp.findFirst({
    where: {
      userId,
      used: false,
      expiresAt: { gt: new Date() },
    },
    orderBy: { createdAt: "desc" },
  });

  if (!otp) return false;

  const valid = await bcrypt.compare(plainCode, otp.code);

  if (valid) {
    await prisma.otp.update({ where: { id: otp.id }, data: { used: true } });
    await prisma.user.update({ where: { id: userId }, data: { isVerified: true } });
  }

  return valid;
}

// ─── Session ──────────────────────────────────────────────────────────────

export function generateSessionToken(): string {
  return crypto.randomBytes(64).toString("hex");
}

export async function createSession(userId: string): Promise<string> {
  const token = generateSessionToken();
  const hashed = await bcrypt.hash(token, BCRYPT_ROUNDS);
  const expiresAt = new Date(Date.now() + SESSION_EXPIRY_DAYS * 24 * 60 * 60 * 1000);

  await prisma.session.create({
    data: { userId, token: hashed, expiresAt },
  });

  return token; // return plain token to set as cookie
}

export async function validateSession(plainToken: string) {
  // Sessions are hashed — we must scan recent sessions for this user
  // For production, store a lookup-key separately; for now use a session ID cookie pattern
  const sessions = await prisma.session.findMany({
    where: { expiresAt: { gt: new Date() } },
    include: { user: true },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  for (const session of sessions) {
    const match = await bcrypt.compare(plainToken, session.token);
    if (match) return session.user;
  }

  return null;
}

export async function deleteSession(plainToken: string): Promise<void> {
  const sessions = await prisma.session.findMany({
    where: { expiresAt: { gt: new Date() } },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  for (const session of sessions) {
    const match = await bcrypt.compare(plainToken, session.token);
    if (match) {
      await prisma.session.delete({ where: { id: session.id } });
      return;
    }
  }
}
