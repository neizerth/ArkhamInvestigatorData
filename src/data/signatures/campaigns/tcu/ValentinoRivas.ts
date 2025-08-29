import type { Investigator } from "@/model";

export const ValentinoRivas: Investigator = {
	code: "05048",
	spoiler: true,
	image: {
		version: 2,
		light: true,
		width: 2965,
		height: 2500,
		face: {
			width: 381,
			height: 541,
			left: 1062,
			top: 1045,
		},
	},
	abilities: [
		{
			id: "fast",
			type: "fast",
			limitPer: "round",
		},
	],
};
