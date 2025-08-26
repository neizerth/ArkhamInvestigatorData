import type { Investigator } from "@/model";

export const EdmundMoore: Investigator = {
	code: "zsti_00010",
	image: {
		light: true,
		width: 3840,
		height: 3840,
		face: {
			width: 540,
			height: 757,
			left: 777,
			top: 2114,
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
