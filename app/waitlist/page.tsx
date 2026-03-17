"use client";

import { ArrowRight, Briefcase, GraduationCap, Building2, CheckCircle2 } from "lucide-react";
import WaitlistForm from "@/app/(marketing)/_components/WaitlistForm";

// Client components cannot export metadata natively. 
// We optionally should wrap this in a server layout if metadata is strict, 
// but for now we focus on the client interactivity.

const features = [
  {
    title: "For Students",
    desc: "Create a rich profile highlighting your skills, coursework, and projects. Get matched with internships and attachments that fit your career goals.",
    icon: GraduationCap,
    points: ["Automated matching", "Verified opportunities", "Application tracking"],
  },
  {
    title: "For Companies",
    desc: "Post opportunities and discover vetted, emerging talent from top universities across Kenya without the usual hiring friction.",
    icon: Building2,
    points: ["Streamlined hiring", "Access to top talent", "Built for East Africa"],
  },
];

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-canvas selection:bg-brand/20 selection:text-brand-dark flex flex-col font-sans">
      {/* ─── NAVBAR ─── */}
      <header className="top-0 inset-x-0 z-50 bg-canvas/80 backdrop-blur-md border-b border-ink/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" className="rounded-full" alt="InternLink logo" width={32} height={32} />
            <span className="text-lg font-bold tracking-tight text-ink">InternLink</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="flex w-2 h-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex rounded-full w-2 h-2 bg-gold" />
            </span>
            <span className="text-xs font-semibold text-ink/60 uppercase tracking-widest">Launching soon</span>
          </div>
        </nav>
      </header>

      {/* ─── HERO SECTION ─── */}
      {/* "Minimum head screen" style — hero takes up roughly viewport height, very clean */}
      <main className="flex-1 pt-6">
        <section className="relative min-h-[calc(100vh-6rem)] flex items-center py-12 overflow-hidden">
          {/* Subtle minimal glows */}
          <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] -z-10" style={{ background: "radial-gradient(ellipse, rgba(201,162,39,0.04) 0%, transparent 70%)" }} />
          <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] -z-10" style={{ background: "radial-gradient(ellipse, rgba(35,83,71,0.04) 0%, transparent 70%)" }} />

          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* Left: Clean, minimal copy */}
              <div className="flex flex-col max-w-xl">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 border-y border-ink/10 mb-8 backdrop-blur-sm self-start">
                  <span className="text-sm font-medium text-ink/70">
                    Be the first to know when we go live.
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-ink leading-[1.08] mb-6">
                  The bridge between{" "}
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, var(--color-brand), var(--color-gold))" }}>
                    campus and career.
                  </span>
                </h1>

                <p className="text-ink/65 text-lg leading-relaxed mb-10">
                  InternLink is Kenya&apos;s upcoming platform connecting ambitious students with top companies for internships and attachments. We are launching later this year. Secure your spot on the waitlist today.
                </p>

                <div className="flex items-center gap-6 text-sm font-medium text-ink/60">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                    <span>Early Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                    <span>OG Status</span>
                  </div>
                </div>
              </div>

              {/* Right: The Waitlist Form */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="absolute -inset-4 bg-brand/5 rounded-[40px] blur-xl -z-10" />
                <WaitlistForm />
              </div>

            </div>
          </div>
        </section>

        {/* ─── ABOUT THE PROJECT ─── */}
        <section className="py-32 bg-white border-t border-ink/5 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center">
              <div className="w-12 h-12 bg-surface rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-ink/5 text-brand">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">
                Redefining early career talent.
              </h2>
              <p className="text-ink/65 text-lg leading-relaxed">
                Finding the right attachment or internship shouldn&apos;t be purely about who you know. We are building a transparent, unified platform for East Africa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.title} className="p-8 rounded-3xl bg-canvas border border-ink/5 hover:border-ink/10 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-6">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-ink mb-3">{feat.title}</h3>
                    <p className="text-ink/65 leading-relaxed mb-8">{feat.desc}</p>
                    <ul className="space-y-3">
                      {feat.points.map((point) => (
                        <li key={point} className="flex items-center gap-3 text-sm text-ink/70 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── BOTTOM CTA ─── */}
        <section className="py-24 bg-canvas text-center border-t border-ink/5">
          <div className="max-w-3xl mx-auto px-6 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-ink tracking-tight mb-4">
              Don&apos;t miss launch day.
            </h2>
            <p className="text-ink/60 mb-8 max-w-md mx-auto">
              Join thousands of students and hundreds of companies already waiting for InternLink.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-ink text-surface px-8 py-3.5 rounded-full font-semibold hover:bg-ink-light transition-transform hover:-translate-y-0.5"
            >
              Scroll up to join <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 border-t border-ink/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" className="rounded-full grayscale opacity-70" alt="InternLink logo" width={24} height={24} />
            <span className="text-sm font-semibold text-ink/50">InternLink by FutureSpace</span>
          </div>
          <p className="text-sm text-ink/40">
            © {new Date().getFullYear()} All rights reserved. Launching later this year.
          </p>
        </div>
      </footer>
    </div>
  );
}
