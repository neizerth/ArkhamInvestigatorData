import type { Investigator } from "@/types/game";

export const WendyAdams: Investigator = {
  code: '01005',
  image: {
    width: 2267,
    height: 3000,
    media: [
      {
        width: 1692,
        height: 2600,
        left: 366,
        top: 116
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
      pack_code: 'bad',
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
        media: [
          {
            width: 581,
            height: 894,
            left: 252,
            top: 388
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