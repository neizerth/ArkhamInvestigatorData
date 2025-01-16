import type { Investigator } from "@/types/game";

export const DaisyWalker: Investigator = {
  code: '01002',
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
      code: '90001',
      pack_code: 'rod',
      name: 'Read or Die'
    }
  ],
  skins: [
    {
      id: '01002_revised',
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