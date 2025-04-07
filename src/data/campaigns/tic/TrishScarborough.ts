import type { Investigator } from "@/model";

export const TrishScarborough: Investigator = {
  code: '07003',
  image: {
    width: 1640,
    height: 1416,
    face: {
      width: 242,
      height: 317,
      left: 646,
      top: 607
    },
    media: [
      {
        width: 1561,
        height: 2152,
        left: 0,
        top: 270
      }
    ]
  },
  abilities: [
    {
      type: 'reaction',
      limitPer: 'round'
    }
  ]
}