import type { ArkhamCardsChaosOddTokenDefaultValue } from "@/api/arkhamCards";

export const getTokenValue = (item: ArkhamCardsChaosOddTokenDefaultValue) => {
	const { modifier } = item;
	if (typeof modifier === "number") {
		return modifier;
	}
};
