import type { Investigator } from "@/model";

export const KohakuNarukami: Investigator = {
	code: "10012",
	image: {
		width: 2874,
		height: 2800,
		face: {
			width: 208,
			height: 285,
			left: 1351,
			top: 1115,
		},
	},
	abilities: [
		{
			id: "bless-curse",
			type: "action",
			icon: "seal",
			limitPer: "round",
			toggle: false,
		},
	],
	skins: [
		{
			id: "10012_ethereal-weaving",
			name: "Ethereal Weaving",
			image: {
				width: 1896,
				height: 1714,
				face: {
					width: 204,
					height: 238,
					left: 819,
					top: 659,
				},
			},
		},
	],
};
