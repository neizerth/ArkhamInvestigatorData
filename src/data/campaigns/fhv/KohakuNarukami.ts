import type { Investigator } from "@/model";

export const KohakuNarukami: Investigator = {
  code: "10012",
  image: {
    width: 2500,
    height: 2109,
    face: {
      width: 238,
      height: 321,
      left: 1110,
      top: 933,
    },
  },
  abilities: [
    {
      id: "bless-curse",
      type: "action",
      icon: "seal",
      limitPer: "round",
    },
  ],
  skins: [
    {
      id: "10012_ethereal-weaving",
      name: "Ethereal Weaving",
      image: {
        width: 1896,
        height: 1714,
        face: {
          width: 204,
          height: 238,
          left: 819,
          top: 659,
        },
      },
    },
  ],
};
