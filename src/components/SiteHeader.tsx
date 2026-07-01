import { profile } from "@/data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-ink/78 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">
        <a href="#" className="flex items-center gap-3" aria-label="Go to top">
          <span className="grid size-9 place-items-center bg-paper text-sm font-black text-ink">
            MJ
          </span>
          <span className="hidden text-sm font-semibold text-paper sm:block">
            {profile.name}
          </span>
        </a>

        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-white/62 transition hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
