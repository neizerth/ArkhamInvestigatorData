import type { ArkhamCardsChaosOddTokenCounter } from "@/api/arkhamCards";
import type { ReferenceCardTokenCounter } from "@/model";
import { parseOddsCounter } from "@/components/stories/reference/odds/types/parseOddsCounter";

describe("parseOddsCounter", () => {
	it("should return null when min and max are not numbers", () => {
		const item: ArkhamCardsChaosOddTokenCounter = {
			token: "skull",
			type: "counter",
			counter: {
				prompt: "Test prompt",
			},
		};

		const result = parseOddsCounter({ item, effect: "" });

		expect(result).toBeNull();
	});

	it("should parse counter without adjustment", () => {
		const item: ArkhamCardsChaosOddTokenCounter = {
			token: "skull",
			type: "counter",
			counter: {
				prompt: "Test prompt",
				min: -2,
				max: -1,
			},
		};

		const result = parseOddsCounter({
			item,
			effect: "test effect",
		}) as ReferenceCardTokenCounter | null;

		expect(result).not.toBeNull();
		expect(result?.type).toBe("counter");
		expect(result?.token).toBe("skull");
		expect(result?.prompt).toBe("Test prompt");
		expect(result?.step).toBe(1);
		expect(result?.min).toBe(1); // max * -1
		expect(result?.max).toBe(2); // min * -1
		expect(result?.value).toBe(2); // max ?? 0
	});

	it("should parse counter with adjustment", () => {
		const item: ArkhamCardsChaosOddTokenCounter = {
			token: "cultist",
			type: "counter",
			counter: {
				prompt: "Adjustment test",
				min: -3,
				max: -1,
				adjustment: 2,
			},
		};

		const result = parseOddsCounter({
			item,
			effect: "effect",
		}) as ReferenceCardTokenCounter | null;

		expect(result).not.toBeNull();
		expect(result?.type).toBe("counter");
		expect(result?.token).toBe("cultist");
		expect(result?.step).toBe(2);
		expect(result?.min).toBe(2); // max * adjustment * -1 = -1 * 2 * -1 = 2
		expect(result?.max).toBe(6); // min * adjustment * -1 = -3 * 2 * -1 = 6
		expect(result?.value).toBe(6); // max ?? 0
	});

	it("should handle scale and reveal_another", () => {
		const item: ArkhamCardsChaosOddTokenCounter = {
			token: "elder_sign",
			type: "counter",
			counter: {
				prompt: "Scale test",
				min: -2,
				max: -1,
				scale: 5,
				reveal_another: 1,
			},
		};

		const result = parseOddsCounter({
			item,
			effect: "",
		}) as ReferenceCardTokenCounter | null;

		expect(result).not.toBeNull();
		expect(result?.scale).toBe(5);
		expect(result?.reveal_another).toBe(1);
	});

	it("should convert token from underscore to camelCase", () => {
		const item: ArkhamCardsChaosOddTokenCounter = {
			token: "elder_sign",
			type: "counter",
			counter: {
				prompt: "Token test",
				min: -1,
				max: -1,
			},
		};

		const result = parseOddsCounter({
			item,
			effect: "",
		}) as ReferenceCardTokenCounter | null;

		expect(result).not.toBeNull();
		expect(result?.token).toBe("elderSign");
	});

	it("should handle case when only min is provided", () => {
		const item: ArkhamCardsChaosOddTokenCounter = {
			token: "skull",
			type: "counter",
			counter: {
				prompt: "Min only",
				min: -2,
			},
		};

		const result = parseOddsCounter({
			item,
			effect: "",
		}) as ReferenceCardTokenCounter | null;

		expect(result).not.toBeNull();
		expect(result?.max).toBe(2); // min * -1
		expect(result?.min).toBeUndefined(); // max is undefined, so min * -1 = undefined
		expect(result?.value).toBe(2);
	});

	it("should handle case when only max is provided", () => {
		const item: ArkhamCardsChaosOddTokenCounter = {
			token: "skull",
			type: "counter",
			counter: {
				prompt: "Max only",
				max: -1,
			},
		};

		const result = parseOddsCounter({
			item,
			effect: "",
		}) as ReferenceCardTokenCounter | null;

		expect(result).not.toBeNull();
		expect(result?.min).toBe(1); // max * -1
		expect(result?.max).toBeUndefined(); // min is undefined, so max * -1 = undefined
		expect(result?.value).toBe(0); // max is undefined, so value = 0
	});
});
