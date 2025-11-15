import { ArkhamCardsFullPack, ArkhamCardsPack } from "@/api/arkhamCards";
import { getArkhamBuildProjects } from "../lib/getArkhamBuildProjects";
import { loadArkhamBuildCycles } from "./loadArkhamBuildCycles";
import { isNotNil } from "ramda";

export const loadArkhamBuildPacks = () => {
	const projects = getArkhamBuildProjects();
	const cycles = loadArkhamBuildCycles();
	return projects
		.flatMap((project) => project.data.packs)
		.map((pack, index): ArkhamCardsFullPack => {
			const cycle = cycles.find((cycle) => cycle.code === pack.code);

			if (!cycle) {
				return null;
			}
			return {
				cycle,
				code: pack.code,
				position: 200 + index,
				real_name: pack.name,
				official: false,
				translations: [],
			};
		})
		.filter(isNotNil);
};
