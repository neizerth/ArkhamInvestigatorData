export type ArkhamCardsChaosOdd = {
	code: string;
	scenario: string;
	standard: ArkhamCardsChaosOddToken[];
	hard: ArkhamCardsChaosOddToken[];
};

export type ArkhamCardsChaosToken =
	| "+1"
	| "0"
	| "-1"
	| "-2"
	| "-3"
	| "-4"
	| "-5"
	| "-6"
	| "-7"
	| "-8"
	| "bless"
	| "curse"
	| "elder_sign"
	| "skull"
	| "cultist"
	| "auto_fail"
	| "tablet"
	| "frost"
	| "elder_thing";

export type ArkhamCardsChaosOddTokenBase = {
	token: ArkhamCardsChaosToken;
};

export type ArkhamCardsChaosOddToken =
	| ArkhamCardsChaosOddTokenSingleValue
	| ArkhamCardsChaosOddTokenCounter
	| ArkhamCardsChaosOddTokenCondition;

export type ArkhamCardsChaosOddTokenSingleValue =
	ArkhamCardsChaosOddTokenBase & {
		value: ArkhamCardsChaosOddTokenDefaultValue;
	};

export type ArkhamCardsChaosOddTokenCounter = ArkhamCardsChaosOddTokenBase & {
	type: "counter";
	counter: {
		prompt: string;
		min?: number;
		adjustment?: number;
		max?: number;
	};
};

export type ArkhamCardsChaosOddTokenCondition = ArkhamCardsChaosOddTokenBase & {
	type: "condition";
	condition: {
		default_value: ArkhamCardsChaosOddTokenDefaultValue;
		options: ArkhamCardsChaosOddConditionOption[];
	};
};

export type ArkhamCardsChaosOddTokenDefaultValue = {
	modifier: ArkhamCardsChaosOddTokenValueType;
	reveal_another?: number;
};

export type ArkhamCardsChaosOddTokenValue =
	ArkhamCardsChaosOddTokenDefaultValue & {
		prompt: string;
	};

export type ArkhamCardsChaosOddTokenValueType =
	| number
	| "auto_fail"
	| "auto_succeed";

export type ArkhamCardsChaosOddConditionOption = {
	prompt: string;
	modified_value: ArkhamCardsChaosOddTokenValue;
};

export type ArkhamCardsChaosOddCollection = Record<
	string,
	ArkhamCardsChaosOdd[]
>;
