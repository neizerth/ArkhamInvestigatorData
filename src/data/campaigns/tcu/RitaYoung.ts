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
  skins: [
    {
      id: "05005_not-without-a-fight",
      name: "Not without a fight",
      image: {
        width: 1762,
        height: 1646,
        face: {
          width: 113,
          height: 143,
          left: 824,
          top: 751,
        },
      },
    },
  ],
};
