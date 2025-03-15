import type { Investigator } from "@/model";

export const SkidsOToole: Investigator = {
  code: '01003',
  additionalAction: true,
  image: {
    width: 2207,
    height: 2200,
    face: {
      width: 392,
      height: 448,
      left: 857,
      top: 1048
    }
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
        face: {
          width: 219,
          height: 259,
          left: 300,
          top: 250
        },
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