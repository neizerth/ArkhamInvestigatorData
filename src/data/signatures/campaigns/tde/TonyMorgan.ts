import type { Investigator } from "@/model";

export const TonyMorgan: Investigator = {
	code: "06003",
	additionalAction: true,
	image: {
		width: 3123,
		height: 2500,
		face: {
			width: 402,
			height: 446,
			left: 1078 + 300,
			top: 1048,
		},
	},
	skins: [
		{
			id: "06003_colt",
			name: "Tony's .38 Long Colt",
			image: {
				width: 1745,
				height: 2109,
				face: {
					width: 204,
					height: 215,
					left: 858 - 150,
					top: 879,
				},
			},
		},
	],
	abilities: [
		{
			id: "bounty-contracts",
			name: "Bounty Contracts",
			type: "counter",
			direction: "decrease",
			defaultValue: 6,
		},
	],
};
