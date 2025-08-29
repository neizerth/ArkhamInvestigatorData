import type { Investigator } from "@/model";

export const TheInsane: Investigator = {
	code: "zci_00001",
	image: {
		version: 3,
		width: 2845,
		height: 3120,
		face: {
			width: 670,
			height: 758,
			left: 1061,
			top: 1126,
		},
	},
	abilities: [
		{
			id: "fast",
			type: "fast",
			limitPer: "round",
		},
	],
};
