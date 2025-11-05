import type { Investigator } from "@/model";

export const MayuTachibana: Investigator = {
	code: "zgoo_00098",
	image: {
		version: 3,
		width: 2958,
		height: 4125,
		face: {
			width: 825,
			height: 825,
			left: 1054,
			top: 1489,
		},
	},
	abilities: [
		{
			id: "reaction",
			type: "fast",
			limitPer: "round",
		},
	],
};
