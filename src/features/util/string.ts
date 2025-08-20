export const underscore2CamelCase = (str: string) =>
	str.replace(/_./g, (c) => c.substring(1).toUpperCase());

export const capitalize = (text: string) =>
	text.toLowerCase().replace(/(^|\s|\/)\S/g, (char) => char.toUpperCase());
