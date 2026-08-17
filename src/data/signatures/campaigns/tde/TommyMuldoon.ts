import type { Investigator } from "@/model";

export const TommyMuldoon: Investigator = {
	code: "06001",
	image: {
		width: 2482,
		height: 2758,
		face: {
			width: 306,
			height: 418,
			left: 1119,
			top: 1145,
		},
	},
	variants: [
		{
			code: "60151",
			type: "default",
			name: "Chapter 2",
			icon: "tommy",
			chapter2: true,
			image: {
				version: 2,
				width: 2836,
				height: 2101,
				face: {
					width: 269,
					height: 352,
					left: 1359,
					top: 920,
				},
			},
		},
	],
};
