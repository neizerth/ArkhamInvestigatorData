import type { SignatureCollection } from "@/model";
import { propEq } from "ramda";
import { getSignatureCollection } from "./collection";
import { getEnglishSignatures } from "./getEnglishSignatures";
import { getSignatureTranslations } from "./getSignatureTranslations";
import { loadSignatures } from "@/api";

export const getSignatures = async () => {
	const data = await loadSignatures();

	const en = getEnglishSignatures(data);
	const signatures = getSignatureTranslations(data);

	signatures.set("en", en);

	const collections = new Map<string, SignatureCollection>();

	for (const [locale, cards] of signatures) {
		const allCards = en.map((sourceCard) => {
			const translatedCard = cards.find(propEq(sourceCard.id, "id"));
			return translatedCard || sourceCard;
		});

		const collection = getSignatureCollection(allCards);

		collections.set(locale, collection);
	}

	return collections;
};
