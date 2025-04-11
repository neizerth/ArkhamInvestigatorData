import type { ArkhamCardsInvestigator } from "@/api/arkhamCards";
import data from "@/data";
import type { InvestigatorSignatureType } from "@/model";
import { omit, propEq } from "ramda";

const getCode = ({ code, alternate_of_code }: ArkhamCardsInvestigator) =>
  alternate_of_code || code;

export const getCardSpecial = (card: ArkhamCardsInvestigator) => {
  const code = getCode(card);
  const special = data.find(propEq(code, "code"));

  if (!special) {
    return;
  }

  const isTaboo = Boolean(card.taboo_set);

  const base = omit(["skins", "variants"], special);
  const { image } = base;

  const type: InvestigatorSignatureType = "original";

  if (card.code === code && !isTaboo) {
    return {
      ...base,
      type,
    };
  }

  const { variants = [] } = special;
  const variant = variants.find(
    ({ code, taboo = false }) => code === card.code && isTaboo === taboo
  );

  if (!variant) {
    return;
  }

  return {
    ...variant,
    image: variant?.image || image,
  };
};
