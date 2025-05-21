import { CACHE_DIR } from "@/config";
import { createJSONReader } from "@/features";
import type { ArkhamDivider } from "arkham-divider-data";
import { getCachedMetadata } from "./getCachedMetadata";

const read = createJSONReader(CACHE_DIR);

let stories: ArkhamDivider.Core["stories"];
let icons: ArkhamDivider.Core["icons"];

export const getStories = getCachedMetadata<ArkhamDivider.Core["stories"]>(
  "stories",
  []
);
export const getIcons = getCachedMetadata<ArkhamDivider.Core["icons"]>(
  "icons",
  []
);
export const getEncounterSets = getCachedMetadata<
  ArkhamDivider.Core["encounterSets"]
>("encounters", []);
