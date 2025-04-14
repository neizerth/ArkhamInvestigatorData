import type { ArkhamCardsInvestigator } from "@/api/arkhamCards";
import data from "@/data";
import type { InvestigatorSignatureType } from "@/model";
import { omit, propEq } from "ramda";

const getCode = ({
  code,
  alternate_of_code,
  linked_code,
}: ArkhamCardsInvestigator) => linked_code || alternate_of_code || code;

export const getCardSpecial = (card: ArkhamCardsInvestigator) => {
  const code = getCode(card);
  const special = data.find(propEq(code, "code"));

  if (!special) {
    return;
  }

  const isTaboo = Boolean(card.taboo_set) && card.taboo_set.id !== 0;

  const base = omit(["skins", "variants"], special);
  const { image } = base;

  const type: InvestigatorSignatureType = "default";

  if (card.code === code && !isTaboo) {
    return {
      ...base,
      image: {
        ...image,
        id: image.id || code,
      },
      type,
    };
  }

  const { variants = [] } = special;
  const variant = variants.find(({ code }) => code === card.code);

  if (!variant) {
    return;
  }

  const variantImage = variant?.image
    ? {
        ...variant.image,
        id: variant.code,
      }
    : image;

  return {
    ...variant,
    image: variantImage,
  };
};
