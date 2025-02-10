import type { Investigator, InvestigatorImage } from "@/model";

const image: InvestigatorImage = {
  id: 'zaw_02228',
  width: 3672,
  height: 4896,
  media: [
    {
      width: 1378,
      height: 2117,
      left: 0,
      top: 775
    },
    {
      width: 2570,
      height: 4121,
      left: 0,
      top: 775
    }
  ]
}

const Neutral: Investigator = {
  code: 'zaw_02228',
  image
}


const Seeker: Investigator = {
  code: 'zaw_00304',
  image
}

export const AliceLiddell = {
  Neutral,
  Seeker
}