import type { Investigator } from "@/model";

export const Sarmentus: Investigator = {
  code: "zdh_00007",
  image: {
    width: 1628,
    height: 1900,
    face: {
      width: 199,
      height: 223,
      left: 745,
      top: 812,
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
