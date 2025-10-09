import type { Investigator } from "@/model";

export const SampsonWelch: Investigator = {
	code: "zoc_31001",
	image: {
		version: 3,
		width: 1860,
		height: 1600,
		face: {
			width: 225,
			height: 267,
			left: 914,
			top: 678,
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
