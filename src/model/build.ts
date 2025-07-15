import type {
	ArkhamCardsRulesItem,
	ArkhamCardsUpdate,
} from "@/api/arkhamCards";
import type { ArkhamDivider } from "arkham-divider-data";
import type { SignatureCollection } from "./game";
import type { Story } from "./game/story";

export type BuildInfo = {
	version: string;
	minClientVersion: string;

	languages: string[];
	iconsCount: number;
	arkhamCardsUpdates: ArkhamCardsUpdate[];
};

export type Build = BuildInfo & {
	icons: ArkhamDivider.Core["icons"];
};

export type LocaleBuild = SignatureCollection & {
	stories: Story[];
	rules: ArkhamCardsRulesItem[];
};
