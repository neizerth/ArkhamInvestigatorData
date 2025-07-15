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

export type ReferenceCardToken = {
	token: ChaosBagToken;
	value?: number;
	prompt?: string;
	options?: ArkhamCardsChaosOddConditionOption[];
} & (
	| {
			type: "value";
			config: ArkhamCardsChaosOddTokenDefaultValue;
	  }
	| {
			type: "counter";
			min?: number;
			max?: number;
			step: number;
	  }
	| {
			type: "select";
			config: ArkhamCardsChaosOddTokenDefaultValue;
			values?: number[];
	  }
);
