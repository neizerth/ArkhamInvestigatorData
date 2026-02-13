import { getIcons, getStories } from "@/components/meta";
import { core2026Id } from "@/config";
import { propEq } from "ramda";

export const getPackIcon = (code: string) => {
	if (code === core2026Id) {
		return code;
	}

	const fromStory = getStories().find(
		({ pack_code, pack_codes = [] }) =>
			pack_code === code || pack_codes.includes(code),
	);

	if (fromStory?.icon) {
		return fromStory?.icon;
	}

	const fromStoryCode = getStories().find(propEq(code, "code"));

	if (fromStoryCode?.icon) {
		return fromStoryCode?.icon;
	}

	const fromStoryInvestigators = getStories().filter(({ investigators }) =>
		investigators.some(propEq(code, "pack_code")),
	);

	if (fromStoryInvestigators.length === 1 && fromStoryInvestigators[0]?.icon) {
		return fromStoryInvestigators[0]?.icon;
	}

	const icon = getIcons().find(propEq(code, "icon"));

	if (icon) {
		return code;
	}

	console.log(`pack icon ${code} not found`);

	return "investigator";
};
