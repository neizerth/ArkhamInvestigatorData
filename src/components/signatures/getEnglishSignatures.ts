import type { ArkhamCardsInvestigator } from "@/api/arkhamCards";
import type { InvestigatorTabooSignature } from "@/model";
import { getSignatureBase } from "./getSignatureBase";

export const getEnglishSignatures = (data: ArkhamCardsInvestigator[]) =>
	data.map(
		(card): InvestigatorTabooSignature => ({
			...getSignatureBase(card),
			locale: "en",
			text: card.real_text,
			name: card.real_name,
			subname: card.real_subname,
			flavor: card.real_flavor,
			traits: card.real_traits,
			taboo_original_text: card.real_taboo_original_text,
			taboo_text_change: card.real_taboo_text_change,
		}),
	);
