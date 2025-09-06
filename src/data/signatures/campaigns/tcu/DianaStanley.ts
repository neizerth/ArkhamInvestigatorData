import type { Investigator } from "@/model";

export const DianaStanley: Investigator = {
	code: "05004",
	image: {
		version: 2,
		width: 3535,
		height: 2875,
		face: {
			width: 510,
			height: 579,
			left: 1236,
			top: 960,
		},
	},
	abilities: [
		{
			id: "diana-reaction",
			type: "reaction",
			limitPer: "phase",
		},
		{
			id: "diana-cards",
			type: "counter",
			direction: "decrease",
			name: "Cards beneath Diana",
			max: 5,
		},
	],
};
