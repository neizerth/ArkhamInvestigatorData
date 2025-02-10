import { CACHE_DIR, DIST_DIR } from "@/config/app"
import { mkDir } from "@/features"

export const prepareDirectories = async () => {
  mkDir(CACHE_DIR);
  mkDir(DIST_DIR);
}