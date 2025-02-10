import type { Investigator, InvestigatorImageSource } from "@/model";

const wideImage: InvestigatorImageSource = {
  type: 'full',
  id: '05005_wide',
  width: 2158,
  height: 1214,
}

export const RitaYoung: Investigator = {
  code: '05005',
  image: {
    width: 1232,
    height: 1588,
    media: [
      {
        width: 774,
        height: 1190,
        left: 237,
        top: 182
      },
      {
        width: 1232,
        height: 1406,
        left: 0,
        top: 182
      },
      {
        source: wideImage,
        width: 571,
        height: 877,
        left: 217,
        top: 190
      },
      {
        source: wideImage,
        width: 788,
        height: 1026,
        left: 0,
        top: 190
      },
    ]
  }
}