import type {
	Investigator,
	InvestigatorAbility,
	InvestigatorImage,
} from "@/model";

const image: InvestigatorImage = {
	id: "zaw_02228",
	light: true,
	width: 2223,
	height: 2500,
	face: {
		width: 277,
		height: 328,
		left: 834,
		top: 794,
	},
};

const abilities: InvestigatorAbility[] = [
	{
		id: "use-base-intellect",
		icon: "reaction",
		type: "special-action",
		limitPer: "round",
		perInvestigator: true,
		personalUse: true,
	},
];

const Neutral: Investigator = {
	code: "zaw_02228",
	image,
	abilities,
};

const Seeker: Investigator = {
	code: "zaw_00304",
	image,
	abilities,
};

export const AliceLiddell = {
	Neutral,
	Seeker,
};
