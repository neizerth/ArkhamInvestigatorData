import type { InvestigatorAbility } from "./abilities";
import type { InvestigatorFaction } from "./common";
import type { InvestigatorImage } from "./image";

export type InvestigatorSkin = {
	id: string;
	name: string;
	image: InvestigatorImage;
};

export type InvestigatorVariant = InvestigatorVariantIdentity & {
	name: string;
	additionalAction?: boolean;
	abilities?: InvestigatorAbility[];
	roles?: InvestigatorFaction[];
};

export type InvestigatorVariantIdentity =
	| InvestigatorVariantWithPack
	| InvestigatorCustomVariant
	| InvestigatorDefaultVariant;

export type InvestigatorDefaultVariant = {
	type: "taboo";
	code: string;
	image?: InvestigatorImage;
};

export type InvestigatorCustomVariant = {
	type: "custom";
	code: string;
	image?: InvestigatorImage;
};

export type InvestigatorVariantWithPack = {
	code: string;
} & (
	| {
			type: "parallel";
			image?: InvestigatorImage;
	  }
	| {
			type: "book";
			image: InvestigatorImage;
	  }
);
