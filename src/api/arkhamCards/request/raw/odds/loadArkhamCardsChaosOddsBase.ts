import { ARKHAM_CARDS_DATA_REPO_RAW_URL as dataBaseUri } from "@/config";
import type { ArkhamCardsChaosOdd } from "../../../model";

export const loadArkhamCardsChaosOddsBase = async (): Promise<
	ArkhamCardsChaosOdd[]
> => {
	const url = `${dataBaseUri}/chaos_tokens.json`;

	try {
		const response = await fetch(url);

		return await response.json();
	} catch (e) {
		return [];
	}
};
