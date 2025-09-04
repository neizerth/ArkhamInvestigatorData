import type { Investigator } from "@/model";

export const GloriaGoldberg: Investigator = {
	code: "11014",
	image: {
		width: 2989,
		height: 3048,
		face: {
			width: 390,
			height: 433,
			left: 1292,
			top: 1169,
		},
	},
	variants: [
		{
			code: "98019",
			type: "book",
			name: "Dark Revelations",
			image: {
				width: 3734,
				height: 4332,
				face: {
					width: 284,
					height: 359,
					left: 1702,
					top: 1986,
				},
			},
			abilities: [
				{
					id: "gloria-cards",
					type: "counter",
					direction: "decrease",
					name: "Cards beneath Gloria",
					max: 3,
				},
			],
		},
	],
	abilities: [
		{
			id: "gloria-cards",
			type: "counter",
			direction: "decrease",
			name: "Cards beneath Gloria",
			max: 3,
		},
	],
};
