import { profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="border-y border-white/10 bg-paper text-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.75fr_1.25fr] md:px-10 lg:px-12">
        <SectionHeading
          eyebrow="About"
          title="Studying the systems behind useful AI products."
          tone="light"
        />

        <div className="space-y-8">
          <p className="max-w-3xl text-2xl font-medium leading-snug text-balance">
            {profile.about}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {profile.focusAreas.map((focus) => (
              <div
                key={focus}
                className="border border-ink/10 bg-white/55 p-5 shadow-[0_20px_60px_rgba(16,19,18,0.08)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/45">
                  Focus
                </p>
                <p className="mt-4 text-lg font-semibold">{focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
