import type { Investigator } from "@/model";

export const TheInsane: Investigator = {
	code: "zci_00001",
	image: {
		width: 2000,
		height: 1800,
		face: {
			width: 540,
			height: 604,
			left: 297,
			top: 518,
		},
	},
	abilities: [
		{
			id: "fast",
			type: "fast",
			limitPer: "round",
		},
	],
	nameless: true,
};
