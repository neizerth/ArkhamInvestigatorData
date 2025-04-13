import { ARKHAM_DIVIDER_CORE_URL, CACHE_DIR, DIST_DIR } from "@/config";
import { createJSONWriter } from "@/features";
import type { ArkhamDivider } from "arkham-divider-data";

export const loadMetadata = async () => {
	const response = await fetch(ARKHAM_DIVIDER_CORE_URL);
	const { packs, stories, icons } =
		(await response.json()) as ArkhamDivider.Core;

	const write = createJSONWriter(CACHE_DIR);

	write("packs", packs);
	write("stories", stories);
	write("icons", icons);
};
