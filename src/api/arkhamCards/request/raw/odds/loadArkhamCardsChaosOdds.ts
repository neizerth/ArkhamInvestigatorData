import { ARKHAM_CARDS_REPO_RAW_URL as baseUri } from "@/config";
import type { ArkhamCardsChaosOdd } from "../../../model";

export const loadArkhamCardsChaosOdds = async (language = "en") => {
	console.log(`loading Arkham Cards Chaos Odds for language: ${language}`);

	const locale = language === "en" ? "" : `_${language}`;
	const url = `${baseUri}/assets/generated/chaosOdds${locale}.json`;

	const response = await fetch(url);
	return (await response.json()) as ArkhamCardsChaosOdd[];
};
