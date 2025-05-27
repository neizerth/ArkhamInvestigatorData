import type { Investigator } from "@/model";

export const DarrellSimmons: Investigator = {
  code: "09015",
  image: {
    width: 2380,
    height: 2910,
    face: {
      width: 236,
      height: 265,
      left: 1096,
      top: 1211,
    },
  },
  abilities: [
    {
      id: "fast",
      type: "fast",
      limitPer: "test",
    },
  ],
  skins: [
    {
      id: "09015_darrells-kodak",
      name: "Darrel's Kodak",
      image: {
        width: 2186,
        height: 1797,
        face: {
          width: 232,
          height: 225,
          left: 1014,
          top: 873,
        },
      },
    },
  ],
};
