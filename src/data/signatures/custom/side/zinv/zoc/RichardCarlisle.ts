import type { Investigator } from "@/model";

export const RichardCarlisle: Investigator = {
	code: "zoc_31014",
	image: {
		light: true,
		version: 2,
		width: 1528,
		height: 2500,
		face: {
			width: 290,
			height: 332,
			left: 329,
			top: 1299,
		},
	},
	abilities: [
		{
			id: "reaction-1",
			type: "reaction",
			limitPer: "round",
			icon: "card-outline",
		},
		{
			id: "reaction-2",
			type: "reaction",
			limitPer: "round",
			icon: "resource",
		},
		{
			id: "reaction-3",
			type: "reaction",
			limitPer: "round",
			icon: "health",
		},
		{
			id: "reaction-4",
			type: "reaction",
			limitPer: "round",
			icon: "clue",
		},
	],
};
