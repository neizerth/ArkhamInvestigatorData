import type { Investigator } from "@/model";

export const CarolynFern: Investigator = {
  code: '05001',
  image: {
    width: 1600,
    height: 1600,
    face: {
      width: 220,
      height: 280,
      left: 479,
      top: 207
    },
    media: [
      {
        width: 657,
        height: 1010,
        left: 240,
        top: 78,
        primary: true
      },
      {
        width: 657,
        height: 1522,
        left: 240,
        top: 78
      }
    ]
  },
  variants: [
    {
      code: '98010',
      type: 'book',
      name: 'To Fight the Black Wind',
      image: {
        width: 2792,
        height: 3917,
        face: {
          width: 368,
          height: 427,
          left: 1200,
          top: 1059
        },
        media: [
          {
            width: 888,
            height: 1364,
            left: 1047,
            top: 875,
            primary: true
          },
          {
            width: 1350,
            height: 2615,
            left: 870,
            top: 875
          }
        ]
      }
    }
  ]
}