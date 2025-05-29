import { createImageCache, createInvestigatorsCache } from "./tasks";
import { createDataCache } from "./tasks/createDataCache";
import { loadMetadata } from "./tasks/loadMetadata";
import { prepareDirectories } from "./tasks/prepareDirectories";

export class App {
  async run(command: string) {
    await prepareDirectories();

    if (!command) {
      return this.start();
    }

    switch (command) {
      case "meta":
        return await loadMetadata();
      case "images":
        return await createImageCache();
      case "cache":
        return await createInvestigatorsCache();
      case "data":
        return await createDataCache();
      default:
        console.log(`command "${command}" not found`);
    }
  }
  async start() {
    await loadMetadata();
    await createImageCache();
    const languages = await createDataCache();
    await createInvestigatorsCache(languages);
  }
}
