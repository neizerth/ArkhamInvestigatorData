import type { Investigator } from "@/model";
import { splashImage } from "../../../config/image";

export const MiguelDeLaCruz: Investigator = {
	code: "60551",
	image: splashImage,
	abilities: [
		{
			id: "miguel-event-acition",
			type: "action",
			additionalAction: true,
			icon: "event",
		},
	],
};
