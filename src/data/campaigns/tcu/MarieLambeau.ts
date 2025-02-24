import type { Investigator, InvestigatorImageSource } from "@/model";

const wideImage: InvestigatorImageSource = {
  type: 'full',
  id: '05006_wide',
  width: 4056,
  height: 3040,
} 

export const MarieLambeau: Investigator = {
  code: '05006',
  additionalAction: true,
  image: {
    width: 3956,
    height: 3956,
    media: [
      {
        width: 2343,
        height: 3601,
        left: 978,
        top: 0
      },
      {
        source: wideImage,
        width: 1464,
        height: 2250,
        left: 646,
        top: 639,
        primary: true
      },
      {
        source: wideImage,
        width: 2750,
        height: 3526,
        left: 0,
        top: 430
      }
    ]
  }
}