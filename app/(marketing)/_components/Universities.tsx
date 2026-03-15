const universities = [
  "University of Nairobi",
  "Strathmore University",
  "JKUAT",
  "KCA University",
  "Kenyatta University",
  "Moi University",
];

export default function Universities() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 mb-10">
        Trusted by students from Kenya&apos;s top universities
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-5 opacity-30 hover:opacity-60 transition-opacity duration-700 grayscale">
        {universities.map((u) => (
          <span key={u} className="text-sm font-bold text-slate-700 whitespace-nowrap tracking-tight">{u}</span>
        ))}
      </div>
    </section>
  );
}
