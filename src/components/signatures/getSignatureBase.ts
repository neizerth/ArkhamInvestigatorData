import type {
	ArkhamCardsInvestigator,
	ArkhamCardsInvestigatorGender,
} from "@/api/arkhamCards";
import type { InvestigatorSignatureGender } from "@/model";
import { omit } from "ramda";
import { getChaosBagTokenReferenceValues } from "../stories/reference/getChaosBagTokenReferenceValues";
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

	const hasSpecial = Boolean(special);

	if (!hasSpecial && card.pack.official) {
		return;
	}

	const canonical = card.pack.official;
	const custom = card.pack.code === "zcu";
	const official = (!custom && card.pack.cycle.code === "zffg") || canonical;
	const gender = genderMapping[card.gender];

	const minNoFullImageClientVersion = "2.12.0";
	const min_version = !hasSpecial
		? minNoFullImageClientVersion
		: card.min_version;
	const max_version = card.max_version;

	return {
		...base,
		...special,
		min_version,
		max_version,
		gender,
		taboo: card.taboo_set?.id !== 0 && card.taboo_set !== null,
		custom,
		canonical,
		official,
		tokens: getChaosBagTokenReferenceValues(card.real_text),
		has_full_image: hasSpecial,
		image: special?.image || {
			id: card.code,
		},
	};
};
