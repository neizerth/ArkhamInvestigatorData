import type {
	ArkhamCardsChaosOdd,
	ArkhamCardsChaosOddConditionOption,
	ArkhamCardsChaosOddToken,
} from "../../../../model";

export function mergeOdd(
	base: ArkhamCardsChaosOdd,
	lang: ArkhamCardsChaosOdd,
): ArkhamCardsChaosOdd {
	return {
		...base,
		standard: base.standard.map((b, i) => mergeToken(b, lang.standard[i])),
		hard: base.hard.map((b, i) => mergeToken(b, lang.hard[i])),
	};
}

function mergeToken(
	base: ArkhamCardsChaosOddToken,
	lang: ArkhamCardsChaosOddToken | undefined,
): ArkhamCardsChaosOddToken {
	if (lang == null) return base;
	if ("counter" in base && "counter" in lang) {
		return {
			...base,
			counter: { ...base.counter, prompt: lang.counter.prompt },
		};
	}
	if ("condition" in base && "condition" in lang) {
		return {
			...base,
			condition: {
				...base.condition,
				options: base.condition.options.map((b, i) =>
					mergeConditionOption(b, lang.condition.options[i]),
				),
			},
		};
	}
	return base;
}

function mergeConditionOption(
	base: ArkhamCardsChaosOddConditionOption,
	lang: ArkhamCardsChaosOddConditionOption | undefined,
): ArkhamCardsChaosOddConditionOption {
	if (lang == null) return base;
	return {
		prompt: lang.prompt,
		modified_value: {
			...base.modified_value,
			prompt: lang.modified_value.prompt,
		},
	};
}
