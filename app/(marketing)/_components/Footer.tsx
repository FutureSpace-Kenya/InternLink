import Link from "next/link";

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
    <footer className="pt-20 pb-10 px-6 border-t border-ink/10 bg-surface relative overflow-hidden">
      <div className="max-w-7xl md:mb-44 mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img src="/logo.png" className="rounded-full" alt="InternLink logo" width={32} height={32} />
              <span className="text-lg font-bold tracking-tight text-ink">InternLink</span>
            </Link>
            <p className="text-ink/70 text-sm max-w-xs mb-6 leading-relaxed">
              Connecting East African students with top internship opportunities.
              Built with care in Nairobi, Kenya.
            </p>
            <p className="text-xs text-ink/50">
              © {new Date().getFullYear()} InternLink by FutureSpace. All rights reserved.
            </p>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="font-bold text-sm text-ink mb-4">{group}</h4>
              <ul className="space-y-3">
                {items.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-ink/60 hover:text-brand transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-ink/10 text-xs text-ink/50">
          <p>Made with precision by FutureSpace &amp; KenTom</p>
          <div className="flex gap-5">
            {["Twitter", "LinkedIn", "Instagram"].map((s) => (
              <Link key={s} href="#" className="hover:text-ink transition-colors">{s}</Link>
            ))}
          </div>
        </div>
      </div>

      {/* Massive background text */}
      <div
        className="absolute hidden md:block bottom-[-6%] left-0 w-full text-center font-black pointer-events-none select-none z-0 leading-none tracking-tighter text-ink/5"
        style={{ fontSize: "22vw" }}
        aria-hidden
      >
        <img className="px-3 opacity-70" src="/internlink_text_logo.png" alt=""/>
      </div>
    </footer>
  );
}
