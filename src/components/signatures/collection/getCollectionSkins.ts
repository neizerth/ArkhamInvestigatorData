import data from "@/data";
import { propEq } from "ramda";

export const getCollectionSkins = (code: string) => {
  const item = data.find(propEq(code, "code"));
  return item.skins || [];
};
