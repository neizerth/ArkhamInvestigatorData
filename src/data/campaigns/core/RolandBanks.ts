import type { Investigator } from "@/model";

export const RolandBanks: Investigator = {
  code: '01001',
  image: {
    width: 3000,
    height: 1875,
    media: [
      {
        width: 1418,
        height: 2182,
        left: 294,
        top: 64
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
        media: [
          {
            width: 807,
            height: 1240,
            left: 866,
            top: 341
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
