import { projects } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="bg-ink px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <SectionHeading
            eyebrow="Projects"
            title="Practical AI and data products, built as systems."
          />
          <p className="max-w-2xl leading-8 text-white/64 md:justify-self-end">
            Each project is stored in the portfolio data file, so adding a new
            project later is a small data update instead of a layout rewrite.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
