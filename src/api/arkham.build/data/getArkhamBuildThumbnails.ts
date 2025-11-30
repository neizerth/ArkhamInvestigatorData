import { isNotNil, prop } from "ramda";
import { loadArkhamBuildInvestigators } from "./loadArkhamBuildInvestigators";

export const getArkhamBuildThumbnails = () => {
	return loadArkhamBuildInvestigators()
		.map((row) => {
			if (!row.square_image_url) {
				return;
			}
			return [row.code, row.square_image_url];
		})
		.filter(isNotNil);
};
