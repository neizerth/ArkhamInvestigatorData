import type { InvestigatorFaction } from "@/model";
import type { ArkhamCardsFullPack, ArkhamCardsTabooSet } from "./common";

export type ArkhamCardsInvestigatorGender = "m" | "f" | "nb";

export type ArkhamCardsInvestigator = {
	id: string;
	min_version?: string;
	max_version?: string;
	alternate_of_code: string | null;
	linked_code: string | null;
	gender: ArkhamCardsInvestigatorGender;
	code: string;
	real_text: string;
	real_name: string;
	real_subname: string;
	real_flavor: string;
	real_traits: string;
	real_taboo_original_text: string | null;
	real_taboo_text_change: string | null;
	faction_code: InvestigatorFaction;
	sanity: number;
	health: number;
	skill_agility: number;
	skill_combat: number;
	skill_intellect: number;
	skill_willpower: number;
	translations: ArkhamCardsInvestigatorTranslation[];
	taboo_set: ArkhamCardsTabooSet | null;
	pack: ArkhamCardsFullPack;
	spoiler: boolean;
	square_image_url?: string;
};

export type ArkhamCardsInvestigatorTranslation = {
	locale: string;
	name: string;
	subname: string;
	text: string;
	traits: string;
	flavor: string;

	taboo_original_text: string;
	taboo_text_change: string;
};
