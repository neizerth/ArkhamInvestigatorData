type WithLocale = {
	locale: string;
};
type WithTranslations<T extends WithLocale> = {
	translations: T[];
};

export const getMetadataTranslations = <T extends WithLocale>(
	source: WithTranslations<T>[],
) => {
	const data: Record<string, T[]> = {};

	for (const card of source) {
		for (const translation of card.translations) {
			const { locale } = translation;
			if (!data[locale]) {
				data[locale] = [];
			}

			data[locale].push(translation);
		}
	}

	return data;
};
