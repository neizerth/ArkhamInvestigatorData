import { createImageCache, createInvestigatorsCache } from "./tasks";
import { createSignatureCache } from "./tasks/createSignatureCache";
import { prepareDirectories } from "./tasks/prepareDirectories";

export class App {
	async run(command: string) {
		await prepareDirectories();

		switch (command) {
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
		await createImageCache();
		await createInvestigatorsCache();
		await createSignatureCache();
	}
}
