import type { ArkhamCardsFullPack } from "@/api/arkhamCards";
import { isNotNil } from "ramda";
import { getArkhamBuildProjects } from "../lib/getArkhamBuildProjects";
import { loadArkhamBuildCycles } from "./loadArkhamBuildCycles";

let cachedPacks: ArkhamCardsFullPack[] = [];

export const loadArkhamBuildPacks = () => {
	if (cachedPacks.length > 0) {
		return cachedPacks;
	}

	const projects = getArkhamBuildProjects();
	const cycles = loadArkhamBuildCycles();
	cachedPacks = projects
		.flatMap((project) => {
			const cycle = cycles.find((cycle) => cycle.code === project.meta.code);
			if (!cycle) {
				return null;
			}

			return project.data.packs.map((pack, index): ArkhamCardsFullPack => {
				return {
					cycle,
					code: pack.code,
					position: index,
					real_name: pack.name,
					official: false,
					translations: [],
				};
			});
		})
		.filter(isNotNil);
	return cachedPacks;
};
