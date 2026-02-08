import { fixBrokenIcons } from "../fixBrokenIcons";

describe("fixBrokenIcons", () => {
	it('should convert "icon]" to "[icon]"', () => {
		expect(fixBrokenIcons("icon]")).toBe("[icon]");
	});

	it('should convert "[icon text" to "[icon]"', () => {
		expect(fixBrokenIcons("[icon text")).toBe("[icon]");
	});

	it('should convert "[hello\\nworld" to "[hello]\\nworld"', () => {
		expect(fixBrokenIcons("[hello\nworld")).toBe("[hello]\nworld");
	});

	it('should convert "hello\\nworld] again" to "hello\\n[world] again"', () => {
		expect(fixBrokenIcons("hello\nworld] again")).toBe("hello\n[world] again");
	});
	it("should keep double brackets as is", () => {
		expect(fixBrokenIcons("В локации-[[обители]]")).toBe(
			"В локации-[[обители]]",
		);
	});
	it("should be the same text", () => {
		expect(
			fixBrokenIcons("X. X is the number of [cultist] in the chaos bag +1."),
		).toBe("X. X is the number of [cultist] in the chaos bag +1.");
	});
});
