import type { ArkhamCardsInvestigator } from "../model";

type InvestigatorWithoutChapter = Omit<ArkhamCardsInvestigator, "chapter">;

export const mapChapter = (
	card: InvestigatorWithoutChapter,
): ArkhamCardsInvestigator => {
	const defaultChapter = card.pack.official ? 1 : null;
	const chapter = card.pack.cycle.chapter ?? defaultChapter;

	return {
		...card,
		chapter,
	};
};
