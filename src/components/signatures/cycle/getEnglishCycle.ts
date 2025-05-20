import type { ArkhamCardsCycle, ArkhamCardsFullPack } from "@/api/arkhamCards";
import type { InvestigatorSignatureCycle } from "@/model";
import { getCycleIcon } from "./getCycleIcon";

export const getEnglishCycle = ({
	code,
	real_name,
	position,
}: ArkhamCardsCycle): InvestigatorSignatureCycle => ({
	locale: "en",
	code: code,
	name: real_name,
	position,
	icon: getCycleIcon(code),
});
