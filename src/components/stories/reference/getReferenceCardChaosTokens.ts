import type { ArkhamCardsReference } from "@/api/arkhamCards";
import { getArkhamCardsOdds } from "@/components/meta";
import type { ReferenceCard, ReferencePart } from "@/model";
import { propEq } from "ramda";
import { getChaosBagTokenReferenceValues as getValues } from "./getChaosBagTokenReferenceValues";
import { parseChaosOdds } from "./odds";
import { mergeOddsEffects } from "./odds/mergeOddsEffects";

type Options = {
	source?: ReferenceCard;
	code: string;
	encounter_code: string;
	text: string;
	back_text: string;
	locale: string;
	reference: ReferencePart[];
	back_reference: ReferencePart[];
};

export const getReferenceCardChaosTokens = ({
	source,
	...options
}: Options) => {
	const data = geCardChaosTokens(options);

	if (!source) {
		return data;
	}

	return {
		tokens: mergeOddsEffects(data.tokens, source.tokens),
		back_tokens: mergeOddsEffects(data.back_tokens, source.back_tokens),
	};
};

const geCardChaosTokens = ({
	code,
	encounter_code,
	text,
	back_text,
	locale,
	reference,
	back_reference,
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

	const tokens = parseChaosOdds({
		reference,
		tokens: item.standard,
	});
	const backTokens = parseChaosOdds({
		reference: back_reference,
		tokens: item.hard,
	});

	if (!item.standard) {
		console.log("WOW!", item);
	}

	return {
		tokens,
		back_tokens: backTokens,
	};
};
