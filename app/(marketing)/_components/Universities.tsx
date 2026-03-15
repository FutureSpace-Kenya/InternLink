import Image from "next/image";

const partners = [
  { src: "/svgs/partners/kenyatta-university-logo-png_seeklogo-361756.png", alt: "Kenyatta University" },
  { src: "/svgs/partners/KCA_University_idBv75XH5f_0.png",                 alt: "KCA University" },
  { src: "/svgs/partners/SAF-MAIN-LOGO.png",                               alt: "Safaricom PLC" },
  { src: "/svgs/partners/kcb bank.jpg",                                    alt: "KCB Bank" },
  { src: "/svgs/partners/id7_aQmRb__logos.png",                            alt: "Moi University" },
  { src: "/svgs/partners/idN8y8tYLC_logos.png",                            alt: "University Of Nairobi" },
  { src: "/svgs/partners/nirudishie.png",                                  alt: "Nirudishie.com" },
  { src: "/svgs/partners/idxODftGOY_1773578757545.png",                    alt: "Strathmore University" },
  { src: "/svgs/partners/pngwing.com.png",                                 alt: "Jomo Kenyatta University" },
];

export default function Universities() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-4">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink/40 mb-12">
        Trusted by top institutions in kenya
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8">
        {partners.map((p) => (
          <div key={p.src} className="h-10 flex items-center justify-center">
            <Image
              src={p.src}
              alt={p.alt}
              width={200}
              height={50}
              className="h-14 w-auto cursor-pointer object-contain grayscale opacity-40 hover:opacity-70 hover:grayscale-0 transition-all duration-300"
              unoptimized
            />
          </div>
        ))}
      </div>
    </section>
  );
}
