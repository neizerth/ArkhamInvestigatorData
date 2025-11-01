import { ARKHAM_CARDS_REPO_RAW_URL as baseUri } from "@/config";
import type { ArkhamCardsChaosOdd } from "../../../model";

export const loadArkhamCardsChaosOdds = async (language = "en") => {
	console.log(`loading Arkham Cards Chaos Odds for language: ${language}`);

	const locale = language === "en" ? "" : `_${language.replace("-", "_")}`;
	const url = `${baseUri}/assets/generated/chaos_odds${locale}.txt`;

	const response = await fetch(url);
	return (await response.json()) as ArkhamCardsChaosOdd[];
};
