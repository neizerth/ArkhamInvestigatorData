import type { ArkhamCardsChaosOddTokenSingleValue } from "@/api/arkhamCards";
import { underscore2CamelCase } from "@/features";
import type { ReferenceCardToken } from "@/model";
import type { ChaosBagToken } from "@/model/game/chaosBag";
import { getTokenValue } from "../getTokenValue";

export const parseOddsSingleValue = (
	item: ArkhamCardsChaosOddTokenSingleValue,
): ReferenceCardToken => {
	const token = underscore2CamelCase(item.token) as ChaosBagToken;
	const value = getTokenValue(item.value);

	return {
		type: "value",
		token,
		value,
		config: item.value,
	};
};
