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
        width: 1600,
        height: 1654,
        face: {
          width: 226,
          height: 284,
          left: 706,
          top: 733
        }
      }
    },
  ]
}