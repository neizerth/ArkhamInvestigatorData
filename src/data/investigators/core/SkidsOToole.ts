import type { Investigator } from "@/types/game";

export const SkidsOToole: Investigator = {
  code: '01003',
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
      code: '90008',
      pack_code: 'all_or_nothing',
      name: 'All or Nothing'
    }
  ],
  skins: [
    {
      id: '01003_revised',
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