import type {
	ArkhamCardsChaosOddTokenCondition,
	ArkhamCardsChaosOddTokenValueType,
} from "@/api/arkhamCards";
import { underscore2CamelCase } from "@/features";
import type { ReferenceCardToken } from "@/model";
import type { ChaosBagToken } from "@/model/game/chaosBag";
import { ascend, identity, isNotNil, sort, uniq } from "ramda";

export const parseOddsCondition = (
	item: ArkhamCardsChaosOddTokenCondition,
): ReferenceCardToken | null => {
	const { condition } = item;
	const { options, default_value } = condition;

	const token = underscore2CamelCase(item.token) as ChaosBagToken;
	const value = getOptionValue(condition.default_value.modifier);

	const optionValues = condition.options.map((item) =>
		getOptionValue(item.modified_value.modifier),
	);

	const rawValues = uniq([value, ...optionValues].filter(isNotNil));

	const values = sort(ascend(identity), rawValues);

	if (values.length === 0) {
		return null;
	}

	if (values.length === 1) {
		const [value] = values;

		return {
			type: "value",
			config: default_value,
			options,
			token,
			value,
		};
	}

	return {
		type: "select",
		config: default_value,
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
