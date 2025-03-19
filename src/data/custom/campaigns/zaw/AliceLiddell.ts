import type { Investigator, InvestigatorImage } from "@/model";

const image: InvestigatorImage = {
  id: 'zaw_02228',
  width: 2223,
  height: 2500,
  face: {
    width: 277,
    height: 328,
    left: 834,
    top: 794
  }
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