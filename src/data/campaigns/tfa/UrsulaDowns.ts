import type { Investigator } from "@/model";

export const UrsulaDowns: Investigator = {
	code: "04002",
	image: {
		width: 2000,
		height: 2000,
		face: {
			width: 212,
			height: 385,
			left: 894,
			top: 779,
		},
	},
	abilities: [
		{
			id: "reaction",
			type: "reaction",
			limitPer: "round",
		},
	],
};
