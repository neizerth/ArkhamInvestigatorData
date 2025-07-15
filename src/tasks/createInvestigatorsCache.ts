import { getArkhamCardsUpdates } from "@/components/meta";
import { APP_VERSION, CACHE_DIR, DIST_DIR, MIN_CLIENT_VERSION } from "@/config";
import { signatures as data } from "@/data";
import { createJSONReader, createJSONWriter } from "@/features";
import type { Build, BuildInfo } from "@/model";
import type { ArkhamDivider } from "arkham-divider-data";

const readCache = createJSONReader(CACHE_DIR);

export const createInvestigatorsCache = async (languages: string[] = []) => {
	console.log("creating investigators cache");

	const writeJSON = createJSONWriter(DIST_DIR);
	const arkhamCardsUpdates = getArkhamCardsUpdates();
	const icons = readCache<ArkhamDivider.Core["icons"]>("icons");
	const iconsCount = Object.keys(icons).length;

	const buildInfo: BuildInfo = {
		version: APP_VERSION,
		minClientVersion: MIN_CLIENT_VERSION,
		languages,
		iconsCount,
		arkhamCardsUpdates,
	};

	const build: Build = {
		...buildInfo,
		icons,
	};

	writeJSON("investigators", data);
	writeJSON("build", build);
	writeJSON("status", buildInfo);
};
