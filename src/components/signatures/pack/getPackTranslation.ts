import { propEq } from "ramda";

type Item = {
  code: string;
  real_name: string;
  position: number;
  translations: {
    locale: string;
    name: string;
  }[];
};

type Options = {
  item: Item;
  locale: string;
};

export const getPackTranslation = ({ item, locale }: Options) => {
  const { code, position, translations, real_name } = item;
  const translation = translations.find(propEq(locale, "locale"));
  const name = translation?.name;

  return {
    locale,
    code,
    name: name || real_name,
    position,
  };
};
