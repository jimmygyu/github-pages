import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="border-y border-ink/10 bg-paper px-6 py-20 text-ink md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <SectionHeading
            eyebrow="Skills"
            title="A builder stack for AI products, data tools, and automation."
            tone="light"
          />
          <p className="max-w-2xl leading-8 text-ink/65 md:justify-self-end">
            The categories are intentionally practical: model behavior,
            retrieval, analysis, interfaces, and the everyday tooling needed to
            move from prototype to product.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.category} className="border border-ink/10 bg-white/60 p-5">
              <div className="flex min-h-16 items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{group.category}</h3>
                <span className="h-2 w-10 bg-ember" aria-hidden="true" />
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="border border-ink/10 bg-paper px-3 py-1.5 text-sm font-semibold text-ink/72"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
