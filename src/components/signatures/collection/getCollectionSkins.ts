import { signatures } from "@/data";
import { propEq } from "ramda";

export const getCollectionSkins = (code: string) => {
	const item = signatures.find(propEq(code, "code"));
	return item?.skins || [];
};
