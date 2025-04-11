import type { ArkhamCardsInvestigator } from "@/api/arkhamCards";

export type InvestigatorTabooSignature = Omit<
	ArkhamCardsInvestigator,
	| "real_name"
	| "real_subname"
	| "real_text"
	| "real_flavor"
	| "real_traits"
	| "real_taboo_original_text"
	| "real_taboo_text_change"
	| "translations"
> & {
	locale: string;
	text: string;
	name: string;
	subname: string;
	flavor: string;
	traits: string;
	taboo_original_text: string | null;
	taboo_text_change: string | null;
};

export type InvestigatorSignature = Omit<
	InvestigatorTabooSignature,
	"taboo_original_text" | "taboo_text_change" | "taboo_set"
>;

export type SignatureCollection = {
	cards: InvestigatorSignature[];
	taboo: InvestigatorTabooSignature[];
};
