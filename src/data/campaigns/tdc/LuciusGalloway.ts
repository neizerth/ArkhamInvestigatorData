import type { Investigator } from "@/model";

export const LuciusGalloway: Investigator = {
  code: "11004",
  image: {
    width: 2610,
    height: 2380,
    face: {
      width: 352,
      height: 491,
      left: 1002,
      top: 867,
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
