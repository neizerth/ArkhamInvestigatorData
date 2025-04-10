import type { Investigator } from "@/model";

export const HidekiHonda: Investigator = {
  code: "zgoo_00007",
  image: {
    width: 2160,
    height: 1080,
    face: {
      width: 118,
      height: 129,
      left: 497,
      top: 216,
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
