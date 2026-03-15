import Link from "next/link";
import { ArrowRight, MapPin, Building2, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/lib/button-variants";
import { Badge } from "@/components/ui/badge";

const featuredCard = {
  company: "Safaricom PLC",
  role: "Software Engineering Intern",
  location: "Nairobi, Kenya",
  type: "Hybrid",
  duration: "3 months",
  stipend: "KES 25,000/mo",
  tags: ["React", "Node.js", "PostgreSQL"],
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-20 md:py-28">
      {/* Subtle background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full bg-amber-50 opacity-60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Copy */}
          <div className="flex flex-col gap-6">
            <Badge className="w-fit border-amber-200 bg-amber-50 text-amber-700">
              #1 Internship Platform in East Africa
            </Badge>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#0F172A] md:text-5xl lg:text-6xl">
              Connect with Your{" "}
              <span className="text-amber-600">Next Internship</span>{" "}
              Opportunity
            </h1>

            <p className="max-w-lg text-lg text-slate-500">
              InternLink bridges the gap between talented East African students and forward-thinking
              companies. Find the perfect attachment, build real-world skills, and launch your
              career - all in one place.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/register"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700"
                )}
              >
                Find Internships
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/register?role=company"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-slate-200")}
              >
                Post an Internship
              </Link>
            </div>

            {/* Trust strip */}
            <p className="text-sm text-slate-400">
              Trusted by{" "}
              <span className="font-semibold text-slate-600">10,000+ students</span> across{" "}
              <span className="font-semibold text-slate-600">50+ universities</span>
            </p>
          </div>

          {/* Right: Mock internship card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
              {/* Card header */}
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                  <Building2 className="h-6 w-6 text-amber-600" />
                </div>
                <Badge className="border-green-100 bg-green-50 text-green-700 text-xs">
                  Active
                </Badge>
              </div>

              <h3 className="mb-1 font-bold text-[#0F172A]">{featuredCard.role}</h3>
              <p className="mb-3 text-sm font-medium text-amber-600">{featuredCard.company}</p>

              <div className="mb-4 flex flex-col gap-1.5 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {featuredCard.location} · {featuredCard.type}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {featuredCard.duration}
                </span>
              </div>

              <div className="mb-5 flex flex-wrap gap-1.5">
                {featuredCard.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-100 bg-slate-50 px-2.5 py-0.5 text-xs text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                <span className="text-sm font-semibold text-slate-700">
                  {featuredCard.stipend}
                </span>
                <span
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "bg-amber-500 text-white hover:bg-amber-600"
                  )}
                >
                  Apply Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
