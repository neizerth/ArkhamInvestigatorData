import type { Investigator } from "@/model";

export const PrestonFairmont: Investigator = {
	code: "05003",
	image: {
		version: 3,
		width: 1791,
		height: 3120,
		face: {
			width: 364,
			height: 424,
			left: 816,
			top: 1164,
		},
	},
	abilities: [
		{
			id: "family-inheritance",
			type: "counter",
			direction: "decrease",
			name: "Family Inheritance",
			defaultValue: 4,
		},
		{
			id: "pay-to-auto-success",
			type: "permanent",
			limitPer: "test",
		},
	],
};
