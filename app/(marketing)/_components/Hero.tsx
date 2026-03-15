import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { Illustration } from "@/components/ui/Illustration";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fafbfc]">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-to-b from-amber-100/70 to-orange-50/20 rounded-full blur-[140px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col items-start">
            {/* Social proof pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-none border-y border-slate-200 mb-10">
              <span className="flex -space-x-2">
                {["KO", "AM", "TM"].map((initials, i) => (
                  <span
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-white bg-amber-100 text-amber-700 text-[9px] font-bold flex items-center justify-center"
                  >
                    {initials}
                  </span>
                ))}
              </span>
              <span className="text-sm font-medium text-slate-500">Join 10,000+ students</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.04] mb-8 text-slate-900">
              Find Your<br />
              Next{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">
                Internship
              </span>
            </h1>

            <p className="text-slate-600 text-xl leading-relaxed mb-12 max-w-lg">
              InternLink connects students with top companies for
              internship and attachment opportunities - all in one place.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/register"
                className="bg-slate-900 hover:bg-slate-700 text-white px-10 py-4 rounded-full font-semibold text-base transition-colors shadow-xl shadow-slate-900/10 flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/internships"
                className="bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-10 py-4 rounded-full font-semibold text-base transition-colors shadow-sm"
              >
                Browse Listings
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-semibold text-slate-500">500+ live listings right now</span>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <Illustration
              name="20770326_Sandy_Edu-05_Single-08"
              alt="Student finding internship"
              className="w-full max-w-lg"
              width={600}
              height={500}
            />

            {/* Floating badge - company match */}
            <div className="absolute bottom-10 -left-2 lg:-left-8 bg-white border border-slate-100 shadow-xl rounded-full pr-4 p-2">
              <div className="relative">
                <p className="text-xs absolute -top-0 right-1 text-slate-400 mb-1 font-medium">Latest match</p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <Building2 className="w-7 h-7 text-amber-600" />
                  </div>
                  <span className="text-sm -mb-2 font-bold text-slate-800 whitespace-nowrap">Safaricom PLC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
