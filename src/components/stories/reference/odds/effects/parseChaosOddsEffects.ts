import { isChaosOddEffectPersonal } from "./isChaosOddEffectPersonal";
import { parseChaosOddsExpression } from "./parseChaosOddsExpression";

export const parseChaosOddsEffects = (effect: string) => {
	return {
		personal: isChaosOddEffectPersonal(effect),
		expression: parseChaosOddsExpression(effect),
	};
};
