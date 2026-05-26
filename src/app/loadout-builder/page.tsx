"use client";

import { useState } from "react";

import LoadoutSection from "../../components/loadout/LoadoutSection";
import AnalysisRow from "../../components/loadout/AnalysisRow";
import MarineDisplayPanel from "../../components/loadout/MarineDisplayPanel";
import SelectionChip from "../../components/loadout/SelectionChip";
import StatusChip from "../../components/loadout/StatusChip";
import PrimaryButton from "../../components/ui/PrimaryButton";
import SecondaryButton from "../../components/ui/SecondaryButton";
import PanelCard from "../../components/ui/PanelCard";
import ClassGrid from "../../features/classes/ClassGrid";
import ClassDetailPanel from "../../features/classes/ClassDetailPanel";
import type { SpaceMarineClass } from "../../data/classes";

const selectedLoadout = {
  selectedClass: "Tactical",
  mode: "Operations",
  difficulty: "Ruthless",
  doctrine: "Aggression",
  primaryWeapon: "Auto Bolt Rifle",
  secondaryWeapon: "Bolt Pistol",
  meleeWeapon: "Chainsword",
} as const;

const classOptions = [
  { label: "Tactical", meta: "Balanced rifle doctrine", active: true },
  { label: "Assault", meta: "Shock entry assault", active: false },
  { label: "Vanguard", meta: "Hookline disruptor", active: false },
  { label: "Bulwark", meta: "Shielded front guard", active: false },
  { label: "Sniper", meta: "Precision overwatch", active: false },
  { label: "Heavy", meta: "Suppressive weapons node", active: false },
] as const;

const modeOptions = [
  { label: "Operations", meta: "PvE mission sortie", active: true },
  { label: "Eternal War", meta: "Arena conflict feed", active: false },
  { label: "Siege", meta: "Fortress breach cycle", active: false },
] as const;

const difficultyOptions = [
  { label: "Minimal", active: false },
  { label: "Average", active: false },
  { label: "Substantial", active: false },
  { label: "Ruthless", active: true },
  { label: "Lethal", active: false },
] as const;

const weaponSlots = [
  { label: "Primary", meta: "Auto Bolt Rifle // Mk IV", active: true },
  { label: "Secondary", meta: "Bolt Pistol // Sidearm", active: true },
  { label: "Melee", meta: "Chainsword // Breach pattern", active: true },
] as const;

const doctrineOptions = [
  { label: "Aggression", meta: "Forward push and pressure", active: true },
  { label: "Defense", meta: "Anchor line stability", active: false },
  { label: "Support", meta: "Squad sustain and control", active: false },
] as const;

const commandSummary = [
  {
    label: "Selected Class",
    value: selectedLoadout.selectedClass,
    meta: "FRONTLINE RIFLE ARCHETYPE",
  },
  {
    label: "Mission Mode",
    value: selectedLoadout.mode,
    meta: "TACTICAL DEPLOYMENT STACK",
  },
  {
    label: "Threat Tier",
    value: selectedLoadout.difficulty,
    meta: "OPPOSITION PRESSURE INDEX",
  },
] as const;

const weaponSummary = [
  {
    label: "Primary Hardpoint",
    value: selectedLoadout.primaryWeapon,
    meta: "sustained midline fire // armor chip pressure",
    tone: "accent",
  },
  {
    label: "Secondary Hardpoint",
    value: selectedLoadout.secondaryWeapon,
    meta: "close-support backup // rapid draw sidearm",
    tone: "neutral",
  },
  {
    label: "Melee Hardpoint",
    value: selectedLoadout.meleeWeapon,
    meta: "finishers // breach cleanup // execution chain",
    tone: "positive",
  },
] as const;

const combatAnalysis = [
  { label: "Horde Clear", value: "High", tone: "positive" },
  { label: "Elite Damage", value: "Medium", tone: "accent" },
  { label: "Survivability", value: "High", tone: "positive" },
  { label: "Mobility", value: "Medium", tone: "neutral" },
  { label: "Team Utility", value: "Strong", tone: "accent" },
] as const;

const threatResponse = [
  {
    label: "Horde Surge",
    value: "Contain",
    meta: "advance with rifle pressure before collapse",
    tone: "positive",
  },
  {
    label: "Elite Pack",
    value: "Focus Fire",
    meta: "soften targets at range before chainsword commit",
    tone: "accent",
  },
  {
    label: "Boss Phase",
    value: "Support Front",
    meta: "hold firing lane and preserve ammunition discipline",
    tone: "alert",
  },
] as const;

const roleDirectives = [
  {
    label: "Primary Role",
    value: "Midline Breacher",
    meta: "hold center lanes and transition to close cleanup",
    tone: "positive",
  },
  {
    label: "Squad Task",
    value: "Pressure Anchor",
    meta: "support assault pushes while keeping ranged coherence",
    tone: "accent",
  },
  {
    label: "Command Note",
    value: "Maintain formation",
    meta: "do not outrun support units on ruthless threat bands",
    tone: "neutral",
  },
] as const;

