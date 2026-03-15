import Link from "next/link";
import { CheckCircle2, TrendingUp } from "lucide-react";
import { Illustration } from "@/components/ui/Illustration";

const benefits = [
  "Post internships for free in under 5 minutes",
  "Access a verified pool of student talent",
  "Manage your entire pipeline in one dashboard",
];

export default function ForCompanies() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-36">
      <div className="grid lg:grid-cols-2 gap-24 items-center">

        {/* Left: illustration + floating card */}
        <div className="relative order-2 lg:order-1">
          <Illustration
            name="20770335_Sandy_Edu-05_Single-10.svg"
            alt="Company hiring dashboard"
            className="w-full max-w-md mx-auto"
            width={560}
            height={480}
          />

          {/* Floating stats card */}
          <div className="absolute bottom-4 -right-4 lg:-right-10 bg-canvas backdrop-blur-3xl border border-slate-500/20 rounded-2xl w-64">
            <p className="text-xs pt-5 px-5 font-semibold text-ink/60 uppercase tracking-wider mb-4">Pipeline Overview</p>
            <div className="grid grid-cols-3 mb-4">
              {[
                { label: "Applied",     value: "48", bg: "var(--color-canvas)" },
                { label: "Shortlisted", value: "12", bg: "var(--color-gold-50)" },
                { label: "Interview",   value: "4",  bg: "var(--color-brand-50)" },
              ].map((s) => (
                <div key={s.label} className={`p-2.5 text-center flex flex-col items-center justify-center  ${s.value === "12" ? "px-5 border-x border-slate-500/20" : ""}`}>
                  <p className="text-lg font-bold text-ink">{s.value}</p>
                  <p className="text-[9px] text-ink/60 font-medium leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex mb-5 mx-5 items-center gap-2 p-2.5 rounded-xl" style={{ backgroundColor: "var(--color-brand-50)" }}>
              <TrendingUp className="w-4 h-4 shrink-0" style={{ color: "var(--color-brand)" }} />
              <p className="text-xs text-ink font-medium">
                <span className="font-bold" style={{ color: "var(--color-brand)" }}>+23%</span> vs last posting
              </p>
            </div>
          </div>
        </div>

        {/* Right: copy */}
        <div className="order-1 lg:order-2">
          <p className="text-ink/60 font-semibold text-sm tracking-wide mb-5">For Companies</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.05] mb-6">
            Hire the best<br />student talent,{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, var(--color-brand), var(--color-gold))" }}>
              faster.
            </span>
          </h2>
          <p className="text-ink/70 text-xl leading-relaxed mb-10 max-w-lg">
            Post internship listings, receive verified applications from motivated students,
            and manage your entire recruitment pipeline - all from one simple dashboard.
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
            href="/register?role=company"
            className="inline-block bg-brand hover:bg-brand-light text-surface text-base font-semibold px-10 py-4 rounded-full transition-colors"
            style={{ boxShadow: "0 10px 30px rgba(35,83,71,0.15)" }}
          >
            Post an Internship
          </Link>
        </div>
      </div>
    </section>
  );
}
