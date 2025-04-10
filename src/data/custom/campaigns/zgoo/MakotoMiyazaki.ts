import type { Investigator } from "@/model";

export const MakotoMiyazaki: Investigator = {
  code: "zgoo_00004",
  image: {
    width: 4320,
    height: 2880,
    face: {
      width: 432,
      height: 537,
      left: 998,
      top: 1049,
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
