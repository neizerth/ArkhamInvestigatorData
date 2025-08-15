import type {
	ArkhamCardsRulesItem,
	ArkhamCardsUpdate,
} from "@/api/arkhamCards";

export * from "@/components";

import type { ArkhamDivider } from "arkham-divider-data";
import type { SignatureCollection } from "./game";
import type { Story } from "./game/story";

export type AssetInfo = {
	filename: string;
	size: number;
};

export type BuildInfo = {
	version: string;
	minClientVersion: string;

	languages: string[];
	iconsCount: number;
	arkhamCardsUpdates: ArkhamCardsUpdate[];
	assets: AssetInfo[];
};

export type Build = BuildInfo & {
	icons: ArkhamDivider.Core["icons"];
};

export type LocaleBuild = SignatureCollection & {
	stories: Story[];
	rules: ArkhamCardsRulesItem[];
};
