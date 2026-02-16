import fs from "node:fs";
import path from "node:path";
import { DIST_DIR, ROOT_DIR } from "@/config/app";

const WWW_DIR = path.join(ROOT_DIR, "www");

export const copyWwwToDist = () => {
	if (!fs.existsSync(WWW_DIR)) return;
	const entries = fs.readdirSync(WWW_DIR, { withFileTypes: true });
	for (const entry of entries) {
		const src = path.join(WWW_DIR, entry.name);
		const dest = path.join(DIST_DIR, entry.name);
		fs.cpSync(src, dest, { recursive: true });
	}
};
