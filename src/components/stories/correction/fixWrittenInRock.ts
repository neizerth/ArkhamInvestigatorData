import type { Story } from "@/model/game/story";
import { propEq } from "ramda";
import { getReferenceCardDifficulty } from "../reference/getReferenceCardDifficulty";

export const fixWrittenInRock = (stories: Story[]) => {
	const fhv = stories.find(propEq("fhv", "code"));

	if (!fhv) {
		return stories;
	}

	return stories.map((story) => {
		if (story.code === fhv.code) {
			const ref1 = story.referenceCards.find(propEq("10501", "code"));
			const ref2 = story.referenceCards.find(propEq("10502", "code"));

			if (!ref1 || !ref2) {
				return story;
			}

			return {
				...story,
				referenceCards: story.referenceCards.map((card) => {
					if (card.code === ref1.code) {
						const title = getReferenceCardDifficulty(ref1.text);
						const scene = title.split(/ [-—] /)[1];
						return {
							...ref1,
							name: `${ref1.name} - ${scene}`,
							back_reference: ref2.reference,
							back_difficulty: ref2.difficulty,
							back_tokens: ref1.back_tokens,
							back_text: ref2.text,
						};
					}
					if (card.code === ref2.code) {
						const title = getReferenceCardDifficulty(ref2.back_text);
						const scene = title.split(/ [-—] /)[1];
						return {
							...ref2,
							name: `${ref2.name} - ${scene}`,
							reference: ref1.back_reference,
							difficulty: ref1.back_difficulty,
							tokens: ref2.tokens,
							text: ref1.back_text,
							back_reference: ref2.back_reference,
							back_difficulty: ref2.back_difficulty,
							back_tokens: ref2.back_tokens,
							back_text: ref2.back_text,
						};
					}
					return card;
				}),
			};
		}

		return story;
	});
};
