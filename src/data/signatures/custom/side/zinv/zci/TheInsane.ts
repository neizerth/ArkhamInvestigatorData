import type { Investigator } from "@/model";

export const TheInsane: Investigator = {
	code: "zci_00001",
	image: {
		version: 2,
		width: 1824,
		height: 2000,
		face: {
			width: 376,
			height: 400,
			left: 708,
			top: 828,
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
