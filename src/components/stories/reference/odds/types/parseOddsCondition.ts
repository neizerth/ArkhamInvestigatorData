import type {
	ArkhamCardsChaosOddTokenCondition,
	ArkhamCardsChaosOddTokenValueType,
} from "@/api/arkhamCards";
import { underscore2CamelCase } from "@/features";
import type { ReferenceCardToken } from "@/model";
import type { ChaosBagToken } from "@/model/game/chaosBag";
import { ascend, identity, isNotNil, sort, uniq } from "ramda";
import { parseChaosOddsEffects } from "../effects";

export const parseOddsCondition = (
	item: ArkhamCardsChaosOddTokenCondition,
): ReferenceCardToken | null => {
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
		return {
			...option,
			...parseChaosOddsEffects(option.prompt),
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
		return;
	}
	return value;
};
