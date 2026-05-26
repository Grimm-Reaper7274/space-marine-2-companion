"use client";

import { useState } from "react";

import MarineDisplayPanel from "../../components/loadout/MarineDisplayPanel";
import StatusChip from "../../components/loadout/StatusChip";
import PanelCard from "../../components/ui/PanelCard";
import { spaceMarineClasses, type SpaceMarineClass } from "../../data/classes";
import { spaceMarineWeapons, type WeaponType } from "../../data/weapons";

const selectedLoadout = {
  selectedClass: "Tactical",
  mode: "Operations",
  difficulty: "Ruthless",
  doctrine: "Aggression",
} as const;

const weaponGroups = [
  { key: "primary", label: "Primary" },
  { key: "secondary", label: "Secondary" },
  { key: "melee", label: "Melee" },
] as const satisfies ReadonlyArray<{ key: WeaponType; label: string }>;

const armourySlots = [
  { label: "Class", node: "Astartes pattern" },
  { label: "Primary", node: "Main hardpoint" },
  { label: "Secondary", node: "Sidearm hardpoint" },
  { label: "Melee", node: "Close combat hardpoint" },
] as const;

function getWeaponsForClass(classId: string, type: WeaponType) {
  return spaceMarineWeapons.filter(
    (weapon) =>
      weapon.type === type && weapon.usableByClasses.includes(classId),
  );
}

