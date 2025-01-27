import type { Investigator, InvestigatorImage } from "@/types/game";

const revisedImage: InvestigatorImage = {
  width: 1200,
  height: 1180,
  media: [
    {
      width: 508,
      height: 781,
      left: 312,
      top: 229
    },
    {
      width: 846,
      height: 781,
      left: 0,
      top: 180
    }
  ]
}

export const DaisyWalker: Investigator = {
  code: '01002',
  image: {
    width: 1366,
    height: 746,
    media: [
      {
        width: 453,
        height: 696,
        left: 318,
        top: 50
      },
      {
        width: 660,
        height: 696,
        left: 290,
        top: 50
      }
    ]
  },
  variants: [
    {
      type: 'parallel',
      code: '90001',
      name: 'Read or Die'
    }
  ],
  skins: [
    {
      id: '01002_revised',
      name: 'Revised Core Set',
      image: revisedImage
    },
    {
      id: '01002_revised_white',
      name: 'Revised Core (Blue)',
      image: revisedImage
    }
  ]
}