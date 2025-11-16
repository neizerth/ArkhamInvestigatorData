import { KateWinthrop as BaseKateWinthrop } from "@/data/signatures/campaigns/fhv/KateWinthrop";
import type { Investigator } from "@/model";

export const KateWinthrop: Investigator = {
	...BaseKateWinthrop,
	code: "zdms_00001",
	image: {
		...BaseKateWinthrop.image,
		id: BaseKateWinthrop.code,
	},
};
