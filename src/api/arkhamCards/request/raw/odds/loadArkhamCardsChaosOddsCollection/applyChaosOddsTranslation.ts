import type {
	ArkhamCardsChaosOdd,
	ArkhamCardsChaosOddConditionOption,
	ArkhamCardsChaosOddToken,
} from "@/api/arkhamCards/model";

type Options = {
	odds: ArkhamCardsChaosOdd[];
	translation: Record<string, string>;
};

const translate = (
	translation: Partial<Record<string, string>>,
	text: string,
) => translation?.[text] ?? text;

function translateToken(
	token: ArkhamCardsChaosOddToken,
	translation: Record<string, string>,
): ArkhamCardsChaosOddToken {
	if ("counter" in token) {
		return {
			...token,
			counter: {
				...token.counter,
				prompt: translate(translation, token.counter.prompt),
			},
		};
	}
	if ("condition" in token) {
		return {
			...token,
			condition: {
				...token.condition,
				options: token.condition.options.map((opt) =>
					translateConditionOption(opt, translation),
				),
			},
		};
	}
	return token;
}

function translateConditionOption(
	option: ArkhamCardsChaosOddConditionOption,
	translation: Record<string, string>,
): ArkhamCardsChaosOddConditionOption {
	return {
		prompt: translate(translation, option.prompt),
		modified_value: {
			...option.modified_value,
			prompt: translate(translation, option.modified_value.prompt),
		},
	};
}

export const applyChaosOddsTranslation = ({
	odds,
	translation,
}: Options): ArkhamCardsChaosOdd[] =>
	odds.map((odd) => ({
		...odd,
		standard: odd.standard.map((token) => translateToken(token, translation)),
		hard: odd.hard.map((token) => translateToken(token, translation)),
	}));
