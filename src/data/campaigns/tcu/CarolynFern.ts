import type { Investigator } from "@/model";
import { image } from "../tdc/AgathaCrane";

export const CarolynFern: Investigator = {
  code: "05001",
  image: {
    width: 1770,
    height: 2130,
    face: {
      width: 201,
      height: 296,
      left: 648,
      top: 730,
    },
  },
  variants: [
    {
      code: "98010",
      type: "book",
      name: "To Fight the Black Wind",
      image: {
        width: 3516,
        height: 4000,
        face: {
          width: 228,
          height: 333,
          left: 1640,
          top: 1779,
        },
      },
    },
  ],
  skins: [
    {
      id: "05001_rational-thought",
      name: "Rational Thought",
      image: {
        width: 8640,
        height: 6270,
        face: {
          width: 192,
          height: 293,
          left: 4160,
          top: 2933,
        },
      },
    },
  ],
};
