import { GraduationCap, Building2, CheckCircle2 } from "lucide-react";

const studentBenefits = [
  "Browse 500+ active internship listings",
  "Apply with one click using your saved profile",
  "Track application status in real time",
  "Get notified of new listings matching your skills",
  "Build a public intern portfolio",
];

const companyBenefits = [
  "Post internship listings for free",
  "Access a verified pool of student talent",
  "Manage applications from one dashboard",
  "Shortlist, interview, and hire seamlessly",
  "Build your employer brand among students",
];

export default function ForWho() {
  return (
    <section className="bg-[#FAFAFA] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] md:text-4xl">
            Built for Students & Companies
          </h2>
          <p className="mt-3 text-slate-500">
            Whether you are looking for an internship or the next great hire — InternLink works for
            you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* For Students */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
              <GraduationCap className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-[#0F172A]">For Students</h3>
            <p className="mb-6 text-slate-500">
              Find internship and attachment opportunities that match your course, skills, and
              location. Apply in minutes, not hours.
            </p>
            <ul className="flex flex-col gap-3">
              {studentBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* For Companies */}
          <div className="rounded-2xl border border-amber-100 bg-amber-50/40 p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-200">
              <Building2 className="h-6 w-6 text-amber-700" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-[#0F172A]">For Companies</h3>
            <p className="mb-6 text-slate-500">
              Attract motivated interns from top universities across Kenya. Manage your pipeline
              from posting to placement.
            </p>
            <ul className="flex flex-col gap-3">
              {companyBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
