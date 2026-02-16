import { propEq } from "ramda";
import type { ArkhamCardsChaosOddCollection } from "../../../../model";
import { mergeOdd } from "./mergeChaosOdd";
import { loadArkhamCardsChaosOdds } from "../loadArkhamCardsChaosOdds";

export const loadArkhamCardsChaosOddsCollection = async (
	languages: string[],
) => {
	const data: ArkhamCardsChaosOddCollection = {};
	for (const language of languages) {
		const rules = await loadArkhamCardsChaosOdds(language);
		data[language] = rules;
	}

	const base = data.en;
	for (const language of languages) {
		if (language === "en") continue;
		const odds = data[language];
		for (let i = 0; i < odds.length; i++) {
			const baseOdd = base.find(propEq(odds[i].code, "code"));
			if (!baseOdd) continue;
			data[language][i] = mergeOdd(baseOdd, odds[i]);
		}
	}
	return data;
};
