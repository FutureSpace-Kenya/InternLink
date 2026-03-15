import Link from "next/link";
import { Illustration } from "@/components/ui/Illustration";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden border-t border-slate-100 bg-[#fafbfc]">
      {/* Glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-50/50 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-400/10 rounded-t-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-36">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: copy */}
          <div className="relative z-10">
            {/* Social proof */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-10">
              <span className="flex -space-x-2">
                {["KO", "AM", "BK"].map((i) => (
                  <span key={i} className="w-6 h-6 rounded-full border-2 border-white bg-amber-100 text-amber-700 text-[9px] font-bold flex items-center justify-center">
                    {i}
                  </span>
                ))}
              </span>
              <span className="text-sm font-medium text-slate-600">Join 10,000+ students today</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-6">
              Ready to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">
                get started?
              </span>
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed mb-12 max-w-lg">
              Create your profile in minutes and start applying to internships across Kenya - completely free.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/register"
                className="bg-slate-900 hover:bg-slate-700 text-white px-10 py-4 rounded-full font-semibold text-base transition-colors shadow-xl shadow-slate-900/10"
              >
                Create Your Profile
              </Link>
              <Link
                href="/register?role=company"
                className="bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 px-10 py-4 rounded-full font-semibold text-base transition-colors shadow-sm"
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
