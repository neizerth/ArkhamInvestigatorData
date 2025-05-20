import { loadArkhamCardsInvestigators } from "@/api/arkhamCards/request/loadArkhamCardsInvestigators";
import { getSignatures } from "@/components";
import { getStories } from "@/components/stories";
import { DIST_DIR } from "@/config";
import { createJSONWriter } from "@/features";

export const createDataCache = async () => {
	console.log("creating data cache");
	const writeJSON = createJSONWriter(DIST_DIR);

	const signatures = await getSignatures();

	const stories = getStories();

	for (const [locale, data] of signatures) {
		const item = {
			...data,
			stories: stories[locale] || stories.en,
		};
		writeJSON(locale, item);
	}

	const locales = [...signatures.keys()];

	console.log("availble locales", locales);

	return locales;
};
