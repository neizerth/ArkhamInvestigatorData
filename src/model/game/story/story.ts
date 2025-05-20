import { ArkhamDivider } from "arkham-divider-data";
import type { ReferenceCard } from "./reference";

export type Story = {
	code: string;
	name: string;
	icon?: string;
	type: string;
	official: boolean;
	referenceCards: ReferenceCard[];
};
