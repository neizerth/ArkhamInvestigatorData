import type { ReferenceCard } from "./reference";

export type Story = {
	locale: string;
	code: string;
	name: string;
	icon?: string;
	type: string;
	official: boolean;
	referenceCards: ReferenceCard[];
};
