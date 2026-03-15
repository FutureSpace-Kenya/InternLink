import { z } from "zod";

// ─── Auth ──────────────────────────────────────────────────────────────────

export const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export const otpSchema = z.object({
  email: z.string().email(),
  code: z.string().length(6, "OTP must be 6 digits").regex(/^\d{6}$/, "OTP must be numeric"),
});

export const registerSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  role: z.enum(["INTERN", "COMPANY"]),
});

// ─── Intern Profile ────────────────────────────────────────────────────────

export const internProfileSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  university: z.string().optional(),
  courseOfStudy: z.string().optional(),
  graduationYear: z.number().int().min(2000).max(2040).optional(),
  phone: z.string().optional(),
  idNumber: z.string().optional(),
  bio: z.string().max(500, "Bio must be under 500 characters").optional(),
  skills: z.array(z.string()).default([]),
  socialLinks: z
    .object({
      linkedin: z.string().url().optional(),
      github: z.string().url().optional(),
      twitter: z.string().url().optional(),
      website: z.string().url().optional(),
    })
    .optional(),
});

// ─── Organization ──────────────────────────────────────────────────────────

export const organizationSchema = z.object({
  name: z.string().min(2, "Organization name is required"),
  slug: z
    .string()
    .min(2)
    .max(60)
    .regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
  industry: z.string().optional(),
  size: z.enum(["1-10", "11-50", "51-200", "201-500", "500+"]).optional(),
  website: z.string().url("Please enter a valid URL").optional(),
  description: z.string().max(1000).optional(),
  location: z.string().optional(),
  services: z.array(z.string()).default([]),
  socialLinks: z
    .object({
      linkedin: z.string().url().optional(),
      twitter: z.string().url().optional(),
      facebook: z.string().url().optional(),
      instagram: z.string().url().optional(),
    })
    .optional(),
});

// ─── Internship ────────────────────────────────────────────────────────────

export const internshipSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(50, "Please provide a detailed description"),
  location: z.string().optional(),
  locationType: z.enum(["ONSITE", "REMOTE", "HYBRID"]).default("ONSITE"),
  duration: z.string().min(1, "Duration is required"),
  startDate: z.coerce.date().optional(),
  stipend: z.number().int().positive().optional(),
  skills: z.array(z.string()).default([]),
  category: z.string().optional(),
  applicationDeadline: z.coerce.date().optional(),
  numberOfOpenings: z.number().int().positive().default(1),
  departmentId: z.string().optional(),
  status: z.enum(["DRAFT", "ACTIVE", "CLOSED"]).default("DRAFT"),
});

// ─── Application ───────────────────────────────────────────────────────────

export const applicationSchema = z.object({
  internshipId: z.string().min(1),
  coverLetter: z.string().max(2000).optional(),
  resumeId: z.string().optional(),
});
