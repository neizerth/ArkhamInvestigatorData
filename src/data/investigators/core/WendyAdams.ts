import type { Investigator } from "@/types/game";

export const WendyAdams: Investigator = {
  code: '01005',
  image: {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
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