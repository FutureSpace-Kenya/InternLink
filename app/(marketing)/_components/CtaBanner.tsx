import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/lib/button-variants";

export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
          Start Your Journey Today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-amber-100">
          Join thousands of students and companies already building careers and teams on InternLink.
          It&apos;s free to get started.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/register"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-white text-amber-600 hover:bg-amber-50 font-semibold"
            )}
          >
            Create Your Profile
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/register?role=company"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-white text-white hover:bg-amber-700 hover:border-amber-700"
            )}
          >
            Post an Internship
          </Link>
        </div>
      </div>
    </section>
  );
}
