import type { ArkhamCardsInvestigator } from "@/api/arkhamCards";
import type { ReferenceCardToken, ReferencePart } from "../story";
import type { Investigator, InvestigatorFaction } from "./common";
import type { InvestigatorSkin } from "./options";

export type InvestigatorSignatureGender = "male" | "female" | "non-binary";

export type InvestigatorSignature = Omit<
	ArkhamCardsInvestigator,
	| "real_name"
	| "real_subname"
	| "real_text"
	| "real_flavor"
	| "real_traits"
	| "real_taboo_original_text"
	| "real_taboo_text_change"
	| "translations"
	| "pack"
	| "gender"
> &
	Omit<Investigator, "variants" | "skins" | "image"> & {
		icon: string;
		type: InvestigatorSignatureType;
		image: Omit<Investigator["image"], "id"> & {
			id: string;
		};
		locale: string;
		text: string;
		name: string;
		subname: string;
		flavor: string;
		traits: string;
		taboo: boolean;
		taboo_original_text: string | null;
		taboo_text_change: string | null;
		custom: boolean;
		official: boolean;
		canonical: boolean;
		pack: InvestigatorSignaturePack;
		cycle: InvestigatorSignatureCycle;
		gender: InvestigatorSignatureGender;
		tokens_reference: ReferencePart[];
		tokens: ReferenceCardToken[];
		dative_name?: string;
	};

export type InvestigatorSignatureType =
	| "default"
	| "custom"
	| "parallel"
	| "book"
	| "taboo";

export type InvestigatorSignaturePack = {
	locale: string;
	code: string;
	name: string;
	position: number;
	icon: string;
};

export type InvestigatorSignatureCycle = {
	locale: string;
	code: string;
	name: string;
	position: number;
	icon: string;
};

export type InvestigatorSignatureGroup = {
	id: string;
	locale: string;
	code: string;
	name: string;
	subname: string;
	signatures: InvestigatorSignature[];
	skins: InvestigatorSkin[];
	official: boolean;
	canonical: boolean;
	spoiler: boolean;
	custom: boolean;
	faction_code: InvestigatorFaction;
	multiselect: boolean;
};

export type SignatureCollection = {
	groups: InvestigatorSignatureGroup[];
	taboo: InvestigatorSignature[];
};
