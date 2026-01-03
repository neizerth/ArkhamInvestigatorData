import type { ArkhamCardsChaosOddTokenCounter } from "@/api/arkhamCards";
import type { ReferenceCardTokenCounter } from "@/model";
import { parseOddsCounter } from "../parseOddsCounter";

const getResult = (item: ArkhamCardsChaosOddTokenCounter) => {
	return parseOddsCounter({ item, effect: "" });
};

describe("parseOddsCounter", () => {
	it("essex_county", () => {
		const item: ArkhamCardsChaosOddTokenCounter = {
			token: "skull",
			type: "counter",
			counter: {
				prompt: "Current agenda number",
				min: 1,
			},
		};

		const result = getResult(item);
		expect(result.max).toBe(-1);
	});

	it("blood_on_the_altar", () => {
		const item: ArkhamCardsChaosOddTokenCounter = {
			token: "skull",
			type: "counter",
			counter: {
				prompt: "Number of locations in play with no encounter card underneath",
				min: 0,
				max: 4,
			},
		};

		const result = getResult(item);

		expect(result.min).toBe(-4);
		expect(result.max).toBe(0);
		expect(result.step).toBe(1);
	});

	it("wilds-hard", () => {
		const item: ArkhamCardsChaosOddTokenCounter = {
			token: "skull",
			type: "counter",
			counter: {
				prompt: "Number of vengeance points in the victory display",
				min: 0,
				adjustment: 1,
			},
		};

		const result = getResult(item);
		expect(result.max).toBe(-1);
		expect(result.step).toBe(1);
	});

	it("point_of_no_return", () => {
		const item: ArkhamCardsChaosOddTokenCounter = {
			token: "skull",
			type: "counter",
			counter: {
				prompt: "Amount of damage on the scenario reference card",
				min: 1,
				adjustment: 1,
			},
		};

		const result = getResult(item);
		expect(result.max).toBe(-2);
		expect(result.step).toBe(1);
	});

	it("carnevale_of_horrors", () => {
		const item: ArkhamCardsChaosOddTokenCounter = {
			token: "skull",
			type: "counter",
			counter: {
				prompt: "Number of Innocent Revelers underneath the agenda deck",
				min: 0,
				max: 3,
				adjustment: 2,
			},
		};

		const result = getResult(item);
		expect(result.max).toBe(-2);
		expect(result.min).toBe(-5);
	});

	it("machinations_through_time", () => {
		const item: ArkhamCardsChaosOddTokenCounter = {
			token: "skull",
			type: "counter",
			counter: {
				prompt: "Number of story cards in the victory display",
				min: 0,
				adjustment: 2,
			},
		};

		const result = getResult(item);
		expect(result.max).toBe(-2);
	});

	it("to_the_forbidden_peaks", () => {
		const item: ArkhamCardsChaosOddTokenCounter = {
			token: "skull",
			type: "counter",
			counter: {
				prompt: "The level of your location",
				min: 0,
				adjustment: 2,
			},
		};

		const result = getResult(item);
		expect(result.max).toBe(-2);
	});

	it("tempest_in_a_teapot", () => {
		const item: ArkhamCardsChaosOddTokenCounter = {
			token: "skull",
			type: "counter",
			counter: {
				prompt: "The number of the current ‘c’ Agenda",
				min: 1,
				max: 4,
				adjustment: 1,
			},
		};

		const result = getResult(item);
		expect(result.max).toBe(-2);
		expect(result.min).toBe(-5);
	});

	it("tempest_in_a_teapot", () => {
		const item: ArkhamCardsChaosOddTokenCounter = {
			token: "skull",
			type: "counter",
			counter: {
				prompt: "The number of the current ‘c’ Agenda",
				min: 1,
				max: 4,
				adjustment: 1,
			},
		};

		const result = getResult(item);
		expect(result.max).toBe(-2);
		expect(result.min).toBe(-5);
	});
});
