const stats = [
  { value: "500+", label: "Companies" },
  { value: "10,000+", label: "Students" },
  { value: "2,500+", label: "Placements" },
  { value: "50+", label: "Universities" },
];

export default function Stats() {
  return (
    <section className="border-y border-gray-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="text-3xl font-extrabold text-amber-600">{stat.value}</span>
              <span className="mt-1 text-sm text-slate-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
