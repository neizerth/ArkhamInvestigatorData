import type { Investigator, InvestigatorImage } from "@/model";

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
    width: 2000,
    height: 1300,
    media: [
      {
        width: 686,
        height: 1054,
        left: 462,
        top: 246
      },
      {
        width: 990,
        height: 1054,
        left: 410,
        top: 246
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
    },
    {
      id: '01002_invocation-2017',
      name: 'Invocation 2 ',
      image: {
        width: 3448,
        height: 2600,
        media: [
          {
            width: 1297,
            height: 1994,
            left: 477,
            top: 559
          },
          {
            width: 3012,
            height: 2177,
            left: 0,
            top: 423
          }
        ]
      }
    }
  ]
}