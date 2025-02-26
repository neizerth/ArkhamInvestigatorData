import type { Investigator } from "@/model";

export const RolandBanks: Investigator = {
  code: '01001',
  image: {
    width: 3000,
    height: 1875,
    face: {
      width: 663,
      height: 640,
      left: 660,
      top: 455
    },
    media: [
      {
        width: 1418,
        height: 2182,
        left: 294,
        top: 64,
        primary: true
      },
      {
        width: 1600,
        height: 1875,
        left: 150,
        top: 65
      }
    ]
  },
  variants: [
    {
      type: 'book',
      code: '98004',
      name: 'The Dirge of Reason',
      image: {
        width: 2792,
        height: 2616,
        face: {
          width: 370,
          height: 389,
          left: 1142,
          top: 533
        },
        media: [
          {
            width: 807,
            height: 1240,
            left: 866,
            top: 341,
            primary: true
          },
          {
            width: 1400,
            height: 2275,
            left: 600,
            top: 341
          }
        ]
      }
    },
    {
      type: 'parallel',
      code: '90024',
      name: 'By the Book'
    }
  ],
  skins: [
    {
      id: '01001_revised',
      name: 'Revised Core Set',
      image: {
        width: 1050,
        height: 981,
        face: {
          width: 147,
          height: 134,
          left: 396,
          top: 304
        },
        media: [
          {
            width: 385,
            height: 592,
            left: 274,
            top: 196,
            primary: true
          },
          {
            width: 680,
            height: 592,
            left: 50,
            top: 196
          }
        ]
      }
    },
  ]
}
