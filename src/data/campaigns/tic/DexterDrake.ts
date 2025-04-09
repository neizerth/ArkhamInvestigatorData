import type { Investigator } from "@/model";

export const DexterDrake: Investigator = {
  code: "07004",
  image: {
    width: 3066,
    height: 1860,
    face: {
      width: 294,
      height: 345,
      left: 1184,
      top: 799,
    },
  },
  variants: [
    {
      code: "98016",
      type: "book",
      name: "Blood of Baalshandor",
      image: {
        width: 2550,
        height: 2954,
        face: {
          width: 196,
          height: 225,
          left: 1202,
          top: 1261,
        },
      },
    },
  ],
  abilities: [
    {
      id: "fast",
      type: "fast",
      limitPer: "round",
    },
  ],
};
