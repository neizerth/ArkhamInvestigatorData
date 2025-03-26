import type { Investigator } from "@/model";

export const FatherMateo: Investigator = {
  code: '04004',
  image: {
    width: 2311,
    height: 3000,
    face: {
      width: 394,
      height: 445,
      left: 912,
      top: 1405
    }
  },
  variants: [
    {
      code: '90081',
      type: 'parallel',
      name: 'Aura of Faith'
    }
  ],
  abilities: [
    {
      type: 'reaction',
      limitPer: 'game'
    }
  ]
}