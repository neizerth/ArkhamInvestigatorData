import type { Investigator } from "@/model";
import { image } from "../tdc/AgathaCrane";

export const CarolynFern: Investigator = {
  code: "05001",
  image: {
    width: 3160,
    height: 3510,
    face: {
      width: 208,
      height: 273,
      left: 1464,
      top: 1547,
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
        width: 5512,
        height: 4000,
        face: {
          width: 864,
          height: 864,
          left: 2240,
          top: 1640,
        },
      },
    },
    {
      id: "05001_hypnotic-therapy",
      name: "Hypnotic Therapy",
      image: {
        width: 2436,
        height: 4188,
        face: {
          width: 477,
          height: 454,
          left: 1051,
          top: 1460,
        },
      },
    },
  ],
};
