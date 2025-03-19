import type { Investigator } from "@/model";

export const AgnesBaker: Investigator = {
  code: '01004',
  image: {
    width: 2705,
    height: 3074,
    face: {
      width: 400,
      height: 561,
      left: 1216,
      top: 1439
    }
  },
  variants: [
    {
      type: 'parallel',
      code: '90017',
      name: 'Bad Blood'
    }
  ],
  skins: [
    {
      id: '01004_revised',
      name: 'Revised Core Set',
      image: {
        width: 1600,
        height: 1574,
        face: {
          width: 207,
          height: 270,
          left: 563,
          top: 483
        },
        media: [
          {
            width: 664,
            height: 1019,
            left: 268,
            top: 324,
            primary: true
          },
          {
            width: 814,
            height: 1179,
            left: 150,
            top: 324
          }
        ]
      }
    },
  ]
}