import { unlink } from "node:fs/promises";
import path from "node:path";
import { downloadFile } from "@/api/downloadFile";
import { DOWNLOADS_DIR } from "@/config";
import { ARKHAM_BUILD_FAN_REPO_ARCHIVE_URL as url } from "@/config/api";
import decompress from "decompress";

const fileName = "arkham-build-repo.zip";

export const downloadArkhamBuildRepo = async () => {
	console.log("downloading arkham.build repo", url);
	await downloadFile(url, DOWNLOADS_DIR, fileName);

	const decompressPath = path.join(DOWNLOADS_DIR, "/", fileName);
	console.log("decompressing", decompressPath);
	await decompress(decompressPath, DOWNLOADS_DIR);

	console.log("decompressed", decompressPath);
	await unlink(decompressPath);
};
