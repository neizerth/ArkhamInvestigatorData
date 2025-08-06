import type { ArkhamCardsChaosOddToken } from "@/api/arkhamCards";
import { underscore2CamelCase } from "@/features";
import type { ReferenceCardToken, ReferencePart } from "@/model";
import type { ChaosBagToken } from "@/model/game/chaosBag";
import { isNotNil } from "ramda";
import {
	parseOddsCondition,
	parseOddsCounter,
	parseOddsSingleValue,
} from "./types";

export type Options = {
	tokens: ArkhamCardsChaosOddToken[];
	reference: ReferencePart[];
};

export const parseChaosOdds = ({ tokens, reference }: Options) => {
	return tokens
		.map((item) => {
			const token = underscore2CamelCase(item.token) as ChaosBagToken;
			const refItem = reference.find((item) => {
				if (item.type === "single") {
					return item.token === token;
				}
				return item.tokens.includes(token);
			});

			const effect = refItem?.effect || "";

			return getTokenData({
				item,
				effect,
			});
		})
		.filter(isNotNil);
};

export type ParseTokenOptions = {
	item: ArkhamCardsChaosOddToken;
	effect: string;
};

const getTokenData = ({
	item,
	effect,
}: ParseTokenOptions): ReferenceCardToken | null => {
	if (!("type" in item)) {
		return parseOddsSingleValue({
			item,
			effect,
		});
	}

	if (item.type === "counter") {
		return parseOddsCounter({
			item,
			effect,
		});
	}

	if (item.type === "condition") {
		return parseOddsCondition({
			item,
			effect,
		});
	}

	return null;
};
