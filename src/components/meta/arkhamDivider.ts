import type { ArkhamDivider } from "arkham-divider-data";
import { getCachedMetadata } from "./getCachedMetadata";

export const getStories = getCachedMetadata<ArkhamDivider.Core["stories"]>(
	"stories",
	[],
);
export const getIcons = getCachedMetadata<ArkhamDivider.Core["icons"]>(
	"icons",
	[],
);
export const getEncounterSets = getCachedMetadata<
	ArkhamDivider.Core["encounterSets"]
>("encounters", []);
