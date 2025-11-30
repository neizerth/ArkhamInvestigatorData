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

export type ReferenceCardTokenOption = ArkhamCardsChaosOddConditionOption &
	ReferenceCardTokenEffectInfo;

export type ReferenceCardTokenBase = {
	token: ChaosBagToken;
	value?: number;
	prompt?: string;
	options?: ReferenceCardTokenOption[];
};

export type ReferenceCardTokenEffectInfo = {
	personal?: boolean;
	expression?: string;
};

export type ReferenceCardToken =
	| ReferenceCardTokenValue
	| ReferenceCardTokenCounter
	| ReferenceCardTokenSelect;

export type ReferenceCardTokenValue = ReferenceCardTokenBase & {
	type: "value";
	config: ArkhamCardsChaosOddTokenDefaultValue;
};

export type ReferenceCardTokenCounter = ReferenceCardTokenBase &
	ReferenceCardTokenEffectInfo & {
		type: "counter";
		min?: number;
		max?: number;
		step: number;
		scale?: number;
		reveal_another?: number;
	};

export type ReferenceCardTokenSelect = ReferenceCardTokenBase & {
	type: "select";
	values?: number[];
	config: ArkhamCardsChaosOddTokenDefaultValue;
	options?: ReferenceCardTokenOption[];
};
