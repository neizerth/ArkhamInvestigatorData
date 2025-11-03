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
			id: "two-points-spell-succeeded",
			type: "reaction",
			limitPer: "round",
			toggle: false,
		},
		{
			id: "two-points-spell-succeeded-card",
			type: "reaction",
			limitPer: "round",
			icon: "card-outline",
			visible: false,
		},
		{
			id: "two-points-spell-succeeded-resource",
			type: "reaction",
			limitPer: "round",
			icon: "resource",
			visible: false,
		},
		{
			id: "two-points-spell-succeeded-damage",
			type: "reaction",
			limitPer: "round",
			icon: "health",
			visible: false,
		},
		{
			id: "two-points-spell-succeeded-clue",
			type: "reaction",
			limitPer: "round",
			icon: "clue",
			visible: false,
		},
	],
};
