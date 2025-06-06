import type { ArkhamCardsInvestigator } from "@/api/arkhamCards";
import type { InvestigatorSignature } from "@/model";
import { isNotNil } from "ramda";
import { getEnglishCycle } from "./cycle";
import { getSignatureBase } from "./getSignatureBase";
import { getEnglishPack } from "./pack";
import { getChaosBagTokenReference } from "../chaos-bag";

export const getEnglishSignatures = (data: ArkhamCardsInvestigator[]) =>
	data
		.map((card): InvestigatorSignature => {
			const base = getSignatureBase(card);

			if (!base) {
				return;
			}
			const pack = getEnglishPack(card.pack);
			const cycle = getEnglishCycle(card.pack.cycle);

			const isTaboo = base.type === "taboo";

			const icon = isTaboo ? "taboo" : pack.icon;

			const name = card.real_name;

			return {
				...base,
				locale: "en",
				text: card.real_text,
				name,
				subname: card.real_subname,
				flavor: card.real_flavor,
				traits: card.real_traits,
				taboo_original_text: card.real_taboo_original_text,
				taboo_text_change: card.real_taboo_text_change,
				pack,
				cycle,
				icon,
				tokens_reference: getChaosBagTokenReference([card.real_text]),
			};
		})
		.filter(isNotNil);
