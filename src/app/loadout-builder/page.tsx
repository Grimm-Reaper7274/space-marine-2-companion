"use client";

import { useState } from "react";

import MarineDisplayPanel from "../../components/loadout/MarineDisplayPanel";
import PanelCard from "../../components/ui/PanelCard";
import { spaceMarineClasses, type SpaceMarineClass } from "../../data/classes";
import { spaceMarineWeapons, type WeaponType } from "../../data/weapons";

const loadoutSlots = [
  { icon: "D", label: "" },
  { icon: "1", label: "" },
  { icon: "2", label: "" },
  { icon: "3", label: "" },
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
    primary: weaponsByType.primary[0],
    secondary: weaponsByType.secondary[0],
    melee: weaponsByType.melee[0],
  };

  return (
    <section
      className="relative min-h-screen"
      style={{
        backgroundColor: "#050809",
        backgroundImage:
          "radial-gradient(circle at 20% 50%, rgba(31, 56, 76, 0.15) 0%, transparent 50%), " +
          "radial-gradient(circle at 80% 20%, rgba(16, 24, 32, 0.1) 0%, transparent 40%)",
      }}
    >
      {/* Top Bar - Armouring Hall Header */}
      <div
        className="border-b border-t border-t-transparent relative z-20"
        style={{
          backgroundColor: "rgba(8, 13, 16, 0.8)",
          borderBottomColor: "rgba(128, 151, 151, 0.25)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-col items-start gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <h1
              className="text-2xl font-black uppercase tracking-[0.12em] sm:text-3xl sm:tracking-[0.16em]"
              style={{ color: "#b8a35a" }}
            >
              Armouring Hall
            </h1>
            <div className="text-left text-xs uppercase tracking-[0.12em] sm:text-right" style={{ color: "#5f6c6b" }}>
              <div>BUILD INDEX: PROTOTYPE</div>
            </div>
          </div>

          {/* Class Tabs */}
          <div className="flex gap-2 overflow-x-auto">
            {spaceMarineClasses.map((marineClass, index) => {
              const isActive = activeClass.id === marineClass.id;
              return (
                <button
                  key={marineClass.id}
                  onClick={() => setSelectedClass(marineClass)}
                  className="flex-shrink-0 px-3 py-2 font-semibold uppercase tracking-[0.08em] text-xs transition-colors relative sm:px-4 sm:text-sm sm:tracking-[0.1em]"
                  style={{
                    backgroundColor: isActive ? "rgba(95, 135, 148, 0.4)" : "transparent",
                    color: isActive ? "#8fb8bd" : "#8c9897",
                    borderTop: isActive ? "2px solid #8fb8bd" : "2px solid transparent",
                    borderLeft: isActive ? "1px solid rgba(143, 184, 189, 0.4)" : "1px solid rgba(128, 151, 151, 0.2)",
                    borderRight: isActive ? "1px solid rgba(143, 184, 189, 0.4)" : "1px solid rgba(128, 151, 151, 0.2)",
                    borderBottom: isActive ? "1px solid rgba(143, 184, 189, 0.3)" : "1px solid rgba(128, 151, 151, 0.15)",
                  }}
                  type="button"
                >
                  {index === 0 && <span className="absolute left-0.5 top-1 text-[9px]">⬜</span>}
                  <span className="inline-block">{marineClass.name}</span>
                  {index === 5 && <span className="absolute right-0.5 top-1 text-[9px]">⬜</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 py-5 sm:px-6 sm:py-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-[300px_minmax(0,1fr)_340px] lg:gap-5">
            {/* Left Sidebar - Weapon/Loadout Slots */}
            <div
              className="rounded-sm"
              style={{
                backgroundColor: "rgba(16, 24, 32, 0.6)",
                borderColor: "rgba(128, 151, 151, 0.25)",
                borderWidth: "1px",
              }}
            >
              <div className="px-4 py-3 border-b" style={{ borderBottomColor: "rgba(128, 151, 151, 0.2)" }}>
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.16em] mb-2"
                  style={{ color: "#b8a35a" }}
                >
                  Select Loadout
                </p>
                <div className="flex gap-1">
                  {loadoutSlots.map((slot, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedLoadoutSlot(idx)}
                      className="w-8 h-8 flex items-center justify-center text-xs font-bold uppercase tracking-[0.08em] transition-all rounded-sm"
                      style={{
                        backgroundColor: selectedLoadoutSlot === idx ? "rgba(143, 184, 189, 0.25)" : "rgba(44, 50, 56, 0.6)",
                        borderColor: selectedLoadoutSlot === idx ? "rgba(143, 184, 189, 0.5)" : "rgba(128, 151, 151, 0.2)",
                        borderWidth: "1px",
                        color: selectedLoadoutSlot === idx ? "#8fb8bd" : "#5f6c6b",
                      }}
                      type="button"
                    >
                      {slot.icon}
                    </button>
                  ))}
                </div>
              </div>

              {/* Weapon Slots */}
              <div className="px-4 py-3 space-y-3">
                <div>
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.14em] mb-2"
                    style={{ color: "#b8a35a" }}
                  >
                    Standard-Issue
                  </p>
                  <div
                    className="p-3 rounded-sm"
                    style={{
                      backgroundColor: "rgba(8, 13, 16, 0.8)",
                      borderColor: "rgba(128, 151, 151, 0.2)",
                      borderWidth: "1px",
                      minHeight: "80px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p className="text-[11px] text-center uppercase tracking-[0.08em]" style={{ color: "#8c9897" }}>
                      {previewWeapons.primary?.name ?? "No weapons recorded"}
                    </p>
                  </div>
                </div>

                <div>
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.14em] mb-2"
                    style={{ color: "#b8a35a" }}
                  >
                    Standard-Issue
                  </p>
                  <div
                    className="p-3 rounded-sm"
                    style={{
                      backgroundColor: "rgba(8, 13, 16, 0.8)",
                      borderColor: "rgba(128, 151, 151, 0.2)",
                      borderWidth: "1px",
                      minHeight: "80px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p className="text-[11px] text-center uppercase tracking-[0.08em]" style={{ color: "#8c9897" }}>
                      {previewWeapons.secondary?.name ?? "No weapons recorded"}
                    </p>
                  </div>
                </div>

                <div>
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.14em] mb-2"
                    style={{ color: "#b8a35a" }}
                  >
                    Standard-Issue
                  </p>
                  <div
                    className="p-3 rounded-sm"
                    style={{
                      backgroundColor: "rgba(8, 13, 16, 0.8)",
                      borderColor: "rgba(128, 151, 151, 0.2)",
                      borderWidth: "1px",
                      minHeight: "80px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p className="text-[11px] text-center uppercase tracking-[0.08em]" style={{ color: "#8c9897" }}>
                      {previewWeapons.melee?.name ?? "No weapons recorded"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center - Marine Display */}
            <div className="min-w-0">
              <MarineDisplayPanel
                className="h-full"
                meleeWeapon={previewWeapons.melee?.name ?? "No weapons recorded"}
                primaryWeapon={previewWeapons.primary?.name ?? "No weapons recorded"}
                secondaryWeapon={previewWeapons.secondary?.name ?? "No weapons recorded"}
                selectedClass={activeClass.name}
              />
            </div>

            {/* Right Sidebar - Class Info & Abilities */}
            <div
              className="rounded-sm flex flex-col gap-3"
              style={{
                backgroundColor: "rgba(16, 24, 32, 0.6)",
                borderColor: "rgba(128, 151, 151, 0.25)",
                borderWidth: "1px",
              }}
            >
              {/* Class Header */}
              <div className="px-4 py-3 border-b" style={{ borderBottomColor: "rgba(128, 151, 151, 0.2)" }}>
                <div className="flex flex-col items-start gap-1 mb-1 sm:flex-row sm:justify-between sm:gap-2">
                  <div>
                    <p className="text-base font-bold sm:text-lg" style={{ color: "#d8dedc" }}>
                      CLASS PROFILE // {activeClass.name}
                    </p>
                  </div>
                  <p className="text-xs uppercase tracking-[0.08em]" style={{ color: "#5f6c6b" }}>
                    PROGRESSION: NOT TRACKED
                  </p>
                </div>
              </div>

              {/* Class Ability */}
              <div className="px-4 space-y-2 flex-1">
                <div className="text-center">
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(95, 135, 148, 0.15)",
                      borderColor: "rgba(128, 151, 151, 0.3)",
                      borderWidth: "1px",
                    }}
                  >
                    <span style={{ color: "#b8a35a", fontSize: "20px" }}>◉</span>
                  </div>
                  <p className="font-semibold uppercase tracking-[0.1em] text-sm" style={{ color: "#d8dedc" }}>
                    {activeClass.classAbility}
                  </p>
                  <p className="text-[10px] leading-5 mt-2" style={{ color: "#8c9897" }}>
                    {activeClass.playstyle}
                  </p>
                </div>

                {/* Armor Class Indicator */}
                <div className="mt-4 pt-4 border-t" style={{ borderTopColor: "rgba(128, 151, 151, 0.2)" }}>
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] mb-2" style={{ color: "#5f6c6b" }}>
                    Armour Class: Pending
                  </p>
                </div>

                {/* Perk Tree Button */}
                <button
                  type="button"
                  className="w-full py-3 mt-4 font-bold uppercase tracking-[0.12em] text-sm rounded-sm transition-all"
                  style={{
                    backgroundColor: "rgba(95, 135, 148, 0.2)",
                    borderColor: "rgba(143, 184, 189, 0.3)",
                    borderWidth: "1px",
                    color: "#8fb8bd",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(95, 135, 148, 0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(95, 135, 148, 0.2)";
                  }}
                >
                  Perk Tree
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center items-center text-xs uppercase tracking-[0.1em] sm:gap-3">
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-2"
              style={{ color: "#8c9897" }}
            >
              <span>Ⓑ</span> Back
            </button>
            <button type="button" className="flex items-center gap-2 px-3 py-2" style={{ color: "#8c9897" }}>
              <span>🎮</span> Preview
            </button>
            <button type="button" className="flex items-center gap-2 px-3 py-2" style={{ color: "#8c9897" }}>
              <span>Ⓐ</span> Select
            </button>
          </div>

          {/* Edit Armour Button */}
          <div className="mt-4 text-center">
            <button
              type="button"
              className="px-8 py-2 font-bold uppercase tracking-[0.12em] text-sm rounded-sm"
              style={{
                backgroundColor: "rgba(44, 50, 56, 0.6)",
                borderColor: "rgba(128, 151, 151, 0.25)",
                borderWidth: "1px",
                color: "#8c9897",
              }}
            >
              Edit Armour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
