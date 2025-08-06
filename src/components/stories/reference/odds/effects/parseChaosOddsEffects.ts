import { isChaosOddEffectPersonal as isPersonal } from "./isChaosOddEffectPersonal";
import { parseChaosOddsExpression as getExpression } from "./parseChaosOddsExpression";

type Options = {
	prompt: string;
	effect: string;
};

export const parseChaosOddsEffects = ({ prompt, effect }: Options) => {
	return {
		personal: isPersonal(prompt) || isPersonal(effect),
		expression: getExpression(prompt),
	};
};
