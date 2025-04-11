import type { Investigator } from "@/model";

export const WalterCrankovitch: Investigator = {
	code: "zoc_31020",
	image: {
		width: 2160,
		height: 2160,
		face: {
			width: 436,
			height: 593,
			left: 564,
			top: 715,
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
