import type { Investigator } from "@/model";

export const AkiraArisato: Investigator = {
	code: "zgoo_00010",
	image: {
		light: true,
		width: 3869,
		height: 3936,
		face: {
			width: 203,
			height: 316,
			left: 1731,
			top: 1613,
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
