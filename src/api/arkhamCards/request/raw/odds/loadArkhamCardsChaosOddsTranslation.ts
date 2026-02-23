import { ARKHAM_CARDS_DATA_REPO_RAW_URL as dataBaseUri } from "@/config";
import gettextParser from "gettext-parser";

export const loadArkhamCardsChaosOddsTranslation = async (
	language: string,
): Promise<Record<string, string>> => {
	console.log(
		`loading Arkham Cards Chaos Odds translation for language: ${language}`,
	);

	const locale = language.replace("_", "-");

	const url = `${dataBaseUri}/i18n/${locale}/chaos_tokens.po`;
	try {
		const response = await fetch(url);
		const responseData = await response.text();
		const source = await gettextParser.po.parse(responseData);
		const translations = source.translations[""];

		const keys = Object.keys(translations);

		const data: Record<string, string> = {};

		for (const key of keys) {
			const value = translations?.[key]?.msgstr?.[0];
			if (!value) {
				continue;
			}
			data[key] = value;
		}
		return data;
	} catch (e) {
		console.error(
			`error loading Arkham Cards Chaos Odds for language: ${language}`,
			e,
		);
		return {};
	}
};
