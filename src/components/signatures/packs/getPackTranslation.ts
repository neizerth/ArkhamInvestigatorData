import type { ArkhamCardsPack } from "@/api/arkhamCards";
import type { InvestigatorSignaturePack } from "@/model";
import { propEq } from "ramda";

type Options = {
  pack: ArkhamCardsPack;
  locale: string;
};

export const getPackTranslation = ({
  pack,
  locale,
}: Options): InvestigatorSignaturePack => {
  const translation = pack.translations.find(propEq(locale, "locale"));
  const name = translation?.name;

  return {
    locale,
    code: pack.code,
    name: name || pack.real_name,
  };
};
