import type { Investigator } from "@/model";

export const LolaHayes: Investigator = {
  code: "03006",
  image: {
    width: 2355,
    height: 2540,
    face: {
      width: 241,
      height: 295,
      left: 1105,
      top: 1150,
    },
  },
  roles: ["guardian", "seeker", "rogue", "mystic", "survivor", "neutral"],
  skins: [
    {
      id: "03006_improvisation",
      name: "Improvisation",
      image: {
        width: 4580,
        height: 4096,
        face: {
          width: 512,
          height: 489,
          left: 2142,
          top: 1715,
        },
      },
    },
  ],
  abilities: [
    {
      id: "role-switch",
      type: "fast",
      limitPer: "round",
    },
  ],
  variants: [
    {
      type: "taboo",
      code: "03006",
      name: "Taboo",
    },
  ],
};
