import type { ArkhamCardsInvestigator } from "@/api/arkhamCards";
import type { InvestigatorTabooSignature } from "@/model";
import { omit } from "ramda";
import { getSignatureBase } from "./getSignatureBase";

export const getSignatureTranslations = (data: ArkhamCardsInvestigator[]) => {
	const translations = new Map<string, InvestigatorTabooSignature[]>();

	for (const card of data) {
		const base = getSignatureBase(card);
		for (const cardTranslation of card.translations) {
			const { locale } = cardTranslation;
			if (!translations.has(locale)) {
				translations.set(locale, []);
			}
			const translatedCard: InvestigatorTabooSignature = {
				...base,
				...cardTranslation,
			};

			translations.get(locale).push(translatedCard);
		}
	}

	return translations;
};
