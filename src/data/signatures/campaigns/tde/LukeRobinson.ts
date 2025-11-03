import type { Investigator } from "@/model";

export const LukeRobinson: Investigator = {
	code: "06004",
	image: {
		width: 2415,
		height: 2370,
		face: {
			width: 230,
			height: 307,
			left: 1116,
			top: 1023,
		},
	},
	abilities: [
		{
			id: "gate-box",
			type: "counter",
			direction: "decrease",
			name: "Gate Box",
			defaultValue: 3,
			min: 0,
		},
	],
};
