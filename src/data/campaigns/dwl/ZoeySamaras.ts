import type { Investigator } from "@/model";

export const ZoeySamaras: Investigator = {
  code: '02001',
  image: {
    width: 1382,
    height: 1800,
    face: {
      width: 200,
      height: 272,
      left: 781,
      top: 676
    },
    media: [
      {
        width: 750,
        height: 1153,
        left: 494,
        top: 73,
        primary: true
      },
      {
        width: 814,
        height: 1213,
        left: 430,
        top: 50
      }
    ]
  },
  variants: [
    {
      type: 'parallel',
      code: '90059',
      name: 'Path of the Righteous'
    }
  ]
}