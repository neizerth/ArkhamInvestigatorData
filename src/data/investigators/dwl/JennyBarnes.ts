import type { Investigator } from "@/types/game";

export const JennyBarnes: Investigator = {
  code: '02003',
  image: {
    width: 700,
    height: 550,
    media: [
      {
        width: 352,
        height: 352,
        left: 228,
        top: 84
      },
      {
        width: 520,
        height: 352,
        left: 100,
        top: 84
      },
      {
        source: {
          id: '02003_wide',
          type: 'full',
          width: 1200,
          height: 545
        },
        width: 1170,
        height: 515,
        left: 240,
        top: 30
      }
    ]
  },
  variants: [
    {
      type: 'book',
      code: '98006',
      pack_code: 'tdor',
      name: 'Hour of the Huntress',
      image: {
        width: 2596,
        height: 3500,
        media: [
          {
            width: 1116,
            height: 1715,
            left: 590,
            top: 835
          },
          {
            width: 1116,
            height: 2045,
            left: 590,
            top: 835
          },
        ]
      }
    }
  ]
}