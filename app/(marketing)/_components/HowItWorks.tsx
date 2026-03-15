import { UserPlus, Search, Send } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Profile",
    description:
      "Sign up in seconds using just your email. Complete your intern profile with your university, course, skills, and CV - no password needed.",
  },
  {
    number: "02",
    icon: Search,
    title: "Discover Opportunities",
    description:
      "Browse hundreds of internship listings filtered by category, location, duration, and stipend. Save the ones that interest you.",
  },
  {
    number: "03",
    icon: Send,
    title: "Apply & Get Hired",
    description:
      "Submit your application in one click. Track your status, respond to interview requests, and accept your offer - all on InternLink.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] md:text-4xl">How It Works</h2>
          <p className="mt-3 text-slate-500">Get hired in 3 simple steps</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col items-start gap-4">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute left-[calc(100%+0px)] top-6 hidden h-px w-full bg-amber-100 md:block"
                    style={{ width: "calc(100% - 3rem)", left: "calc(100% - 1.5rem)" }}
                  />
                )}

                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                    <Icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <span className="text-3xl font-black text-amber-100 select-none">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="mb-2 font-bold text-[#0F172A]">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
