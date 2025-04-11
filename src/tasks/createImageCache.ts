import fs from "node:fs";
import path from "node:path";
import { CACHED_IMAGES_DIR, DIST_DIR, GOOGLE_DRIVE_FOLDER_ID } from "@/config";
import {
	delay,
	getGoogleDriveFile,
	getGoogleDriveFolderContents,
	mkDir,
} from "@/features";
import type { drive_v3 } from "@googleapis/drive";
import decompress from "decompress";

export const createImageCache = async () => {
	mkDir(CACHED_IMAGES_DIR);

	await delay(100);
	const contents = await getGoogleDriveFolderContents(GOOGLE_DRIVE_FOLDER_ID);

	for (const file of contents) {
		const { name } = file;
		const isZip = name.endsWith(".zip");

		if (!isZip) {
			continue;
		}

		const filePath = await downloadSingle(file);

		await decompress(filePath, DIST_DIR);
		fs.unlinkSync(filePath);
	}
};

export const downloadSingle = async (file: drive_v3.Schema$File) => {
	const { name } = file;

	const filePath = path.join(CACHED_IMAGES_DIR, name);
	const stream = fs.createWriteStream(filePath);

	await delay(100);
	await getGoogleDriveFile({
		...file,
		stream,
	});

	stream.close();

	return filePath;
};
