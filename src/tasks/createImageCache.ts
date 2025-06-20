import fs from "node:fs";
import { writeFile } from "node:fs/promises";
import { Readable } from "node:stream";
import type { ReadableStream } from "node:stream/web";
import { CACHED_IMAGES_DIR, DIST_DIR, IMAGES_ASSETS_URL } from "@/config";
import { mkDir } from "@/features";
import decompress from "decompress";

export const createImageCache = async () => {
	mkDir(CACHED_IMAGES_DIR);

	console.log("download url", IMAGES_ASSETS_URL);

	const { body } = await fetch(IMAGES_ASSETS_URL);

	const filePath = `${CACHED_IMAGES_DIR}/images.zip`;

	const stream = Readable.fromWeb(body as ReadableStream);
	await writeFile(filePath, stream);

	await decompress(filePath, DIST_DIR);
	fs.unlinkSync(filePath);
};
