import type { ArkhamCardsChaosOddTokenCounter } from "@/api/arkhamCards";
import { isNumber, underscore2CamelCase } from "@/features";
import type { ReferenceCardToken } from "@/model";
import type { ChaosBagToken } from "@/model/game/chaosBag";
import { parseChaosOddsEffects } from "../effects";

type Options = {
	item: ArkhamCardsChaosOddTokenCounter;
	effect: string;
};

export const parseOddsCounter = ({
	item,
	effect,
}: Options): ReferenceCardToken => {
	const token = underscore2CamelCase(item.token) as ChaosBagToken;
	const { counter } = item;
	const { adjustment, prompt } = item.counter;

	if (!isNumber(counter.min) && !isNumber(counter.max)) {
		return null;
	}

	const effects = parseChaosOddsEffects({
		prompt,
		effect,
	});

	const base = {
		type: "counter" as const,
		prompt,
		token,
		...effects,
	};

	if (!adjustment) {
		const { min, max } = counter;
		const value = max || 0;
		return {
			...base,
			value,
			step: 1,
			min: max && max * -1,
			max: min && min * -1,
		};
	}
	const min = (counter.max || 0) * adjustment * -1;
	const max = counter.min && counter.min * adjustment * 1;

	return {
		...base,
		value: min,
		step: adjustment,
		min,
		max,
	};
};
