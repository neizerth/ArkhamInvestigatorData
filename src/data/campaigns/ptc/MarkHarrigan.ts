import type { Investigator, InvestigatorImageSource } from "@/model";

const wideImage: InvestigatorImageSource = {
  id: '03001_wide',
  type: 'full',
  width: 792,
  height: 648,
}

export const MarkHarrigan: Investigator = {
  code: '03001',
  image: {
    width: 1774,
    height: 1774,
    media: [
      {
        width: 863,
        height: 1326,
        left: 65,
        top: 327
      },
      {
        width: 1050,
        height: 1447,
        left: 0,
        top: 327
      },
      {
        source: wideImage,
        width: 352,
        height: 538,
        left: 228,
        top: 48
      },
      {
        source: wideImage,
        width: 564,
        height: 600,
        left: 228,
        top: 48
      }
    ]
  }
}