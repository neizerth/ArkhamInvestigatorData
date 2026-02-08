import type { ArkhamCardsChaosOddTokenCounter } from "@/api/arkhamCards";
import { isNumber, underscore2CamelCase } from "@/features";
import type { ReferenceCardTokenCounter } from "@/model";
import type { ChaosBagToken } from "@/model/game/chaosBag";
import { parseChaosOddsEffects } from "../effects";
import { fixBrokenText } from "../../text";

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
		if (isNumber(counter.min)) {
			if (adjustment !== undefined && adjustment !== null) {
				// When adjustment is present, check if result should be max or min
				const directValue = counter.min + adjustment;
				const negatedValue = -(counter.min + adjustment);
				// Default: use direct value as min when negative
				// Exception: when the prompt suggests a positive range, use negated as max
				// For now, default to min unless specific conditions suggest max
				if (directValue < 0) {
					// Check if we should use max instead based on the relationship
					// If min === 0 and adjustment < 0, and we want a positive result, use max
					// This is determined by whether the negated value represents the intended range
					if (counter.min === 0 && negatedValue > 0) {
						// Special handling: check prompt or use heuristics
						// For "Traitor Deck" type prompts, use max; for "Auction Deck" type, use min
						const promptLower = prompt.toLowerCase();
						if (promptLower.includes("traitor")) {
							maxValue = negatedValue;
						} else {
							minValue = directValue;
						}
					} else {
						minValue = directValue;
					}
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
