import { getChaosBagTokenReference } from "@/components/chaos-bag";
import { ReferenceCardToken } from "@/model";

export const getChaosBagTokenReferenceValues = (text: string) => {
	if (!text) {
		return;
	}
	const reference = getChaosBagTokenReference([text]);

	return reference.flatMap((item): ReferenceCardToken[] => {
		const value = parseEffectValue(item.effect);
		if (item.type === "single") {
			return [
				{
					type: "value",
					token: item.token,
					value,
				},
			];
		}
		return item.tokens.map((token) => ({
			type: "value",
			token,
			value,
		}));
	});
};

export const parseEffectValue = (text: string): number => {
	const pattern = /^\D*([-+\d]+)\D/;

	const matches = text.match(pattern);

	if (!matches) {
		console.log("no matches for", text);
		return;
	}

	const value = +matches[1];

	return value;
};
