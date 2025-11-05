import type { ArkhamCardsInvestigator } from "@/api/arkhamCards";
import { dativeNameDeclension, genitiveNameDeclension } from "@/data/i18n";
import type { InvestigatorSignature } from "@/model";
import { getChaosBagTokenReference } from "../chaos-bag";
import { getSignatureTokenReference } from "../chaos-bag/getSignatureTokenReference";
import { getCycleTranslation } from "./cycle";
import { getSignatureBase } from "./getSignatureBase";
import { getPackTranslation } from "./pack";

const textAttributes = ["traits", "name", "subname", "text"] as const;

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

			const pack = getPackTranslation({
				item: card.pack,
				locale,
			});

			const cycle = getCycleTranslation({
				item: card.pack.cycle,
				locale,
			});

			const translated = textAttributes.every(
				(prop) => card[`real_${prop}`] !== cardTranslation[prop],
			);

			const realLocale = translated ? locale : "en";

			const icon = base.type === "taboo" ? "taboo" : pack.icon;
			const translatedCard: InvestigatorSignature = {
				...base,
				...cardTranslation,
				locale: realLocale,
				official: base.official,
				pack,
				cycle,
				icon,
				tokens_reference: getSignatureTokenReference({
					text: cardTranslation.text,
					code: card.code,
				}),
				dative_name: dativeNameDeclension?.[locale]?.[base.code],
				genitive_name: genitiveNameDeclension?.[locale]?.[base.code],
			};

			translations.get(locale).push(translatedCard);
		}
	}

	return translations;
};
