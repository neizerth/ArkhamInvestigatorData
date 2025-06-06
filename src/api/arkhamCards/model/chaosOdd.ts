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

export type ArkhamCardsChaosOddToken = {
	token: ArkhamCardsChaosToken;
} & (
	| {
			value: ArkhamCardsChaosOddTokenValue;
	  }
	| {
			type: "counter";
			counter: {
				min?: number;
				adjustment?: number;
				max?: number;
			};
	  }
	| {
			type: "condition";
			condition: {
				default_value: {
					modifier: number;
				};
				options: ArkhamCardsChaosOddConditionOption[];
			};
	  }
);

export type ArkhamCardsChaosOddTokenValue = {
	modifier: number | "auto_fail" | "auto_succeed";
};

export type ArkhamCardsChaosOddConditionOption = {
	modified_value: {
		modifier: number;
	};
};
