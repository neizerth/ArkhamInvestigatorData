import type { Story } from "@/model/game/story";
import { isNotNil, pick } from "ramda";
import { getStories } from "../meta";
import { getReferenceCards } from "./getReferenceCards";

export const getEnglishStories = () => {
	const data = getStories();

	return data
		.map((story): Story | null => {
			const { scenarios = [], scenario } = story;

			const storyScenarios = [...scenarios, scenario].filter(isNotNil);

			if (storyScenarios.length === 0) {
				return null;
			}

			const props = pick(["code", "name", "type", "icon"], story);

			const referenceCards = getReferenceCards(story);

			if (referenceCards.length === 0) {
				return null;
			}

			return {
				...props,
				locale: "en",
				official: story.is_official,
				referenceCards,
			};
		})
		.filter(isNotNil);
};
