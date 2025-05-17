import type { Investigator } from "@/model";

export const MarkHarrigan: Investigator = {
	code: "03001",
	image: {
		width: 1968,
		height: 2138,
		face: {
			width: 258,
			height: 301,
			left: 800,
			top: 797,
		},
	},
	abilities: [
		{
			id: "reaction",
			type: "reaction",
			limitPer: "phase",
		},
	],
	skins: [
		{
			id: "03001_overpower",
			name: "Overpower",
			image: {
				width: 3408,
				height: 3272,
				face: {
					width: 192,
					height: 282,
					left: 1471,
					top: 1295,
				},
			},
		},
		{
			id: "03001_the-home-front",
			name: "The Home Front",
			image: {
				width: 1432,
				height: 1450,
				face: {
					width: 231,
					height: 223,
					left: 594,
					top: 554,
				},
			},
		},
	],
};
