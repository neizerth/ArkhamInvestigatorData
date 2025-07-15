import type { ArkhamCardsChaosOddToken } from "@/api/arkhamCards";
import { underscore2CamelCase } from "@/features";
import type { ReferenceCardToken } from "@/model";
import type { ChaosBagToken } from "@/model/game/chaosBag";
import { isNotNil } from "ramda";
import { getTokenValue } from "./getTokenValue";
import {
	parseOddsCondition,
	parseOddsCounter,
	parseOddsSingleValue,
} from "./types";

export const parseChaosOdds = (tokens: ArkhamCardsChaosOddToken[] = []) => {
	return tokens.map(getTokenData).filter(isNotNil);
};

const getTokenData = (
	item: ArkhamCardsChaosOddToken,
): ReferenceCardToken | null => {
	const token = underscore2CamelCase(item.token) as ChaosBagToken;
	if (!("type" in item)) {
		return parseOddsSingleValue(item);
	}

	if (item.type === "counter") {
		return parseOddsCounter(item);
	}

	if (item.type === "condition") {
		return parseOddsCondition(item);
	}

	return null;
};
