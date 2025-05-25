import type { ArkhamCardsInvestigator } from "@/api/arkhamCards";
import { omit } from "ramda";
import { getCardSpecial } from "./special";

export const getSignatureBase = (card: ArkhamCardsInvestigator) => {
  const base = omit(
    [
      "real_name",
      "real_subname",
      "real_text",
      "real_traits",
      "real_flavor",
      "translations",
      "real_taboo_original_text",
      "real_taboo_text_change",
      "pack",
    ],
    card
  );

  const special = getCardSpecial(card);

  if (!special) {
    return;
  }
  const canonical = card.pack.official;
  const official =
    (card.pack.code !== "zcu" && card.pack.cycle.code === "zffg") || canonical;
  return {
    ...base,
    ...special,
    taboo: card.taboo_set?.id !== 0 && card.taboo_set !== null,
    canonical,
    official,
  };
};
