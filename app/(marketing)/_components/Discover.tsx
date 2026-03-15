"use client";

import { Shield, Rocket, History, Smile } from "lucide-react";
import { Illustration } from "@/components/ui/Illustration";

const col1 = [
  { icon: Shield,  label: "Safe & Reliable",       gradientId: "dg1", colors: { from: "rgba(217,119,6,0)", mid: "rgba(217,119,6,0.5)", to: "rgba(217,119,6,0.9)" } },
  { icon: Rocket,  label: "A FutureSpace Product",  gradientId: "dg2", colors: { from: "rgba(74,222,128,0)", mid: "rgba(74,222,128,0.5)", to: "rgba(74,222,128,0.9)" } },
];
const col2 = [
  { icon: History, label: "Time Saving",            gradientId: "dg3", colors: { from: "rgba(74,222,128,0)", mid: "rgba(74,222,128,0.5)", to: "rgba(74,222,128,0.9)" } },
  { icon: Smile,   label: "Free to Use",            gradientId: "dg4", colors: { from: "rgba(217,119,6,0)", mid: "rgba(217,119,6,0.5)", to: "rgba(217,119,6,0.9)" } },
];

function Badge({
  icon: Icon, label, gradientId, colors,
}: {
  icon: React.ElementType; label: string; gradientId: string;
  colors: { from: string; mid: string; to: string };
}) {
  return (
    <div className="relative flex flex-col items-center gap-3">
      <div className="relative w-24 h-24">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 96 96">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="5%"   style={{ stopColor: colors.from, stopOpacity: 0 }} />
              <stop offset="70%"  style={{ stopColor: colors.mid,  stopOpacity: 0.6 }} />
              <stop offset="100%" style={{ stopColor: colors.to,   stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="48" cy="48" r="44" stroke={`url(#${gradientId})`} strokeWidth="3" fill="transparent" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-8 h-8 text-slate-700" />
        </div>
      </div>
      <span className="text-sm font-semibold text-slate-600 text-center leading-tight max-w-[80px]">{label}</span>
    </div>
  );
}

export default function Discover() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-36">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        {/* Left: text */}
        <div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-6">
            Discover{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">
              InternLink
            </span>
            &trade;
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed mb-12">
            InternLink aims to streamline the journey for students to secure internships and attachments.
            We also empowers employers to effortlessly discover and recruit top talent. With InternLink, connecting the potential of tomorrow with the
            innovations of today just got easier.
          </p>
        </div>

        {/* Right: illustration */}
        <div className="flex justify-center">
          {/* Badge grid */}
          <div className="flex items-start gap-12">
            <div className="flex flex-col gap-12 mt-10">
              {col1.map((b) => <Badge key={b.gradientId} {...b} />)}
            </div>
            <div className="flex flex-col gap-12 sm:-mt-6">
              {col2.map((b) => <Badge key={b.gradientId} {...b} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
