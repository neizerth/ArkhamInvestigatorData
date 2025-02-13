import type { Investigator, InvestigatorImageSource } from "@/model";

const wideImage: InvestigatorImageSource = {
  id: '02003_wide',
  type: 'full',
  width: 1200,
  height: 545
}

export const JennyBarnes: Investigator = {
  code: '02003',
  image: {
    width: 1400,
    height: 1100,
    media: [
      {
        width: 702,
        height: 1078,
        left: 459,
        top: 165
      },
      {
        width: 1060,
        height: 930,
        left: 190,
        top: 170
      },
      {
        source: wideImage,
        width: 570,
        height: 529,
        left: 450,
        top: 30
      },
      {
        source: wideImage,
        width: 1170,
        height: 515,
        left: 240,
        top: 30
      }
    ]
  },
  variants: [
    {
      type: 'parallel',
      code: '90084',
      name: 'Pistols and Pearls',
      image: {
        width: 1920,
        height: 1920,
        media: [
          {
            width: 825,
            height: 1268,
            left: 209,
            top: 260
          },
          {
            width: 1340,
            height: 1630,
            left: 0,
            top: 290
          },
        ]
      }
    },
    {
      type: 'book',
      code: '98006',
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