import type {
	InvestigatorFaction,
	InvestigatorSignature,
	SignatureCollection,
} from "@/model";
import {
	ascend,
	descend,
	groupBy,
	prop,
	sortWith,
	toPairs,
	uniq,
	uniqBy,
} from "ramda";
import { getCollectionSkins } from "./getCollectionSkins";

const hasTaboo = ({ taboo_set }: InvestigatorSignature) =>
	taboo_set !== null && taboo_set.id !== 0;

const getInvestigatorKey = ({ linked_code, code }: InvestigatorSignature) =>
	linked_code || code;

const getChapterKey = ({ chapter }: InvestigatorSignature) =>
	chapter == null ? "" : String(chapter);

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

	const familyPairs = toPairs(groupBy(getInvestigatorKey, data));
	const unsortedGroups = familyPairs.flatMap(([_, family = []]) => {
		const skins = uniqBy(
			prop("id"),
			uniq(family.map(({ code }) => code)).flatMap(getCollectionSkins),
		);
		const chapterPairs = toPairs(groupBy(getChapterKey, family));

		return chapterPairs.map(([_, values = []]) => {
			const sorted = sortWith(
				[
					ascend(({ locale }) => locale === "en"),
					ascend(prop("code")),
					ascend(({ cycle }) => cycle.position),
					ascend(({ taboo }) => Number(taboo)),
					ascend(({ id }) => id.length),
				],
				values,
			);
			const signatures = uniqBy(prop("id"), sorted);
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
				chapter,
			} = firstSignature;

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
				...(chapter != null && { chapter }),
				multiselect: Boolean(multiselect),
			};
		});
	});

	const groups = sortWith(
		[
			descend(({ chapter }) => chapter ?? Number.NEGATIVE_INFINITY),
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
