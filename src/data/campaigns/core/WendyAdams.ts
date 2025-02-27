


import type { Investigator } from "@/model";

export const WendyAdams: Investigator = {
  code: '01005',
  image: {
    width: 2267,
    height: 3850,
    face: {
      width: 554,
      height: 651,
      left: 820,
      top: 1341
    },
    media: [
      {
        width: 1692,
        height: 2600,
        left: 366,
        top: 116,
        primary: true
      },
      {
        width: 1800,
        height: 2890,
        left: 320,
        top: 110
      }
    ]
  },
  variants: [
    {
      type: 'parallel',
      code: '90037',
      name: 'Red Tide Rising'
    }
  ],
  skins: [
    {
      id: '01005_revised',
      name: 'Revised Core Set',
      image: {
        width: 1600,
        height: 1573,
        face: {
          width: 169,
          height: 162,
          left: 481,
          top: 509
        },
        media: [
          {
            width: 581,
            height: 894,
            left: 252,
            top: 388,
            primary: true
          },
          {
            width: 581,
            height: 1185,
            left: 252,
            top: 388
          }
        ]
      }
    },
  ]
}