import type { Investigator } from "@/model";

export const Subject5U21: Investigator = {
	code: "89001",
	image: {
		width: 3000,
		height: 3569,
		face: {
			width: 468,
			height: 511,
			left: 1308,
			top: 1727,
		},
	},
	abilities: [
		{
			id: "fast",
			type: "fast",
			limitPer: "round",
		},
		{
			id: "ravenous",
			name: "Ravenous Tracker",
			type: "counter",
		},
	],
};
