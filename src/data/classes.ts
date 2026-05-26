export type SpaceMarineClass = {
  id: string;
  name: string;
  role: string;
  difficulty: string;
  playstyle: string;
  classAbility: string;
  bestFor: string;
  availableWeapons: string[];
  patchNotes: string;
};

export const spaceMarineClasses: SpaceMarineClass[] = [
  {
    id: "tactical",
    name: "Tactical",
    role: "Midline weapons generalist",
    difficulty: "Moderate",
    playstyle:
      "Controls the center lane with reliable rifle pressure, grenade timing, and fast target marking for squad focus fire.",
    classAbility: "Auspex Scan",
    bestFor: "Balanced squads that need elite priority damage without losing horde control.",
    availableWeapons: [
      "Auto Bolt Rifle",
      "Bolt Rifle",
      "Plasma Incinerator",
      "Bolt Pistol",
      "Chainsword",
    ],
    patchNotes:
      "Baseline doctrine stable. Best deployed as the reference class for first loadout planning.",
  },
  {
    id: "assault",
    name: "Assault",
    role: "Jump pack shock assault",
    difficulty: "High",
    playstyle:
      "Breaks enemy formations with vertical entry, melee burst windows, and aggressive execution chains.",
    classAbility: "Jump Pack",
    bestFor: "Players who like committing first, disrupting backlines, and creating space for the squad.",
    availableWeapons: [
      "Heavy Bolt Pistol",
      "Bolt Pistol",
      "Chainsword",
      "Thunder Hammer",
      "Power Fist",
    ],
    patchNotes:
      "Requires disciplined exits after impact. Overextension remains the main operational risk.",
  },
  {
    id: "vanguard",
    name: "Vanguard",
    role: "Mobile duelist and disruptor",
    difficulty: "High",
    playstyle:
      "Uses hookline mobility to isolate priority targets, collapse into melee, and reposition before the wave locks down.",
    classAbility: "Grapnel Launcher",
    bestFor: "Fast pressure players who want elite picks and constant angle changes.",
    availableWeapons: [
      "Instigator Bolt Carbine",
      "Occulus Bolt Carbine",
      "Bolt Pistol",
      "Combat Knife",
      "Chainsword",
    ],
    patchNotes:
      "Strong tempo class when paired with squad covering fire. Benefits from clean target selection.",
  },
  {
    id: "bulwark",
    name: "Bulwark",
    role: "Shielded frontline anchor",
    difficulty: "Moderate",
    playstyle:
      "Holds contested ground with shield pressure, close-range control, and squad-saving defensive timing.",
    classAbility: "Chapter Banner",
    bestFor: "Teams that need a durable point holder for revives, objectives, and choke control.",
    availableWeapons: [
      "Bolt Pistol",
      "Plasma Pistol",
      "Chainsword",
      "Power Sword",
      "Storm Shield",
    ],
    patchNotes:
      "Excellent objective stability. Damage output depends on measured melee openings.",
  },
  {
    id: "sniper",
    name: "Sniper",
    role: "Precision overwatch",
    difficulty: "High",
    playstyle:
      "Deletes priority threats from range, manages cloak windows, and protects the squad before elites reach melee.",
    classAbility: "Camo Cloak",
    bestFor: "Accurate players who prefer target priority, ranged control, and low exposure.",
    availableWeapons: [
      "Bolt Sniper Rifle",
      "Las Fusil",
      "Stalker Bolt Rifle",
      "Bolt Pistol",
      "Combat Knife",
    ],
    patchNotes:
      "Punishes missed shots more than other classes. Maintains high value against elite-heavy waves.",
  },
  {
    id: "heavy",
    name: "Heavy",
    role: "Suppressive fire support",
    difficulty: "Moderate",
    playstyle:
      "Locks firing lanes with heavy weapons, sustained horde clear, and defensive stance management.",
    classAbility: "Iron Halo",
    bestFor: "Squads that need volume fire, boss pressure, and reliable suppression from the backline.",
    availableWeapons: [
      "Heavy Bolter",
      "Heavy Plasma Incinerator",
      "Multi-Melta",
      "Bolt Pistol",
    ],
    patchNotes:
      "Ammunition discipline is essential. Strongest when protected by a stable frontline.",
  },
];
