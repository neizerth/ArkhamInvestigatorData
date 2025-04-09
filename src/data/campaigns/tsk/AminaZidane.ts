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
};
