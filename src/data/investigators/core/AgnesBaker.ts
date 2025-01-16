import type { Investigator } from "@/types/game";

export const AgnesBaker: Investigator = {
  code: '01004',
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
      code: '90017',
      pack_code: 'bad',
      name: 'Bad Blood'
    }
  ],
  skins: [
    {
      id: '01004_revised',
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