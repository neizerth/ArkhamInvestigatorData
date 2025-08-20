import type { Investigator } from "@/model";

export const DanielaReyes: Investigator = {
	code: "08001",
	image: {
		width: 2332,
		height: 2500,
		face: {
			width: 318,
			height: 381,
			left: 1012,
			top: 855,
		},
	},
	abilities: [
		{
			id: "been-attacked",
			type: "special-action",
			icon: "skill_combat_inverted",
		},
	],
};
