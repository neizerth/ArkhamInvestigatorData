import { splashImage } from "@/config";
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
			chapter2: true,
			image: splashImage,
		},
	],
};
