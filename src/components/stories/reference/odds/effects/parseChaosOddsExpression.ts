const amountExpression =
	/^(amount|number) of (\w+) on you(?!\s+(and|or))(?=[\s\p{P}]|$)/iu;

const numberYouHaveExpression = /^Number of (\w+) you have$/;
const validParams = ["horror", "damage", "clues"];

const isValid = (param: string) => validParams.includes(param);

const staticDeps = {
	"Half the amount of damage on you and assets you control (rounded down)":
		"floor(damage/2)",
	"Half the number of actions you have remaining (rounded up)":
		"ceil(actions/2)",
	"The number of actions you have remaining": "actions",
};

export const parseChaosOddsExpression = (effect: string) => {
	const amountMatch = effect.match(amountExpression);
	if (amountMatch && isValid(amountMatch[2])) {
		return amountMatch[2];
	}

	const numberYouHaveMatch = effect.match(numberYouHaveExpression);
	if (numberYouHaveMatch && isValid(numberYouHaveMatch[2])) {
		return numberYouHaveMatch[2];
	}

	if (staticDeps[effect]) {
		return staticDeps[effect];
	}
};
