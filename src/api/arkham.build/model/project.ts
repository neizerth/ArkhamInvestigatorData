import { InvestigatorFaction } from "@/model";

export type ArkhamBuildProject = {
	id?: string;
	meta: ArkhamBuildProjectMeta;
	data: ArkhamBuildProjectData;
};

export type ArkhamBuildProjectType =
	| "campaign"
	| "investigators"
	| "player_cards"
	| "rework"
	| "scenario";

export type ArkhamBuildProjectMeta = {
	code: string;
	name: string;
	description: string;
	author: string;
	language: string;
	external_link: string;
	banner_url: string;
	banner_credit: string;
	types: string[];
	status: string;
	date_updated: string;
	generator: string;
};

export type ArkhamBuildProjectData = {
	cards: ArkhamBuildProjectCard[];
	packs?: ArkhamBuildProjectPack[];
};

export type ArkhamBuildProjectPack = {
	code: string;
	name: string;
	date_release: string;
	icon_url: string;
};

export type ArkhamBuildProjectCard = {
	code: string;
	deck_limit: number;
	double_sided: boolean;
	faction_code: InvestigatorFaction;
	flavor: string;
	health: number;
	illustrator: string;
	is_unique: boolean;
	name: string;
	subname: string;
	traits: string;
	text: string;
	pack_code: string;
	position: number;
	quantity: number;
	sanity: number;
	image_url: string;
	thumbnail_url: string;
	back_image_url: string;
	back_thumbnail_url: string;
	type_code?: string;
	skill_agility: number;
	skill_combat: number;
	skill_intellect: number;
	skill_willpower: number;
};
