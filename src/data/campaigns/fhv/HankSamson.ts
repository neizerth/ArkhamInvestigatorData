import type { Investigator } from "@/model";

export const HankSamson: Investigator = {
  code: '10015',
  variantName: 'Assistant. Warden.',
  image: {
    width: 2000,
    height: 1500,
    media: [
      {
        width: 730,
        height: 1122,
        left: 316,
        top: 338
      },
      {
        width: 1260,
        height: 1173,
        left: 0,
        top: 338
      }
    ]
  },
  variants: [
    {
      type: 'custom',
      code: '10016a',
      name: 'Assistant. Resolute.'
    },
    {
      type: 'custom',
      code: '10016b',
      name: 'Warden. Resolute.'
    }
  ]
}