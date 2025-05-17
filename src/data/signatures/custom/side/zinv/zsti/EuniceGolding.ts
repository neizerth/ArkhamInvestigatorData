import type { Investigator } from "@/model";

export const EuniceGolding: Investigator = {
	code: "zsti_00013",
	image: {
		width: 1786,
		height: 2382,
		face: {
			width: 264,
			height: 289,
			left: 416,
			top: 1157,
		},
	},
	abilities: [
		{
			id: "reaction",
			type: "reaction",
			limitPer: "turn",
		},
	],
};
