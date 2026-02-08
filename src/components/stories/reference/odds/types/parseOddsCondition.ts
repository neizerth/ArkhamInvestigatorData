import type {
	ArkhamCardsChaosOddTokenCondition,
	ArkhamCardsChaosOddTokenValueType,
} from "@/api/arkhamCards";
import { underscore2CamelCase } from "@/features";
import type { ReferenceCardToken } from "@/model";
import type { ChaosBagToken } from "@/model/game/chaosBag";
import { ascend, identity, isNotNil, sort, uniq } from "ramda";
import { fixBrokenText } from "../../text";
import { parseChaosOddsEffects } from "../effects";

type Options = {
	item: ArkhamCardsChaosOddTokenCondition;
	effect: string;
};

export const parseOddsCondition = ({
	item,
	effect,
}: Options): ReferenceCardToken | null => {
	const { condition } = item;

	const config = condition.default_value;

	const token = underscore2CamelCase(item.token) as ChaosBagToken;
	const value = getOptionValue(condition.default_value.modifier);

	const optionValues = condition.options.map((item) =>
		getOptionValue(item.modified_value.modifier),
	);

	const rawValues = uniq([value, ...optionValues].filter(isNotNil));

	const values = sort(ascend(identity), rawValues);

	const options = condition.options.map((option) => {
		const prompt = fixBrokenText(option.prompt);

		return {
			...option,
			prompt,
			...parseChaosOddsEffects({
				prompt,
				effect,
			}),
		};
	});

	if (values.length === 0) {
		return null;
	}

	if (values.length === 1) {
		const [value] = values;

		return {
			type: "value",
			config,
			options,
			token,
			value,
		};
	}

	return {
		type: "select",
		config,
		options,
		token,
		value,
		values,
	};
};

const getOptionValue = (value: ArkhamCardsChaosOddTokenValueType) => {
	if (value === "auto_fail" || value === "auto_succeed") {
		return 0;
	}
	return value;
};
