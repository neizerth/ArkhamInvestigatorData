import type { InvestigatorSignature, SignatureCollection } from "@/model";
import { omit, reject } from "ramda";

const hasTaboo = ({ taboo_set }: InvestigatorSignature) => taboo_set !== null;

export const getSignatureCollection = (
	data: InvestigatorSignature[],
): SignatureCollection => {
	const taboo = data.filter(hasTaboo);
	const cards = reject(hasTaboo, data);

	return {
		cards,
		taboo,
	};
};
