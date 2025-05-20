export type ArkhamCardsReference = {
	id: string;
	code: string;
	encounter_code: string;
	position: number;
	pack_code: string;
	real_name: string;
	real_text: string;
	real_back_text: string;
	translations: ArkhamCardsReferenceTranslation[];
};

export type ArkhamCardsReferenceTranslation = {
	locale: string;
	name: string;
	text: string;
	back_text: string;
};
