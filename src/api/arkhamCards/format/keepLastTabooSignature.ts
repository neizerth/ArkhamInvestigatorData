import { groupBy, init, last, prop, sortBy, toPairs } from "ramda";
import type { ArkhamCardsInvestigator } from "../model";

export const keepLastTabooSignature = (data: ArkhamCardsInvestigator[]) => {
	const tabooCards = data.filter(({ taboo_set }) => taboo_set?.id !== 0);
	const tabooGroups = groupBy(prop("code"), tabooCards);
	const tabooPairs = toPairs(tabooGroups);
	const excludeIds: string[] = [];

	for (const [_, group] of tabooPairs) {
		const sorted = sortBy(({ taboo_set }) => taboo_set?.id || -1, group);

		const excludeCards = init(sorted);

		console.log({ sorted });

		excludeIds.push(...excludeCards.map(prop("id")));
	}

	console.log({ excludeIds });

	return data.filter(({ id }) => !excludeIds.includes(id));
};
