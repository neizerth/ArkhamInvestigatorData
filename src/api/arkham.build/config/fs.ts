import path from "node:path";
import { ARKHAM_BUILD_FAN_REPO_FOLDER_NAME, DOWNLOADS_DIR } from "@/config";
export const arkhamBuildFanRepoPath = path.join(
	DOWNLOADS_DIR,
	ARKHAM_BUILD_FAN_REPO_FOLDER_NAME,
);
export const projectsPath = path.join(arkhamBuildFanRepoPath, "projects");
