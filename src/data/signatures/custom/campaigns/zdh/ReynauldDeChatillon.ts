import type { Investigator } from "@/model";

export const ReynauldDeChatillon: Investigator = {
	code: "zdh_00001",
	image: {
		version: 3,
		width: 1436,
		height: 1723,
		face: {
			width: 181,
			height: 210,
			left: 588,
			top: 721,
		},
	},
	abilities: [
		{
			id: "reaction",
			type: "reaction",
			limitPer: "round",
			perInvestigator: true,
			personalUse: true,
		},
	],
};
