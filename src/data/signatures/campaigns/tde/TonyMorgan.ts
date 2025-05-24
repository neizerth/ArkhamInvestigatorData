import type { Investigator } from "@/model";

export const TonyMorgan: Investigator = {
  code: "06003",
  additionalAction: true,
  image: {
    width: 2320,
    height: 2403,
    face: {
      width: 338,
      height: 328,
      left: 738 + 300,
      top: 1145,
    },
  },
  skins: [
    {
      id: "06003_colt",
      name: ".38 Long Colt",
      image: {
        width: 1745,
        height: 2109,
        face: {
          width: 204,
          height: 215,
          left: 858 - 200,
          top: 879,
        },
      },
    },
  ],
};
