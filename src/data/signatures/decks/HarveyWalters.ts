import type { Investigator } from "@/model";

export const HarveyWalters: Investigator = {
	code: "60201",
	image: {
		width: 3170,
		height: 2991,
		face: {
			width: 372,
			height: 532,
			left: 1266,
			top: 1208,
		},
	},
	abilities: [
		{
			id: "reaction",
			type: "reaction",
			limitPer: "round",
		},
	],
	skins: [
		{
			id: "60201_occult-invocation",
			name: "Occult Invocation",
			image: {
				width: 4170,
				height: 3982,
				face: {
					width: 297,
					height: 352,
					left: 1986,
					top: 1580,
				},
			},
		},
		{
			id: "60201_thrice-damned-curiosity",
			name: "Thrice-damned Curiosity",
			image: {
				width: 2500,
				height: 2226,
				face: {
					width: 286,
					height: 324,
					left: 1176,
					top: 819,
				},
			},
		},
	],
};
