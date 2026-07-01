type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  tone = "dark",
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div>
      <p
        className={`text-sm font-semibold uppercase tracking-[0.24em] ${
          isLight ? "text-ink/45" : "text-signal"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 max-w-2xl text-4xl font-semibold leading-tight text-balance ${
          isLight ? "text-ink" : "text-paper"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
