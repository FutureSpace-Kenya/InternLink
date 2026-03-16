import Link from "next/link";
import { ArrowRight, CheckCircle2, Briefcase } from "lucide-react";
import { Illustration } from "@/components/ui/Illustration";

const benefits = [
  "One-click applications using your saved profile",
  "Real-time application status tracking",
  "Personalised listing recommendations",
];

export default function ForStudents() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-36">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        {/* Left: copy */}
        <div>
          <p className="text-gold font-semibold text-sm tracking-wide mb-5">For Students</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.05] mb-6">
            Launch your career<br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, var(--color-brand), var(--color-gold))" }}>
              the smart way
            </span>
          </h2>
          <p className="text-ink/70 text-xl leading-relaxed mb-10 max-w-lg">
            Create your intern profile once and apply to hundreds of opportunities
            in minutes. No cover letter templates, no long forms - just you and the role.
          </p>
          <ul className="space-y-5 mb-12">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-4 text-base font-medium text-ink">
                <div className="mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-brand-50)" }}>
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "var(--color-brand)" }} />
                </div>
                {b}
              </li>
            ))}
          </ul>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 font-bold text-base hover:gap-3 transition-all group text-brand"
          >
            Create your profile{" "}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Right: illustration + floating card */}
        <div className="relative">
          <Illustration
            name="20891821_Sandy_Ppl-02_Single-08.svg"
            alt="Student applying for internship"
            className="w-full max-w-md mx-auto"
            width={560}
            height={480}
          />

          {/* Floating application tracker */}
          <div className="absolute bottom-4 -left-4 lg:-left-10 border backdrop-blur-md bg-canvas border-slate-500/20 rounded-2xl p-5 w-64">
            <p className="text-xs font-semibold text-ink/60 uppercase tracking-wider mb-4">My Applications</p>
            {[
              { role: "Software Intern", company: "Safaricom", status: "Interview", color: "brand" },
              { role: "Finance Intern", company: "Equity Bank", status: "Shortlisted", color: "gold" },
              { role: "Data Intern", company: "Twiga Foods", status: "Pending", color: "muted" },
            ].map((app) => (
              <div key={app.role} className="flex items-center gap-3 py-2.5 border-b border-ink/10 last:border-0">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-brand-50)" }}>
                  <Briefcase className="w-3.5 h-3.5" style={{ color: "var(--color-brand)" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-ink truncate">{app.role}</p>
                  <p className="text-[11px] text-ink/60">{app.company}</p>
                </div>
                <span
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0"
                  style={
                    app.color === "brand" ? { backgroundColor: "var(--color-brand-50)", color: "var(--color-brand)" } :
                      app.color === "gold" ? { backgroundColor: "var(--color-gold-50)", color: "var(--color-gold)" } :
                        { backgroundColor: "#f1f3f2", color: "var(--color-ink)", opacity: 0.6 }
                  }
                >
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
