import type { Story } from "@/model/game/story";
import { propEq } from "ramda";
import {
	getArkhamCardsCycles,
	getArkhamCardsPacks,
	getArkhamCardsReferenceCards,
} from "../meta";
import { getChaosBagTokenReference } from "../chaos-bag";

type Options = {
	locale: string;
	stories: Story[];
};
export const getTranslatedStories = ({ stories, locale }: Options): Story[] => {
	const references = getArkhamCardsReferenceCards();
	const packs = getArkhamCardsPacks();
	const cycles = getArkhamCardsCycles();

	const translateName = (story: Story) => {
		const cycle = cycles.find(propEq(story.name, "real_name"));

		if (cycle) {
			return cycle.translations.find(propEq(locale, "locale"))?.name;
		}

		const pack = packs.find(propEq(story.name, "real_name"));

		if (pack) {
			return pack.translations.find(propEq(locale, "locale"))?.name;
		}

		const codeCycle = cycles.find(propEq(story.code, "code"));

		if (codeCycle) {
			return codeCycle.translations.find(propEq(locale, "locale"))?.name;
		}

		console.log("pack not found", story.name);
	};

	const translateReferences = (story: Story) => {
		return story.referenceCards.map((ref) => {
			const sourceRef = references.find(propEq(ref.code, "code"));
			const translation = sourceRef?.translations?.find(
				propEq(locale, "locale"),
			);

			if (!translation) {
				return ref;
			}

			if (translation.name === ref.name) {
				return ref;
			}

			return {
				...ref,
				...translation,
				reference: getChaosBagTokenReference([translation.text]),
				back_reference: getChaosBagTokenReference([translation.back_text]),
			};
		});
	};

	return stories.map((story): Story => {
		const name = translateName(story) || story.name;
		const referenceCards = translateReferences(story);
		return {
			...story,
			name,
			referenceCards,
			locale: name === story.name ? "en" : locale,
		};
	});
};
