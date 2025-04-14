import type { Investigator } from "@/model";

export const HidekiHonda: Investigator = {
  code: "zgoo_00007",
  image: {
    width: 1744,
    height: 1744,
    face: {
      width: 148,
      height: 202,
      left: 763,
      top: 800,
    },
  },
  abilities: [
    {
      id: "fast",
      type: "fast",
      limitPer: "round",
    },
  ],
};
