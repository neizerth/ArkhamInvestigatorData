import type { Investigator, InvestigatorImage } from "@/model";


export const DaisyWalker: Investigator = {
  code: '01002',
  additionalAction: true,
  image: {
    width: 2524,
    height: 2647,
    face: {
      width: 222,
      height: 328,
      left: 1056,
      top: 1106
    }
  },
  variants: [
    {
      type: 'parallel',
      code: '90001',
      name: 'Read or Die',
      abilities: [
        {
          type: 'fast',
          limitPer: 'game'
        }
      ]
    },
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
        width: 3913,
        height: 4000,
        face: {
          width: 744,
          height: 977,
          left: 1588,
          top: 1451
        }
      }
    }
  ]
}