import type { ReferencePart } from "@/model";

export const getReferencePartTokens = (item: ReferencePart) => {
	if (item.type === "single") {
		return [item.token];
	}
	return item.tokens;
};
