import Link from "next/link";
import { Briefcase } from "lucide-react";

const studentLinks = [
  { href: "/internships", label: "Browse Internships" },
  { href: "/register", label: "Create Account" },
  { href: "/login", label: "Sign In" },
  { href: "/how-it-works", label: "How It Works" },
];

const companyLinks = [
  { href: "/register?role=company", label: "Post an Internship" },
  { href: "/pricing", label: "Pricing" },
  { href: "/companies", label: "Company Directory" },
];

const companyInfo = [
  { href: "/about", label: "About InternLink" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-[#0F172A]">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500">
                <Briefcase className="h-4 w-4 text-white" />
              </div>
              <span>InternLink</span>
            </Link>
            <p className="text-sm text-slate-500 max-w-xs">
              Connecting East African students with top internship opportunities. Built with ♥ in
              Nairobi, Kenya.
            </p>
            <p className="text-xs text-slate-400">© {new Date().getFullYear()} InternLink. All rights reserved.</p>
          </div>

          {/* For Students */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-[#0F172A]">For Students</h4>
            <ul className="flex flex-col gap-2">
              {studentLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-500 hover:text-amber-600 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Companies */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-[#0F172A]">For Companies</h4>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-500 hover:text-amber-600 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-[#0F172A]">Company</h4>
            <ul className="flex flex-col gap-2">
              {companyInfo.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-500 hover:text-amber-600 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