export default function LoadoutBuilderPage() {
  const [selectedClass, setSelectedClass] = useState<
    SpaceMarineClass | undefined
  >();
  const activeClass =
    selectedClass ??
    spaceMarineClasses.find((marineClass) => marineClass.id === "tactical") ??
    spaceMarineClasses[0];

  if (!activeClass) {
    return null;
  }

  const weaponsByType = {
    primary: getWeaponsForClass(activeClass.id, "primary"),
    secondary: getWeaponsForClass(activeClass.id, "secondary"),
    melee: getWeaponsForClass(activeClass.id, "melee"),
  };
  const previewWeapons = {
    primary: weaponsByType.primary[0]?.name ?? "No weapons recorded",
    secondary: weaponsByType.secondary[0]?.name ?? "No weapons recorded",
    melee: weaponsByType.melee[0]?.name ?? "No weapons recorded",
  };

  return (
    <section className="relative min-h-[80vh] py-6 lg:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,93,128,0.22),transparent_24%),radial-gradient(circle_at_center,rgba(8,14,21,0.5),rgba(4,6,10,0.84)_58%,rgba(2,3,5,0.96)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.42),rgba(0,0,0,0.08)_18%,rgba(0,0,0,0.08)_82%,rgba(0,0,0,0.46))]" />

      <div className="relative mx-auto max-w-7xl space-y-4">
        <PanelCard className="px-3 py-3 sm:px-4">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/8 pb-3">
            <div className="text-left">
              <p className="text-[9px] font-semibold uppercase tracking-[0.34em] text-emerald-300/78">
                Armouring Hall
              </p>
              <h1 className="mt-2 text-2xl font-black uppercase tracking-[0.08em] text-white sm:text-3xl">
                Loadout Builder
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-white/62">
                Select an Astartes class, review sanctioned weapon hardpoints,
                and stage the current armour pattern for deployment.
              </p>
            </div>
            <div className="grid gap-2 text-left sm:text-right">
              <StatusChip label="READY" tone="online" />
              <StatusChip label={selectedLoadout.difficulty} tone="accent" />
            </div>
          </div>

          <div className="mt-3 grid gap-2 md:grid-cols-3 xl:grid-cols-6">
            {spaceMarineClasses.map((marineClass) => {
              const isActive = activeClass.id === marineClass.id;

              return (
                <button
                  key={marineClass.id}
                  aria-pressed={isActive}
                  className={`relative min-h-[76px] overflow-hidden border px-3 py-2.5 text-left transition duration-150 ${
                    isActive
                      ? "border-cyan-200/30 bg-[linear-gradient(180deg,rgba(22,39,54,0.94),rgba(7,12,17,0.98))] shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_12px_28px_rgba(0,0,0,0.28)]"
                      : "border-white/8 bg-[linear-gradient(180deg,rgba(16,20,25,0.86),rgba(7,9,12,0.96))] hover:border-cyan-200/16"
                  }`}
                  onClick={() => setSelectedClass(marineClass)}
                  type="button"
                >
                  <span
                    className={`pointer-events-none absolute inset-x-0 top-0 h-px ${
                      isActive ? "bg-cyan-200/40" : "bg-white/8"
                    }`}
                  />
                  <span
                    className={`pointer-events-none absolute left-0 top-0 h-full w-[3px] ${
                      isActive ? "bg-cyan-200/80" : "bg-emerald-300/28"
                    }`}
                  />
                  <span className="relative z-10 block text-sm font-black uppercase tracking-[0.1em] text-white">
                    {marineClass.name}
                  </span>
                  <span className="relative z-10 mt-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
                    {marineClass.role}
                  </span>
                </button>
              );
            })}
          </div>
        </PanelCard>

        <div className="grid gap-4 xl:grid-cols-[300px_minmax(0,1fr)_320px]">
          <PanelCard className="px-3 py-3">
            <div className="border-b border-white/8 pb-3 text-left">
              <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-emerald-300/72">
                Requisition Stack
              </p>
              <h2 className="mt-1.5 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                Loadout Slots
              </h2>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/36">
                {`class: ${activeClass.name} // mode: ${selectedLoadout.mode}`}
              </p>
            </div>

            <div className="mt-3 grid gap-2">
              {armourySlots.map((slot) => (
                <div
                  key={slot.label}
                  className="border border-white/8 bg-[linear-gradient(180deg,rgba(17,21,26,0.82),rgba(8,10,14,0.95))] px-3 py-2.5 text-left"
                >
                  <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-white/38">
                    {slot.label}
                  </p>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-white">
                    {slot.label === "Class" ? activeClass.name : slot.node}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-3">
              {weaponGroups.map((group) => {
                const weapons = weaponsByType[group.key];

                return (
                  <div
                    key={group.key}
                    className="border border-cyan-300/10 bg-black/18 px-3 py-3 text-left"
                  >
                    <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-cyan-100/58">
                      {group.label}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {weapons.length > 0 ? (
                        weapons.map((weapon) => (
                          <span
                            key={weapon.id}
                            className="border border-white/8 bg-white/[0.03] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/58"
                          >
                            {weapon.name}
                          </span>
                        ))
                      ) : (
                        <span className="border border-white/8 bg-white/[0.03] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/34">
                          No weapons recorded
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </PanelCard>

          <div className="min-w-0">
            <MarineDisplayPanel
              className="h-full !border-cyan-300/16"
              meleeWeapon={previewWeapons.melee}
              primaryWeapon={previewWeapons.primary}
              secondaryWeapon={previewWeapons.secondary}
              selectedClass={activeClass.name}
            />
          </div>

          <PanelCard className="px-3 py-3">
            <div className="flex items-start justify-between gap-3 border-b border-white/8 pb-3 text-left">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-emerald-300/72">
                  Class Doctrine
                </p>
                <h2 className="mt-1.5 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                  {activeClass.name} Pattern
                </h2>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/36">
                  {activeClass.role}
                </p>
              </div>
              <StatusChip label={`LVL 01`} tone="neutral" />
            </div>

            <div className="mt-3 space-y-3">
              <div className="border border-white/8 bg-black/18 px-3 py-3 text-left">
                <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-white/38">
                  Class Ability
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-emerald-100">
                  {activeClass.classAbility}
                </p>
              </div>

              <div className="border border-white/8 bg-black/18 px-3 py-3 text-left">
                <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-white/38">
                  Playstyle
                </p>
                <p className="mt-2 text-xs leading-5 text-white/64">
                  {activeClass.playstyle}
                </p>
              </div>

              <div className="border border-white/8 bg-black/18 px-3 py-3 text-left">
                <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-white/38">
                  Best For
                </p>
                <div className="mt-2 grid gap-1.5">
                  {activeClass.bestFor.map((item) => (
                    <p
                      key={item}
                      className="border border-white/8 bg-white/[0.03] px-2 py-2 text-xs leading-5 text-white/62"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <button
                aria-disabled="true"
                className="relative min-h-[48px] w-full overflow-hidden rounded-md border border-cyan-300/16 bg-[linear-gradient(180deg,rgba(31,52,68,0.88),rgba(10,16,22,0.98))] px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                tabIndex={-1}
                type="button"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-cyan-200/28" />
                PERK TREE
              </button>

              <p className="border-t border-white/8 pt-3 font-mono text-[10px] leading-5 text-cyan-100/52">
                {activeClass.patchNotes}
              </p>
            </div>
          </PanelCard>
        </div>
      </div>
    </section>
  );
}
