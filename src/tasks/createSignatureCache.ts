import { loadArkhamCardsInvestigators } from "@/api/arkhamCards";
import { getSignatures } from "@/components";
import { DIST_DIR } from "@/config";
import { createJSONWriter } from "@/features";

export const createSignatureCache = async () => {
	console.log("creating investigator signatures cache");
	const writeJSON = createJSONWriter(DIST_DIR);

	const signatures = await getSignatures();

	for (const [locale, data] of signatures) {
		writeJSON(locale, data);
	}
};
