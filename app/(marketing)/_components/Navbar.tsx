"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/lib/button-variants";

const navLinks = [
  { href: "/internships", label: "Browse Internships" },
  { href: "/companies", label: "Companies" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-[#0F172A]">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500">
              <Briefcase className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg">InternLink</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-amber-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login"
              className={cn(buttonVariants({ variant: "ghost" }), "text-slate-600 hover:text-amber-600")}
            >
              Log in
            </Link>
            <Link
              href="/register"
              className={cn(buttonVariants(), "bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700")}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="rounded-md p-2 text-slate-600 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-amber-600"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-1 border-gray-100" />
            <Link href="/login" className="text-sm font-medium text-slate-600">
              Log in
            </Link>
            <Link
              href="/register"
              className={cn(buttonVariants(), "w-full justify-center bg-amber-500 text-white hover:bg-amber-600")}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
