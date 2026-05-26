import PanelCard from "../ui/PanelCard";
import StatusChip from "./StatusChip";

type MarineDisplayPanelProps = {
  className?: string;
  primaryWeapon: string;
  secondaryWeapon: string;
  meleeWeapon: string;
  selectedClass: string;
};

export default function MarineDisplayPanel({
  className,
  primaryWeapon,
  secondaryWeapon,
  meleeWeapon,
  selectedClass,
}: MarineDisplayPanelProps) {
  return (
    <PanelCard className={`px-3 py-3 ${className ?? ""}`}>
      <div className="flex items-start justify-between gap-3 border-b border-white/8 pb-2.5">
        <div className="min-w-0 text-left">
          <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-emerald-300/72">
            Class Display Node
          </p>
          <h2 className="mt-1.5 text-sm font-semibold uppercase tracking-[0.08em] text-white">
            Marine Visual Display
          </h2>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/36">
            servo feed // armor pose // tactical shell
          </p>
        </div>
        <StatusChip label="SYNCED" tone="online" />
      </div>

      <div className="mt-3 border border-white/8 bg-[linear-gradient(180deg,rgba(17,20,25,0.86),rgba(7,9,12,0.96))] p-3">
        <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden border border-cyan-300/10 bg-[radial-gradient(circle_at_top,rgba(44,88,130,0.18),transparent_28%),linear-gradient(180deg,rgba(16,21,28,0.92),rgba(5,7,10,0.98))]">
          <div className="pointer-events-none absolute inset-[10px] border border-white/6" />
          <div className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-emerald-300/35" />
          <div className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r border-t border-cyan-200/35" />
          <div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b border-l border-white/12" />
          <div className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-white/12" />
          <div className="pointer-events-none absolute inset-y-6 left-1/2 w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
          <div className="pointer-events-none absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.08),rgba(255,255,255,0))]" />

          <div className="relative z-10 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-emerald-300/72">
              Marine Visual Display
            </p>
            <div className="mx-auto mt-5 flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/14 bg-[radial-gradient(circle_at_top,rgba(58,119,173,0.2),rgba(10,14,18,0.94)_68%)] shadow-[0_0_0_10px_rgba(255,255,255,0.02),0_18px_40px_rgba(0,0,0,0.3)]">
              <span className="text-4xl font-black uppercase tracking-[0.12em] text-white/85">
                A
              </span>
            </div>
            <p className="mt-5 text-xl font-black uppercase tracking-[0.08em] text-white">
              {selectedClass}
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/36">
              armor shell // weapon hardpoints // deployment posture
            </p>
          </div>
        </div>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        <div className="border border-white/8 bg-[linear-gradient(180deg,rgba(16,19,24,0.84),rgba(7,9,12,0.94))] px-3 py-2.5 text-left">
          <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-white/42">
            Primary
          </p>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
            {primaryWeapon}
          </p>
        </div>
        <div className="border border-white/8 bg-[linear-gradient(180deg,rgba(16,19,24,0.84),rgba(7,9,12,0.94))] px-3 py-2.5 text-left">
          <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-white/42">
            Secondary
          </p>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
            {secondaryWeapon}
          </p>
        </div>
        <div className="border border-white/8 bg-[linear-gradient(180deg,rgba(16,19,24,0.84),rgba(7,9,12,0.94))] px-3 py-2.5 text-left">
          <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-white/42">
            Melee
          </p>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
            {meleeWeapon}
          </p>
        </div>
      </div>
    </PanelCard>
  );
}
