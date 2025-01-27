import type { Investigator, InvestigatorImageSource } from "@/types/game";

const wideImage: InvestigatorImageSource = {
  id: '04244_wide',
  type: 'full',
  width: 2160,
  height: 1080,
} 

export const YithianBody: Investigator = {
  code: '04244',
  image: {
    width: 2000,
    height: 1952,
    media: [
      {
        width: 1270,
        height: 1952,
        left: 365,
        top: 0
      },
      {
        source: wideImage,
        width: 513,
        height: 788,
        left: 292,
        top: 158
      },
      {
        source: wideImage,
        width: 805,
        height: 788,
        left: 0,
        top: 158
      }
    ] 
  }
}