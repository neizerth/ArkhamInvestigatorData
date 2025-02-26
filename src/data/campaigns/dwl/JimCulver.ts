import type { Investigator, InvestigatorImageSource } from "@/model";

const wideImage: InvestigatorImageSource = {
  id: '02004_wide',
  type: 'full',
  width: 1671,
  height: 1392
};

export const JimCulver: Investigator = {
  code: '02004',
  image: {
    width: 2820,
    height: 3446,
    face: {
      width: 736,
      height: 841,
      left: 812,
      top: 719
    },
    media: [
      {
        width: 2197,
        height: 2197,
        left: 220,
        top: 191,
        primary: true
      },
      {
        width: 2400,
        height: 2197,
        left: 0,
        top: 191
      },
      {
        source: wideImage,
        width: 816,
        height: 1254,
        left: 102,
        top: 118,
        primary: true
      },
      {
        source: wideImage,
        width: 918,
        height: 1254,
        left: 0,
        top: 118
      }
    ]
  }
}