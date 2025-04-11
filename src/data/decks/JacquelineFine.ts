import type { Investigator } from "@/model";

export const JacquelineFine: Investigator = {
	code: "60401",
	image: {
		width: 2000,
		height: 2319,
		face: {
			width: 192,
			height: 295,
			left: 680,
			top: 1049,
		},
	},
	skins: [
		{
			id: "60401_prescient",
			name: "Prescient",
			image: {
				width: 3236,
				height: 3340,
				face: {
					width: 388,
					height: 589,
					left: 1420,
					top: 1495,
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
