import { CACHE_DIR, DIST_DIR, DOWNLOADS_DIR } from "@/config/app";
import { mkDir } from "@/features";
import { copyWwwToDist } from "./copyWwwToDist";

export const prepareDirectories = async () => {
	mkDir(CACHE_DIR);
	mkDir(DIST_DIR);
	mkDir(DOWNLOADS_DIR);
	copyWwwToDist();
};