export default function LoadoutBuilderPage() {
  const [selectedClass, setSelectedClass] = useState<SpaceMarineClass | undefined>();
  const currentClassName = selectedClass?.name ?? selectedLoadout.selectedClass;

  return (
    <section className="relative min-h-[80vh] py-6 lg:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,93,128,0.22),transparent_22%),radial-gradient(circle_at_center,rgba(8,14,21,0.54),rgba(4,6,10,0.82)_58%,rgba(2,3,5,0.96)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.4),rgba(0,0,0,0.08)_18%,rgba(0,0,0,0.08)_82%,rgba(0,0,0,0.44))]" />

      <div className="relative mx-auto grid max-w-7xl gap-4 xl:grid-cols-[320px_minmax(0,1fr)_320px]">
        <div className="space-y-4">
          <LoadoutSection
            eyebrow="Class Selection"
            meta="role pattern // deployment shell"
            status="SYNCED"
            statusTone="online"
            title="Astartes Pattern"
          >
            <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-2">
              {classOptions.map((option) => (
                <SelectionChip
                  key={option.label}
                  active={option.active}
                  label={option.label}
                  meta={option.meta}
                />
              ))}
            </div>
          </LoadoutSection>

          <LoadoutSection
            eyebrow="Mode Selection"
            meta="theatre designation // combat feed"
            status="STATIC"
            title="Mission Stack"
          >
            <div className="grid gap-2">
              {modeOptions.map((option) => (
                <SelectionChip
                  key={option.label}
                  active={option.active}
                  label={option.label}
                  meta={option.meta}
                />
              ))}
            </div>
          </LoadoutSection>

          <LoadoutSection
            eyebrow="Difficulty"
            meta="opposition pressure // sanction level"
            status="LOCKED"
            statusTone="locked"
            title="Threat Band"
          >
            <div className="grid gap-2 sm:grid-cols-2">
              {difficultyOptions.map((option) => (
                <SelectionChip
                  key={option.label}
                  active={option.active}
                  label={option.label}
                />
              ))}
            </div>
          </LoadoutSection>

          <LoadoutSection
            eyebrow="Weapon Slots"
            meta="hardpoint requisition // active pattern"
            status="ONLINE"
            statusTone="online"
            title="Armament Stack"
          >
            <div className="grid gap-2">
              {weaponSlots.map((slot) => (
                <SelectionChip
                  key={slot.label}
                  active={slot.active}
                  label={slot.label}
                  meta={slot.meta}
                />
              ))}
            </div>
          </LoadoutSection>

          <LoadoutSection
            eyebrow="Perk Doctrine"
            meta="combat stance // squad interaction"
            status="STATIC"
            title="Doctrine Bias"
          >
            <div className="grid gap-2">
              {doctrineOptions.map((option) => (
                <SelectionChip
                  key={option.label}
                  active={option.active}
                  label={option.label}
                  meta={option.meta}
                />
              ))}
            </div>
          </LoadoutSection>
        </div>

        <div className="space-y-4">
          <PanelCard className="!border-cyan-300/16 px-4 py-4 !shadow-[0_32px_80px_rgba(0,0,0,0.62),0_0_0_1px_rgba(22,34,46,0.45),inset_0_1px_0_rgba(255,255,255,0.05)] sm:px-5 sm:py-5">
            <div className="space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/8 pb-3">
                <div className="text-left">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.34em] text-emerald-300/78">
                    Loadout Requisition
                  </p>
                  <h1 className="mt-2 text-2xl font-black uppercase tracking-[0.08em] text-white sm:text-3xl">
                    Tactical Pattern IX
                  </h1>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/62">
                    Battle preparation terminal for configuring a marine
                    loadout before deployment. Static combat estimates shown for
                    doctrine review only.
                  </p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/36">
                    {`current class: ${currentClassName} // doctrine: ${selectedLoadout.doctrine} // node: loadout-core-01`}
                  </p>
                </div>

                <div className="grid gap-2 text-left sm:text-right">
                  <StatusChip label="READY" tone="online" />
                  <StatusChip label="STATIC DATA" tone="neutral" />
                </div>
              </div>

              <div className="grid gap-2 md:grid-cols-3">
                {commandSummary.map((item) => (
                  <div
                    key={item.label}
                    className="border border-white/8 bg-[linear-gradient(180deg,rgba(17,21,26,0.84),rgba(7,9,12,0.94))] px-3 py-3 text-left"
                  >
                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/42">
                      {item.label}
                    </p>
                    <p className="mt-1.5 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                      {item.label === "Selected Class"
                        ? currentClassName
                        : item.value}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/36">
                      {item.meta}
                    </p>
                  </div>
                ))}
              </div>

              <MarineDisplayPanel
                meleeWeapon={selectedLoadout.meleeWeapon}
                primaryWeapon={selectedLoadout.primaryWeapon}
                secondaryWeapon={selectedLoadout.secondaryWeapon}
                selectedClass={currentClassName}
              />

              <LoadoutSection
                className="!border-white/10"
                eyebrow="Class Foundation"
                meta="operations roster // role archive"
                status="SYNCED"
                statusTone="online"
                title="Class Matrix"
              >
                <ClassGrid
                  selectedClassId={selectedClass?.id}
                  onSelectClass={setSelectedClass}
                />
                <ClassDetailPanel marineClass={selectedClass} />
              </LoadoutSection>

              <div className="grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
                <LoadoutSection
                  className="!border-white/10"
                  eyebrow="Weapon Loadout Summary"
                  meta="equipped stack // current hardpoints"
                  status="SYNCED"
                  statusTone="accent"
                  title="Active Requisition"
                >
                  <div className="space-y-0">
                    {weaponSummary.map((item) => (
                      <AnalysisRow
                        key={item.label}
                        label={item.label}
                        meta={item.meta}
                        tone={item.tone}
                        value={item.value}
                      />
                    ))}
                  </div>
                </LoadoutSection>

                <LoadoutSection
                  className="!border-white/10"
                  eyebrow="Operational Summary"
                  meta="mission fit // command overview"
                  status="ONLINE"
                  statusTone="online"
                  title="Deployment Note"
                >
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="border border-white/8 bg-[linear-gradient(180deg,rgba(16,19,24,0.84),rgba(7,9,12,0.94))] px-3 py-2.5 text-left">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-white/42">
                        Mission Fit
                      </p>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-emerald-200">
                        Operations Sweep
                      </p>
                    </div>
                    <div className="border border-white/8 bg-[linear-gradient(180deg,rgba(16,19,24,0.84),rgba(7,9,12,0.94))] px-3 py-2.5 text-left">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-white/42">
                        Squad Role
                      </p>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-cyan-100">
                        Midline Pressure
                      </p>
                    </div>
                  </div>

                  <div className="border border-white/8 bg-[linear-gradient(180deg,rgba(15,18,22,0.8),rgba(7,8,12,0.94))] px-3 py-3 text-left">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-emerald-300/72">
                      Command Note
                    </p>
                    <p className="mt-2 font-mono text-[10px] leading-5 text-emerald-200/72">
                      Balanced rifle doctrine with enough close-quarters
                      coverage to maintain lane integrity once swarm contact
                      closes on the squad.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <PrimaryButton
                      className="min-w-[180px]"
                      href="/loadout-builder"
                    >
                      Commit Pattern
                    </PrimaryButton>
                    <SecondaryButton className="min-w-[180px]" href="/guides">
                      Review Doctrine
                    </SecondaryButton>
                  </div>
                </LoadoutSection>
              </div>
            </div>
          </PanelCard>
        </div>

        <div className="space-y-4">
          <LoadoutSection
            eyebrow="Combat Analysis"
            meta="field estimate // static readout"
            status="ONLINE"
            statusTone="online"
            title="Output Estimate"
          >
            <div className="space-y-0">
              {combatAnalysis.map((item) => (
                <AnalysisRow
                  key={item.label}
                  label={item.label}
                  tone={item.tone}
                  value={item.value}
                />
              ))}
            </div>
          </LoadoutSection>

          <LoadoutSection
            eyebrow="Viability Rating"
            meta="deployment confidence // mission coherence"
            status="SYNCED"
            statusTone="accent"
            title="Operational Fit"
          >
            <div className="border border-cyan-300/10 bg-[radial-gradient(circle_at_top,rgba(46,98,145,0.18),rgba(9,12,16,0.96)_70%)] px-3 py-4 text-center">
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/42">
                Battle Rating
              </p>
              <p className="mt-4 text-5xl font-black uppercase tracking-[0.12em] text-cyan-100">
                A-
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/34">
                reliable under ruthless operations pressure
              </p>
            </div>

            <div className="space-y-0">
              <AnalysisRow
                label="Mission Coherence"
                meta="selected mode // current doctrine"
                tone="positive"
                value="Stable"
              />
              <AnalysisRow
                label="Requisition Burden"
                meta="munition demand // upkeep profile"
                tone="neutral"
                value="Moderate"
              />
            </div>
          </LoadoutSection>

          <LoadoutSection
            eyebrow="Threat Response"
            meta="engagement posture // response ladder"
            status="LOCKED"
            statusTone="locked"
            title="Countermeasure Pattern"
          >
            <div className="space-y-0">
              {threatResponse.map((item) => (
                <AnalysisRow
                  key={item.label}
                  label={item.label}
                  meta={item.meta}
                  tone={item.tone}
                  value={item.value}
                />
              ))}
            </div>
          </LoadoutSection>

          <LoadoutSection
            eyebrow="Recommended Role"
            meta="squad placement // command directive"
            status="ONLINE"
            statusTone="online"
            title="Role Assignment"
          >
            <div className="space-y-0">
              {roleDirectives.map((item) => (
                <AnalysisRow
                  key={item.label}
                  label={item.label}
                  meta={item.meta}
                  tone={item.tone}
                  value={item.value}
                />
              ))}
            </div>
          </LoadoutSection>
        </div>
      </div>
    </section>
  );
}
