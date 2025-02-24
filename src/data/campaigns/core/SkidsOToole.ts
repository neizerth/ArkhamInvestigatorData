import type { Investigator } from "@/model";

export const SkidsOToole: Investigator = {
  code: '01003',
  additionalAction: true,
  image: {
    width: 2917,
    height: 2374,
    media: [
      {
        width: 1355,
        height: 2083,
        left: 715,
        top: 291,
        primary: true
      },
      {
        width: 2050,
        height: 2084,
        left: 400,
        top: 291
      }
    ]
  },
  variants: [
    {
      type: 'parallel',
      code: '90008',
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
            top: 154,
            primary: true
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