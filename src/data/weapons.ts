export type WeaponType = "primary" | "secondary" | "melee";

export type WeaponRange = "close" | "mid" | "long" | "mixed";

export type WeaponDamageStyle =
  | "bolter"
  | "plasma"
  | "melta"
  | "melee"
  | "sniper"
  | "heavy"
  | "utility";

export type SpaceMarineWeapon = {
  id: string;
  name: string;
  type: WeaponType;
  usableByClasses: string[];
  damageStyle: WeaponDamageStyle;
  range: WeaponRange;
  role: string;
  strengths: string[];
  weaknesses: string[];
  bestFor: string[];
  patchNotes: string[];
};

export const spaceMarineWeapons: SpaceMarineWeapon[] = [
  {
    id: "bolt-carbine-one-handed",
    name: "Bolt Carbine One-Handed",
    type: "secondary",
    usableByClasses: ["assault", "bulwark"],
    damageStyle: "bolter",
    range: "close",
    role: "Close-range secondary weapon for aggressive pressure and backup fire.",
    strengths: [
      "Useful for mobile classes",
      "Fits aggressive close-range play",
      "Works well as a backup weapon when melee pressure is risky",
    ],
    weaknesses: [
      "Limited long-range value",
      "Not a full replacement for primary ranged weapons",
    ],
    bestFor: ["PvE", "Siege", "close-range encounters"],
    patchNotes: ["Added in Patch 13."],
  },
  {
    id: "bolt-pistol",
    name: "Bolt Pistol",
    type: "secondary",
    usableByClasses: [
      "tactical",
      "assault",
      "vanguard",
      "bulwark",
      "sniper",
      "heavy",
    ],
    damageStyle: "bolter",
    range: "mid",
    role: "Standard sidearm for reliable backup fire across every class.",
    strengths: [
      "Available to every class",
      "Reliable sidearm when primary ammunition is low",
      "Simple handling for close-to-mid range pressure",
    ],
    weaknesses: [
      "Lower burst damage than specialist pistols",
      "Limited value against heavy elite targets without sustained headshots",
    ],
    bestFor: ["all classes", "ammo backup", "general-purpose sidearm use"],
    patchNotes: ["Core secondary weapon available across the class roster."],
  },
  {
    id: "heavy-bolt-pistol",
    name: "Heavy Bolt Pistol",
    type: "secondary",
    usableByClasses: [
      "tactical",
      "assault",
      "vanguard",
      "bulwark",
      "sniper",
      "heavy",
    ],
    damageStyle: "bolter",
    range: "mid",
    role: "Hard-hitting bolter sidearm for stronger precision shots and gun strike follow-up.",
    strengths: [
      "Higher impact than the standard Bolt Pistol",
      "Strong fit for classes that need better sidearm damage",
      "Useful for finishing priority targets after melee pressure",
    ],
    weaknesses: [
      "Less forgiving than the standard Bolt Pistol",
      "Ammo discipline matters during long engagements",
    ],
    bestFor: ["precision sidearm damage", "elite follow-up", "aggressive loadouts"],
    patchNotes: ["Expanded as a secondary option across the class roster."],
  },
  {
    id: "plasma-pistol",
    name: "Plasma Pistol",
    type: "secondary",
    usableByClasses: ["tactical", "assault", "bulwark", "heavy"],
    damageStyle: "plasma",
    range: "mid",
    role: "Charged plasma sidearm for elite pressure and controlled burst damage.",
    strengths: [
      "Charged shots help pressure tougher enemies",
      "Good mid-range answer for classes with limited ranged options",
      "Pairs well with plasma-focused or defensive loadouts",
    ],
    weaknesses: [
      "Heat management can interrupt sustained fire",
      "Less comfortable for rapid panic shots than bolter sidearms",
    ],
    bestFor: ["elite damage", "charged-shot play", "mid-range support"],
    patchNotes: ["Expanded as a secondary option for Tactical and Assault loadouts."],
  },
];
