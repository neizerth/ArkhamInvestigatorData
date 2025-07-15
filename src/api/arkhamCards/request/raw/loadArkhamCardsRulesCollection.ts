import { ArkhamCardsRulesCollection } from "../../model";
import { loadArkhamCardsRules } from "./loadArkhamCardsRules";

export const loadArkhamCardsRulesCollection = async (languages: string[]) => {
	const data: ArkhamCardsRulesCollection = {};
	for (const language of languages) {
		const rules = await loadArkhamCardsRules(language);
		data[language] = rules;
	}

	return data;
};
