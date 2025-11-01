import { ARKHAM_CARDS_REPO_RAW_URL as baseUri } from "@/config";
import type { ArkhamCardsCampaign } from "../../model";

export const loadArkhamCardsCampaigns = async () => {
	console.log("loading Arkham Cards Campaigns");
	const url = `${baseUri}/assets/generated/all_campaigns.txt`;

	const response = await fetch(url);
	return (await response.json()) as ArkhamCardsCampaign[];
};
