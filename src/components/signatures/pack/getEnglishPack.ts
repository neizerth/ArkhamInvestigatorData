import type { InvestigatorSignaturePack } from "@/model";

type Options = {
  code: string;
  real_name: string;
  position: number;
};

export const getEnglishPack = ({
  code,
  real_name,
  position,
}: Options): InvestigatorSignaturePack => ({
  locale: "en",
  code: code,
  name: real_name,
  position,
});
