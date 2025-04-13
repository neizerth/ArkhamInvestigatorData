import type { Investigator } from "@/model";

export const TrishScarborough: Investigator = {
  code: "07003",
  image: {
    width: 1640,
    height: 1416,
    face: {
      width: 242,
      height: 317,
      left: 646,
      top: 607,
    },
  },
  abilities: [
    {
      id: "reaction",
      type: "reaction",
      limitPer: "round",
    },
  ],
  variants: [
    {
      type: "taboo",
      code: "07003",
      name: "Taboo",
      abilities: [
        {
          id: "reaction",
          type: "reaction",
          limitPer: "round",
        },
      ],
    },
  ],
};
