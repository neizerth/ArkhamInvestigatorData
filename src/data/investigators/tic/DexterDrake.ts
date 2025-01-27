import type { Investigator } from "@/types/game";

export const DexterDrake: Investigator = {
  code: '07004',
  image: {
    width: 5461,
    height: 3072,
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
        media: [
          {
            width: 750,
            height: 1152,
            left: 420,
            top: 226
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