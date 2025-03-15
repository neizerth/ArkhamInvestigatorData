import type { Investigator } from "@/model";

export const GloriaGoldberg: Investigator = {
  code: '11014',
  image: {
    width: 2000,
    height: 2000,
    face: {
      width: 488,
      height: 513,
      left: 694,
      top: 619
    },
    media: [
      {
        width: 956,
        height: 1468,
        left: 537,
        top: 532,
        primary: true
      },
      {
        width: 1630,
        height: 1470,
        left: 0,
        top: 530
      }
    ]
  },
  variants: [
    {
      code: '98019',
      type: 'book',
      name: 'Dark Revelations',
      image: {
        width: 1600,
        height: 1600,
        face: {
          width: 339,
          height: 424,
          left: 774,
          top: 1127
        },
        media: [
          {
            width: 747,
            height: 992,
            left: 345,
            top: 0
          }
        ]
      }
    }
  ]
}