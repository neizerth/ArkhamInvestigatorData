import { loadArkhamCardsRules } from "@/api/arkhamCards";
import { getSignatures } from "@/components";
import { getArkhamCardsRulesCollection } from "@/components/meta";
import { getStories } from "@/components/stories";
import { DIST_DIR } from "@/config";
import { createJSONWriter } from "@/features";

export const createDataCache = async () => {
	console.log("creating data cache");
	const writeJSON = createJSONWriter(DIST_DIR);

	const signatures = await getSignatures();
	const rulesCollection = getArkhamCardsRulesCollection();
	const enRules = rulesCollection.en;

	const stories = getStories();

	for (const [locale, data] of signatures) {
		const rules = rulesCollection[locale] ?? enRules;

		const item = {
			...data,
			rules,
			stories: stories[locale] || stories.en,
		};
		writeJSON(locale, item);
	}

	const locales = [...signatures.keys()];

	console.log("availble locales", locales);

	return locales;
};
