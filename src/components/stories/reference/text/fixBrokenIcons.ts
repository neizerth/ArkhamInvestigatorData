export const fixBrokenIcons = (text: string) => {
	return (
		text
			// text] -> [text] (add opening bracket if missing, but not if already inside [])
			.replace(/(?<!\[[^\]]*)([^\s\[\]]+)\](?!\])/g, "[$1]")
			// [text ] -> [text] (remove spaces before closing bracket)
			.replace(/\[([^\s\[\]]+)\s+\]/g, "[$1]")
			// [ text] -> [text] (remove spaces after opening bracket)
			.replace(/\[\s+([^\s\[\]]+)\]/g, "[$1]")
			// [text\n... -> [text]\n... (close bracket after first word, keep newline and rest)
			.replace(/\[([^\s\[\]]+)(\n[^\[]*?)(?=\[|$)/g, "[$1]$2")
			// [text ... -> [text] (close bracket and remove text after space)
			.replace(/\[([^\s\[\]]+)\s+[^\n\[]*?(?=\[|$)/g, "[$1]")
	);
};
