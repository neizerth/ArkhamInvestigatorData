import type { Investigator } from "@/model";

export const RichardCarlisle: Investigator = {
	code: "zoc_31014",
	image: {
		version: 3,
		width: 4200,
		height: 6872,
		face: {
			width: 921,
			height: 938,
			left: 844,
			top: 3494,
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
