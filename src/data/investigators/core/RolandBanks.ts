import type { Investigator } from "@/types/game";

export const RolandBanks: Investigator = {
  code: '01001',
  image: {
    width: 3000,
    height: 1875,
    top: 65,
    left: 289,
    right: 1710,
    bottom: -375
  },
  variants: [
    {
      type: 'book',
      code: '98004',
      pack_code: 'tdor',
      name: 'The Dirge of Reason',
      image: {
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
    },
    {
      type: 'parallel',
      code: '90024',
      pack_code: 'btb',
      name: 'By the Book'
    }
  ],
  skins: [
    {
      id: '01001_revised',
      name: 'Revised Core Set',
      image: {
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    },
  ]
}
