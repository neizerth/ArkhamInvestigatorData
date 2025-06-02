import type { Investigator } from "@/model";

export const GeorgeBarnaby: Investigator = {
	code: "11017",
	image: {
		width: 2732,
		height: 3015,
		face: {
			width: 501,
			height: 577,
			left: 1014,
			top: 1190,
		},
	},
	abilities: [
		{
			id: "george-cards",
			type: "counter",
			name: "Cards beneath George",
			max: 5,
		},
	],
};
