import type { Investigator } from "@/model";

export const WalterCrankovitch: Investigator = {
	code: "zoc_31020",
	image: {
		light: true,
		version: 2,
		width: 2925,
		height: 3310,
		face: {
			width: 366,
			height: 469,
			left: 1340,
			top: 1186,
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
