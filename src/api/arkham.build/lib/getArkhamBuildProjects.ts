import { projectsPath } from "../config";
import fs from "node:fs";
import path from "node:path";
import { ArkhamBuildProject } from "../model/project";
import { isNotNil } from "ramda";

export const getArkhamBuildProjects = () => {
	const contents = fs.readdirSync(projectsPath);
	return contents
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
};
