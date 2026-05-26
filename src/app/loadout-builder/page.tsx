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

const loadoutSlots = [
  { number: 1, icon: "Z" },
  { number: 2, icon: "1" },
  { number: 3, icon: "2" },
  { number: 4, icon: "3" },
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
  const [selectedLoadoutSlot, setSelectedLoadoutSlot] = useState(0);
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

  // Calculate power rating for display
  const powerRating = Math.floor(Math.random() * 600) + 360;

  return (
    <section className="relative min-h-screen py-0">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,93,128,0.22),transparent_24%),radial-gradient(circle_at_center,rgba(8,14,21,0.5),rgba(4,6,10,0.84)_58%,rgba(2,3,5,0.96)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.42),rgba(0,0,0,0.08)_18%,rgba(0,0,0,0.08)_82%,rgba(0,0,0,0.46))]" />

      {/* Top Bar */}
      <div className="relative border-b border-white/8 bg-black/40 px-4 py-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.34em] text-emerald-300/78">
                Armouring Hall
              </p>
              <h1 className="mt-1 text-lg font-black uppercase tracking-[0.08em] text-white sm:text-xl">
                Loadout Builder
              </h1>
            </div>
            <div className="flex items-end gap-3">
              <div className="text-right">
                <p className="text-xs font-mono uppercase tracking-[0.12em] text-white/52">
                  Power Rating
                </p>
                <p className="mt-1 text-lg font-bold text-cyan-300">
                  {powerRating}/600
                </p>
              </div>
            </div>
          </div>

          {/* Class Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {spaceMarineClasses.map((marineClass) => {
              const isActive = activeClass.id === marineClass.id;
              return (
                <button
                  key={marineClass.id}
                  onClick={() => setSelectedClass(marineClass)}
                  className={`flex-shrink-0 px-3 py-2 border border-white/20 text-sm font-semibold uppercase tracking-[0.12em] transition-all ${
                    isActive
                      ? "border-cyan-300/60 bg-cyan-300/10 text-cyan-200"
                      : "border-white/12 bg-white/5 text-white/70 hover:border-cyan-300/30 hover:text-white/90"
                  }`}
                  type="button"
                >
                  {marineClass.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative px-4 py-6 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-[240px_minmax(0,1fr)_280px]">
            {/* Left Sidebar - Loadout Selection */}
            <PanelCard className="px-3 py-4 h-fit">
              <div className="border-b border-white/8 pb-3 mb-3">
                <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-emerald-300/72">
                  Loadout Management
                </p>
                <h2 className="mt-1.5 text-xs font-bold uppercase tracking-[0.1em] text-white">
                  Select Loadout
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {loadoutSlots.map((slot, idx) => (
                  <button
                    key={slot.number}
                    onClick={() => setSelectedLoadoutSlot(idx)}
                    className={`relative min-h-[72px] flex items-center justify-center border transition-all ${
                      selectedLoadoutSlot === idx
                        ? "border-cyan-300/60 bg-cyan-300/12 text-cyan-200"
                        : "border-white/12 bg-white/5 text-white/50 hover:border-white/20 hover:text-white/70"
                    }`}
                    type="button"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">{slot.icon}</div>
                      <p className="text-[10px] uppercase tracking-[0.1em]">
                        Slot {slot.number}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-4 border-t border-white/8 pt-4 space-y-2">
                <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-white/40">
                  Active Loadout
                </p>
                <div className="border border-white/12 bg-white/[0.02] px-2.5 py-2.5 text-left">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-white/60">
                    Class
                  </p>
                  <p className="mt-1.5 text-xs font-bold text-white">
                    {activeClass.name}
                  </p>
                </div>
                <div className="border border-white/12 bg-white/[0.02] px-2.5 py-2.5 text-left">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-white/60">
                    Primary
                  </p>
                  <p className="mt-1.5 text-xs font-bold text-white">
                    {previewWeapons.primary}
                  </p>
                </div>
              </div>
            </PanelCard>

            {/* Center - Marine Display */}
            <div className="min-w-0">
              <MarineDisplayPanel
                className="h-full !border-cyan-300/16"
                meleeWeapon={previewWeapons.melee}
                primaryWeapon={previewWeapons.primary}
                secondaryWeapon={previewWeapons.secondary}
                selectedClass={activeClass.name}
              />
            </div>

            {/* Right Sidebar - Weapon & Class Info */}
            <PanelCard className="px-3 py-4 space-y-3 h-fit">
              <div className="border-b border-white/8 pb-3">
                <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-emerald-300/72">
                  Armament Profile
                </p>
                <h2 className="mt-1.5 text-xs font-bold uppercase tracking-[0.1em] text-white">
                  {previewWeapons.primary}
                </h2>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/40">
                  Primary Weapon
                </p>
              </div>

              <div className="space-y-2">
                <div className="border border-white/12 bg-white/[0.02] px-2.5 py-2.5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/50">
                    Secondary
                  </p>
                  <p className="mt-1.5 text-xs text-white/80">
                    {previewWeapons.secondary}
                  </p>
                </div>

                <div className="border border-white/12 bg-white/[0.02] px-2.5 py-2.5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/50">
                    Melee
                  </p>
                  <p className="mt-1.5 text-xs text-white/80">
                    {previewWeapons.melee}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/8 pt-3">
                <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-emerald-300/72">
                  Class Doctrine
                </p>
                <h3 className="mt-1.5 text-xs font-bold uppercase tracking-[0.1em] text-white">
                  {activeClass.name} Pattern
                </h3>
              </div>

              <div className="border border-white/12 bg-white/[0.02] px-2.5 py-2.5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/50">
                  Class Ability
                </p>
                <p className="mt-2 text-xs font-semibold text-emerald-100/90">
                  {activeClass.classAbility}
                </p>
              </div>

              <div className="border border-white/12 bg-white/[0.02] px-2.5 py-2.5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/50">
                  Best For
                </p>
                <div className="mt-2 space-y-1">
                  {activeClass.bestFor.slice(0, 2).map((item) => (
                    <p
                      key={item}
                      className="text-[10px] text-white/70"
                    >
                      • {item}
                    </p>
                  ))}
                </div>
              </div>

              <button
                aria-disabled="true"
                className="relative w-full min-h-[44px] overflow-hidden border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(31,52,68,0.88),rgba(10,16,22,0.98))] px-3 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100/80 transition-all hover:border-cyan-300/40"
                tabIndex={-1}
                type="button"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-cyan-200/28" />
                Perk Tree
              </button>
            </PanelCard>
          </div>
        </div>
      </div>
    </section>
  );
}
