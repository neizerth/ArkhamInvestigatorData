import type { Investigator } from "@/model";

export const AudreyBourassa: Investigator = {
	code: "zdh_00004",
	image: {
		width: 2530,
		height: 2525,
		face: {
			width: 234,
			height: 249,
			left: 1131,
			top: 1013,
		},
	},
	abilities: [
		{
			id: "get-2-clues-after-relic-play",
			type: "reaction",
			limitPer: "round",
		},
	],
};
