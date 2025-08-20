import type { Investigator } from "@/model";

export const RexMurphy: Investigator = {
	code: "02002",
	image: {
		width: 2290,
		height: 2500,
		face: {
			width: 266,
			height: 391,
			left: 818,
			top: 1173,
		},
	},
	// Rex hasn't abilities those can be scripted
	abilities: [],
	variants: [
		{
			type: "parallel",
			code: "90078",
			name: "Hunting for Answers",
			// Rex hasn't abilities those can be scripted
			abilities: [
				{
					id: "auto-fail-for-3-cards",
					type: "permanent",
					limitPer: "test",
				},
			],
		},
		{
			type: "taboo",
			code: "02002",
			name: "Taboo",
			abilities: [
				{
					id: "reaction",
					type: "reaction",
					limitPer: "round",
				},
			],
		},
	],
};
