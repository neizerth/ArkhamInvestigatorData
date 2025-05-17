import type { Investigator, InvestigatorImageSource } from "@/model";

export const JennyBarnes: Investigator = {
	code: "02003",
	image: {
		width: 2804,
		height: 3659,
		face: {
			width: 308,
			height: 357,
			left: 1629,
			top: 1864,
		},
	},
	abilities: [
		{
			id: "permanent",
			type: "permanent",
			onUse: [
				{
					phase: "upkeep",
					script: {
						resources: "resources + 1",
					},
				},
			],
		},
	],
	variants: [
		{
			type: "parallel",
			code: "90084",
			name: "Pistols and Pearls",
			image: {
				width: 1920,
				height: 1920,
				face: {
					width: 178,
					height: 185,
					left: 535,
					top: 620,
				},
			},
			abilities: [
				{
					id: "reaction",
					type: "reaction",
					limitPer: "turn",
				},
			],
		},
		{
			type: "book",
			code: "98001",
			name: "Hour of the Huntress",
			image: {
				width: 2596,
				height: 3500,
				face: {
					width: 202,
					height: 232,
					left: 1080,
					top: 1180,
				},
			},
		},
	],
	skins: [
		{
			id: "02003_mothers-embrace",
			name: "Mother's Embrace",
			image: {
				width: 3000,
				height: 3000,
				face: {
					width: 258,
					height: 325,
					left: 1287,
					top: 1253,
				},
			},
		},
	],
};
