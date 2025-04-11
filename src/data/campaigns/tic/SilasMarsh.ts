import type { Investigator } from "@/model";

export const SilasMarsh: Investigator = {
	code: "07005",
	image: {
		width: 2685,
		height: 2758,
		face: {
			width: 312,
			height: 418,
			left: 1188,
			top: 1094,
		},
	},
	variants: [
		{
			code: "98013",
			type: "book",
			name: "The Shadows of the Mind",
			image: {
				width: 2474,
				height: 2232,
				face: {
					width: 202,
					height: 239,
					left: 601,
					top: 658,
				},
			},
		},
	],
	abilities: [
		{
			id: "reaction",
			type: "reaction",
			limitPer: "round",
		},
	],
};
