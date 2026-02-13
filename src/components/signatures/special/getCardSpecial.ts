import type { ArkhamCardsInvestigator } from "@/api/arkhamCards";
import { signatures } from "@/data";
import type { InvestigatorSignatureType } from "@/model";
import { omit, propEq } from "ramda";

const getCode = ({
	code,
	alternate_of_code,
	linked_code,
}: ArkhamCardsInvestigator) => linked_code || alternate_of_code || code;

export const getCardSpecial = (card: ArkhamCardsInvestigator) => {
	const code = getCode(card);
	const special = signatures.find(propEq(code, "code"));

	if (!special) {
		console.error(`Special not found for card ${card.code}`);
		return;
	}

	if (special.haveTaboo === false && card.taboo_set?.id === 0) {
		return;
	}

	const isTaboo = Boolean(card.taboo_set) && card.taboo_set.id !== 0;

	const base = omit(["skins", "variants"], special);
	const { image } = base;

	const type: InvestigatorSignatureType = "default";

	const defaultImage = {
		...image,
		id: image.id || code,
	};

	if ((card.code === code && !isTaboo) || !special.variants) {
		return {
			...base,
			image: defaultImage,
			type,
		};
	}

	const { variants = [] } = special;
	const variant = variants.find(({ code }) => code === card.code);

	if (!variant) {
		return;
	}

	const variantImage = variant?.image
		? {
				...variant.image,
				id: variant.code,
			}
		: defaultImage;

	return {
		...variant,
		image: variantImage,
	};
};
