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
  {
    id: "chainsword",
    name: "Chainsword",
    type: "melee",
    usableByClasses: ["tactical", "assault", "vanguard", "bulwark"],
    damageStyle: "melee",
    range: "close",
    role: "Balanced melee weapon for aggressive close-quarters pressure and general-purpose crowd control.",
    strengths: [
      "Reliable all-round melee option",
      "Good fit for classes that regularly fight in close range",
      "Comfortable balance of mobility, control, and sustained pressure",
    ],
    weaknesses: [
      "Less specialized than heavy melee weapons",
      "Requires commitment to close-range engagements",
    ],
    bestFor: ["general melee combat", "horde control", "mobile frontline play"],
    patchNotes: ["Core melee weapon entry."],
  },
  {
    id: "combat-knife",
    name: "Combat Knife",
    type: "melee",
    usableByClasses: ["tactical", "vanguard", "sniper"],
    damageStyle: "melee",
    range: "close",
    role: "Fast close-range melee weapon for quick strikes, repositioning, and finishing exposed targets.",
    strengths: [
      "Fast handling for mobile melee exchanges",
      "Strong fit for precision and hit-and-move play",
      "Useful when a lighter melee profile is preferred",
    ],
    weaknesses: [
      "Lower reach and stopping power than heavier melee weapons",
      "Less forgiving against dense melee pressure",
    ],
    bestFor: ["quick melee follow-up", "mobile dueling", "precision classes"],
    patchNotes: ["Tactical access added in Update 7.0."],
  },
  {
    id: "thunder-hammer",
    name: "Thunder Hammer",
    type: "melee",
    usableByClasses: ["assault", "bulwark"],
    damageStyle: "melee",
    range: "close",
    role: "Heavy melee weapon for high-impact strikes against elite targets and clustered enemies.",
    strengths: [
      "High-impact melee presence",
      "Strong against tougher close-range threats",
      "Rewards committed frontline positioning",
    ],
    weaknesses: [
      "Slower handling than lighter melee weapons",
      "Punishes missed timing and poor positioning",
    ],
    bestFor: ["elite melee damage", "frontline impact", "heavy close-range control"],
    patchNotes: ["Core melee weapon entry."],
  },
  {
    id: "power-fist",
    name: "Power Fist",
    type: "melee",
    usableByClasses: ["assault", "bulwark"],
    damageStyle: "melee",
    range: "close",
    role: "Heavy close-combat weapon for crushing melee hits and durable frontline pressure.",
    strengths: [
      "Strong burst impact in close quarters",
      "Good fit for durable melee-focused classes",
      "Effective when holding or breaking frontline positions",
    ],
    weaknesses: [
      "Short effective reach",
      "Less nimble than lighter melee options",
    ],
    bestFor: ["frontline brawling", "heavy melee impact", "close-range elite pressure"],
    patchNotes: ["Core melee weapon entry."],
  },
  {
    id: "power-sword",
    name: "Power Sword",
    type: "melee",
    usableByClasses: ["assault", "bulwark"],
    damageStyle: "melee",
    range: "close",
    role: "Versatile power weapon for controlled melee pressure and flexible frontline engagements.",
    strengths: [
      "Versatile melee profile",
      "Useful for controlled close-range engagements",
      "Fits both aggressive and defensive melee roles",
    ],
    weaknesses: [
      "Requires close-range commitment",
      "Less explosive than dedicated heavy melee choices",
    ],
    bestFor: ["controlled melee pressure", "frontline flexibility", "elite follow-up"],
    patchNotes: ["Assault access added in Update 7.0."],
  },
  {
    id: "power-axe",
    name: "Power Axe",
    type: "melee",
    usableByClasses: ["assault", "vanguard", "bulwark"],
    damageStyle: "melee",
    range: "close",
    role: "Power melee weapon for decisive close-range strikes and aggressive frontline trades.",
    strengths: [
      "Strong close-range damage profile",
      "Useful for classes that can force melee engagements",
      "Good fit for aggressive frontline and flanking roles",
    ],
    weaknesses: [
      "Limited value outside close range",
      "Needs careful positioning against ranged pressure",
    ],
    bestFor: ["aggressive melee trades", "frontline pressure", "close-range elite damage"],
    patchNotes: [
      "Added after launch and currently tracked for Assault, Vanguard, and Bulwark in this app.",
    ],
  },
];
