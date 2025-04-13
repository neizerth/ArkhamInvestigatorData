import type { ArkhamCardsInvestigator } from "@/api/arkhamCards";
import type { InvestigatorSignature } from "@/model";
import { isNotNil } from "ramda";
import { getEnglishCycle } from "./cycle";
import { getSignatureBase } from "./getSignatureBase";
import { getEnglishPack } from "./pack";

export const getEnglishSignatures = (data: ArkhamCardsInvestigator[]) =>
  data
    .map((card): InvestigatorSignature => {
      const base = getSignatureBase(card);

      if (!base) {
        return;
      }
      const pack = getEnglishPack(card.pack);
      const cycle = getEnglishCycle(card.pack.cycle);

      const icon = base.type === "taboo" ? "taboo" : pack.icon;

      return {
        ...base,
        locale: "en",
        text: card.real_text,
        name: card.real_name,
        subname: card.real_subname,
        flavor: card.real_flavor,
        traits: card.real_traits,
        taboo_original_text: card.real_taboo_original_text,
        taboo_text_change: card.real_taboo_text_change,
        pack,
        cycle,
        icon,
      };
    })
    .filter(isNotNil);
