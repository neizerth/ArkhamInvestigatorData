import { chaosBagSymbolTokens } from "@/config";
import { underscore2CamelCase } from "@/features";
import { ReferencePart } from "@/model";
import type { ChaosBagToken } from "@/model/game/chaosBag";
import { isNotNil, last, prop, uniq } from "ramda";

export const getChaosBagTokenReference = (sources: string[]) => {
	return sources.flatMap(parseText);
};

const tokenLinePattern = /\n(?=.*\[[^\[\]]+\]:)/;

const parseText = (text: string) =>
	text.split(tokenLinePattern).map(parseLine).filter(isNotNil);

const parseLine = (text: string): ReferencePart | null => {
	const lines = text.split("\n");
	const line = last(lines);
	const [iconString] = line.split(/[:：]/);

	if (!iconString) {
		return null;
	}

	const iconMatches = iconString.match(/\[([^\]]+)\]/g);

	if (!iconMatches) {
		return null;
	}

	const icons = iconMatches.map((icon) => icon.replace(/[\[\]]/g, ""));

	const items = icons
		.map((icon) => ({
			icon,
			token: underscore2CamelCase(icon) as ChaosBagToken,
		}))
		.filter((item) => chaosBagSymbolTokens.includes(item.token));

	const lastItem = last(items);

	if (!lastItem) {
		return null;
	}

	const lasstIcon = `[${lastItem.icon}]`;
	const index = line.indexOf(lasstIcon);

	const effectIndex = index + lasstIcon.length;
	const nonTokenText = line.slice(effectIndex);

	const effect = nonTokenText.trim().replace(/^(: )|(：)/, "");

	const tokens = uniq(items.map(prop("token")));

	if (effect.length < 2) {
		return null;
	}

	if (tokens.length > 1) {
		return {
			id: tokens[0],
			type: "group",
			tokens,
			effect,
		};
	}

	return {
		id: tokens.join("-"),
		type: "single",
		token: tokens[0],
		effect,
	};
};
