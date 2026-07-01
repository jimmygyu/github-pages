import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { contactLinks } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const icons = {
  GitHub: Github,
  Email: Mail,
  LinkedIn: Linkedin,
};

export function Contact() {
  return (
    <section id="contact" className="bg-ink px-6 py-20 md:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Contact"
          title="Open to building, learning, and shipping with ambitious teams."
        />

        <div className="grid min-w-0 gap-3">
          {contactLinks.map((link) => {
            const Icon = icons[link.label];

            return (
              <a
                key={link.label}
                href={link.href}
                className="group flex min-h-20 min-w-0 items-center justify-between border border-white/10 bg-white/[0.04] px-5 transition hover:border-signal/60 hover:bg-white/[0.07]"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center border border-white/10 bg-paper text-ink">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm uppercase tracking-[0.2em] text-white/45">
                      {link.label}
                    </span>
                    <span className="mt-1 block min-w-0 break-all text-lg font-semibold">
                      {link.display}
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  className="ml-4 shrink-0 text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                  size={22}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
