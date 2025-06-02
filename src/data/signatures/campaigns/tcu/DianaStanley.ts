import type { Investigator } from "@/model";

export const DianaStanley: Investigator = {
	code: "05004",
	image: {
		width: 2000,
		height: 1627,
		face: {
			width: 202,
			height: 319,
			left: 760,
			top: 553,
		},
	},
	abilities: [
		{
			id: "reaction",
			type: "reaction",
			limitPer: "phase",
		},
		{
			id: "diana-cards",
			type: "counter",
			name: "Cards beneath Diana",
			max: 5,
		},
	],
};
