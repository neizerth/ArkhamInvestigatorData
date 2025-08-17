import type { Investigator } from "@/model";

export const WendyAdams: Investigator = {
	code: "01005",
	image: {
		width: 3656,
		height: 3435,
		face: {
			width: 444,
			height: 685,
			left: 1413,
			top: 1265,
		},
	},
	abilities: [
		{
			id: "reaction",
			type: "reaction",
			limitPer: ["ability", "test"],
		},
		{
			id: "wendys-amulet",
			type: "special-action",
			icon: "accessory_inverted",
		},
	],
	variants: [
		{
			type: "parallel",
			code: "90037",
			name: "Red Tide Rising",
		},
	],
	skins: [
		{
			id: "01005_revised",
			name: "Revised Core Set",
			image: {
				width: 1600,
				height: 1573,
				face: {
					width: 169,
					height: 162,
					left: 481,
					top: 509,
				},
			},
		},
		{
			id: "01005_abandoned",
			name: "Abandoned and Alone",
			image: {
				width: 3032,
				height: 3145,
				face: {
					width: 348,
					height: 328,
					left: 1440,
					top: 1259,
				},
			},
		},
		{
			id: "01005_amulet",
			name: "Wendy's Amulet",
			image: {
				width: 2652,
				height: 2952,
				face: {
					width: 225,
					height: 343,
					left: 1236,
					top: 1079,
				},
			},
		},
		{
			id: "01005_amulet_revised",
			name: "Wendy's Amulet (Revised)",
			image: {
				width: 3354,
				height: 2596,
				face: {
					width: 315,
					height: 345,
					left: 1428,
					top: 1001,
				},
			},
		},
	],
};
