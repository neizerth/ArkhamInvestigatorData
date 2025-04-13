import type { ArkhamCardsCycle } from "@/api/arkhamCards";
import { propEq } from "ramda";
import { getCycleIcon } from "./getCycleIcon";

type Options = {
	item: ArkhamCardsCycle;
	locale: string;
};

export const getCycleTranslation = ({ item, locale }: Options) => {
	const { code, position, translations, real_name } = item;
	const translation = translations.find(propEq(locale, "locale"));
	const name = translation?.name;

	return {
		locale: name ? locale : "en",
		code,
		name: name || real_name,
		position,
		icon: getCycleIcon(code),
	};
};
