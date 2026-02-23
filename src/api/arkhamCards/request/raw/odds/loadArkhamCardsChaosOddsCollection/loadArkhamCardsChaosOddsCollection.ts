import { propEq } from "ramda";
import type { ArkhamCardsChaosOddCollection } from "../../../../model";
import { loadArkhamCardsChaosOddsBase } from "../loadArkhamCardsChaosOddsBase";
import { loadArkhamCardsChaosOddsTranslation } from "../loadArkhamCardsChaosOddsTranslation";
import { applyChaosOddsTranslation } from "./applyChaosOddsTranslation";

export const loadArkhamCardsChaosOddsCollection = async (
	languages: string[],
) => {
	const data: ArkhamCardsChaosOddCollection = {};
	const odds = await loadArkhamCardsChaosOddsBase();
	data.en = odds;
	for (const language of languages) {
		if (language === "en") {
			continue;
		}
		const translation = await loadArkhamCardsChaosOddsTranslation(language);
		const locale = language.replace("_", "-");

		data[locale] = applyChaosOddsTranslation({ odds, translation });
	}
	return data;
};
