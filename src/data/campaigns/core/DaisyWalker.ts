import type { Investigator, InvestigatorImage } from "@/model";


export const DaisyWalker: Investigator = {
  code: '01002',
  additionalAction: true,
  image: {
    width: 1866,
    height: 1931,
    face: {
      width: 248,
      height: 363,
      left: 740,
      top: 777
    }
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
      image: {
        width: 1880,
        height: 1825,
        face: {
          width: 240,
          height: 265,
          left: 807,
          top: 902
        }
      }
    },
    {
      id: '01002_revised_white',
      name: 'Revised Core (White)',
      image: {
        width: 2190,
        height: 2105,
        face: {
          width: 198,
          height: 259,
          left: 867,
          top: 1190
        }
      }
    },
    {
      id: '01002_invocation-2017',
      name: 'Invocation 2017',
      image: {
        width: 3448,
        height: 2600,
        face: {
          width: 620,
          height: 829,
          left: 1152,
          top: 671
        },
        media: [
          {
            width: 1297,
            height: 1994,
            left: 477,
            top: 559,
            primary: true
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