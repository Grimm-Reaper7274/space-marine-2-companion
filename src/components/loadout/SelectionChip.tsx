type SelectionChipProps = {
  label: string;
  active?: boolean;
  className?: string;
  meta?: string;
};

export default function SelectionChip({
  label,
  active = false,
  className,
  meta,
}: SelectionChipProps) {
  return (
    <button
      className={`group relative w-full overflow-hidden border px-3 py-2.5 text-left transition duration-150 ${
        active
          ? "border-cyan-300/18 bg-[linear-gradient(180deg,rgba(18,28,40,0.88),rgba(8,13,19,0.98))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_20px_rgba(0,0,0,0.18)]"
          : "border-white/8 bg-[linear-gradient(180deg,rgba(17,21,26,0.82),rgba(8,10,14,0.95))] hover:border-white/12 hover:bg-[linear-gradient(180deg,rgba(19,23,28,0.86),rgba(9,11,15,0.96))]"
      } ${className ?? ""}`}
      type="button"
    >
      <span
        className={`pointer-events-none absolute inset-x-0 top-0 h-px ${
          active ? "bg-cyan-200/30" : "bg-white/8"
        }`}
      />
      <span
        className={`pointer-events-none absolute inset-[1px] border ${
          active ? "border-cyan-300/8" : "border-white/5"
        }`}
      />
      <span
        className={`pointer-events-none absolute left-0 top-0 h-full w-[3px] ${
          active ? "bg-emerald-300/55" : "bg-transparent"
        }`}
      />

      <span className="relative z-10 block text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
        {label}
      </span>

      {meta ? (
        <span
          className={`relative z-10 mt-1 block font-mono text-[10px] uppercase tracking-[0.16em] ${
            active ? "text-emerald-200/72" : "text-white/36"
          }`}
        >
          {meta}
        </span>
      ) : null}
    </button>
  );
}
