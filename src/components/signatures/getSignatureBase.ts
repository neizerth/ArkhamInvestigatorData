import type { ArkhamCardsInvestigator } from "@/api/arkhamCards";
import { omit } from "ramda";

export const getSignatureBase = (card: ArkhamCardsInvestigator) =>
	omit(
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
