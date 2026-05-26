import type { SpaceMarineClass } from "../../data/classes";
import { spaceMarineWeapons } from "../../data/weapons";

type ClassDetailPanelProps = {
  marineClass?: SpaceMarineClass;
};

const weaponGroups = [
  { key: "primary", label: "Primary" },
  { key: "secondary", label: "Secondary" },
  { key: "melee", label: "Melee" },
] as const;

export default function ClassDetailPanel({
  marineClass,
}: ClassDetailPanelProps) {
  if (!marineClass) {
    return (
      <div className="relative overflow-hidden border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(14,20,27,0.88),rgba(7,9,13,0.98))] px-3 py-3 text-left">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-emerald-200/20" />
        <div className="pointer-events-none absolute inset-[1px] border border-white/5" />
        <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-emerald-300/72">
          Tactical Instruction
        </p>
        <h3 className="mt-2 text-base font-black uppercase tracking-[0.1em] text-white">
          Awaiting Class Selection
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/62">
          Select an Astartes class card from the matrix to load its operational
          profile, role directives, sanctioned weapons, and current field notes.
        </p>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-100/48">
          default doctrine: tactical // state: standby // terminal: class-detail-01
        </p>
      </div>
    );
  }

  const selectedWeapons = spaceMarineWeapons.filter((weapon) =>
    weapon.usableByClasses.includes(marineClass.id),
  );
  const weaponsByType = {
    primary: selectedWeapons.filter((weapon) => weapon.type === "primary"),
    secondary: selectedWeapons.filter((weapon) => weapon.type === "secondary"),
    melee: selectedWeapons.filter((weapon) => weapon.type === "melee"),
  };

  return (
    <div className="relative overflow-hidden border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(15,21,28,0.92),rgba(7,9,13,0.98))] px-3 py-3 text-left">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-cyan-200/22" />
      <div className="pointer-events-none absolute inset-[1px] border border-white/5" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-cyan-200/70" />

      <div className="relative z-10 space-y-3">
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/8 pb-3">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-emerald-300/72">
              Selected Class
            </p>
            <h3 className="mt-2 text-xl font-black uppercase tracking-[0.1em] text-white">
              {marineClass.name}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="border border-white/10 bg-white/[0.03] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/68">
              {marineClass.role}
            </span>
            <span className="border border-cyan-300/14 bg-cyan-300/6 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-cyan-100/82">
              {marineClass.difficulty}
            </span>
          </div>
        </div>

        <div className="grid gap-2 md:grid-cols-[0.8fr_1.2fr]">
          <div className="border border-white/8 bg-black/18 px-3 py-2.5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/38">
              Class Ability
            </p>
            <p className="mt-1.5 text-sm font-semibold uppercase tracking-[0.08em] text-emerald-100">
              {marineClass.classAbility}
            </p>
          </div>
          <div className="border border-white/8 bg-black/18 px-3 py-2.5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/38">
              Playstyle
            </p>
            <p className="mt-1.5 text-xs leading-5 text-white/64">
              {marineClass.playstyle}
            </p>
          </div>
        </div>

        <div className="border border-white/8 bg-black/16 px-3 py-2.5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/38">
            Best For
          </p>
          <ul className="mt-2 grid gap-1.5 sm:grid-cols-3">
            {marineClass.bestFor.map((item) => (
              <li
                key={item}
                className="border border-white/8 bg-white/[0.03] px-2 py-2 text-xs leading-5 text-white/64"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-2 md:grid-cols-3">
          {weaponGroups.map((group) => {
            const weapons = weaponsByType[group.key];

            return (
              <div
                key={group.key}
                className="border border-white/8 bg-black/16 px-3 py-2.5"
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/38">
                  {group.label}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {weapons.length > 0 ? (
                    weapons.map((weapon) => (
                      <span
                        key={weapon.id}
                        className="border border-white/8 bg-white/[0.03] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/56"
                      >
                        {weapon.name}
                      </span>
                    ))
                  ) : (
                    <span className="border border-white/8 bg-white/[0.03] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/34">
                      none assigned
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <p className="border-t border-white/8 pt-2 font-mono text-[10px] leading-5 text-cyan-100/56">
          {marineClass.patchNotes}
        </p>
      </div>
    </div>
  );
}
