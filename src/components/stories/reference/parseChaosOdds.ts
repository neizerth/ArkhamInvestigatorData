import type {
	ArkhamCardsChaosOddToken,
	ArkhamCardsChaosOddTokenValue,
	ArkhamCardsChaosOddTokenValueType,
} from "@/api/arkhamCards";
import { underscore2CamelCase } from "@/features";
import type { ReferenceCardToken } from "@/model";
import type { ChaosBagToken } from "@/model/game/chaosBag";
import { isNotNil } from "ramda";

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
		};
	}

	if (item.type === "counter") {
		const { min, max, adjustment = 0 } = item.counter;

		if (!min && !max) {
			return null;
		}

		const value = (min || 0) + adjustment;

		return {
			type: "counter",
			token,
			value,
			min,
			max,
		};
	}

	if (item.type === "condition") {
		const { condition } = item;

		const value = getOptionValue(condition.default_value.modifier);

		const optionValues = condition.options.map((item) =>
			getOptionValue(item.modified_value.modifier),
		);

		const values = [value, ...optionValues].filter(isNotNil);

		if (values.length === 0) {
			return null;
		}

		if (values.length === 1) {
			const [value] = values;

			return {
				type: "value",
				token,
				value,
			};
		}

		return {
			type: "select",
			token,
			value,
			values,
		};
	}

	return null;
};

const getTokenValue = (item: ArkhamCardsChaosOddTokenValue) => {
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
