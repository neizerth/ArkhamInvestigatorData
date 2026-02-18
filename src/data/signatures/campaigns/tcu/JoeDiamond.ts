import type { Investigator } from "@/model";

export const JoeDiamond: Investigator = {
	code: "05002",
	image: {
		width: 2980,
		height: 2340,
		face: {
			width: 201,
			height: 262,
			left: 1074 + 200,
			top: 1121,
		},
	},
	variants: [
		{
			type: "default",
			code: "12004",
			name: "Core 2026",
			abilities: [
				{
					id: "joe-succeed-investigation",
					type: "reaction",
					limitPer: "round",
				},
			],
			image: {
				version: 3,
				width: 2324,
				height: 2268,
				face: {
					width: 317,
					height: 300,
					left: 919,
					top: 974,
				},
			},
		},
	],
};
