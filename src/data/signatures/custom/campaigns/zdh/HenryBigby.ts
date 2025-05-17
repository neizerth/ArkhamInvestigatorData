import type { Investigator } from "@/model";

export const HenryBigby: Investigator = {
	code: "zdh_00012",
	variantName: "Henry Bigby",
	image: {
		width: 1351,
		height: 1499,
		face: {
			width: 101,
			height: 154,
			left: 637,
			top: 667,
		},
	},
	variants: [
		{
			type: "custom",
			code: "zdh_00013",
			name: "Beast Within",
		},
	],
};
