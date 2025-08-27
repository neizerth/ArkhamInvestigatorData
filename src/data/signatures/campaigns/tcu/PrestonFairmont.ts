import type { Investigator } from "@/model";

export const PrestonFairmont: Investigator = {
	code: "05003",
	image: {
		version: 2,
		width: 1263,
		height: 2200,
		face: {
			width: 221,
			height: 262,
			left: 596,
			top: 859,
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
