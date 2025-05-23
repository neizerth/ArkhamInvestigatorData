import type { Investigator } from "@/model";

export const RolandBanks: Investigator = {
	code: "01001",
	image: {
		width: 2000,
		height: 2000,
		face: {
			width: 339,
			height: 437,
			left: 543,
			top: 837,
		},
	},
	variants: [
		{
			type: "book",
			code: "98004",
			name: "The Dirge of Reason",
			image: {
				width: 2792,
				height: 3866,
				face: {
					width: 354,
					height: 345,
					left: 1152,
					top: 1819,
				},
			},
			abilities: [
				{
					id: "reaction",
					type: "reaction",
					limitPer: "round",
				},
			],
		},
		{
			type: "parallel",
			code: "90024",
			name: "By the Book",
			abilities: [
				{
					id: "fast",
					type: "fast",
					limitPer: "game",
				},
			],
		},
	],
	skins: [
		{
			id: "01001_revised",
			name: "Revised Core Set",
			image: {
				width: 1585,
				height: 1421,
				face: {
					width: 215,
					height: 229,
					left: 659,
					top: 653,
				},
			},
		},
	],
	abilities: [
		{
			id: "reaction",
			type: "reaction",
			limitPer: "round",
		},
	],
};
