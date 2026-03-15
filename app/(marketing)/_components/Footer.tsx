import Link from "next/link";
import Image from "next/image";

const links = {
  Product: [
    { href: "/internships", label: "Browse Internships" },
    { href: "/companies", label: "Companies" },
    { href: "/register", label: "Create Account" },
    { href: "/how-it-works", label: "How It Works" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/register?role=company", label: "Post an Internship" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
    { href: "/security", label: "Security" },
  ],
};

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 px-6 border-t border-slate-100 bg-white relative overflow-hidden">
      <div className="max-w-7xl md:mb-44 mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img src="/logo.png" className="rounded-full" alt="InternLink logo" width={32} height={32} />
              <span className="text-lg font-bold tracking-tight text-slate-900">InternLink</span>
            </Link>
            <p className="text-slate-600 text-sm max-w-xs mb-6 leading-relaxed">
              Connecting East African students with top internship opportunities.
              Built with care in Nairobi, Kenya.
            </p>
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} InternLink by FutureSpace. All rights reserved.
            </p>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="font-bold text-sm text-slate-900 mb-4">{group}</h4>
              <ul className="space-y-3">
                {items.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-slate-600 hover:text-amber-600 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-100 text-xs text-slate-600">
          <p>Made with precision by FutureSpace &amp; KenTom</p>
          <div className="flex gap-5">
            {["Twitter", "LinkedIn", "Instagram"].map((s) => (
              <Link key={s} href="#" className="hover:text-slate-900 transition-colors">{s}</Link>
            ))}
          </div>
        </div>
      </div>

      {/* Massive background text */}
      <div
        className="absolute hidden md:block bottom-[-10%] left-0 w-full text-center font-black text-slate-600/40 pointer-events-none select-none z-0 leading-none tracking-tighter"
        style={{ fontSize: "22vw" }}
        aria-hidden
      >
        InternLink
      </div>
    </footer>
  );
}
