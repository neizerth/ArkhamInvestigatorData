import type { Investigator } from "@/model";

export const AndrePatel: Investigator = {
	code: "60351",
	image: {
		version: 2,
		width: 2292,
		height: 2744,
		face: {
			width: 268,
			height: 317,
			left: 952,
			top: 839,
		},
	},
	icon: "andre",
	abilities: [
		{
			id: "get-action-after-succeed",
			type: "reaction",
			limitPer: "round",
		},
	],
};
