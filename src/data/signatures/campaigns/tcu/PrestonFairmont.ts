import type { Investigator } from "@/model";

export const PrestonFairmont: Investigator = {
	code: "05003",
	image: {
		width: 1791,
		height: 3120,
		face: {
			width: 316,
			height: 373,
			left: 860,
			top: 1187,
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
			type: "special-action",
			icon: "resource",
			limitPer: "test",
		},
	],
};
