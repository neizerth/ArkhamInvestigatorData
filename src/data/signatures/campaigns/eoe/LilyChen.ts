import type { Investigator } from "@/model";

export const LilyChen: Investigator = {
  code: "08010",
  image: {
    width: 2985,
    height: 2156,
    face: {
      width: 197,
      height: 272,
      left: 1215,
      top: 1060,
    },
  },
  abilities: [
    {
      id: "alignment-of-spirit",
      icon: "willpower",
      effectType: "permanent",
      type: "effect",
      effect: "willpower + 1",
      disabled: true,
    },
    {
      id: "quiescence-of-thought",
      icon: "intellect",
      effectType: "permanent",
      type: "effect",
      effect: "intellect + 1",
      disabled: true,
    },
    {
      id: "prescience-of-fate",
      icon: "combat",
      effectType: "permanent",
      type: "effect",
      effect: "combat + 1",
      disabled: true,
    },
    {
      id: "balance-of-body",
      icon: "agility",
      effectType: "permanent",
      type: "effect",
      effect: "agility + 1",
      disabled: true,
    },
  ],
};
