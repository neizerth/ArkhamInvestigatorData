import type { Investigator } from "@/model";

export const DanielaReyes: Investigator = {
	code: "08001",
	image: {
		version: 3,
		width: 3851,
		height: 4129,
		face: {
			width: 539,
			height: 651,
			left: 1679,
			top: 1431,
		},
	},
	abilities: [
		{
			id: "been-attacked",
			type: "permanent",
			icon: "claws",
			limitPer: "round",
		},
	],
	variants: [
		{
			type: "default",
			code: "12001",
			name: "Core 2026",
			abilities: [
				{
					id: "investigator-been-attacked",
					type: "reaction",
					limitPer: "round",
				},
			],
		},
	],
};
