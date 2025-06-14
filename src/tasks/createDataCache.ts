import { loadArkhamCardsRules } from "@/api/arkhamCards";
import { getSignatures } from "@/components";
import { getStories } from "@/components/stories";
import { DIST_DIR } from "@/config";
import { createJSONWriter } from "@/features";

export const createDataCache = async () => {
	console.log("creating data cache");
	const writeJSON = createJSONWriter(DIST_DIR);

	const signatures = await getSignatures();
	const enRules = await loadArkhamCardsRules();

	const stories = getStories();

	for (const [locale, data] of signatures) {
		const rules =
			locale === "en"
				? enRules
				: ((await loadArkhamCardsRules(locale)) ?? enRules);

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
