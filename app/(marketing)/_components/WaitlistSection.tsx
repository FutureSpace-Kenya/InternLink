import WaitlistForm from "./WaitlistForm";
import { Clock, Zap, Shield, GraduationCap, Building } from "lucide-react";

const perks = [
  {
    icon: Zap,
    title: "Early Access",
    desc: "Be first to explore every feature the moment we launch.",
  },
  {
    icon: Shield,
    title: "OG Status",
    desc: "First 100 sign-ups get permanent OG early-adopter perks.",
  },
  {
    icon: Clock,
    title: "Priority Matching",
    desc: "Jump the queue - your profile gets seen by companies first.",
  },
];

export default function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="relative overflow-hidden border-t border-slate-500/10"
      style={{ background: "linear-gradient(160deg, var(--color-brand-50) 0%, var(--color-canvas) 60%)" }}
    >
      {/* Background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] -z-10"
        style={{ background: "radial-gradient(ellipse, rgba(201,162,39,0.07) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] -z-10"
        style={{ background: "radial-gradient(ellipse, rgba(35,83,71,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-28">
        {/* Top label */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 border-y mb-6"
            style={{ borderColor: "rgba(201,162,39,0.4)" }}
          >
            <span className="relative flex w-2 h-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: "var(--color-gold)" }}
              />
              <span className="relative inline-flex rounded-full w-2 h-2" style={{ backgroundColor: "var(--color-gold)" }} />
            </span>
            <span className="text-sm font-semibold" style={{ color: "var(--color-gold)" }}>
              We&apos;re launching soon - waitlist is open
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.05] mb-4">
            Secure your spot{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, var(--color-brand), var(--color-gold))" }}
            >
              before we launch
            </span>
          </h2>
          <p className="text-ink/65 text-lg max-w-xl mx-auto">
            InternLink is still in the works. Join the waitlist today - for students, interns, and organisations alike.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: perks */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              {perks.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="flex items-start gap-5">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "var(--color-brand-50)", color: "var(--color-brand)" }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-ink text-base mb-0.5">{p.title}</p>
                      <p className="text-ink/60 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Who can join callout */}
            <div className="rounded-2xl border border-slate-200 bg-canvas p-6 space-y-3">
              <p className="text-xs font-bold text-ink/50 uppercase tracking-wider">Who can join</p>
              {[
                { icon: GraduationCap, label: "Students & Interns", desc: "Looking for internship or attachment opportunities" },
                { icon: Building, label: "Organisations & Companies", desc: "Want to post listings and find top talent" },
              ].map((w) => {
                const Icon = w.icon;
                return (
                  <div key={w.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-slate-100 text-slate-500 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">{w.label}</p>
                      <p className="text-xs text-ink/55">{w.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: form */}
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
