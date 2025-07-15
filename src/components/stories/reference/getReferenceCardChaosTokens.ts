import type { ArkhamCardsReference } from "@/api/arkhamCards";
import { getArkhamCardsOdds } from "@/components/meta";
import { propEq } from "ramda";
import { getChaosBagTokenReferenceValues as getValues } from "./getChaosBagTokenReferenceValues";
import { parseChaosOdds } from "./odds";

type Options = {
	code: string;
	encounter_code: string;
	text: string;
	back_text: string;
	locale: string;
};

export const getReferenceCardChaosTokens = ({
	code,
	encounter_code,
	text,
	back_text,
	locale,
}: Options) => {
	const collection = getArkhamCardsOdds();
	const odds = locale in collection ? collection[locale] : collection.en;

	let item = odds.find(propEq(code, "code"));

	if (!item) {
		item = odds.find(propEq(encounter_code, "scenario"));
	}

	if (!item) {
		console.log(`chaos odds not found for ${code}`);

		return {
			tokens: getValues(text),
			back_tokens: getValues(back_text),
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
