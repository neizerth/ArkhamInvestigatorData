import { fixBrokenTags } from "../fixBrokenTags";

describe("fixBrokenTags", () => {
	it('should convert ">/i>" to "</i>" in text', () => {
		const input = "An investigator or Ally has <i>Withered Away>/i>";
		const expected = "An investigator or Ally has <i>Withered Away</i>";
		expect(fixBrokenTags(input)).toBe(expected);
	});

	it('should convert ">/tag>" to "</tag>" for any tag', () => {
		expect(fixBrokenTags(">/div>")).toBe("</div>");
		expect(fixBrokenTags(">/span>")).toBe("</span>");
		expect(fixBrokenTags(">/p>")).toBe("</p>");
	});

	it("should handle multiple occurrences", () => {
		const input = ">/i> some text >/b>";
		const expected = "</i> some text </b>";
		expect(fixBrokenTags(input)).toBe(expected);
	});

	it("should handle tags with numbers", () => {
		expect(fixBrokenTags(">/span123>")).toBe("</span123>");
		expect(fixBrokenTags(">/h1>")).toBe("</h1>");
	});
});
