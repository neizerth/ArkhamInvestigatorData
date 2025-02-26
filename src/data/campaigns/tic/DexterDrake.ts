import type { Investigator } from "@/model";

export const DexterDrake: Investigator = {
  code: '07004',
  image: {
    width: 2116,
    height: 1860,
    face: {
      width: 308,
      height: 355,
      left: 236,
      top: 813
    },
    media: [
      {
        width: 774,
        height: 1189,
        left: 0,
        top: 671
      }
    ]
  },
  variants: [
    {
      code: '98016',
      type: 'book',
      name: 'Blood of Baalshandor',
      image: {
        width: 1620,
        height: 2154,
        face: {
          width: 188,
          height: 203,
          left: 675,
          top: 480
        },
        media: [
          {
            width: 750,
            height: 1152,
            left: 420,
            top: 226,
            primary: true
          },
          {
            width: 1620,
            height: 1152,
            left: 0,
            top: 226
          }
        ]
      }
    },
  ]
}