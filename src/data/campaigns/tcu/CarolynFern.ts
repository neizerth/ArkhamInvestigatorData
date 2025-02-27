import type { Investigator } from "@/model";

export const CarolynFern: Investigator = {
  code: '05001',
  image: {
    width: 1770,
    height: 2130,
    face: {
      width: 201,
      height: 296,
      left: 648,
      top: 730
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