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
        width: 1616,
        height: 2146,
        face: {
          width: 266,
          height: 288,
          left: 847,
          top: 503
        },
        media: [
          {
            width: 721,
            height: 1107,
            left: 616,
            top: 417,
            primary: true
          },
          {
            width: 1260,
            height: 1513,
            left: 280,
            top: 417
          }
        ]
      }
    }
  ]
}