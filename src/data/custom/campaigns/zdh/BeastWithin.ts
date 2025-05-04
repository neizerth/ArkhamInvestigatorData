import type { Investigator } from "@/model";

export const BeastWithin: Investigator = {
  code: "zdh_00013",
  variantName: "Beast Within",
  image: {
    width: 2000,
    height: 2000,
    face: {
      width: 363,
      height: 325,
      left: 927,
      top: 755,
    },
  },
  variants: [
    {
      type: "custom",
      code: "zdh_00012",
      name: "Henry Bigby",
    },
  ],
};
