type AnalysisTone = "accent" | "alert" | "neutral" | "positive";

type AnalysisRowProps = {
  label: string;
  value: string;
  className?: string;
  meta?: string;
  tone?: AnalysisTone;
};

const valueToneClassNames: Record<AnalysisTone, string> = {
  accent: "text-cyan-100",
  alert: "text-red-200",
  neutral: "text-white/82",
  positive: "text-emerald-200",
};

export default function AnalysisRow({
  label,
  value,
  className,
  meta,
  tone = "neutral",
}: AnalysisRowProps) {
  return (
    <div
      className={`flex items-start justify-between gap-3 border-b border-white/8 py-2 last:border-b-0 last:pb-0 first:pt-0 ${className ?? ""}`}
    >
      <div className="min-w-0 text-left">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/42">
          {label}
        </p>
        {meta ? (
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/32">
            {meta}
          </p>
        ) : null}
      </div>

      <span
        className={`shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] ${valueToneClassNames[tone]}`}
      >
        {value}
      </span>
    </div>
  );
}
