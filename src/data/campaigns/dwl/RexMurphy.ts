import type { Investigator } from "@/model";

export const RexMurphy: Investigator = {
  code: '02002',
  image: {
    width: 2290,
    height: 2500,
    face: {
      width: 266,
      height: 391,
      left: 818,
      top: 1173
    }
  },
  variants: [
    {
      type: 'parallel',
      code: '90078',
      name: 'Hunting for Answers'
    }
  ]
}