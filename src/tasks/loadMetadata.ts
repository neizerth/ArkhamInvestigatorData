import {
	loadArkhamCardsCampaigns,
	loadArkhamCardsCycles,
	loadArkhamCardsPacks,
	loadArkhamCardsReferenceCards,
} from "@/api/arkhamCards";
import { loadArkhamCardsUpdates } from "@/api/arkhamCards/request/graphql/loadArkhamCardsUpdates";
import { loadArkhamCardsChaosOdds } from "@/api/arkhamCards/request/raw/loadArkhamCardsChaosOdds";
import { loadArkhamCardsRulesCollection } from "@/api/arkhamCards/request/raw/loadArkhamCardsRulesCollection";
import { ARKHAM_DIVIDER_CORE_URL, CACHE_DIR, DIST_DIR } from "@/config";
import { createJSONWriter } from "@/features";
import type { ArkhamDivider } from "arkham-divider-data";

export const loadMetadata = async () => {
	console.log("creating metadata");
	const response = await fetch(ARKHAM_DIVIDER_CORE_URL);
	const { packs, stories, icons, encounterSets, languages } =
		(await response.json()) as ArkhamDivider.Core;

	const arkhamCardsCycles = await loadArkhamCardsCycles();
	const arkhamCardsPacks = await loadArkhamCardsPacks();
	const referenceCards = await loadArkhamCardsReferenceCards();
	const campaigns = await loadArkhamCardsCampaigns();
	const chaosOdds = await loadArkhamCardsChaosOdds();
	const rules = await loadArkhamCardsRulesCollection(languages);
	const updates = await loadArkhamCardsUpdates();

	const write = createJSONWriter(CACHE_DIR);

	write("packs", packs);
	write("stories", stories);
	write("icons", icons);

	write("encounters", encounterSets);

	write("arkhamCards.rules", rules);
	write("arkhamCards.packs", arkhamCardsPacks);
	write("arkhamCards.cycles", arkhamCardsCycles);
	write("arkhamCards.referenceCards", referenceCards);
	write("arkhamCards.campaigns", campaigns);
	write("arkhamCards.chaosOdds", chaosOdds);
	write("arkhamCards.updates", updates);
};
