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
	abilities: [
		{
			id: "reaction",
			type: "reaction",
			onUse: [
				{
					script: {
						resources: "resources + 1",
					},
				},
			],
		},
	],
	variants: [
		{
			type: "parallel",
			code: "90059",
			name: "Path of the Righteous",
			abilities: [
				{
					id: "reaction",
					type: "reaction",
					limitPer: "round",
					onUse: [
						{
							script: {
								chaosBag: {
									bless: "bless + 1",
								},
							},
						},
					],
				},
				{
					id: "fast",
					type: "fast",
					limitPer: "round",
					enabledIf: "bless > 2",
					onUse: [
						{
							script: {
								chaosBag: {
									bless: "bless - 3",
								},
							},
						},
					],
				},
			],
		},
	],
};
