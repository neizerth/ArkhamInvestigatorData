import type { Investigator, InvestigatorImageSource } from "@/types/game";

export const wideImage: InvestigatorImageSource = {
  id: 'zgoo_00010_wide',
  type: 'full',
  width: 4000,
  height: 2668
}

export const AkiraArisato: Investigator = {
  code: 'zgoo_00010',
  image: {
    width: 1920,
    height: 3307,
    media: [
      {
        width: 1069,
        height: 1643,
        left: 462,
        top: 171
      },
      {
        width: 1320,
        height: 3136,
        left: 340,
        top: 171
      },
      {
        source: wideImage,
        width: 1299,
        height: 1996,
        left: 419,
        top: 670
      },
      {
        source: wideImage,
        width: 4000,
        height: 1996,
        left: 0,
        top: 670
      }
    ]
  }
}