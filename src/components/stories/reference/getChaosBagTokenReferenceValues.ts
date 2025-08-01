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
	const pattern = /^\D*([-+\d]+)\./;

	const matches = text.match(pattern);

	if (!matches) {
		console.log("no matches for", text);
		return;
	}

	const value = +matches[1];

	return value;
};
