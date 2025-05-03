import type { Investigator } from "@/model";

export const CarsonSinclair: Investigator = {
  code: "09001",
  additionalAction: true,
  image: {
    width: 1760,
    height: 2119,
    face: {
      width: 318,
      height: 340,
      left: 663,
      top: 686,
    },
  },
  abilities: [
    {
      id: "give-action",
      icon: "plus",
      type: "special-action",
      limitPer: "round",
      perInvestigator: true,
    },
  ],
};
