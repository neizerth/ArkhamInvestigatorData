import type { Story } from "@/model/game/story";
import { equals, reject } from "ramda";
import { getArkhamCardsReferenceCards, getMetadataTranslations } from "../meta";
import { getEnglishStories } from "./getEnglishStories";
import { getTranslatedStories } from "./getTranslatedStories";

export const getStories = () => {
	const en = getEnglishStories();
	const cardSource = getArkhamCardsReferenceCards();

	const cards = getMetadataTranslations(cardSource);

	const locales = reject(equals("en"), Object.keys(cards));

	const translations: Record<string, Story[]> = {
		en,
	};

	for (const locale of locales) {
		translations[locale] = getTranslatedStories({
			locale,
			stories: en,
		});
	}

	return translations;
};
