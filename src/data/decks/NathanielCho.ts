import type { Investigator } from "@/model";

export const NathanielCho: Investigator = {
	code: "60101",
	image: {
		width: 3165,
		height: 2440,
		face: {
			width: 345,
			height: 442,
			left: 981,
			top: 947,
		},
	},
	abilities: [
		{
			id: "reaction",
			type: "reaction",
			limitPer: "phase",
		},
	],
};
