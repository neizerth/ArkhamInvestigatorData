import type { InvestigatorSignature, InvestigatorSkin } from "@/model";
import { prop, uniqBy } from "ramda";
import { getCollectionSkins } from "./getCollectionSkins";

const toSkin = ({
	image,
	code,
	cycle,
	has_full_image,
}: InvestigatorSignature): InvestigatorSkin | undefined => {
	const { width, height, face, id = code } = image;

	if (!has_full_image || width == null || height == null || face == null) {
		return;
	}

	return {
		id,
		name: cycle.name,
		image: {
			...image,
			id,
			width,
			height,
			face,
		},
	};
};

export const getSignatureSkins = (
	family: InvestigatorSignature[],
	signatures: InvestigatorSignature[],
) => {
	const [signature] = signatures;
	const declared = getCollectionSkins(
		signature?.linked_code || signature?.code || "",
	);
	const usedIds = signatures.map(({ image }) => image.id);
	const missing = family.flatMap((signature) => {
		const skin = toSkin(signature);
		if (!skin || usedIds.includes(skin.id)) {
			return [];
		}
		return [skin];
	});

	return uniqBy(prop("id"), [...declared, ...missing]);
};
