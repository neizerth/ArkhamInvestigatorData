import type { ArkhamCardsFullPack } from "@/api/arkhamCards";
import type { InvestigatorSignaturePack } from "@/model";
import { getPackIcon } from "./getPackIcon";

export const getEnglishPack = ({
	code,
	real_name,
	position,
}: ArkhamCardsFullPack): InvestigatorSignaturePack => ({
	locale: "en",
	code: code,
	name: real_name,
	position,
	icon: getPackIcon(code),
});
