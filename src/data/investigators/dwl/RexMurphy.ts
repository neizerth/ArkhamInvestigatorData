import type { Investigator } from "@/types/game";

export const RexMurphy: Investigator = {
  code: '02002',
  image: {
    width: 1600,
    height: 1600,
    media: [
      {
        width: 818,
        height: 1258,
        left: 639,
        top: 172
      },
      {
        width: 890,
        height: 1428,
        left: 600,
        top: 172
      }
    ]
  },
  variants: [
    {
      type: 'parallel',
      code: '90078',
      name: 'Hunting for Answers'
    }
  ]
}