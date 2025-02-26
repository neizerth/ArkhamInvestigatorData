import type { Investigator } from "@/model";

export const FatherMateo: Investigator = {
  code: '04004',
  additionalAction: true,
  image: {
    width: 2441,
    height: 3216,
    face: {
      width: 690,
      height: 748,
      left: 462,
      top: 452
    },
    media: [
      {
        width: 1155,
        height: 1777,
        left: 345,
        top: 391,
        primary: true
      },
      {
        width: 1996,
        height: 1777,
        left: 0,
        top: 391
      }
    ] 
  },
  variants: [
    {
      code: '90081',
      type: 'parallel',
      name: 'Aura of Faith'
    }
  ]
}