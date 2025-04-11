import type { Investigator } from "@/model";

export const StellaClark: Investigator = {
	code: "60501",
	image: {
		width: 3127,
		height: 2500,
		face: {
			width: 336,
			height: 393,
			left: 1316,
			top: 1053,
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
