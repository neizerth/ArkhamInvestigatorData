import type {
	ArkhamCardsChaosOddToken,
	ArkhamCardsChaosOddTokenValue,
} from "@/api/arkhamCards";
import { underscore2CamelCase } from "@/features";
import type { ReferenceCardToken, ReferenceCardTokenResolve } from "@/model";
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

		const value = condition.default_value.modifier;

		const optionValues = condition.options.map(
			({ modified_value }) => modified_value.modifier,
		);

		const values = [value, ...optionValues];

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
	const value =
		typeof modifier === "number"
			? modifier
			: (underscore2CamelCase(modifier) as ReferenceCardTokenResolve);

	return value;
};
