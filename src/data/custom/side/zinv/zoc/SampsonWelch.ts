import type { Investigator } from "@/model";

export const SampsonWelch: Investigator = {
	code: "zoc_31001",
	image: {
		width: 3904,
		height: 3904,
		face: {
			width: 460,
			height: 559,
			left: 1000,
			top: 1603,
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
