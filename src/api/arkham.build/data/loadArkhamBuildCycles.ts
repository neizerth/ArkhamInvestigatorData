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
		.filter(
			(project) =>
				!ignoreCyclesIds.includes(project.id) &&
				// TODO: remove this once the app supports signatures without images
				supportedCyclesIds.includes(project.id),
		)
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
