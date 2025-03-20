import type { Investigator } from "@/model";

export const NormanWithers: Investigator = {
  code: '08004',
  image: {
    width: 1232,
    height: 1654,
    face: {
      width: 258,
      height: 295,
      left: 462,
      top: 301
    },
    media: [
      {
        width: 750,
        height: 1152,
        left: 192,
        top: 213,
        primary: true
      },
      {
        width: 900,
        height: 1152,
        left: 100,
        top: 213
      }
    ]
  },
  variants: [
    {
      code: '98007',
      type: 'book',
      name: 'Ire of the Void',
      image: {
        width: 2346,
        height: 2936,
        face: {
          width: 211,
          height: 281,
          left: 1173,
          top: 1295
        }
      }
    }
  ]
}