export const fixBrokenTags = (text: string) => {
	// >/tag> -> </tag> (fix broken closing tag)
	return text.replace(/>\/([a-z0-9]+)>/gi, "</$1>");
};
