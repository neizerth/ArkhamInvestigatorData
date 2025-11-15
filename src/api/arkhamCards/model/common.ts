export type ArkhamCardsPack = {
	code: string;
	position: number;
	real_name: string;
	official: boolean;
	translations: ArkhamCardsPackTranslation[];
};

export type ArkhamCardsFullPack = ArkhamCardsPack & {
	cycle: ArkhamCardsCycle;
};

export type ArkhamCardsCycle = {
	id?: string;
	code: string;
	position: number;
	real_name: string;
	official: boolean;
	translations: ArkhamCardsPackTranslation[];
};

export type ArkhamCardsPackTranslation = {
	locale: string;
	name: string;
};

export type ArkhamCardsCycleTranslation = {
	locale: string;
	name: string;
};

export type ArkhamCardsTabooSet = {
	id: number;
	date: string;
	code: string;
	name: string;
};
