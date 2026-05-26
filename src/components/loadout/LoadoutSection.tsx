import type { ReactNode } from "react";

import PanelCard from "../ui/PanelCard";
import StatusChip from "./StatusChip";

type LoadoutSectionProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
  meta?: string;
  status?: string;
  statusTone?: "accent" | "alert" | "locked" | "online" | "neutral";
};

export default function LoadoutSection({
  eyebrow,
  title,
  children,
  className,
  meta,
  status,
  statusTone = "neutral",
}: LoadoutSectionProps) {
  return (
    <PanelCard className={`px-3 py-3 ${className ?? ""}`}>
      <div className="flex items-start justify-between gap-3 border-b border-white/8 pb-2.5">
        <div className="min-w-0 text-left">
          <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-emerald-300/72">
            {eyebrow}
          </p>
          <h2 className="mt-1.5 text-sm font-semibold uppercase tracking-[0.08em] text-white">
            {title}
          </h2>
          {meta ? (
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/36">
              {meta}
            </p>
          ) : null}
        </div>

        {status ? <StatusChip label={status} tone={statusTone} /> : null}
      </div>

      <div className="mt-3 space-y-3">{children}</div>
    </PanelCard>
  );
}
