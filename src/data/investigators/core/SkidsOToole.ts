import type { Investigator } from "@/types/game";

export const SkidsOToole: Investigator = {
  code: '01003',
  image: {
    width: 2917,
    height: 2083,
    media: [
      {
        width: 1355,
        height: 2084,
        left: 715,
        top: 0
      },
      {
        width: 2050,
        height: 2084,
        left: 400,
        top: 0
      }
    ]
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
        width: 1200,
        height: 1124,
        media: [
          {
            width: 549,
            height: 843,
            left: 120,
            top: 154
          },
          {
            width: 900,
            height: 910,
            left: 50,
            top: 150
          }
        ]
      }
    },
  ]
}