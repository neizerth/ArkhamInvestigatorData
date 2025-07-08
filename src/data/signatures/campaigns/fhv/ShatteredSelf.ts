import type { Investigator } from "@/model";

export const ShatteredSelf: Investigator = {
	code: "10661",
	multiselect: true,
	spoiler: true,
	image: {
		width: 1736,
		height: 1334,
		face: {
			width: 376,
			height: 427,
			left: 638,
			top: 465,
		},
	},
	skill_agility: 0,
	skill_combat: 0,
	skill_intellect: 0,
	skill_willpower: 0,
	abilities: [
		{
			id: "reaction",
			type: "reaction",
			limitPer: "test",
		},
		{
			id: "shattered-self-cards",
			type: "counter",
			direction: "decrease",
			name: "Cards in your hand",
			defaultValue: 5,
			max: 5,
		},
	],
};
