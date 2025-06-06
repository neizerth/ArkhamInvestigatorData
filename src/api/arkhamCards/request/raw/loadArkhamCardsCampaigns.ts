import { ARKHAM_CARDS_REPO_RAW_URL as baseUri } from "@/config";
import type { ArkhamCardsCampaign } from "../../model";

export const loadArkhamCardsCampaigns = async () => {
	const url = `${baseUri}/assets/generated/allCampaigns.json`;

	const response = await fetch(url);
	return (await response.json()) as ArkhamCardsCampaign[];
};
