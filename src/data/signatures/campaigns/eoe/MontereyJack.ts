import type { Investigator } from "@/model";

export const MontereyJack: Investigator = {
	code: "08007",
	image: {
		width: 2717,
		height: 2430,
		face: {
			width: 288,
			height: 351,
			left: 1232,
			top: 1143,
		},
	},
	variants: [
		{
			code: "90062",
			type: "parallel",
			name: "Relics of the Past",
		},
	],
	abilities: [
		{
			id: "reaction",
			type: "reaction",
			// works when turn end
			limitPer: "turn",
		},
	],
};
