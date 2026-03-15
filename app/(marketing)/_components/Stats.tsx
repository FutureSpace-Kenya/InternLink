const stats = [
  { value: "10,000+", label: "Students Registered" },
  { value: "500+",    label: "Partner Companies" },
  { value: "2,500+",  label: "Successful Placements" },
  { value: "50+",     label: "Universities" },
];

export default function Stats() {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5">
              <div className="text-4xl font-bold tracking-tight text-slate-900">{s.value}</div>
              <div className="text-sm font-medium text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
