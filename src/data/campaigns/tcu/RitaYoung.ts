import type { Investigator, InvestigatorImageSource } from "@/model";

export const RitaYoung: Investigator = {
  code: "05005",
  image: {
    width: 2004,
    height: 1684,
    face: {
      width: 248,
      height: 303,
      left: 722,
      top: 759,
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
