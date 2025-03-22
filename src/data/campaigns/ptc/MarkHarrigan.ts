import type { Investigator } from "@/model";


export const MarkHarrigan: Investigator = {
  code: '03001',
  image: {
    width: 1968,
    height: 2138,
    face: {
      width: 258,
      height: 301,
      left: 800,
      top: 797
    }
  },
  abilities: [
    {
      type: 'reaction',
      limitPer: 'phase'
    }
  ]
}