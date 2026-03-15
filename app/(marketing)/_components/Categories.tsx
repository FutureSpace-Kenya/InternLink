import Link from "next/link";
import {
  Code2,
  Palette,
  TrendingUp,
  Megaphone,
  Cpu,
  BookOpen,
  Stethoscope,
  Scale,
  BarChart3,
  Building,
} from "lucide-react";

const categories = [
  { label: "Technology", icon: Code2, href: "/internships?category=technology" },
  { label: "Design", icon: Palette, href: "/internships?category=design" },
  { label: "Finance", icon: TrendingUp, href: "/internships?category=finance" },
  { label: "Marketing", icon: Megaphone, href: "/internships?category=marketing" },
  { label: "Engineering", icon: Cpu, href: "/internships?category=engineering" },
  { label: "Education", icon: BookOpen, href: "/internships?category=education" },
  { label: "Healthcare", icon: Stethoscope, href: "/internships?category=healthcare" },
  { label: "Legal", icon: Scale, href: "/internships?category=legal" },
  { label: "Data & Analytics", icon: BarChart3, href: "/internships?category=data" },
  { label: "Business", icon: Building, href: "/internships?category=business" },
];

export default function Categories() {
  return (
    <section className="bg-[#FAFAFA] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] md:text-4xl">Browse by Category</h2>
          <p className="mt-3 text-slate-500">
            Find internships across a wide range of industries
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(({ label, icon: Icon, href }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
