import type { ArkhamCardsChaosOddCollection } from "../../../model";
import { loadArkhamCardsChaosOdds } from "./loadArkhamCardsChaosOdds";

export const loadArkhamCardsChaosOddsCollection = async (
	languages: string[],
) => {
	const data: ArkhamCardsChaosOddCollection = {};
	for (const language of languages) {
		const rules = await loadArkhamCardsChaosOdds(language);
		data[language] = rules;
	}

	return data;
};
