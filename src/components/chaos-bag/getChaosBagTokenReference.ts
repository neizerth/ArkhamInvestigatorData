import { chaosBagSymbolTokens } from "@/config";
import { underscore2CamelCase } from "@/features";
import type { ReferencePart } from "@/model";
import type { ChaosBagToken } from "@/model/game/chaosBag";
import { isNotNil, last, prop, uniq } from "ramda";

export const getChaosBagTokenReference = (sources: string[]) => {
	return sources.flatMap(parseText);
};

const tokenLinePattern = /\n(?=.*\[[^\[\]]+\])/;

const parseText = (text: string) =>
	text.split(tokenLinePattern).map(parseLine).filter(isNotNil);

const parseLine = (text: string): ReferencePart | null => {
	const lines = text.split("\n");
	const line = lines.find((line) => line.startsWith("[")) || last(lines);

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

	const startIdx = lines.findIndex((line) => line.startsWith("["));
	const cleanedLine = line.replace(/^(\[[^\]]+\]\s*)+[:：]?\s*/, "");
	const effectLines = [
		cleanedLine,
		// line.slice(index + lastIcon.length),
		// line,
		...lines.slice(startIdx + 1),
	];
	const effect = uniq(effectLines)
		.join("\n")
		.trim()
		.replace(/^(: )|(：)/, "")
		.replace(/^-(?!\d)/, "");

	const tokens = uniq(items.map(prop("token")));

	if (effect.length < 2) {
		return null;
	}

	if (tokens.length > 1) {
		// Remove "или [token]:" patterns from the beginning of effect for groups
		const cleanedEffect = effect.replace(
			/^(или\s+\[[^\]]+\]\s*[:：]?\s*)+/i,
			"",
		);
		return {
			id: tokens[0],
			type: "group",
			tokens,
			effect: cleanedEffect,
		};
	}

	return {
		id: tokens.join("-"),
		type: "single",
		token: tokens[0],
		effect,
	};
};
