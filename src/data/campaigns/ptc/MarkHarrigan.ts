import type { Investigator, InvestigatorImageSource } from "@/types/game";

const wideImage: InvestigatorImageSource = {
  id: '03001_wide',
  type: 'full',
  width: 792,
  height: 648,
}

export const MarkHarrigan: Investigator = {
  code: '03001',
  image: {
    width: 524,
    height: 739,
    media: [
      {
        width: 410,
        height: 630,
        left: 25,
        top: 16
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