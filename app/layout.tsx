import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "InternLink - Find Your Next Internship in Kenya",
    template: "%s | InternLink",
  },
  description:
    "InternLink connects East African students with top companies for internship and attachment opportunities. Find, apply, and launch your career today.",
  keywords: ["internship", "Kenya", "attachment", "students", "jobs", "intern.co.ke"],
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "https://intern.co.ke"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#fafbfc] text-slate-800">
        {children}
      </body>
    </html>
  );
}
