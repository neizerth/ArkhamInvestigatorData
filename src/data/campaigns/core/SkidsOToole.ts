import type { Investigator } from "@/model";

export const SkidsOToole: Investigator = {
  code: "01003",
  additionalAction: true,
  image: {
    width: 2772,
    height: 3015,
    face: {
      width: 366,
      height: 478,
      left: 1149,
      top: 1406,
    },
  },
  abilities: [
    {
      id: "fast",
      type: "fast",
      limitPer: "turn",
    },
  ],
  variants: [
    {
      type: "parallel",
      code: "90008",
      name: "All or Nothing",
      abilities: [
        {
          id: "fast",
          type: "fast",
          limitPer: "round",
        },
      ],
    },
  ],
  skins: [
    {
      id: "01003_revised",
      name: "Revised Core Set",
      image: {
        width: 1600,
        height: 1654,
        face: {
          width: 226,
          height: 284,
          left: 706,
          top: 733,
        },
      },
    },
  ],
};
