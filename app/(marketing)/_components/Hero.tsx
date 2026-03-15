import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { Illustration } from "@/components/ui/Illustration";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] rounded-full blur-[140px] -z-10"
        style={{ background: "radial-gradient(ellipse, rgba(35,83,71,0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-none border-y border-ink/30 mb-10">
              <span className="flex -space-x-2">
                {["KO", "AM", "TM"].map((initials, i) => (
                  <span
                    key={i}
                    className="w-6 h-6 rounded-full border-1 border-ink/30 text-[9px] font-bold flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-brand-50)", color: "var(--color-brand)" }}
                  >
                    {initials}
                  </span>
                ))}
              </span>
              <span className="text-sm font-medium text-ink/60">Join 10,000+ students</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.04] mb-8 text-ink">
              Find Your<br />
              Next{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, var(--color-brand), var(--color-gold))" }}>
                Internship
              </span>
            </h1>

            <p className="text-ink/70 text-xl leading-relaxed mb-12 max-w-lg">
              InternLink connects students with top companies for
              internship and attachment opportunities - all in one place.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/register"
                className="bg-brand hover:bg-brand-light text-surface px-10 py-4 rounded-full font-semibold text-base transition-colors flex items-center gap-2"
                style={{ boxShadow: "0 20px 40px rgba(35,83,71,0.18)" }}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/internships"
                className="bg-canvas border border-ink/15 text-ink/70 hover:text-ink hover:bg-surface px-10 py-4 rounded-full font-semibold text-base transition-colors"
              >
                Browse Listings
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--color-gold)" }} />
              <span className="text-sm font-semibold text-ink/60">500+ live listings right now</span>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <Illustration
              name="20770326_Sandy_Edu-05_Single-08"
              alt="Student finding internship"
              className="w-full max-w-lg"
              width={600}
              height={500}
            />

            <div className="absolute bottom-10 -left-2 lg:-left-8 bg-canvas border border-slate-500/20 rounded-full pr-4 p-2">
              <div className="relative">
                <p className="text-xs absolute -top-0 right-1 text-ink/50 mb-1 font-medium">Latest match</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-brand-50)" }}>
                    <Building2 className="w-7 h-7" style={{ color: "var(--color-brand)" }} />
                  </div>
                  <span className="text-sm -mb-2 font-bold text-ink whitespace-nowrap">Safaricom PLC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
