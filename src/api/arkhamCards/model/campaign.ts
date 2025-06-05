export type ArkhamCardsCampaign = {
	campaign: ArkhamCardsCampaignInfo;
	scenarios: ArkhamCardsScenario[];
};

export type ArkhamCardsCampaignInfo = {
	id: string;
	name: string;
	steps: ArkhamCardsCampaignStep[];
};

export type ArkhamCardsCampaignStep = {
	id: string;
	input?: ArkhamCardsCampaignStepInput;
};

export type ArkhamCardsCampaignStepInput = {
	choices?: ArkhamCardsCampaignDifficulty[];
};

export type ArkhamCardsCampaignDifficulty = {
	id: string;
	text: string;
	tokens: string[];
};

export type ArkhamCardsScenario = {
	id: string;
	scenario_name: string;
	full_name: string;
	steps: ArkhamCardsCampaignStep[];
};
