import { loadArkhamCardsInvestigators } from "@/api/arkhamCards";
import type { SignatureCollection } from "@/model";
import { getEnglishSignatures } from "./getEnglishSignatures";
import { getSignatureCollection } from "./getSignatureCollection";
import { getSignatureTranslations } from "./getSignatureTranslations";
import { propEq } from "ramda";

export const getSignatures = async () => {
  const data = await loadArkhamCardsInvestigators();

  const en = getEnglishSignatures(data);
  const signatures = getSignatureTranslations(data);

  signatures.set("en", en);

  const collections = new Map<string, SignatureCollection>();

  for (const [locale, cards] of signatures) {
    const allCards = en.map((sourceCard) => {
      const translatedCard = cards.find(propEq(sourceCard.id, "id"));
      return translatedCard || sourceCard;
    });

    const collection = getSignatureCollection(allCards);

    collections.set(locale, collection);
  }

  return collections;
};
