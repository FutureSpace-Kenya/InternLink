import { UploadType } from "@prisma/client";
import { R2_PUBLIC_URL, R2_BUCKET } from "./r2";

// ─── File validation ───────────────────────────────────────────────────────

const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const ALLOWED_DOCUMENT_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;  // 5 MB
const MAX_DOCUMENT_SIZE = 10 * 1024 * 1024; // 10 MB

export function validateFile(
  file: { mimeType: string; fileSize: number },
  uploadType: UploadType
): { valid: boolean; error?: string } {
  const imageTypes: UploadType[] = [
    UploadType.PROFILE_PICTURE,
    UploadType.BANNER,
    UploadType.COMPANY_LOGO,
    UploadType.COVER_IMAGE,
  ];
  const documentTypes: UploadType[] = [UploadType.CV, UploadType.DOCUMENT];

  const isImage = imageTypes.includes(uploadType);
  const isDocument = documentTypes.includes(uploadType);

  if (isImage) {
    if (!ALLOWED_IMAGE_TYPES.includes(file.mimeType)) {
      return { valid: false, error: "Only JPEG, PNG, WebP, or GIF images are allowed." };
    }
    if (file.fileSize > MAX_IMAGE_SIZE) {
      return { valid: false, error: "Image must be under 5 MB." };
    }
  }

  if (isDocument) {
    if (!ALLOWED_DOCUMENT_TYPES.includes(file.mimeType)) {
      return { valid: false, error: "Only PDF or Word documents are allowed." };
    }
    if (file.fileSize > MAX_DOCUMENT_SIZE) {
      return { valid: false, error: "Document must be under 10 MB." };
    }
  }

  return { valid: true };
}

// ─── Key generation ────────────────────────────────────────────────────────

export function generateKey(
  uploadType: UploadType,
  identifier: string, // userId or orgSlug
  fileName: string
): string {
  const timestamp = Date.now();
  const sanitized = fileName.replace(/[^a-zA-Z0-9._-]/g, "_");

  const folderMap: Record<UploadType, string> = {
    PROFILE_PICTURE: `uploads/avatars/${identifier}`,
    BANNER: `uploads/banners/${identifier}`,
    CV: `uploads/cvs/${identifier}`,
    DOCUMENT: `uploads/documents/${identifier}`,
    COMPANY_LOGO: `uploads/logos/${identifier}`,
    COVER_IMAGE: `uploads/covers/${identifier}`,
  };

  return `${folderMap[uploadType]}/${timestamp}-${sanitized}`;
}

// ─── Public URL helper ─────────────────────────────────────────────────────

export function getPublicUrl(key: string): string {
  return `${R2_PUBLIC_URL}/${key}`;
}

export { R2_BUCKET };
