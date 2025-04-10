import type { Investigator } from "@/model";

export const AkiraArisato: Investigator = {
  code: "zgoo_00010",
  image: {
    width: 1920,
    height: 3307,
    face: {
      width: 214,
      height: 280,
      left: 879,
      top: 434,
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
