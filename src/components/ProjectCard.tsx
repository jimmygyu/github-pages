import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex min-h-[330px] flex-col justify-between border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-signal/55 hover:bg-white/[0.07]">
      <div>
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember">
            {project.type}
          </p>
          <span className="grid size-10 shrink-0 place-items-center border border-white/10 text-white/45 transition group-hover:border-signal/60 group-hover:text-signal">
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-paper text-balance">
          {project.title}
        </h3>
        <p className="mt-4 leading-7 text-white/64">{project.description}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="border border-white/10 bg-ink/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/62"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
