type StatusTone = "accent" | "alert" | "locked" | "online" | "neutral";

type StatusChipProps = {
  label: string;
  tone?: StatusTone;
  className?: string;
};

const toneClassNames: Record<StatusTone, string> = {
  accent: "border-cyan-300/20 bg-cyan-400/8 text-cyan-100/85",
  alert: "border-red-300/20 bg-red-500/8 text-red-200/80",
  locked: "border-amber-300/20 bg-amber-400/8 text-amber-200/80",
  neutral: "border-white/15 bg-white/5 text-white/72",
  online: "border-emerald-300/20 bg-emerald-400/8 text-emerald-200/85",
};

export default function StatusChip({
  label,
  tone = "neutral",
  className,
}: StatusChipProps) {
  return (
    <span
      className={`inline-flex items-center border px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.24em] ${toneClassNames[tone]} ${className ?? ""}`}
    >
      [{label}]
    </span>
  );
}
