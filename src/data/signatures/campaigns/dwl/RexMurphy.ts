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
	abilities: [
		{
			id: "get-clues-after-succeed-investigation",
			type: "reaction",
			toggle: false,
		},
		{
			id: "auto-fail-for-3-cards",
			type: "permanent",
			limitPer: "test",
		},
	],
	variants: [
		{
			type: "parallel",
			code: "90078",
			name: "Hunting for Answers",
			// Rex hasn't abilities those can be scripted
			abilities: [],
		},
		{
			type: "taboo",
			code: "02002",
			name: "Taboo",
			abilities: [
				{
					id: "auto-fail-for-3-cards",
					type: "permanent",
					limitPer: "test",
				},
				{
					id: "get-clues-after-succeed-investigation",
					type: "reaction",
					limitPer: "round",
				},
			],
		},
	],
};
