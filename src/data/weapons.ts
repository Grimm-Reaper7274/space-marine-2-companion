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
];