import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { NextAuthProvider } from "./AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InternLink",
  description: "A platform for connecting interns and attaches to companies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={"winter"}>
      <body className={inter.className}>
        <NextAuthProvider>
          {children}
          <script src="/icons/fontawesome.js" crossOrigin="anonymous"></script>
        </NextAuthProvider>
      </body>
    </html>
  );
}
