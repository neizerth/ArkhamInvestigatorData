import type { Investigator } from "@/model";

export const GavriellaMizrah: Investigator = {
	code: "05046",
	spoiler: true,
	image: {
		light: true,
		width: 2523,
		height: 2860,
		face: {
			width: 252,
			height: 322,
			left: 909,
			top: 1373,
		},
	},
	abilities: [
		{
			id: "reaction",
			type: "reaction",
			limitPer: "round",
		},
	],
};
