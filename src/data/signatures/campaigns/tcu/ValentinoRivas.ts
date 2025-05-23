import type { Investigator } from "@/model";

export const ValentinoRivas: Investigator = {
	code: "05048",
	spoiler: true,
	image: {
		width: 4103,
		height: 3464,
		face: {
			width: 563,
			height: 809,
			left: 1488,
			top: 1411,
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
