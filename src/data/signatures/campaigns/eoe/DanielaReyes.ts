import type { Investigator } from "@/model";

export const DanielaReyes: Investigator = {
	code: "08001",
	image: {
		version: 2,
		width: 2332,
		height: 2500,
		face: {
			width: 333,
			height: 363,
			left: 1039,
			top: 901,
		},
	},
	abilities: [
		{
			id: "been-attacked",
			type: "permanent",
			icon: "claws",
			limitPer: "round",
		},
	],
};
