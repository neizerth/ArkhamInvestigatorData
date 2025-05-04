import type { Investigator } from "@/model";

export const AminaZidane: Investigator = {
  code: "09011",
  image: {
    width: 1980,
    height: 3580,
    face: {
      width: 309,
      height: 493,
      left: 711,
      top: 1247,
    },
  },
  abilities: [
    {
      id: "reaction",
      type: "reaction",
      limitPer: "round",
    },
  ],
  skins: [
    {
      id: "09011_word-of-weal",
      name: "Word of Weal",
      image: {
        width: 4096,
        height: 4096,
        face: {
          width: 436,
          height: 537,
          left: 1888,
          top: 1611,
        },
      },
    },
  ],
};
