import type { Investigator } from "@/model";

export const RolandBanks: Investigator = {
  code: '01001',
  image: {
    width: 2000,
    height: 2000,
    face: {
      width: 339,
      height: 437,
      left: 543,
      top: 837
    }
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
        }
      },
      abilities: [
        {
          type: 'reaction',
          limitPer: 'round'
        }
      ]
    },
    {
      type: 'parallel',
      code: '90024',
      name: 'By the Book',
      abilities: [
        {
          type: 'fast',
          limitPer: 'game'
        }
      ]
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
        }
      }
    },
  ],
  abilities: [
    {
      type: 'reaction',
      limitPer: 'round'
    }
  ]
}
