import type {
	ArkhamCardsChaosOddConditionOption,
	ArkhamCardsChaosOddTokenDefaultValue,
	ArkhamCardsReferenceTranslation,
} from "@/api/arkhamCards";
import type { ChaosBagToken } from "../chaosBag";

export type ReferenceCard = ArkhamCardsReferenceTranslation & {
	code: string;
	encounter_code: string;
	icon?: string;
	position: number;
	reference: ReferencePart[];
	back_reference: ReferencePart[];
	tokens: ReferenceCardToken[];
	back_tokens: ReferenceCardToken[];
	difficulty: string;
	back_difficulty: string;
};

export type ReferencePart = { id: string } & (
	| {
			type: "single";
			token: ChaosBagToken;
			effect: string;
	  }
	| {
			type: "group";
			tokens: ChaosBagToken[];
			effect: string;
	  }
);

export type ReferenceCardTokenBase = {
	token: ChaosBagToken;
	value?: number;
	prompt?: string;
	options?: ArkhamCardsChaosOddConditionOption[];
};

export type ReferenceCardToken =
	| ReferenceCardTokenValue
	| ReferenceCardTokenCounter
	| ReferenceCardTokenSelect;

export type ReferenceCardTokenValue = ReferenceCardTokenBase & {
	type: "value";
	config: ArkhamCardsChaosOddTokenDefaultValue;
};

export type ReferenceCardTokenCounter = ReferenceCardTokenBase & {
	type: "counter";
	min?: number;
	max?: number;
	step: number;
};

export type ReferenceCardTokenSelect = ReferenceCardTokenBase & {
	type: "select";
	config: ArkhamCardsChaosOddTokenDefaultValue;
	values?: number[];
};
