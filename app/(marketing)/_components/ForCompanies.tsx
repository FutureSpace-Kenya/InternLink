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
          <div className="absolute bottom-4 -right-4 lg:-right-10 bg-white border border-slate-100 shadow-md rounded-2xl p-5 w-64">
            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-4">Pipeline Overview</p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { label: "Applied", value: "48", bg: "bg-slate-50" },
                { label: "Shortlisted", value: "12", bg: "bg-amber-50" },
                { label: "Interview", value: "4", bg: "bg-blue-50" },
              ].map((s) => (
                <div key={s.label} className={`${s.bg} rounded-xl p-2.5 text-center`}>
                  <p className="text-lg font-bold text-slate-900">{s.value}</p>
                  <p className="text-[9px] text-slate-600 font-medium leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 p-2.5 bg-emerald-50 rounded-xl">
              <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0" />
              <p className="text-xs text-slate-600 font-medium">
                <span className="text-emerald-600 font-bold">+23%</span> vs last posting
              </p>
            </div>
          </div>
        </div>

        {/* Right: copy */}
        <div className="order-1 lg:order-2">
          <p className="text-slate-600 font-semibold text-sm tracking-wide mb-5">For Companies</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-6">
            Hire the best<br />student talent,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">
              faster.
            </span>
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed mb-10 max-w-lg">
            Post internship listings, receive verified applications from motivated students,
            and manage your entire recruitment pipeline - all from one simple dashboard.
          </p>
          <ul className="space-y-5 mb-12">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-4 text-base font-medium text-slate-700">
                <div className="mt-0.5 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
                </div>
                {b}
              </li>
            ))}
          </ul>
          <Link
            href="/register?role=company"
            className="inline-block bg-slate-900 hover:bg-slate-700 text-white text-base font-semibold px-10 py-4 rounded-full transition-colors shadow-xl shadow-slate-900/10"
          >
            Post an Internship
          </Link>
        </div>
      </div>
    </section>
  );
}
