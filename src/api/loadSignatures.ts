import { loadArkhamBuildInvestigators } from "./arkham.build/data/loadArkhamBuildInvestigators";
import { loadArkhamCardsInvestigators } from "./arkhamCards/request/graphql/loadArkhamCardsInvestigators";

export const loadSignatures = async () => {
	const arkhamCards = await loadArkhamCardsInvestigators();
	const arkhamBuild = await loadArkhamBuildInvestigators();

	return [...arkhamCards, ...arkhamBuild];
};
