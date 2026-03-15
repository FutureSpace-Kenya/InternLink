import { Search, UserCircle, SendHorizonal, Bell, BarChart3, Building2 } from "lucide-react";
import Link from "next/link";
import { Illustration } from "@/components/ui/Illustration";

const features = [
  { id: "01", icon: Search,        title: "Browse Listings",     desc: "Explore hundreds of vetted internship and attachment listings across every industry and location in Kenya." },
  { id: "02", icon: UserCircle,    title: "Build Your Profile",  desc: "Create a standout intern profile with your university, skills, CV, and social links - no password needed." },
  { id: "03", icon: SendHorizonal, title: "Apply in One Click",  desc: "Your profile is your application. Submit to any listing instantly with your saved details and CV." },
  { id: "04", icon: Bell,          title: "Smart Notifications", desc: "Get notified the moment a new internship matching your skills and location is posted on the platform." },
  { id: "05", icon: BarChart3,     title: "Track Applications",  desc: "Monitor your pipeline in real time - from submitted to shortlisted, interview, and accepted." },
  { id: "06", icon: Building2,     title: "Discover Companies",  desc: "Browse company profiles, learn about their culture, and find opportunities that align with your goals." },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-36">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Left: heading + illustration */}
        <div className="flex flex-col">
          <p className="text-amber-500 font-semibold text-sm tracking-wide mb-5">Platform Features</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-6">
            Why{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">
              InternLink?
            </span>
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed mb-10">
            Everything you need to find, apply, and land your perfect internship - built for East African students.
          </p>
          <Link
            href="/internships"
            className="self-start bg-slate-900 hover:bg-slate-700 text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-slate-900/10 mb-16"
          >
            Browse All Listings
          </Link>

          <Illustration
            name="20770087_Sandy_Bus-37_Single-08.svg"
            alt="Platform features"
            className="w-full max-w-sm opacity-90"
            width={500}
            height={400}
          />
        </div>

        {/* Right: feature cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.id}
                className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden group"
              >
                <div className="absolute top-5 right-6 text-6xl font-black text-slate-50 group-hover:text-amber-50 transition-colors select-none pointer-events-none leading-none">
                  {f.id}
                </div>
                <div className="relative z-10">
                  <div className="w-11 h-11 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 tracking-tight">{f.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
