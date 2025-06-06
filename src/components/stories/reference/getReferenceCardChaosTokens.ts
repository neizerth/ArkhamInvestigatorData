import type { ArkhamCardsReference } from "@/api/arkhamCards";
import { getArkhamCardsOdds } from "@/components/meta";
import { propEq } from "ramda";
import { parseChaosOdds } from "./parseChaosOdds";
import { getChaosBagTokenReferenceValues as getValues } from "./getChaosBagTokenReferenceValues";

export const getReferenceCardChaosTokens = ({
	code,
	encounter_code,
	real_text,
	real_back_text,
}: ArkhamCardsReference) => {
	const odds = getArkhamCardsOdds();
	let item = odds.find(propEq(code, "code"));

	if (!item) {
		item = odds.find(propEq(encounter_code, "scenario"));
	}

	if (!item) {
		console.log(`chaos odds not found for ${code}`);

		return {
			tokens: getValues(real_text),
			back_tokens: getValues(real_back_text),
		};
	}

	const tokens = parseChaosOdds(item.standard);
	const backTokens = parseChaosOdds(item.hard);

	if (!item.standard) {
		console.log("WOW!", item);
	}

	return {
		tokens,
		back_tokens: backTokens,
	};
};
