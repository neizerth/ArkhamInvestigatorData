import type { Investigator } from "@/model";

export const ShatteredSelf: Investigator = {
  code: "10661",
  multiselect: true,
  spoiler: true,
  image: {
    width: 1736,
    height: 1334,
    face: {
      width: 376,
      height: 427,
      left: 638,
      top: 465,
    },
  },
  abilities: [
    {
      id: "reaction",
      type: "reaction",
      limitPer: "test",
    },
  ],
};
