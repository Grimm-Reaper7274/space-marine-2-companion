export type SpaceMarineClass = {
  id: string;
  name: string;
  role: string;
  difficulty: string;
  playstyle: string;
  classAbility: string;
  bestFor: string[];
  availableWeapons: {
    primary: string[];
    secondary: string[];
    melee: string[];
  };
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
    bestFor: [
      "Balanced squads that need elite priority damage.",
      "Players learning lane control and target marking.",
      "Operations where horde control and boss pressure both matter.",
    ],
    availableWeapons: {
      primary: ["Auto Bolt Rifle", "Bolt Rifle", "Plasma Incinerator"],
      secondary: ["Bolt Pistol"],
      melee: ["Chainsword"],
    },
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
    bestFor: [
      "Players who like committing first and disrupting backlines.",
      "Squads that need fast melee pressure.",
      "Missions with dangerous ranged threats that must be collapsed quickly.",
    ],
    availableWeapons: {
      primary: [],
      secondary: ["Heavy Bolt Pistol", "Bolt Pistol"],
      melee: ["Chainsword", "Thunder Hammer", "Power Fist"],
    },
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
    bestFor: [
      "Fast pressure players who want elite picks.",
      "Teams that can cover sudden forward dives.",
      "Encounters where mobility and target isolation decide the fight.",
    ],
    availableWeapons: {
      primary: ["Instigator Bolt Carbine", "Occulus Bolt Carbine"],
      secondary: ["Bolt Pistol"],
      melee: ["Combat Knife", "Chainsword"],
    },
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
    bestFor: [
      "Teams that need a durable point holder.",
      "Objective defense, revives, and choke control.",
      "Players who prefer measured melee and squad protection.",
    ],
    availableWeapons: {
      primary: [],
      secondary: ["Bolt Pistol", "Plasma Pistol"],
      melee: ["Chainsword", "Power Sword", "Storm Shield"],
    },
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
    bestFor: [
      "Accurate players who prefer target priority.",
      "Elite-heavy waves and ranged threat control.",
      "Squads that need overwatch without constant frontline exposure.",
    ],
    availableWeapons: {
      primary: ["Bolt Sniper Rifle", "Las Fusil", "Stalker Bolt Rifle"],
      secondary: ["Bolt Pistol"],
      melee: ["Combat Knife"],
    },
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
    bestFor: [
      "Squads that need volume fire and reliable suppression.",
      "Boss pressure from a protected backline.",
      "Players who like stance discipline and ammunition management.",
    ],
    availableWeapons: {
      primary: ["Heavy Bolter", "Heavy Plasma Incinerator", "Multi-Melta"],
      secondary: ["Bolt Pistol"],
      melee: [],
    },
    patchNotes:
      "Ammunition discipline is essential. Strongest when protected by a stable frontline.",
  },
];
