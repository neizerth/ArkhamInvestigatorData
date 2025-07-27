// "you" or "your" in string
const personalExpression = /\syou(r)?(?=[\s\p{P}]|$)/iu;

export const isChaosOddEffectPersonal = (effect: string) => {
	const personal = personalExpression.test(effect);
	return personal;
};
