import type { Investigator } from "@/model";

export const AshcanPete: Investigator = {
	code: "02005",
	image: {
		width: 3440,
		height: 3475,
		face: {
			width: 340,
			height: 465,
			left: 1488,
			top: 1443,
		},
	},
	abilities: [
		{
			id: "fast",
			type: "fast",
			limitPer: "round",
		},
	],
	variants: [
		{
			type: "parallel",
			code: "90046",
			name: "On the Road Again",
			abilities: [
				{
					id: "fast",
					type: "fast",
					limitPer: "round",
				},
			],
		},
	],
};
