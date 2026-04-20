import type { Investigator } from "@/model";
import { splashImage } from "@/config";

export const CarolynFern: Investigator = {
	code: "60251",
	image: splashImage,
	abilities: [
		{
			id: "get-clue-after-heal-horror",
			type: "reaction",
			limitPer: "round",
		},
	],
};
