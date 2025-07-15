import type {
	ArkhamCardsCampaign,
	ArkhamCardsChaosOdd,
	ArkhamCardsCycle,
	ArkhamCardsPack,
	ArkhamCardsReference,
	ArkhamCardsRulesCollection,
	ArkhamCardsUpdate,
} from "@/api/arkhamCards";
import { getCachedMetadata } from "./getCachedMetadata";

export const getArkhamCardsCycles = getCachedMetadata<ArkhamCardsCycle[]>(
	"arkhamCards.cycles",
	[],
);

export const getArkhamCardsPacks = getCachedMetadata<ArkhamCardsPack[]>(
	"arkhamCards.packs",
	[],
);

export const getArkhamCardsReferenceCards = getCachedMetadata<
	ArkhamCardsReference[]
>("arkhamCards.referenceCards", []);

export const getArkhamCardsCampaigns = getCachedMetadata<ArkhamCardsCampaign[]>(
	"arkhamCards.campaigns",
	[],
);

export const getArkhamCardsOdds = getCachedMetadata<ArkhamCardsChaosOdd[]>(
	"arkhamCards.chaosOdds",
	[],
);

export const getArkhamCardsRulesCollection =
	getCachedMetadata<ArkhamCardsRulesCollection>("arkhamCards.rules", {});

export const getArkhamCardsUpdates = getCachedMetadata<ArkhamCardsUpdate[]>(
	"arkhamCards.updates",
	[],
);
