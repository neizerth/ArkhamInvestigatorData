import type { ArkhamCardsReferenceTranslation } from "@/api/arkhamCards";

export type ReferenceCard = Omit<ArkhamCardsReferenceTranslation, "locale"> & {
	code: string;
	encounter_code: string;
	position: number;
	// tokens: [];
};
