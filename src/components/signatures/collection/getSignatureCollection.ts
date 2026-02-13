import type {
	InvestigatorFaction,
	InvestigatorSignature,
	SignatureCollection,
} from "@/model";
import {
	ascend,
	groupBy,
	prop,
	sortBy,
	sortWith,
	toPairs,
	uniqBy,
} from "ramda";
import { getCollectionSkins } from "./getCollectionSkins";

const hasTaboo = ({ taboo_set }: InvestigatorSignature) =>
	taboo_set !== null && taboo_set.id !== 0;

const getGroupProp = ({ linked_code, code }: InvestigatorSignature) =>
	linked_code || code;

export const FACTION_ORDER: Record<InvestigatorFaction, number> = {
	guardian: 1,
	seeker: 2,
	rogue: 3,
	mystic: 4,
	survivor: 5,
	neutral: 6,
};

export const getSignatureCollection = (
	data: InvestigatorSignature[],
): SignatureCollection => {
	const taboo = data.filter(hasTaboo);

	const groupPairs = toPairs(groupBy(getGroupProp, data));
	const unsortedGroups = groupPairs.map(([_, values]) => {
		const data = sortWith(
			[
				ascend(({ locale }) => locale === "en"),
				ascend(prop("code")),
				ascend(({ cycle }) => cycle.position),
				ascend(({ taboo }) => Number(taboo)),
				ascend(({ id }) => id.length),
			],
			values,
		);
		const signatures = uniqBy(prop("id"), data);
		const [firstSignature] = signatures;
		const {
			id,
			name,
			code,
			subname,
			locale,
			official,
			spoiler,
			faction_code,
			multiselect,
			custom,
			canonical,
		} = firstSignature;
		const skins = getCollectionSkins(code);

		return {
			id,
			locale,
			code,
			name,
			subname,
			signatures,
			canonical,
			skins,
			official,
			spoiler,
			faction_code,
			custom,
			multiselect: Boolean(multiselect),
		};
	});

	const groups = sortWith(
		[
			ascend(({ signatures }) => signatures[0].cycle.position),
			ascend(({ signatures }) => FACTION_ORDER[signatures[0].faction_code]),
		],
		unsortedGroups,
	);

	return {
		groups,
		taboo,
	};
};
