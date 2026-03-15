"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-canvas backdrop-blur-md border-b border-ink/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" className="rounded-full" alt="InternLink logo" width={32} height={32} />
          <span className="text-lg font-bold tracking-tight text-ink">InternLink</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/60">
          <Link href="/" className="text-ink">Home</Link>
          <Link href="/internships" className="flex items-center gap-1 hover:text-ink transition-colors">
            Browse <ChevronDown className="w-3.5 h-3.5" />
          </Link>
          <Link href="/companies" className="hover:text-ink transition-colors">Companies</Link>
          <Link href="/about" className="hover:text-ink transition-colors">About</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-ink/60 hover:text-ink transition-colors">
            Log in
          </Link>
          <Link
            href="/register"
            className="bg-brand hover:bg-brand-light text-surface text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
          >
            Get Started
          </Link>
        </div>

        <button className="md:hidden text-ink/60 p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-surface border-t border-slate-500/20 px-6 py-5 flex flex-col gap-4">
          {[
            { href: "/internships", label: "Browse Internships" },
            { href: "/companies", label: "Companies" },
            { href: "/about", label: "About" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-ink/70 hover:text-ink" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <hr className="border-slate-500/20" />
          <Link href="/login" className="text-sm font-medium text-ink/70">Log in</Link>
          <Link href="/register" className="bg-brand text-surface text-sm font-medium px-5 py-3 rounded-full text-center">
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
