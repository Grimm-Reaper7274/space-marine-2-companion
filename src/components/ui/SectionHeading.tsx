type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
  className,
  as: TitleTag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow ? (
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-emerald-300/75">
          {eyebrow}
        </p>
      ) : null}
      <TitleTag className="text-4xl font-black uppercase tracking-[0.06em] text-white sm:text-5xl md:text-6xl">
        {title}
      </TitleTag>
      {subtitle ? (
        <p className="mt-3 text-sm tracking-[0.02em] text-white/58 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
