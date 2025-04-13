import type { ArkhamCardsPack } from "@/api/arkhamCards";
import type { InvestigatorSignaturePack } from "@/model";
import { getPackIcon } from "./getPackIcon";

type Options = {
	code: string;
	real_name: string;
	position: number;
};

export const getEnglishPack = ({
	code,
	real_name,
	position,
}: ArkhamCardsPack): InvestigatorSignaturePack => ({
	locale: "en",
	code: code,
	name: real_name,
	position,
	icon: getPackIcon(code),
});
