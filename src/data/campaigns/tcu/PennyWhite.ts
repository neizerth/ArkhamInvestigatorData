import type { Investigator } from "@/model";

export const PennyWhite: Investigator = {
  code: "05049",
  additionalAction: true,
  spoiler: true,
  image: {
    width: 1470,
    height: 1690,
    face: {
      width: 248,
      height: 301,
      left: 555,
      top: 709,
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
