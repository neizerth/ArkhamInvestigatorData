import type { ArkhamCardsChaosOddTokenCounter } from "@/api/arkhamCards";
import { isNumber, underscore2CamelCase } from "@/features";
import type { ReferenceCardTokenCounter } from "@/model";
import type { ChaosBagToken } from "@/model/game/chaosBag";
import { fixBrokenText } from "../../text";
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
	const { scale, adjustment, reveal_another } = item.counter;

	const prompt = fixBrokenText(item.counter.prompt);

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
		const scaleValue = isNumber(scale) ? scale : 1;
		const max = isNumber(counter.min)
			? counter.min === 0
				? 0
				: counter.min * scaleValue * -1
			: null;
		const min = isNumber(counter.max) ? counter.max * scaleValue * -1 : null;
		const value = max ?? 0;
		const step = isNumber(scale) ? Math.abs(scale) : 1;
		return {
			...base,
			value,
			step,
			...(isNumber(min) && { min }),
			...(isNumber(max) && { max }),
		};
	}
	// when scale is negative then min prop is used
	// when scale is positive (or undefined, default 1) then max property is used
	const scaleValue = scale ?? 1;

	// When both min and max exist, calculate both
	let minValue: number | null = null;
	let maxValue: number | null = null;

	if (isNumber(counter.min) && isNumber(counter.max)) {
		// Both exist: min = -(max + adjustment), max = -(min + adjustment)
		minValue = (counter.max + adjustment) * -1;
		maxValue = (counter.min + adjustment) * -1;
	} else if (scaleValue < 0) {
		// Negative scale: use min from counter
		// When scale is negative, it indicates subtraction logic
		if (isNumber(counter.min)) {
			if (adjustment !== undefined && adjustment !== null) {
				const directValue = counter.min + adjustment;
				const negatedValue = -(counter.min + adjustment);

				// For negative scale with adjustment:
				// When both directValue < 0 and negatedValue > 0 are valid,
				// we need to choose. The comment says "when scale is negative then min prop",
				// but when both values are valid, we prefer max (positive) as it represents
				// the base value in "base - counter" formulas.
				if (directValue < 0 && negatedValue > 0) {
					// Both are valid. Prefer max (positive) for base value patterns.
					maxValue = negatedValue;
				} else if (directValue < 0) {
					minValue = directValue;
				} else if (negatedValue > 0) {
					maxValue = negatedValue;
				}
			} else {
				minValue = counter.min;
			}
		}
	} else {
		// Positive scale (or undefined): use max from counter or min if max doesn't exist
		if (isNumber(counter.max)) {
			maxValue = (counter.max + adjustment) * -1;
		} else if (isNumber(counter.min)) {
			maxValue = (counter.min + adjustment) * -1;
		}
	}

	return {
		...base,
		value: maxValue ?? minValue ?? 0,
		step: 1,
		...(minValue !== null && { min: minValue }),
		...(maxValue !== null && { max: maxValue }),
	};
};
