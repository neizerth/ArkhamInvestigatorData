import type { Investigator } from "@/model";

export const LilyChen: Investigator = {
	code: "08010",
	image: {
		width: 2985,
		height: 2156,
		face: {
			width: 197,
			height: 272,
			left: 1215,
			top: 1060,
		},
	},
	abilities: [
		{
			id: "alignment-of-spirit",
			icon: "willpower",
			type: "permanent",
		},
		{
			id: "quiescence-of-thought",
			icon: "intellect",
			type: "permanent",
		},
		{
			id: "prescience-of-fate",
			icon: "combat",
			type: "permanent",
		},
		{
			id: "balance-of-body",
			icon: "agility",
			type: "permanent",
		},
	],
};
