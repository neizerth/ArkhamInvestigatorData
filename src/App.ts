import { createImageCache, createInvestigatorsCache } from "./tasks";
import { createSignatureCache } from "./tasks/createSignatureCache";
import { loadMetadata } from "./tasks/loadMetadata";
import { prepareDirectories } from "./tasks/prepareDirectories";

export class App {
	async run(command: string) {
		await prepareDirectories();

		switch (command) {
			case "meta":
				return await loadMetadata();
			case "images":
				return await createImageCache();
			case "cache":
				return await createInvestigatorsCache();
			case "signature":
				return await createSignatureCache();
			default:
				return await this.start();
		}
	}
	async start() {
		await loadMetadata();
		await createImageCache();
		const languages = await createSignatureCache();
		await createInvestigatorsCache(languages);
	}
}
