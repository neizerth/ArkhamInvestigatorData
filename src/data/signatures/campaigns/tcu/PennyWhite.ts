import type { Investigator } from "@/model";

export const PennyWhite: Investigator = {
	code: "05049",
	additionalAction: true,
	spoiler: true,
	image: {
		light: true,
		width: 1470,
		height: 1690,
		face: {
			width: 248,
			height: 301,
			left: 555,
			top: 709,
		},
	},
	abilities: [
		{
			id: "get-clue-effect-revealing",
			type: "reaction",
			limitPer: "round",
		},
	],
};
