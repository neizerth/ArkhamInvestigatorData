import { getChaosBagTokenReference } from "@/components/chaos-bag";
import type { ReferenceCardToken } from "@/model";

export const getChaosBagTokenReferenceValues = (text: string) => {
	if (!text) {
		return;
	}
	const reference = getChaosBagTokenReference([text]);

	return reference
		.flatMap((item): ReferenceCardToken[] => {
			const value = parseEffectValue(item.effect);
			if (item.type === "single") {
				return [
					{
						type: "value",
						token: item.token,
						value,
						config: {
							modifier: value,
						},
					},
				];
			}
			return item.tokens.map((token) => ({
				type: "value",
				token,
				value,
				config: {
					modifier: value,
				},
			}));
		})
		.filter(({ value }) => Boolean(value));
};



export const parseEffectValue = (text: string): number => {
	const pattern = /([-—−\+]\d+)\./;

	const maxSearchLength = 20;

	const matches = text.slice(0, maxSearchLength).match(pattern);

	if (!matches) {
		console.log("no matches for", text);
		return;
	}

	const match = matches[1].replace(/-—−/g, "-").replace("+", "");
	const value = +match;

	return value;
};
