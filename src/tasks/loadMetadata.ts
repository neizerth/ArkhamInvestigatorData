import {
	loadArkhamBuildCycles,
	loadArkhamBuildInvestigators,
	loadArkhamBuildPacks,
} from "@/api/arkham.build/data";
import { downloadArkhamBuildRepo } from "@/api/arkham.build/lib/downloadArkhamBuildRepo";
import {
	loadArkhamCardsCampaigns,
	loadArkhamCardsCycles,
	loadArkhamCardsPacks,
	loadArkhamCardsReferenceCards,
} from "@/api/arkhamCards";
import { loadArkhamCardsUpdates } from "@/api/arkhamCards/request/graphql/loadArkhamCardsUpdates";
import { loadArkhamCardsRulesCollection } from "@/api/arkhamCards/request/raw";
import { loadArkhamCardsChaosOddsCollection } from "@/api/arkhamCards/request/raw/odds/loadArkhamCardsChaosOddsCollection";
import { ARKHAM_DIVIDER_CORE_URL, CACHE_DIR } from "@/config";
import { createJSONWriter } from "@/features";
import type { ArkhamDivider } from "arkham-divider-data";

export const loadMetadata = async () => {
	console.log("creating metadata");

	await downloadArkhamBuildRepo();

	const response = await fetch(ARKHAM_DIVIDER_CORE_URL);
	const { packs, stories, icons, encounterSets, languages } =
		(await response.json()) as ArkhamDivider.Core;

	const arkhamCardsCycles = await loadArkhamCardsCycles();
	const arkhamCardsPacks = await loadArkhamCardsPacks();
	const referenceCards = await loadArkhamCardsReferenceCards();
	const campaigns = await loadArkhamCardsCampaigns();
	const chaosOdds = await loadArkhamCardsChaosOddsCollection(languages);
	const rules = await loadArkhamCardsRulesCollection(languages);
	const updates = await loadArkhamCardsUpdates();

	const arkhamBuildCycles = loadArkhamBuildCycles();
	const arkhamBuildPacks = loadArkhamBuildPacks();
	const arkhamBuildInvestigators = loadArkhamBuildInvestigators();
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

	write("arkhamBuild.cycles", arkhamBuildCycles);
	write("arkhamBuild.packs", arkhamBuildPacks);
	write("arkhamBuild.investigators", arkhamBuildInvestigators);
};
