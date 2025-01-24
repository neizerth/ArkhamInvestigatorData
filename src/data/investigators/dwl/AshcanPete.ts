import type { Investigator, InvestigatorImageSource } from "@/types/game";

const largeImage: InvestigatorImageSource = {
  id: '02005_large',
  type: 'full',
  width: 2560,
  height: 2560
};

export const AshcanPete: Investigator = {
  code: '02005',
  image: {
    width: 747,
    height: 790,
    media: [
      {
        width: 490,
        height: 753,
        left: 45,
        top: 35
      },
      {
        width: 535,
        height: 753,
        left: 0,
        top: 35
      },
      {
        source: largeImage,
        width: 1371,
        height: 2107,
        left: 231,
        top: 453
      },
      {
        source: largeImage,
        width: 2390,
        height: 2107,
        left: 0,
        top: 453
      }
    ]
  },
  variants: [
    {
      type: 'parallel',
      code: '90046',
      pack_code: 'otr',
      name: 'On the Road Again'
    }
  ]
}