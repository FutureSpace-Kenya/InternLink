"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-50 backdrop-blur-md border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" className="rounded-full" alt="InternLink logo" width={32} height={32} />
          <span className="text-lg font-bold tracking-tight text-slate-900">InternLink</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          <Link href="/" className="text-slate-900">Home</Link>
          <Link href="/internships" className="flex items-center gap-1 hover:text-slate-900 transition-colors">
            Browse <ChevronDown className="w-3.5 h-3.5" />
          </Link>
          <Link href="/companies" className="hover:text-slate-900 transition-colors">Companies</Link>
          <Link href="/about" className="hover:text-slate-900 transition-colors">About</Link>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            Log in
          </Link>
          <Link
            href="/register"
            className="bg-slate-900 hover:bg-slate-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-slate-600 p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-5 flex flex-col gap-4">
          {[
            { href: "/internships", label: "Browse Internships" },
            { href: "/companies", label: "Companies" },
            { href: "/about", label: "About" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-slate-600 hover:text-slate-900" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <hr className="border-slate-100" />
          <Link href="/login" className="text-sm font-medium text-slate-600">Log in</Link>
          <Link href="/register" className="bg-slate-900 text-white text-sm font-medium px-5 py-3 rounded-full text-center">
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
