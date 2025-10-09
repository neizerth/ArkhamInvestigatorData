import type { Investigator } from "@/model";

export const RichardCarlisle: Investigator = {
	code: "zoc_31014",
	image: {
		version: 5,
		width: 1612,
		height: 1723,
		face: {
			width: 292,
			height: 323,
			left: 643,
			top: 699,
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
