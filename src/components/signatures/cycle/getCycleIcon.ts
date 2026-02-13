import { getIcons, getStories } from "@/components/meta";
import { core2026Id } from "@/config";
import { propEq } from "ramda";

export const getCycleIcon = (code: string) => {
	if (code === core2026Id) {
		return code;
	}

	const fromStory = getStories().find(propEq(code, "code"));

	if (fromStory?.icon) {
		return fromStory.icon;
	}

	const fromStoryInvestigators = getStories().filter(({ investigators }) =>
		investigators.some(propEq(code, "cycle_code")),
	);

	if (fromStoryInvestigators.length === 1 && fromStoryInvestigators[0]?.icon) {
		return fromStoryInvestigators[0]?.icon;
	}

	const icon = getIcons().find(propEq(code, "icon"));

	if (icon) {
		return code;
	}

	return "investigator";
};
