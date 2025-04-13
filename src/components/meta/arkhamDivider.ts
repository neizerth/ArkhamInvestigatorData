import { CACHE_DIR } from "@/config";
import { createJSONReader } from "@/features";
import type { ArkhamDivider } from "arkham-divider-data";

const read = createJSONReader(CACHE_DIR);

let stories: ArkhamDivider.Core["stories"];
let icons: ArkhamDivider.Core["icons"];

export const getStories = () => {
	if (stories) {
		return stories;
	}

	stories = read("stories");

	return stories;
};

export const getIcons = () => {
	if (icons) {
		return icons;
	}

	icons = read("icons");

	return icons;
};
