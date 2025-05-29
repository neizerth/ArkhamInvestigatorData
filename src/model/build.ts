import type { ArkhamDivider } from "arkham-divider-data";
import type { Investigator, SignatureCollection } from "./game";
import type { Story } from "./game/story";
import { ArkhamCardsRulesItem } from "@/api/arkhamCards";

export type Build = {
  version: string;
  minClientVersion: string;
  data: Investigator[];
  icons: ArkhamDivider.Core["icons"];
  languages: string[];
};

export type LocaleBuild = SignatureCollection & {
  stories: Story[];
  rules: ArkhamCardsRulesItem[];
};
