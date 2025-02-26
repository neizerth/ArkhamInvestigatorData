import type { Investigator } from "@/model";

export const MontereyJack: Investigator = {
  code: '08007',
  image: {
    width: 2112,
    height: 1790,
    face: {
      width: 288,
      height: 315,
      left: 622,
      top: 539
    },
    media: [
      {
        width: 989,
        height: 1520,
        left: 160,
        top: 270,
        primary: true
      }
    ]
  },
  variants: [
    {
      code: '90062',
      type: 'parallel',
      name: 'Relics of the Past'
    }
  ]
}