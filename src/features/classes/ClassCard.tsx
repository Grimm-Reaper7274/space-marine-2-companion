import type { SpaceMarineClass } from "../../data/classes";

type ClassCardProps = {
  marineClass: SpaceMarineClass;
};

export default function ClassCard({ marineClass }: ClassCardProps) {
  return (
    <article className="relative overflow-hidden border border-white/8 bg-[linear-gradient(180deg,rgba(16,20,25,0.9),rgba(7,9,12,0.97))] px-3 py-3 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-cyan-200/18" />
      <div className="pointer-events-none absolute inset-[1px] border border-white/5" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-emerald-300/45" />

      <div className="relative z-10 space-y-3">
        <div className="flex items-start justify-between gap-3 border-b border-white/8 pb-2.5">
          <div className="min-w-0">
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.24em] text-emerald-300/72">
              {marineClass.role}
            </p>
            <h3 className="mt-1.5 text-base font-black uppercase tracking-[0.1em] text-white">
              {marineClass.name}
            </h3>
          </div>
          <span className="shrink-0 border border-cyan-300/14 bg-cyan-300/6 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-100/82">
            {marineClass.difficulty}
          </span>
        </div>

        <p className="text-xs leading-5 text-white/62">{marineClass.playstyle}</p>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="border border-white/8 bg-black/18 px-2.5 py-2">
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/38">
              Ability
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-emerald-100">
              {marineClass.classAbility}
            </p>
          </div>
          <div className="border border-white/8 bg-black/18 px-2.5 py-2">
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/38">
              Best For
            </p>
            <p className="mt-1 text-xs leading-5 text-white/66">
              {marineClass.bestFor}
            </p>
          </div>
        </div>

        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/38">
            Available Weapons
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {marineClass.availableWeapons.map((weapon) => (
              <span
                key={weapon}
                className="border border-white/8 bg-white/[0.03] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/54"
              >
                {weapon}
              </span>
            ))}
          </div>
        </div>

        <p className="border-t border-white/8 pt-2 font-mono text-[10px] leading-5 text-cyan-100/54">
          {marineClass.patchNotes}
        </p>
      </div>
    </article>
  );
}
