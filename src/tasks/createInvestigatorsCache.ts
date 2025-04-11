import { APP_VERSION, CACHE_DIR, DIST_DIR, MIN_CLIENT_VERSION } from "@/config";
import data from "@/data";
import { createJSONReader, createJSONWriter } from "@/features";
import type { Build } from "@/model";
import type { ArkhamDivider } from "arkham-divider-data";

const readCache = createJSONReader(CACHE_DIR);

export const createInvestigatorsCache = async (languages: string[] = []) => {
  console.log("creating investigators cache");

  const writeJSON = createJSONWriter(DIST_DIR);
  const icons = readCache<ArkhamDivider.Core["icons"]>("icons");

  const build: Build = {
    version: APP_VERSION,
    minClientVersion: MIN_CLIENT_VERSION,
    languages,
    data,
    icons,
  };
  writeJSON("investigators", data);
  writeJSON("build", build);
};
