import { ascend, prop, propEq, sortBy, sortWith } from "ramda";
import { ArkhamCardsInvestigator } from "./arkhamCards.types";

export const mapLinkedCode = (
  card: ArkhamCardsInvestigator,
  _: number,
  cards: ArkhamCardsInvestigator[]
) => {
  const linked_code = getLinkedCode(card, cards);

  return {
    ...card,
    linked_code: linked_code === card.code ? null : linked_code,
  };
};

export const getLinkedCode = (
  { alternate_of_code, real_name, code, faction_code }: ArkhamCardsInvestigator,
  cards: ArkhamCardsInvestigator[]
) => {
  if (alternate_of_code) {
    return alternate_of_code;
  }

  const similar = cards.filter((investigator) => {
    if (faction_code !== investigator.faction_code) {
      return false;
    }
    return investigator.real_name === real_name;
  });

  if (similar.length === 1) {
    return code;
  }

  const [defaultCard] = sortBy(prop("code"), similar);

  return defaultCard.code;
};
