import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "InternLink made finding my attachment so much easier. I applied to 5 companies and landed a paid internship at a tech startup in Nairobi within two weeks. The process was smooth and transparent.",
    name: "Amina Odhiambo",
    role: "BSc Computer Science, University of Nairobi",
    type: "Student",
    initials: "AO",
  },
  {
    quote:
      "We've sourced 12 interns through InternLink in the past year. The quality of candidates is exceptional - they come prepared, motivated, and their profiles give us everything we need to shortlist quickly.",
    name: "David Kariuki",
    role: "HR Manager, Twiga Foods",
    type: "Company",
    initials: "DK",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] md:text-4xl">What People Say</h2>
          <p className="mt-3 text-slate-500">
            Real stories from students and companies who use InternLink
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-[#FAFAFA] p-8"
            >
              <Quote className="h-8 w-8 text-amber-200" />
              <p className="text-slate-600 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
