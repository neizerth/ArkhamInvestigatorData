import type { ArkhamCardsInvestigator } from "@/api/arkhamCards";
import data from "@/data";
import { omit, propEq } from "ramda";

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
		],
		card,
	);

	const special = data.find(propEq(card.code, "code"));

	if (!special) {
		return;
	}

	return {
		...base,
		...special,
	};
};
