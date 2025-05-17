import type { Investigator } from "@/model";

export const MandyThompson: Investigator = {
	code: "06002",
	image: {
		width: 2465,
		height: 2645,
		face: {
			width: 284,
			height: 367,
			left: 1176,
			top: 1141,
		},
	},
	abilities: [
		{
			id: "reaction",
			type: "reaction",
			limitPer: "round",
		},
	],
	skins: [
		{
			id: "06002_shocking-discovery",
			name: "Shocking Discovery",
			image: {
				width: 3380,
				height: 3180,
				face: {
					width: 308,
					height: 397,
					left: 1456,
					top: 1375,
				},
			},
		},
	],
};
