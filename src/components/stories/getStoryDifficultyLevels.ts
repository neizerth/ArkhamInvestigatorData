import type { ChaosBagToken } from "@/model/game/chaosBag";
import type { ArkhamDivider } from "arkham-divider-data";
import { propEq } from "ramda";
import { getArkhamCardsCampaigns } from "../meta";

type ArkhamDividerStory = ArkhamDivider.Core["stories"][number];

const tokenMapping: Record<string, ChaosBagToken> = {
	elder_thing: "elderThing",
	elder_sign: "elderSign",
	auto_fail: "autoFail",
};

const chooseDifficultyStepIds = ["difficulty_choice", "choose_difficulty"];

export const getStoryDifficultyLevels = (story: ArkhamDividerStory) => {
	const steps = getSteps(story);

	const step = steps.find((step) => chooseDifficultyStepIds.includes(step.id));

	if (!step) {
		console.log("step not found", steps);
		return [];
	}

	if (!step.input?.choices) {
		console.log("choices not found", step.input);
		return [];
	}

	const { choices } = step.input;
	const levels = choices.map(({ id, text, tokens }) => {
		const chaosBagTokens = tokens.map((id) => {
			const token = tokenMapping[id] || id;

			return token as ChaosBagToken;
		});
		return {
			id,
			text,
			tokens: chaosBagTokens,
		};
	});

	return levels;
};

const getSteps = (story: ArkhamDividerStory) => {
	const campaigns = getArkhamCardsCampaigns();
	const sideCampaign = campaigns.find((item) => item.campaign.id === "side");

	const isSide =
		story.cycle_code === "side_stories" ||
		["side_story", "challenge"].includes(story.type);

	if (isSide && story.scenario) {
		const scenario = sideCampaign.scenarios.find(
			propEq(story.scenario.id, "id"),
		);

		if (scenario) {
			return scenario.steps;
		}

		console.log("scenario not found", story.code);
	}

	const [firstCampaign] = story.campaigns || [];
	const campaignId = story.campaign_id || firstCampaign?.id;

	if (!campaignId) {
		console.log("no campaign id", story.code);
		return [];
	}

	const item = campaigns.find(({ campaign }) => campaign.id === campaignId);

	if (item) {
		return item.campaign.steps;
	}

	return [];
};
