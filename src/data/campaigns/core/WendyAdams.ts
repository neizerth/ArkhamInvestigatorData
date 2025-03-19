


import type { Investigator } from "@/model";

export const WendyAdams: Investigator = {
  code: '01005',
  image: {
    width: 3656,
    height: 3435,
    face: {
      width: 444,
      height: 685,
      left: 1413,
      top: 1265
    }
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