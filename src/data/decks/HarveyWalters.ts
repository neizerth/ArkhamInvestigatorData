import type { Investigator } from "@/model";

export const HarveyWalters: Investigator = {
  code: "60201",
  image: {
    width: 3170,
    height: 2991,
    face: {
      width: 372,
      height: 532,
      left: 1266,
      top: 1208,
    },
    media: [
      {
        width: 995,
        height: 1529,
        left: 139,
        top: 209,
        primary: true,
      },
      {
        width: 1200,
        height: 1396,
        left: 0,
        top: 340,
      },
    ],
  },
  abilities: [
    {
      id: "reaction",
      type: "reaction",
      limitPer: "round",
    },
  ],
};
