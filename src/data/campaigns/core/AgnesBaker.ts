import type { Investigator } from "@/model";

export const AgnesBaker: Investigator = {
  code: '01004',
  image: {
    width: 2289,
    height: 2500,
    media: [
      {
        width: 1629,
        height: 2503,
        left: 674,
        top: -19
      }
    ]
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
        media: [
          {
            width: 664,
            height: 1019,
            left: 268,
            top: 324
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