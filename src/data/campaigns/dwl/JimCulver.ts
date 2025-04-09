import type { Investigator, InvestigatorImageSource } from "@/model";

export const JimCulver: Investigator = {
  code: "02004",
  image: {
    width: 3619,
    height: 3868,
    face: {
      width: 504,
      height: 541,
      left: 1564,
      top: 1887,
    },
  },
  variants: [
    {
      type: "parallel",
      code: "90049",
      name: "Laid to Rest",
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
