import type { ArkhamCardsPack } from "@/api/arkhamCards";
import type { InvestigatorSignaturePack } from "@/model";

export const getEnglishPack = ({
  code,
  real_name,
}: ArkhamCardsPack): InvestigatorSignaturePack => ({
  locale: "en",
  code: code,
  name: real_name,
});
