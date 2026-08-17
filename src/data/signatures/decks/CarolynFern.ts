import type { Investigator } from "@/model";

export const CarolynFern: Investigator = {
	code: "60251",
	image: {
		version: 2,
		width: 2482,
		height: 2200,
		face: {
			width: 262,
			height: 291,
			left: 1226,
			top: 950,
		},
	},
	icon: "carolyn",
	abilities: [
		{
			id: "get-clue-after-heal-horror",
			type: "reaction",
			limitPer: "round",
		},
	],
};
