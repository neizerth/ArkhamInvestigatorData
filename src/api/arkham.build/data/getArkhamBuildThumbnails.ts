import { isNotNil, prop } from "ramda";
import { loadArkhamBuildInvestigators } from "./loadArkhamBuildInvestigators";

export const getArkhamBuildThumbnails = () => {
	return loadArkhamBuildInvestigators()
		.map(prop("square_image_url"))
		.filter(isNotNil);
};
