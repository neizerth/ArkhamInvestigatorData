import type { Investigator } from "@/model";

export const AgnesBaker: Investigator = {
  code: '01004',
  image: {
    width: 2705,
    height: 3074,
    face: {
      width: 400,
      height: 561,
      left: 1216,
      top: 1439
    }
  },
  abilities: [
    {
      type: 'reaction',
      limitPer: 'phase'
    }
  ],
  variants: [
    {
      type: 'parallel',
      code: '90017',
      name: 'Bad Blood'
    }
  ],
  skins: [
    {
      id: '01004_revised',
      name: 'Revised Core Set',
      image: {
        width: 2130,
        height: 2184,
        face: {
          width: 236,
          height: 303,
          left: 1074,
          top: 1055
        }
      }
    },
  ]
}