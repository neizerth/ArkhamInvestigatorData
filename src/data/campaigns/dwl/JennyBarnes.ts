import type { Investigator, InvestigatorImageSource } from "@/model";

export const JennyBarnes: Investigator = {
  code: '02003',
  image: {
    width: 2804,
    height: 3659,
    face: {
      width: 308,
      height: 357,
      left: 1629,
      top: 1864
    },
    media: [
      {
        width: 702,
        height: 1078,
        left: 459,
        top: 165,
        primary: true
      },
      {
        width: 1060,
        height: 930,
        left: 190,
        top: 170
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
        face: {
          width: 178,
          height: 185,
          left: 535,
          top: 620
        },
        media: [
          {
            width: 825,
            height: 1268,
            left: 209,
            top: 260,
            primary: true
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
      code: '98001',
      name: 'Hour of the Huntress',
      image: {
        width: 2596,
        height: 3500,
        face: {
          width: 202,
          height: 232,
          left: 1080,
          top: 1180
        },
        media: [
          {
            width: 1116,
            height: 1715,
            left: 590,
            top: 835,
            primary: true
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