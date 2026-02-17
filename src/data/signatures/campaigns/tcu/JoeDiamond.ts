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
		},
	],
};
