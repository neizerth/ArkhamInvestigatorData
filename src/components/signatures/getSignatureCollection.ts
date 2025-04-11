import type { InvestigatorTabooSignature, SignatureCollection } from "@/model";
import { omit, reject } from "ramda";

const hasTaboo = ({ taboo_set }: InvestigatorTabooSignature) =>
	taboo_set !== null;

export const getSignatureCollection = (
	data: InvestigatorTabooSignature[],
): SignatureCollection => {
	const taboo = data.filter(hasTaboo);
	const cards = reject(hasTaboo, data).map((card) =>
		omit(["taboo_original_text", "taboo_text_change", "taboo_set"], card),
	);

	return {
		cards,
		taboo,
	};
};
