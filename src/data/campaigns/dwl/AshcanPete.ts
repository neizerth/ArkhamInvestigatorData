import type { Investigator, InvestigatorImageSource } from "@/model";

export const AshcanPete: Investigator = {
  code: '02005',
  image: {
    width: 2560,
    height: 2560,
    face: {
      width: 346,
      height: 349,
      left: 618,
      top: 683
    },
    media: [
      {
        width: 490,
        height: 753,
        left: 45,
        top: 35,
        primary: true
      },
      {
        width: 535,
        height: 753,
        left: 0,
        top: 35
      }
    ]
  },
  variants: [
    {
      type: 'parallel',
      code: '90046',
      name: 'On the Road Again'
    }
  ]
}