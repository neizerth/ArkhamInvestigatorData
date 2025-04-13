import type { ArkhamCardsInvestigator } from "@/api/arkhamCards";
import type { InvestigatorSignature } from "@/model";
import { getCycleTranslation } from "./cycle";
import { getSignatureBase } from "./getSignatureBase";
import { getPackTranslation } from "./pack";

export const getSignatureTranslations = (data: ArkhamCardsInvestigator[]) => {
  const translations = new Map<string, InvestigatorSignature[]>();

  for (const card of data) {
    const base = getSignatureBase(card);
    if (!base) {
      continue;
    }

    for (const cardTranslation of card.translations) {
      const { locale } = cardTranslation;
      if (!translations.has(locale)) {
        translations.set(locale, []);
      }

      const pack = getPackTranslation({
        item: card.pack,
        locale,
      });

      const cycle = getCycleTranslation({
        item: card.pack.cycle,
        locale,
      });

      const icon = base.type === "taboo" ? "taboo" : pack.icon;
      const translatedCard: InvestigatorSignature = {
        ...base,
        ...cardTranslation,
        official: base.official,
        pack,
        cycle,
        icon,
      };

      translations.get(locale).push(translatedCard);
    }
  }

  return translations;
};
