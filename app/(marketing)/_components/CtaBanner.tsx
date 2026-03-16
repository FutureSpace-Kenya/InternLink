import Link from "next/link";
import { Illustration } from "@/components/ui/Illustration";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden border-t border-slate-500/20 bg-canvas">
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, rgba(35,83,71,0.04))" }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-t-full blur-3xl pointer-events-none" style={{ backgroundColor: "rgba(201,162,39,0.08)" }} />

      <div className="max-w-7xl mx-auto px-6 py-36">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: copy */}
          <div className="relative z-10">
            {/* Social proof */}
            <div className="inline-flex items-center gap-3 px-4 py-2 border-y border-slate-500/20 mb-10">
              <span className="flex -space-x-2">
                {["KO", "AM", "BK"].map((i) => (
                  <span key={i} className="w-6 h-6 rounded-full border-2 border-surface text-[9px] font-bold flex items-center justify-center" style={{ backgroundColor: "var(--color-brand-50)", color: "var(--color-brand)" }}>
                    {i}
                  </span>
                ))}
              </span>
              <span className="text-sm font-medium text-ink/60">Join 10,000+ students today</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.05] mb-6">
              Ready to{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, var(--color-brand), var(--color-gold))" }}>
                get started?
              </span>
            </h2>
            <p className="text-ink/70 text-xl leading-relaxed mb-12 max-w-lg">
              Create your profile in minutes and start applying to internships across Kenya - completely free.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/register"
                className="bg-brand hover:bg-brand-light text-surface px-10 py-4 rounded-full font-semibold text-base transition-colors"
                style={{ boxShadow: "0 20px 40px rgba(35,83,71,0.18)" }}
              >
                Create Your Profile
              </Link>
              <Link
                href="/register?role=company"
                className="bg-canvas border border-ink/15 text-ink/70 hover:text-ink hover:bg-surface px-10 py-4 rounded-full font-semibold text-base transition-colors"
              >
                Post an Internship
              </Link>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="flex justify-center lg:justify-end relative z-10">
            <Illustration
              name="20891899_Sandy_Ppl-07_Single-05"
              alt="Get started with InternLink"
              className="w-full max-w-md"
              width={560}
              height={480}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
