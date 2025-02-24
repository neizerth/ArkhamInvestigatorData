import type { Investigator, InvestigatorImageSource } from "@/model";

const wideImage: InvestigatorImageSource = {
  id: '04005_wide',
  type: 'full',
  width: 1200,
  height: 476,
} 

export const CalvinWright: Investigator = {
  code: '04005',
  image: {
    width: 2272,
    height: 3073,
    media: [
      {
        width: 1204,
        height: 1850,
        left: 446,
        top: 80,
        primary: true
      },
      {
        width: 2050,
        height: 2993,
        left: 100,
        top: 80
      },
      {
        source: wideImage,
        width: 393,
        height: 603,
        left: 603,
        top: 361
      }
    ] 
  }
}