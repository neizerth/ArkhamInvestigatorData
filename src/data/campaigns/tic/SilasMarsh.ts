import type { Investigator } from "@/model";

export const SilasMarsh: Investigator = {
  code: '07005',
  image: {
    width: 4664,
    height: 4258,
    media: [
      {
        width: 2595,
        height: 3988,
        left: 1307,
        top: 227,
        primary: true
      },
      {
        width: 2902,
        height: 3988,
        left: 1000,
        top: 227
      }
    ]
  },
  variants: [
    {
      code: '98013',
      type: 'book',
      name: 'The Shadows of the Mind',
      image: {
        width: 2474,
        height: 2232,
        media: [
          {
            width: 826,
            height: 1268,
            left: 368,
            top: 350,
            primary: true
          },
          {
            width: 1180,
            height: 1268,
            left: 230,
            top: 350
          }
        ]
      }
    }
  ]
}