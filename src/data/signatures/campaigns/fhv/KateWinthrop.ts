import type { Investigator } from "@/model";

export const KateWinthrop: Investigator = {
	code: "10004",
	image: {
		width: 2685,
		height: 2805,
		face: {
			width: 255,
			height: 361,
			left: 1197,
			top: 1237,
		},
	},
	variants: [
		{
			type: "custom",
			code: "zdms_00001",
			name: "Dark Matter",
			additionalAction: true,
		},
	],
};
