import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative isolate min-h-[820px] overflow-hidden border-b border-white/10 px-6 pb-20 pt-28 md:px-10 lg:px-12">
      <Image
        src="/images/ai-portfolio-hero.png"
        alt="Abstract AI systems and data workflow visualization"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center opacity-72"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,19,18,0.98),rgba(16,19,18,0.86)_42%,rgba(16,19,18,0.36)_78%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-ink to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-16">
        <div className="max-w-3xl pt-10">
          <div className="mb-8 inline-flex items-center gap-2 border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/75 shadow-line backdrop-blur">
            <Sparkles size={16} className="text-ember" aria-hidden="true" />
            {profile.motto}
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-signal">
            {profile.tagline}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-none text-paper text-balance md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-white/76">
            {profile.intro}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex min-h-12 items-center justify-center gap-2 bg-paper px-5 text-sm font-bold text-ink transition hover:bg-signal"
            >
              View Projects
              <ArrowUpRight
                size={18}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center border border-white/14 px-5 text-sm font-bold text-paper transition hover:border-ember hover:text-ember"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
          {profile.metrics.map((metric) => (
            <div key={metric.label} className="bg-ink/78 p-5 backdrop-blur">
              <p className="text-2xl font-semibold text-paper">{metric.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/58">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
