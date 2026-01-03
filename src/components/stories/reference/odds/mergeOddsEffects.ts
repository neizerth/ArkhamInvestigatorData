import type { ReferenceCardToken, ReferenceCardTokenEffectInfo } from "@/model";
import { pick } from "ramda";
import { fixBrokenText } from "../text";

export const mergeOddsEffects = (
	tokens: ReferenceCardToken[],
	sourceTokens: ReferenceCardToken[],
) => {
	return tokens.map((item) => {
		const { token, type } = item;

		const sourceItem = sourceTokens.find(
			(sourceItem) => sourceItem.type === type && sourceItem.token === token,
		);

		if (!sourceItem) {
			return item;
		}

		if (sourceItem.type === "counter" && item.type === "counter") {
			return mergeEffects(item, sourceItem);
		}

		if (sourceItem.type === "counter" && item.type === "counter") {
			return mergeEffects(item, sourceItem);
		}

		if (sourceItem.options && item.options) {
			return {
				...item,
				options: item.options.map((option, index) =>
					mergeEffects(
						{
							...option,
							prompt: fixBrokenText(option.prompt),
						},
						sourceItem.options[index],
					),
				),
			};
		}

		return item;
	});
};

function mergeEffects<T extends ReferenceCardTokenEffectInfo>(
	target: T,
	source: T,
) {
	const params = pick(["expression", "personal"], source);

	return {
		...target,
		...params,
	};
}
