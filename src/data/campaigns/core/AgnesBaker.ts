import type { Investigator } from "@/model";

export const AgnesBaker: Investigator = {
  code: "01004",
  image: {
    width: 2705,
    height: 3074,
    face: {
      width: 400,
      height: 561,
      left: 1216,
      top: 1439,
    },
  },
  abilities: [
    {
      id: "reaction",
      type: "reaction",
      limitPer: "phase",
    },
  ],
  variants: [
    {
      type: "parallel",
      code: "90017",
      name: "Bad Blood",
    },
  ],
  skins: [
    {
      id: "01004_revised",
      name: "Revised Core Set",
      image: {
        width: 2130,
        height: 2184,
        face: {
          width: 236,
          height: 303,
          left: 1074,
          top: 1055,
        },
      },
    },
    {
      id: "01004_dark-memory",
      name: "Dark Memory",
      image: {
        width: 2502,
        height: 2294,
        face: {
          width: 221,
          height: 363,
          left: 1251,
          top: 1097,
        },
      },
    },
    {
      id: "01004_dark-memory2",
      name: "Dark Memory",
      image: {
        width: 2012,
        height: 2008,
        face: {
          width: 160,
          height: 219,
          left: 919 - 150,
          top: 897,
        },
      },
    },
  ],
};
