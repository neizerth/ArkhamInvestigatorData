import {
	ARKHAM_CARDS_REPO_RAW_URL as baseUri,
	ARKHAM_CARDS_DATA_REPO_RAW_URL as dataBaseUri,
} from "@/config";
import type { ArkhamCardsChaosOdd } from "../../../model";

export const loadArkhamCardsChaosOdds = async (language = "en") => {
	console.log(`loading Arkham Cards Chaos Odds for language: ${language}`);

	let url = `${dataBaseUri}/chaos_tokens.json`;
	if (language !== "en") {
		const locale = `_${language.replace("-", "_")}`;

		url = `${baseUri}/assets/generated/chaos_odds${locale}.txt`;
	}
	const response = await fetch(url);
	return (await response.json()) as ArkhamCardsChaosOdd[];
};
