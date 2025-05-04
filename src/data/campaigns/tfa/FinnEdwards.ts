import type { Investigator } from "@/model";

export const FinnEdwards: Investigator = {
  code: "04003",
  additionalAction: true,
  image: {
    width: 1625,
    height: 1980,
    face: {
      width: 219,
      height: 287,
      left: 743,
      top: 805,
    },
  },
  skins: [
    {
      id: "04003_coc",
      name: "Call of Chtulhu",
      image: {
        width: 2582,
        height: 2292,
        face: {
          width: 194,
          height: 243,
          left: 1118,
          top: 1003,
        },
      },
    },
  ],
};
