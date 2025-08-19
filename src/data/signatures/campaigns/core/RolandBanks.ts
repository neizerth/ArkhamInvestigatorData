import type { Investigator } from "@/model";

export const RolandBanks: Investigator = {
	code: "01001",
	image: {
		version: 3,
		width: 3000,
		height: 2500,
		face: {
			width: 282,
			height: 329,
			left: 1190,
			top: 1149,
		},
	},
	variants: [
		{
			type: "book",
			code: "98004",
			name: "The Dirge of Reason",
			image: {
				width: 3626,
				height: 3800,
				face: {
					width: 359,
					height: 349,
					left: 1680,
					top: 1814,
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
