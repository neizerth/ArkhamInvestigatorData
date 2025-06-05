import type {
	ArkhamCardsInvestigator,
	ArkhamCardsInvestigatorGender,
} from "@/api/arkhamCards";
import type { InvestigatorSignatureGender } from "@/model";
import { omit } from "ramda";
import { getCardSpecial } from "./special";

const genderMapping: Record<
	ArkhamCardsInvestigatorGender,
	InvestigatorSignatureGender
> = {
	f: "female",
	m: "male",
	nb: "non-binary",
};

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
			"gender",
		],
		card,
	);

	const special = getCardSpecial(card);

	if (!special) {
		return;
	}
	const canonical = card.pack.official;
	const custom = card.pack.code === "zcu";
	const official = (!custom && card.pack.cycle.code === "zffg") || canonical;
	const gender = genderMapping[card.gender];

	return {
		...base,
		...special,
		gender,
		taboo: card.taboo_set?.id !== 0 && card.taboo_set !== null,
		custom,
		canonical,
		official,
	};
};
