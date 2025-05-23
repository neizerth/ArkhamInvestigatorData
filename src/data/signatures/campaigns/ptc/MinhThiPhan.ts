import type { Investigator } from "@/model";

export const MinhThiPhan: Investigator = {
	code: "03002",
	image: {
		width: 1900,
		height: 2208,
		face: {
			width: 332,
			height: 457,
			left: 830,
			top: 883,
		},
	},
	abilities: [
		{
			id: "add-2wild",
			icon: "reaction",
			type: "special-action",
			limitPer: "round",
			perInvestigator: true,
			personalUse: true,
		},
	],
};
