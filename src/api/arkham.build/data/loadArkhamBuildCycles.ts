import { ArkhamCardsCycle } from "@/api/arkhamCards";
import { getArkhamBuildProjects } from "../lib/getArkhamBuildProjects";
import { ignoreCyclesIds } from "../config";

export const loadArkhamBuildCycles = () => {
	const projects = getArkhamBuildProjects();
	return projects
		.filter((project) => !ignoreCyclesIds.includes(project.id))
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
};
