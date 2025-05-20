import type { ArkhamCardsFullPack } from "@/api/arkhamCards";
import { propEq } from "ramda";
import { getPackIcon } from "./getPackIcon";

type Options = {
	item: ArkhamCardsFullPack;
	locale: string;
};

export const getPackTranslation = ({ item, locale }: Options) => {
	const { code, position, translations, real_name } = item;
	const translation = translations.find(propEq(locale, "locale"));
	const name = translation?.name;

	return {
		locale: name ? locale : "en",
		code,
		name: name || real_name,
		position,
		icon: getPackIcon(code),
	};
};
