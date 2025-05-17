import type { Investigator } from "@/model";

export const LeoAnderson: Investigator = {
	code: "04001",
	image: {
		width: 2338,
		height: 2325,
		face: {
			width: 298,
			height: 387,
			left: 964,
			top: 817,
		},
	},
	abilities: [
		{
			id: "reaction",
			type: "reaction",
			// works when turn start
			limitPer: "turn",
		},
	],
};
