import type { ArkhamCardsChaosOddTokenCounter } from "@/api/arkhamCards";
import { isNumber, underscore2CamelCase } from "@/features";
import type { ReferenceCardToken } from "@/model";
import type { ChaosBagToken } from "@/model/game/chaosBag";

export const parseOddsCounter = (
	item: ArkhamCardsChaosOddTokenCounter,
): ReferenceCardToken => {
	const token = underscore2CamelCase(item.token) as ChaosBagToken;
	const { counter } = item;
	const { adjustment, prompt } = item.counter;

	if (!isNumber(counter.min) && !isNumber(counter.max)) {
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
};
