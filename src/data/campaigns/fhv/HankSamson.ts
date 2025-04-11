import type { Investigator } from "@/model";

export const HankSamson: Investigator = {
	code: "10015",
	variantName: "Assistant. Warden.",
	image: {
		width: 2610,
		height: 2195,
		face: {
			width: 339,
			height: 448,
			left: 1053,
			top: 905,
		},
	},
	variants: [
		{
			type: "custom",
			code: "10016a",
			name: "Assistant. Resolute.",
		},
		{
			type: "custom",
			code: "10016b",
			name: "Warden. Resolute.",
		},
	],
};
