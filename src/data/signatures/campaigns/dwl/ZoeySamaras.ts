import type { Investigator } from "@/model";

export const ZoeySamaras: Investigator = {
	code: "02001",
	image: {
		width: 1817,
		height: 2240,
		face: {
			width: 218,
			height: 285,
			left: 768,
			top: 1095,
		},
	},
	// abilities: [
	// 	{
	// 		id: "get-resource",
	// 		type: "special-action",
	// 		icon: "reaction",
	// 		toggle: false,
	// 	},
	// ],
	variants: [
		{
			type: "parallel",
			code: "90059",
			name: "Path of the Righteous",
			abilities: [
				{
					id: "add-bless",
					type: "reaction",
					limitPer: "round",
				},
				{
					id: "remove-3-bless",
					type: "fast",
					limitPer: "round",
				},
			],
		},
	],
	skins: [
		{
			id: "02001_smite-the-wicked",
			name: "Smite The Wicked",
			image: {
				width: 3884,
				height: 3339,
				face: {
					width: 459,
					height: 472,
					left: 1788 - 450,
					top: 1400 + 500,
				},
			},
		},
	],
};
