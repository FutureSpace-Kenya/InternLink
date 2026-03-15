import {
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { r2Client, R2_BUCKET } from "./r2";
import { getPublicUrl } from "./upload-utils";

// ─── Upload a file buffer directly to R2 ──────────────────────────────────

export async function uploadToR2(
  key: string,
  body: Buffer | Uint8Array,
  mimeType: string
): Promise<{ url: string; key: string; bucket: string }> {
  await r2Client.send(
    new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: key,
      Body: body,
      ContentType: mimeType,
    })
  );

  return {
    url: getPublicUrl(key),
    key,
    bucket: R2_BUCKET,
  };
}

// ─── Delete an object from R2 ─────────────────────────────────────────────

export async function deleteFromR2(key: string): Promise<void> {
  await r2Client.send(
    new DeleteObjectCommand({
      Bucket: R2_BUCKET,
      Key: key,
    })
  );
}

// ─── Generate a presigned PUT URL (client-side uploads) ───────────────────

export async function getSignedUploadUrl(
  key: string,
  mimeType: string,
  expiresInSeconds = 300 // 5 minutes
): Promise<string> {
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET,
    Key: key,
    ContentType: mimeType,
  });

  return getSignedUrl(r2Client, command, { expiresIn: expiresInSeconds });
}

// ─── Generate a presigned GET URL (private files) ─────────────────────────

export async function getSignedDownloadUrl(
  key: string,
  expiresInSeconds = 3600 // 1 hour
): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: R2_BUCKET,
    Key: key,
  });

  return getSignedUrl(r2Client, command, { expiresIn: expiresInSeconds });
}
