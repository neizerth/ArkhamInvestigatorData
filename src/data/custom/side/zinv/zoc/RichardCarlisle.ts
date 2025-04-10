import type { Investigator } from "@/model";

export const RichardCarlisle: Investigator = {
  code: "zoc_31014",
  image: {
    width: 4200,
    height: 6872,
    face: {
      width: 858,
      height: 1057,
      left: 870,
      top: 3473,
    },
  },
  abilities: [
    {
      id: "reaction-1",
      type: "reaction",
      limitPer: "round",
      icon: "card-outline",
    },
    {
      id: "reaction-2",
      type: "reaction",
      limitPer: "round",
      icon: "resource",
    },
    {
      id: "reaction-3",
      type: "reaction",
      limitPer: "round",
      icon: "health",
    },
  ],
};
