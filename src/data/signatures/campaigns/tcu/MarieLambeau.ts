import { splashImage } from "@/config";
import type { Investigator, InvestigatorImageSource } from "@/model";

export const MarieLambeau: Investigator = {
	code: "05006",
	ignoreCodes: ["99001"],
	ignoreIds: ["99001"],
	additionalAction: true,
	image: {
		width: 3227,
		height: 2500,
		face: {
			width: 396,
			height: 547,
			left: 1500,
			top: 1025,
		},
		media: [
			{
				width: 2343,
				height: 3601,
				left: 978,
				top: 0,
			},
		],
	},
	variants: [
		{
			code: "60451",
			type: "default",
			name: "Chapter 2",
			chapter2: true,
			image: splashImage,
			icon: "marie",
			abilities: [
				{
					id: "draw-cards-after-damage",
					type: "reaction",
					limitPer: "phase",
				},
			],
		},
	],
};
