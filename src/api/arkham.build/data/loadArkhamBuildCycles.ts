import type { ArkhamCardsCycle } from "@/api/arkhamCards";
import { ignoreCyclesIds, supportedCyclesIds } from "../config";
import { getArkhamBuildProjects } from "../lib/getArkhamBuildProjects";

let cachedCycles: ArkhamCardsCycle[] = [];

export const loadArkhamBuildCycles = () => {
	if (cachedCycles.length > 0) {
		return cachedCycles;
	}

	const projects = getArkhamBuildProjects();
	cachedCycles = projects
		.filter((project) => {
			// TODO: remove this once the app supports signatures without images
			const isSupported =
				supportedCyclesIds.includes(project.id) ||
				supportedCyclesIds.length === 0;

			return !ignoreCyclesIds.includes(project.id) && isSupported;
		})
		.map((project, index): ArkhamCardsCycle => {
			return {
				id: project.id,
				code: project.meta.code,
				position: 200 + index,
				real_name: project.meta.name,
				official: false,
				translations: [],
			};
		});
	return cachedCycles;
};
