import type { Investigator } from "@/model";

export const MarionTavares: Investigator = {
  code: "11001",
  image: {
    width: 2600,
    height: 2440,
    face: {
      width: 264,
      height: 339,
      left: 1056,
      top: 1147,
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
