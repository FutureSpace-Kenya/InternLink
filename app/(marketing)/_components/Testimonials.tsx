import { Star } from "lucide-react";

const reviews = [
  { name: "Amina Odhiambo",  role: "BSc Computer Science, UoN",              initials: "AO", text: "InternLink made finding my attachment so much easier. I landed a paid internship at a tech startup in Nairobi within two weeks. Completely seamless." },
  { name: "Brian Kamau",     role: "BSc Information Technology, Strathmore",  initials: "BK", text: "I applied to five companies and got three interview calls in the first week. The one-click apply feature is a game changer for students." },
  { name: "Carol Wanjiku",   role: "BSc Software Engineering, JKUAT",         initials: "CW", text: "The profile builder is super easy. I uploaded my CV, filled in my skills, and my profile was ready in minutes. Already got two internship offers." },
  { name: "David Kariuki",   role: "HR Manager, Twiga Foods",                 initials: "DK", text: "We've sourced 12 interns through InternLink this year alone. The candidate quality is consistently high, and the dashboard makes shortlisting effortless." },
  { name: "Grace Muthoni",   role: "Talent Lead, Cellulant",                  initials: "GM", text: "InternLink has become our go-to platform for intern recruitment. The students are motivated and come prepared. We couldn't ask for a better pipeline." },
  { name: "Peter Otieno",    role: "BSc Finance, KCA University",              initials: "PO", text: "Secured a Finance internship at Equity Bank straight out of my second year. Highly recommend InternLink to all students — it actually works." },
  { name: "Sharon Achieng",  role: "BSc Communication, Daystar University",   initials: "SA", text: "I was skeptical at first, but within days I had interview invitations from three companies. InternLink is genuinely the easiest way to find an attachment." },
  { name: "Kevin Njoroge",   role: "Talent Acquisition, Safaricom",           initials: "KN", text: "The quality of interns from InternLink is remarkable. They arrive with relevant skills and hit the ground running. We hire from here every intake." },
];

function Card({ r }: { r: typeof reviews[number] }) {
  return (
    <div className="w-80 shrink-0 bg-canvas p-7 rounded-3xl border border-slate-500/20 flex flex-col gap-4 mx-3">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
        ))}
      </div>
      <p className="text-ink/70 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
      <div className="flex items-center gap-3 pt-4 border-t border-ink/10">
        <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, var(--color-brand), var(--color-gold))" }}>
          <span className="text-[10px] font-bold text-surface">{r.initials}</span>
        </div>
        <div>
          <p className="text-sm font-bold text-ink">{r.name}</p>
          <p className="text-xs text-ink/60">{r.role}</p>
        </div>
      </div>
    </div>
  );
}

const row1 = reviews.slice(0, 5);
const row2 = reviews.slice(3);

export default function Testimonials() {
  return (
    <section className="py-36 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-ink mb-5">
          Loved by{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, var(--color-brand), var(--color-gold))" }}>
            thousands
          </span>
        </h2>
        <div className="flex justify-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-gold text-gold" />
          ))}
        </div>
        <p className="text-ink/60 text-base">Based on 3,000+ reviews across students and companies</p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative flex mb-5">
        <div className="flex" style={{ animation: "marquee-left 40s linear infinite" }}>
          {[...row1, ...row1, ...row1].map((r, i) => (
            <Card key={`r1-${i}`} r={r} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative flex">
        <div className="flex" style={{ animation: "marquee-right 35s linear infinite" }}>
          {[...row2, ...row2, ...row2].map((r, i) => (
            <Card key={`r2-${i}`} r={r} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
