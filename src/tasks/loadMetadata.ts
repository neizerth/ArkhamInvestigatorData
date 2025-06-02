import {
	loadArkhamCardsCycles,
	loadArkhamCardsPacks,
	loadArkhamCardsReferenceCards,
} from "@/api/arkhamCards";
import { ARKHAM_DIVIDER_CORE_URL, CACHE_DIR, DIST_DIR } from "@/config";
import { createJSONWriter } from "@/features";
import type { ArkhamDivider } from "arkham-divider-data";

export const loadMetadata = async () => {
	console.log("creating metadata");
	const response = await fetch(ARKHAM_DIVIDER_CORE_URL);
	const { packs, stories, icons, encounterSets } =
		(await response.json()) as ArkhamDivider.Core;

	const arkhamCardsCycles = await loadArkhamCardsCycles();
	const arkhamCardsPacks = await loadArkhamCardsPacks();
	const referenceCards = await loadArkhamCardsReferenceCards();

	const write = createJSONWriter(CACHE_DIR);

	write("packs", packs);
	write("stories", stories);
	write("icons", icons);

	write("encounters", encounterSets);

	write("arkhamCards.packs", arkhamCardsPacks);
	write("arkhamCards.cycles", arkhamCardsCycles);
	write("arkhamCards.referenceCards", referenceCards);
};
