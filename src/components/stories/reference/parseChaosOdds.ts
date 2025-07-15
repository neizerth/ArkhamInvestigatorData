import type {
	ArkhamCardsChaosOddToken,
	ArkhamCardsChaosOddTokenDefaultValue,
	ArkhamCardsChaosOddTokenValueType,
} from "@/api/arkhamCards";
import { underscore2CamelCase } from "@/features";
import type { ReferenceCardToken } from "@/model";
import type { ChaosBagToken } from "@/model/game/chaosBag";
import { ascend, identity, isNotNil, sort, uniq } from "ramda";

export const parseChaosOdds = (tokens: ArkhamCardsChaosOddToken[] = []) => {
	return tokens.map(getTokenData).filter(isNotNil);
};

const getTokenData = (
	item: ArkhamCardsChaosOddToken,
): ReferenceCardToken | null => {
	const token = underscore2CamelCase(item.token) as ChaosBagToken;
	if (!("type" in item)) {
		const value = getTokenValue(item.value);

		return {
			type: "value",
			token,
			value,
			config: item.value,
		};
	}

	if (item.type === "counter") {
		const { counter } = item;
		const { adjustment, prompt } = item.counter;

		if (!counter.min && !counter.max) {
			return null;
		}

		if (!adjustment) {
			const { min, max } = counter;
			const value = max || 0;
			return {
				type: "counter",
				prompt,
				token,
				value,
				step: 1,
				min: max && max * -1,
				max: min && min * -1,
			};
		}
		const min = (counter.max || 0) * adjustment * -1;
		const max = counter.min && counter.min * adjustment * 1;

		return {
			type: "counter",
			prompt,
			token,
			value: min,
			step: adjustment,
			min,
			max,
		};
	}

	if (item.type === "condition") {
		const { condition } = item;
		const { options, default_value } = condition;

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
	}

	return null;
};

const getTokenValue = (item: ArkhamCardsChaosOddTokenDefaultValue) => {
	const { modifier } = item;
	if (typeof modifier === "number") {
		return modifier;
	}
};

const getOptionValue = (value: ArkhamCardsChaosOddTokenValueType) => {
	if (value === "auto_fail" || value === "auto_succeed") {
		return;
	}
	return value;
};
