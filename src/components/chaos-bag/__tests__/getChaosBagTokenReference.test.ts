import { getChaosBagTokenReference } from "../getChaosBagTokenReference";

describe("getChaosBagTokenReference", () => {
	it("should return empty array for empty input", () => {
		const result = getChaosBagTokenReference([]);
		expect(result).toEqual([]);
	});

	it("should parse single token reference", () => {
		const input = ["[skull]: Test effect"];
		const result = getChaosBagTokenReference(input);

		expect(result).toHaveLength(1);
		expect(result[0]).toEqual({
			id: "skull",
			type: "single",
			token: "skull",
			effect: "Test effect",
		});
	});

	it("should parse multiple tokens as group", () => {
		const input = ["[skull][cultist]: Group effect"];
		const result = getChaosBagTokenReference(input);

		expect(result).toHaveLength(1);
		expect(result[0]).toEqual({
			id: "skull",
			type: "group",
			tokens: ["skull", "cultist"],
			effect: "Group effect",
		});
	});

	it("should parse multiple lines separated by token pattern", () => {
		const input = ["[skull]: First effect\n[tablet]: Second effect"];
		const result = getChaosBagTokenReference(input);

		expect(result).toHaveLength(2);
		expect(result[0]).toEqual({
			id: "skull",
			type: "single",
			token: "skull",
			effect: "First effect",
		});
		expect(result[1]).toEqual({
			id: "tablet",
			type: "single",
			token: "tablet",
			effect: "Second effect",
		});
	});

	it("should filter out invalid tokens", () => {
		const input = ["[invalid_token]: Should be filtered"];
		const result = getChaosBagTokenReference(input);

		expect(result).toEqual([]);
	});

	it("should handle text with colon separator", () => {
		const input = ["[bless]：Effect with Chinese colon"];
		const result = getChaosBagTokenReference(input);

		expect(result).toHaveLength(1);
		expect(result[0]).toEqual({
			id: "bless",
			type: "single",
			token: "bless",
			effect: "Effect with Chinese colon",
		});
	});

	it("should handle multi-line effects", () => {
		const input = ["[elderSign]: First line\nSecond line\nThird line"];
		const result = getChaosBagTokenReference(input);

		expect(result).toHaveLength(1);
		expect(result[0].effect).toBe("First line\nSecond line\nThird line");
	});

	it("should parse tokens separated by 'или' text", () => {
		const input = [
			"<b>Лёгкий / Обычный</b>\n[skull]: −1 (или −3, если у вас на руке 5 карт или больше).\n[cultist] или [elder_thing]: −2. При провале положите 1 свою улику в вашу локацию.\n[tablet]: −3. При провале сбросьте 1 случайную карту с руки.",
		];
		const result = getChaosBagTokenReference(input);

		const cultistGroup = result.find(
			(item) => item.type === "group" && item.tokens.includes("cultist"),
		);

		expect(cultistGroup).toBeDefined();
		expect(cultistGroup).toEqual({
			id: "cultist",
			type: "group",
			tokens: ["cultist", "elderThing"],
			effect: "−2. При провале положите 1 свою улику в вашу локацию.",
		});
	});
});
