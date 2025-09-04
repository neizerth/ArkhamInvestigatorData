import type { Investigator } from "@/model";

export const SisterMary: Investigator = {
	code: "07001",
	image: {
		width: 1980,
		height: 2220,
		face: {
			width: 282,
			height: 339,
			left: 932,
			top: 939,
		},
	},
	abilities: [
		{
			id: "mary-add-bless",
			type: "reaction",
			// works when turn end
			limitPer: "turn",
		},
	],
	skins: [
		{
			id: "07001_guardian-angel",
			name: "Guardian Angel",
			image: {
				light: true,
				width: 3283,
				height: 3746,
				face: {
					width: 159,
					height: 214,
					left: 1641 + 30,
					top: 1757,
				},
			},
		},
	],
};
