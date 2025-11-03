import type {
	Investigator,
	InvestigatorAbility,
	InvestigatorImage,
} from "@/model";

export const image: InvestigatorImage = {
	id: "11007",
	width: 1812,
	height: 2170,
	face: {
		width: 286,
		height: 359,
		left: 720,
		top: 813,
	},
};

const abilities: InvestigatorAbility[] = [
	{
		id: "play-event-from-discard-pile-after-turn-ends",
		type: "reaction",
		toggle: false,
	},
];

export const AgathaCraneSeeker: Investigator = {
	code: "11007",
	image,
	abilities,
};

export const AgathaCraneMystic: Investigator = {
	code: "11008",
	image,
	abilities,
};

export const AgathaCrane = {
	Seeker: AgathaCraneSeeker,
	Mystic: AgathaCraneMystic,
};
