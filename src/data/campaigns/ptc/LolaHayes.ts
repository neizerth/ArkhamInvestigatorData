import type { Investigator } from "@/model";

export const LolaHayes: Investigator = {
  code: '03006',
  image: {
    width: 2355,
    height: 2540,
    face: {
      width: 241,
      height: 295,
      left: 1105,
      top: 1150
    }
  },
  roles: [
    'guardian',
    'seeker',
    'rogue',
    'mystic',
    'survivor',
    'neutral'
  ],
  skins: [
    {
      id: '03006_improvisation',
      name: 'Improvisation',
      image: {
        width: 2290,
        height: 2048,
        face: {
          width: 177,
          height: 229,
          left: 1110,
          top: 872
        }
      } 
    }
  ]
}