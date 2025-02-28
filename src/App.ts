import { createImageCache, createInvestigatorsCache } from "./tasks";
import { prepareDirectories } from "./tasks/prepareDirectories";

export class App {
  async run(command: string) {
    await prepareDirectories();

    switch (command) {
      case 'images':
        return await createImageCache();
      case 'cache':
        return await createInvestigatorsCache();
      default:
        return await this.start();
    }
  }
  async start() {
    await createImageCache();
    await createInvestigatorsCache();
  }
}