import type { ArkhamCardsInvestigator } from "@/api/arkhamCards";
import type { InvestigatorSignature } from "@/model";
import { getSignatureBase } from "./getSignatureBase";

export const getSignatureTranslations = (data: ArkhamCardsInvestigator[]) => {
	const translations = new Map<string, InvestigatorSignature[]>();

	for (const card of data) {
		const base = getSignatureBase(card);
		if (!base) {
			continue;
		}

		for (const cardTranslation of card.translations) {
			const { locale } = cardTranslation;
			if (!translations.has(locale)) {
				translations.set(locale, []);
			}
			const translatedCard: InvestigatorSignature = {
				...base,
				...cardTranslation,
			};

			translations.get(locale).push(translatedCard);
		}
	}

	return translations;
};
