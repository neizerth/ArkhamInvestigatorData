import type { Investigator } from "@/model";

export const NormanWithers: Investigator = {
	code: "08004",
	image: {
		width: 2242,
		height: 2489,
		face: {
			width: 308,
			height: 375,
			left: 958,
			top: 1071,
		},
	},
	variants: [
		{
			code: "98007",
			type: "book",
			name: "Ire of the Void",
			image: {
				width: 2346,
				height: 2936,
				face: {
					width: 211,
					height: 281,
					left: 1173,
					top: 1295,
				},
			},
			abilities: [
				{
					id: "top-card",
					type: "action",
					icon: "card-outline",
					limitPer: "round",
				},
			],
		},
	],
	abilities: [
		{
			id: "top-card",
			type: "action",
			icon: "card-outline",
			limitPer: "round",
		},
	],
};
