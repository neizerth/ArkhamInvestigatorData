import { ARKHAM_CARDS_REPO_RAW_URL as baseUri } from "@/config";
import type { ArkhamCardsChaosOdd } from "../../model";

export const loadArkhamCardsChaosOdds = async () => {
	console.log("loading Arkham Cards Chaos Odds");
	const url = `${baseUri}/assets/generated/chaosOdds.json`;

	const response = await fetch(url);
	return (await response.json()) as ArkhamCardsChaosOdd[];
};
