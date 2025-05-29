import { ARKHAM_CARDS_REPO_RAW_URL as baseUri } from "@/config";
import { ArkhamCardsRulesItem } from "../model";

export const loadArkhamCardsRules = async (language = "en") => {
  console.log(`loading rules for language: ${language}`);

  const locale = language === "en" ? "" : `_${language}`;

  const url = `${baseUri}/assets/generated/rules${locale}.json`;

  try {
    const response = await fetch(url);
    return (await response.json()) as ArkhamCardsRulesItem[];
  } catch (e) {
    return;
  }
};
