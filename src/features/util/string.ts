export const underscore2CamelCase = (str: string) =>
	str.replace(/_./g, (c) => c.substring(1).toUpperCase());
