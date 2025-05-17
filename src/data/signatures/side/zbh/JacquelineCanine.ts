import type { Investigator } from "@/model";

export const JacquelineCanine: Investigator = {
	code: "zbh_00010",
	image: {
		width: 2995,
		height: 2995,
		face: {
			width: 546,
			height: 685,
			left: 1260,
			top: 1235,
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
