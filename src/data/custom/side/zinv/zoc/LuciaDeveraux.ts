import type { Investigator } from "@/model";

export const LuciaDeveraux: Investigator = {
  code: "zoc_31010",
  additionalAction: true,
  image: {
    width: 1500,
    height: 2000,
    face: {
      width: 215,
      height: 240,
      left: 344,
      top: 515,
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
