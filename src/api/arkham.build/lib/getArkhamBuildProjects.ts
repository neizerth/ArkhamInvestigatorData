import fs from "node:fs";
import path from "node:path";
import { isNotNil } from "ramda";
import { projectsPath } from "../config";
import type { ArkhamBuildProject } from "../model/project";

let cachedProjects: ArkhamBuildProject[] = [];

export const getArkhamBuildProjects = () => {
	if (cachedProjects.length > 0) {
		return cachedProjects;
	}

	const contents = fs.readdirSync(projectsPath);
	cachedProjects = contents
		.filter((file) => file.endsWith(".json"))
		.map((file) => {
			const id = file.replace(".json", "");
			const filePath = path.join(projectsPath, file);
			const contents = fs.readFileSync(filePath, "utf8");
			const project = JSON.parse(contents) as ArkhamBuildProject;

			if (!project.meta.types.includes("investigators")) {
				return null;
			}

			return {
				id,
				...project,
			};
		})
		.filter(isNotNil);
	return cachedProjects;
};
