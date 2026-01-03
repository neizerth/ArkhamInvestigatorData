import type { ArkhamCardsChaosOddTokenCounter } from "@/api/arkhamCards";
import { isNumber, underscore2CamelCase } from "@/features";
import type { ReferenceCardTokenCounter } from "@/model";
import type { ChaosBagToken } from "@/model/game/chaosBag";
import { parseChaosOddsEffects } from "../effects";

type Options = {
	item: ArkhamCardsChaosOddTokenCounter;
	effect: string;
};

export const parseOddsCounter = ({
	item,
	effect,
}: Options): ReferenceCardTokenCounter => {
	const token = underscore2CamelCase(item.token) as ChaosBagToken;
	const { counter } = item;
	const { scale, adjustment, prompt, reveal_another } = item.counter;

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
		scale,
		reveal_another,
		...effects,
	};

	if (!adjustment) {
		// const { min, max } = counter;
		const max = isNumber(counter.min)
			? counter.min === 0
				? 0
				: counter.min * -1
			: null;
		const min = isNumber(counter.max) ? counter.max * -1 : null;
		const value = max ?? 0;
		return {
			...base,
			value,
			step: 1,
			...(isNumber(min) && { min }),
			...(isNumber(max) && { max }),
		};
	}
	const minValue = isNumber(counter.max)
		? (counter.max + adjustment) * -1
		: null;
	const maxValue = isNumber(counter.min)
		? (counter.min + adjustment) * -1
		: null;

	return {
		...base,
		value: maxValue ?? 0,
		step: 1,
		...(minValue !== null && { min: minValue }),
		...(maxValue !== null && { max: maxValue }),
	};
};
